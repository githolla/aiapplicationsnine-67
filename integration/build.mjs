// Builds dist/site-package: the AI Applications site prepared to run as real pages inside
// nine-67.com (see integration/next). Styles are scoped under .n67-app so they cannot affect
// the website, asset and page paths point at the website's routes, and pages.json describes
// each page's markup, styles and scripts.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, copyFileSync, rmSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'dist');
const OUT = join(SRC, 'site-package');
const ASSET_BASE = '/ai-applications-assets/';
const PAGE_BASE = '/ai-applications';
const SCOPE = '.n67-app';
const SKIP = new Set(['site-package', '.openai']);
const EXCLUDED_STYLES = new Set(['embed.css']);
const STANDALONE_ORIGIN = 'https://aiapplications.nine-67.com';

const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name);
  if (dir === SRC && SKIP.has(name)) return [];
  return statSync(path).isDirectory() ? walk(path) : [path];
});

// Split a selector at its first top-level combinator, outside brackets and parentheses.
function splitLeading(selector) {
  let depth = 0;
  let quote = '';
  for (let i = 0; i < selector.length; i++) {
    const c = selector[i];
    if (quote) { if (c === quote && selector[i - 1] !== '\\') quote = ''; continue; }
    if (c === '"' || c === "'") { quote = c; continue; }
    if (c === '(' || c === '[') depth++;
    else if (c === ')' || c === ']') depth--;
    else if (depth === 0 && (c === ' ' || c === '>' || c === '+' || c === '~')) {
      return [selector.slice(0, i), selector.slice(i)];
    }
  }
  return [selector, ''];
}

// The original pages put state on <html> and <body>; inside the website those stay on the
// real elements, and everything else lives inside the .n67-app container.
function scopeSelector(raw) {
  let selector = raw.trim();
  if (!selector) return selector;
  let [lead, rest] = splitLeading(selector);
  // Embedded-only rules always apply inside the website.
  if (/^(html)?\.portfolio-embedded$/.test(lead)) {
    selector = rest.trim();
    if (!selector) return SCOPE;
    if (/^[>+~]/.test(selector)) selector = selector.slice(1).trim();
    [lead, rest] = splitLeading(selector);
  }
  const doc = lead.match(/^(html|body|:root)((?:[.[:#].*)?)$/);
  if (doc) {
    let qualifiers = doc[2];
    if (doc[1] === 'html' && /^\s+body/.test(rest)) {
      const [bodyLead, bodyRest] = splitLeading(rest.trim());
      qualifiers += bodyLead.replace(/^body/, '');
      rest = bodyRest;
    }
    if (doc[1] === ':root' || doc[1] === 'html') qualifiers = qualifiers.replace(/\.portfolio-embedded/g, '');
    const base = qualifiers ? `body${qualifiers} ${SCOPE}` : SCOPE;
    return base + rest;
  }
  return `${SCOPE} ${selector}`;
}

const scopePlugin = {
  postcssPlugin: 'n67-scope',
  Rule(rule) {
    if (rule.parent && rule.parent.type === 'atrule' && /keyframes$/i.test(rule.parent.name)) return;
    if (rule.n67Scoped) return;
    rule.selectors = rule.selectors.map(scopeSelector);
    rule.n67Scoped = true;
  },
};

function rewriteScript(code) {
  let out = code
    // Absolute and back links to portfolio pages.
    .replaceAll("'/apps/", `'${PAGE_BASE}/apps/`)
    .replaceAll('href="../${', `href="${PAGE_BASE}\${`)
    .replaceAll("href=\"../\"", `href="${PAGE_BASE}"`)
    // The chat guide links back to the portfolio from demo pages.
    .replaceAll('src="${prefix}nine67-logo.png"', `src="${ASSET_BASE}nine67-logo.png"`)
    .replaceAll("prefix=onApp?'../':''", `prefix=onApp?'${PAGE_BASE}':''`)
    // Read-only previews inside the app show the standalone page, without the website header.
    .replaceAll('src="${esc(preview.href)}"', `src="\${esc('${STANDALONE_ORIGIN}'+preview.pathname.replace('${PAGE_BASE}','')+preview.search)}"`)
    // Asset paths built from a prefix argument.
    .replaceAll('${prefix}industry-media/', `${ASSET_BASE}industry-media/`)
    // Theme variables are set on the scoped container, not <html>.
    .replaceAll('document.documentElement.style.setProperty', "(document.querySelector('.n67-app')||document.documentElement).style.setProperty");
  // Relative asset paths in strings, attributes and url().
  out = out.replace(/(["'`(=]\s*)(?:\.\.\/)?((?:industry-media|logos|art|screenshots|fonts)\/|nine67-logo\.png|nine67-architecture\.png|[a-z0-9-]+\.webp)/g,
    (_, lead, path) => `${lead}${ASSET_BASE}${path}`);
  return out;
}

function parsePage(html) {
  const head = html.slice(0, html.indexOf('<body'));
  const bodyOpen = html.match(/<body([^>]*)>/);
  const bodyAttrs = {};
  for (const m of (bodyOpen?.[1] ?? '').matchAll(/([a-zA-Z-]+)="([^"]*)"/g)) bodyAttrs[m[1]] = m[2];
  const bodyStart = html.indexOf('>', html.indexOf('<body')) + 1;
  const bodyEnd = html.lastIndexOf('</body>');
  let body = html.slice(bodyStart, bodyEnd);
  const scripts = [...body.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);
  body = body.replace(/<script[\s\S]*?<\/script>/g, '');
  const styles = [...head.matchAll(/<link rel="stylesheet"(?: id="[^"]*")? href="([^"]+)"/g)].map((m) => m[1]);
  const title = head.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  return { bodyAttrs, body, scripts, styles, title };
}

const resolveAsset = (pageFile, href) => {
  const clean = new URL(href, `http://x/${pageFile}`).pathname.slice(1);
  const query = href.includes('?') ? href.slice(href.indexOf('?')) : '';
  return { file: clean, url: ASSET_BASE + clean + query };
};

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const files = walk(SRC).map((f) => relative(SRC, f));
for (const file of files) {
  const src = join(SRC, file);
  const dest = join(OUT, file);
  mkdirSync(dirname(dest), { recursive: true });
  if (file.endsWith('.css')) {
    const css = readFileSync(src, 'utf8');
    writeFileSync(dest, postcss([scopePlugin]).process(css, { from: undefined }).css);
  } else if (file.endsWith('.js')) {
    writeFileSync(dest, rewriteScript(readFileSync(src, 'utf8')));
  } else if (!file.endsWith('.html') || file.startsWith('screenshots/')) {
    copyFileSync(src, dest);
  }
}

const integrationCss = readFileSync(join(ROOT, 'integration', 'integration.css'), 'utf8');
writeFileSync(join(OUT, 'integration.css'), integrationCss);

const pages = {};
for (const file of files.filter((f) => f === 'index.html' || /^apps\/[^/]+\.html$/.test(f))) {
  const page = parsePage(readFileSync(join(SRC, file), 'utf8'));
  const styles = page.styles
    .filter((href) => !EXCLUDED_STYLES.has(href.replace(/^\.\.\//, '').split('?')[0]))
    .map((href) => resolveAsset(file, href).url);
  if (file === 'index.html' && !styles.some((s) => s.includes('website-colours.css'))) styles.push(`${ASSET_BASE}website-colours.css`);
  pages[file === 'index.html' ? 'index' : file] = {
    title: page.title,
    bodyAttrs: page.bodyAttrs,
    html: rewriteScript(page.body),
    styles: [`${ASSET_BASE}integration.css`, ...styles],
    scripts: [`${ASSET_BASE}storage-guard.js`, ...page.scripts.map((href) => resolveAsset(file, href).url)],
  };
}
writeFileSync(join(OUT, 'pages.json'), JSON.stringify(pages));
console.log(`site-package: ${files.length} files, ${Object.keys(pages).length} pages`);
