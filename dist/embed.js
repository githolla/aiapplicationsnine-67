/* Loaded first on every page. Keeps the site working when the browser blocks storage,
   and lets a host page (nine-67.com) show the site at full height with one scrollbar. */
(function () {
  function memoryStorage() {
    const items = new Map();
    return {
      get length() { return items.size; },
      key(i) { return Array.from(items.keys())[i] ?? null; },
      getItem(k) { k = String(k); return items.has(k) ? items.get(k) : null; },
      setItem(k, v) { items.set(String(k), String(v)); },
      removeItem(k) { items.delete(String(k)); },
      clear() { items.clear(); }
    };
  }
  // Embedded or private browsing can make storage throw on access; scripts read it at load time.
  for (const name of ['localStorage', 'sessionStorage']) {
    let usable = false;
    try {
      const store = window[name];
      store.setItem('__n67_probe__', '1');
      store.removeItem('__n67_probe__');
      usable = true;
    } catch (e) { /* fall back below */ }
    if (!usable) {
      try { Object.defineProperty(window, name, { configurable: true, value: memoryStorage() }); } catch (e) { /* leave as is */ }
    }
  }

  let embedded = false;
  try { embedded = window.self !== window.top; } catch (e) { embedded = true; }
  if (!embedded) return;

  const root = document.documentElement;
  root.classList.add('portfolio-embedded');

  // Visible part of this frame, in frame coordinates, as reported by the host page.
  let viewTop = 0;
  let viewHeight = window.innerHeight;
  const setViewport = () => {
    root.style.setProperty('--n67-vp-top', viewTop + 'px');
    root.style.setProperty('--n67-vp-h', viewHeight + 'px');
  };
  setViewport();

  const post = (message) => window.parent.postMessage(Object.assign({ source: 'n67-aiapps' }, message), '*');

  let lastHeight = 0;
  let measurePending = false;
  const measure = () => {
    measurePending = false;
    const body = document.body;
    if (!body) return;
    const style = getComputedStyle(body);
    const height = Math.ceil(body.getBoundingClientRect().height + parseFloat(style.marginTop) + parseFloat(style.marginBottom));
    if (Math.abs(height - lastHeight) > 1) {
      lastHeight = height;
      post({ type: 'height', height });
    }
  };
  const scheduleMeasure = () => {
    if (measurePending) return;
    measurePending = true;
    requestAnimationFrame(measure);
  };

  const route = (type) => post({ type, path: location.pathname, search: location.search, hash: location.hash });
  for (const method of ['pushState', 'replaceState']) {
    const original = history[method];
    history[method] = function () {
      const result = original.apply(this, arguments);
      route('route');
      return result;
    };
  }
  window.addEventListener('hashchange', () => route('route'));

  // The frame never scrolls itself; ask the host page to scroll instead.
  const scrollHost = (top, behavior) => post({ type: 'scroll', top: Math.max(0, Math.round(top)), behavior: behavior || 'auto' });
  Element.prototype.scrollIntoView = function (arg) {
    const rect = this.getBoundingClientRect();
    const options = arg && typeof arg === 'object' ? arg : { block: arg === false ? 'end' : 'start' };
    const block = options.block || 'start';
    let top = rect.top;
    if (block === 'center') top = rect.top + rect.height / 2 - viewHeight / 2;
    else if (block === 'end') top = rect.bottom - viewHeight;
    else if (block === 'nearest') {
      if (rect.top >= viewTop && rect.bottom <= viewTop + viewHeight) return;
      top = rect.top < viewTop ? rect.top : rect.bottom - viewHeight;
    }
    scrollHost(top, options.behavior);
  };
  const scrollWindow = function (x, y) {
    const top = x && typeof x === 'object' ? (x.top ?? 0) : (y ?? 0);
    scrollHost(top, x && typeof x === 'object' ? x.behavior : undefined);
  };
  window.scrollTo = scrollWindow;
  window.scroll = scrollWindow;

  // Links that leave this site open in the full window, not inside the frame.
  document.addEventListener('click', (event) => {
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!link || link.target) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin) link.target = '_top';
  }, true);

  window.addEventListener('message', (event) => {
    if (event.source !== window.parent) return;
    const data = event.data;
    if (!data || data.source !== 'n67-site') return;
    if (data.type === 'viewport') {
      viewTop = Math.max(0, Number(data.top) || 0);
      viewHeight = Math.max(1, Number(data.height) || viewHeight);
      setViewport();
    } else if (data.type === 'hash' && typeof data.hash === 'string' && data.hash !== location.hash) {
      location.hash = data.hash;
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    if ('ResizeObserver' in window) new ResizeObserver(scheduleMeasure).observe(document.body);
    new MutationObserver(scheduleMeasure).observe(document.body, { childList: true, subtree: true, attributes: true });
    measure();
    route('load');
  });
  window.addEventListener('load', scheduleMeasure);
  window.addEventListener('resize', scheduleMeasure);
})();
