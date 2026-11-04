'use client';

import { useEffect, useRef, useState } from 'react';

// Runs the AI Applications site as part of the page: its markup, styles and scripts load
// straight into this component, under the site's own header and footer. Everything comes from
// /ai-applications-assets/, which next.config rewrites to the AI Applications deployment, so
// changes published there appear here without rebuilding the website.
const ASSET_BASE = '/ai-applications-assets/';

type PageEntry = {
  title: string;
  bodyAttrs: Record<string, string>;
  html: string;
  styles: string[];
  scripts: string[];
};

type Status = 'loading' | 'ready' | 'missing' | 'error';

declare global {
  interface Window {
    __n67AppLoaded?: boolean;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === 'string');

function isPageEntry(value: unknown): value is PageEntry {
  return (
    isRecord(value) &&
    typeof value.html === 'string' &&
    isStringArray(value.styles) &&
    isStringArray(value.scripts) &&
    isRecord(value.bodyAttrs) &&
    Object.values(value.bodyAttrs).every((v) => typeof v === 'string')
  );
}

function loadStyle(href: string, added: Element[]): Promise<void> {
  return new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => resolve();
    link.onerror = () => resolve();
    document.head.appendChild(link);
    added.push(link);
  });
}

// The app's scripts share globals and must run in order, like on their own page.
function loadScripts(sources: string[], added: Element[]): Promise<void> {
  return new Promise((resolve, reject) => {
    if (sources.length === 0) {
      resolve();
      return;
    }
    sources.forEach((src, index) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      if (index === sources.length - 1) {
        script.onload = () => resolve();
      }
      script.onerror = () => reject(new Error(`Could not load ${src}`));
      document.body.appendChild(script);
      added.push(script);
    });
  });
}

export default function AiApplicationsApp({ page }: { page: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    // The app's scripts cannot be unloaded, so returning to it in the same tab starts fresh.
    if (window.__n67AppLoaded) {
      window.location.reload();
      return;
    }
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    let cancelled = false;
    const added: Element[] = [];
    const bodyAttributes: string[] = [];

    const header = document.getElementById('site-header');
    const updateHeader = () => wrapper.style.setProperty('--n67-site-header', `${header?.offsetHeight ?? 0}px`);
    updateHeader();
    const headerObserver = header ? new ResizeObserver(updateHeader) : null;
    if (header && headerObserver) headerObserver.observe(header);

    (async () => {
      const response = await fetch(`${ASSET_BASE}pages.json`, { cache: 'no-cache' });
      if (!response.ok) throw new Error(`pages.json ${response.status}`);
      const pages: unknown = await response.json();
      const entry = isRecord(pages) ? pages[page] : undefined;
      if (!isPageEntry(entry)) {
        if (!cancelled) setStatus('missing');
        return;
      }
      await Promise.all(entry.styles.map((href) => loadStyle(href, added)));
      if (cancelled) return;
      for (const [name, value] of Object.entries(entry.bodyAttrs)) {
        document.body.setAttribute(name, value);
        bodyAttributes.push(name);
      }
      container.innerHTML = entry.html;
      window.__n67AppLoaded = true;
      await loadScripts(entry.scripts, added);
      if (!cancelled) setStatus('ready');
    })().catch(() => {
      if (!cancelled) setStatus('error');
    });

    return () => {
      cancelled = true;
      headerObserver?.disconnect();
      if (window.__n67AppLoaded) {
        // Leaving for another page of the website: reload it without the app's scripts.
        window.setTimeout(() => window.location.reload(), 0);
        return;
      }
      added.forEach((element) => element.remove());
      bodyAttributes.forEach((name) => document.body.removeAttribute(name));
    };
  }, [page]);

  return (
    <div ref={wrapperRef} className="n67-app-page">
      {status === 'loading' && <div className="n67-app-status" aria-live="polite" style={{ minHeight: '100vh' }} />}
      {status === 'missing' && <p className="n67-app-status" style={{ padding: '160px 40px', textAlign: 'center' }}>This application could not be found.</p>}
      {status === 'error' && <p className="n67-app-status" style={{ padding: '160px 40px', textAlign: 'center' }}>AI Applications could not load. Please refresh the page.</p>}
      <div style={{ paddingTop: 'var(--n67-site-header, 0px)' }}>
        <div ref={containerRef} className="n67-app" suppressHydrationWarning />
      </div>
    </div>
  );
}
