// Host-page side of the AI Applications embed. Pairs with dist/embed.js in the app.
// Framework-free so it can be used from React (AiApplicationsFrame.tsx) or plain pages.

export const APP_ORIGIN = 'https://aiapplications.nine-67.com';

const VIEW_PATTERN = /^apps\/[a-z0-9&%-]+\.html$/;

type HeightMessage = { source: 'n67-aiapps'; type: 'height'; height: number };
type ScrollMessage = { source: 'n67-aiapps'; type: 'scroll'; top: number; behavior?: ScrollBehavior };
type RouteMessage = { source: 'n67-aiapps'; type: 'route' | 'load'; path: string; search: string; hash: string };
type AppMessage = HeightMessage | ScrollMessage | RouteMessage;

export type BridgeOptions = {
  appOrigin?: string;
  /** Fixed site header that covers the top of the page, if any. */
  getHeader?: () => HTMLElement | null;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isAppMessage(data: unknown): data is AppMessage {
  if (!isRecord(data) || data.source !== 'n67-aiapps') return false;
  switch (data.type) {
    case 'height':
      return typeof data.height === 'number';
    case 'scroll':
      return typeof data.top === 'number';
    case 'route':
    case 'load':
      return typeof data.path === 'string' && typeof data.search === 'string' && typeof data.hash === 'string';
    default:
      return false;
  }
}

/** The frame URL for the current page URL. `?view=apps/x.html` reopens a specific demo. */
export function frameSrc(location: Location, appOrigin: string = APP_ORIGIN): string {
  const params = new URLSearchParams(location.search);
  const view = params.get('view');
  params.delete('view');
  const path = view && VIEW_PATTERN.test(view) ? view : '';
  const query = params.toString();
  return `${appOrigin}/${path}${query ? `?${query}` : ''}${location.hash}`;
}

/**
 * Connects an iframe to the app: sizes it to its content, keeps the app's floating panels
 * on screen, forwards scroll requests, and mirrors the app's route in the page URL.
 * Returns a cleanup function.
 */
export function connectAiApplicationsFrame(frame: HTMLIFrameElement, options: BridgeOptions = {}): () => void {
  const appOrigin = options.appOrigin ?? APP_ORIGIN;
  const getHeader = options.getHeader ?? (() => document.getElementById('site-header'));
  const headerHeight = (): number => getHeader()?.offsetHeight ?? 0;
  const frameTop = (): number => frame.getBoundingClientRect().top + window.scrollY - headerHeight();

  let pending = 0;
  const sendViewport = (): void => {
    pending = 0;
    const rect = frame.getBoundingClientRect();
    const top = Math.max(0, headerHeight() - rect.top);
    const bottom = Math.max(top, Math.min(window.innerHeight, rect.bottom) - rect.top);
    frame.contentWindow?.postMessage({ source: 'n67-site', type: 'viewport', top, height: bottom - top }, appOrigin);
  };
  const scheduleViewport = (): void => {
    if (!pending) pending = window.requestAnimationFrame(sendViewport);
  };

  const syncUrl = (message: RouteMessage): void => {
    const params = new URLSearchParams(message.search);
    const view = message.path.replace(/^\//, '');
    if (view && view !== 'index.html' && VIEW_PATTERN.test(view)) params.set('view', view);
    else params.delete('view');
    const query = params.toString();
    const next = `${window.location.pathname}${query ? `?${query}` : ''}${message.hash}`;
    const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (next !== current) window.history.replaceState(window.history.state, '', next);
  };

  const onMessage = (event: MessageEvent<unknown>): void => {
    if (event.origin !== appOrigin || event.source !== frame.contentWindow || !isAppMessage(event.data)) return;
    const message = event.data;
    if (message.type === 'height') {
      frame.style.height = `${Math.max(0, Math.round(message.height))}px`;
      scheduleViewport();
    } else if (message.type === 'scroll') {
      window.scrollTo({ top: Math.max(0, frameTop() + message.top), behavior: message.behavior ?? 'auto' });
    } else {
      if (message.type === 'load') {
        if (window.scrollY > frameTop()) window.scrollTo({ top: Math.max(0, frameTop()) });
        scheduleViewport();
      }
      syncUrl(message);
    }
  };

  const onHashChange = (): void => {
    frame.contentWindow?.postMessage({ source: 'n67-site', type: 'hash', hash: window.location.hash }, appOrigin);
  };

  window.addEventListener('message', onMessage);
  window.addEventListener('scroll', scheduleViewport, { passive: true });
  window.addEventListener('resize', scheduleViewport);
  window.addEventListener('hashchange', onHashChange);
  frame.addEventListener('load', scheduleViewport);
  const header = getHeader();
  const headerObserver = header ? new ResizeObserver(scheduleViewport) : null;
  if (header && headerObserver) headerObserver.observe(header);

  return () => {
    if (pending) window.cancelAnimationFrame(pending);
    window.removeEventListener('message', onMessage);
    window.removeEventListener('scroll', scheduleViewport);
    window.removeEventListener('resize', scheduleViewport);
    window.removeEventListener('hashchange', onHashChange);
    frame.removeEventListener('load', scheduleViewport);
    headerObserver?.disconnect();
  };
}
