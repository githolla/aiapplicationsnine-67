'use client';

import { useEffect, useRef, useState } from 'react';
import { APP_ORIGIN, connectAiApplicationsFrame, frameSrc } from './site-bridge';

// Shows https://aiapplications.nine-67.com inside the page at full content height,
// so the site header, the app and the site footer scroll as one page.
export default function AiApplicationsFrame() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    setSrc(frameSrc(window.location, APP_ORIGIN));
  }, []);

  useEffect(() => {
    const header = document.getElementById('site-header');
    const wrapper = wrapperRef.current;
    if (!header || !wrapper) return;
    const update = () => wrapper.style.setProperty('--n67-aiapps-header', `${header.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !src) return;
    return connectAiApplicationsFrame(frame, { appOrigin: APP_ORIGIN });
  }, [src]);

  return (
    <div ref={wrapperRef} className="n67-aiapps">
      {src ? (
        <iframe
          ref={frameRef}
          className="n67-aiapps-frame"
          src={src}
          title="AI Applications | Nine-67"
          scrolling="no"
          style={{ display: 'block', width: '100%', border: 0, height: 'calc(100vh - var(--n67-aiapps-header, 0px))' }}
        />
      ) : (
        <div className="n67-aiapps-frame" />
      )}
    </div>
  );
}
