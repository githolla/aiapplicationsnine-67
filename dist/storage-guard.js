/* Loaded first on every page. Keeps the site working when the browser blocks storage
   (private browsing, embedded pages, strict privacy settings). */
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

})();
