# AI Applications as pages of nine-67.com

The full AI Applications site (the project directory and all 21 demo applications) runs as real pages of the website, under the website's own header and footer. There is no iframe.

- `nine-67.com/ai-applications` is the directory.
- `nine-67.com/ai-applications/apps/<app>.html` is each demo application, for example `/ai-applications/apps/budget-builder.html?industry=Manufacturing`.

The app's code, styles and images come from this repo's deployment through one rewrite, so changes pushed to this repo appear on the website without rebuilding it.

## One-time setup in the website (Next.js app router)

1. Copy the files from `integration/next/` into the website:
   - `components/AiApplicationsApp.tsx`
   - `app/ai-applications/page.tsx` (replaces the current page)
   - `app/ai-applications/apps/[app]/page.tsx`

   Adjust the import paths if the website keeps components elsewhere.
2. Add the rewrite from `integration/next/next.config.rewrite.ts` to the website's `next.config`:
   ```ts
   async rewrites() {
     return [{ source: '/ai-applications-assets/:path*', destination: 'https://aiapplications.nine-67.com/site-package/:path*' }];
   }
   ```
   Merge it with any rewrites the site already has.
3. Delete the old copy under `public/ai-applications/` and the old iframe component and its CSS.
4. Deploy.

The component expects the fixed site header to have `id="site-header"`, which it already does.

## How it fits into the page

- The app's styles are scoped under `.n67-app`, so they cannot change the website's header, footer or other pages. The website's global element styles (such as Tailwind's base reset) are undone inside the app so it looks the same as on its own.
- Drawers and dialogs open below the site header.
- Moving from the app to another page of the website reloads that page, so the app's scripts never run on other pages.
- If a browser blocks storage, the app still loads (`dist/storage-guard.js`).

## How it is built

`npm run build` (run by the Vercel deployment of this repo) creates `dist/site-package/` from `dist/`. See `integration/build.mjs`.
