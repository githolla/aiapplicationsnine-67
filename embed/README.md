# Showing AI Applications on nine-67.com

The app lives at https://aiapplications.nine-67.com and is published from this repo. The website shows it on `/ai-applications` as part of the page: site header, the app at its full height, then the site footer, with one scrollbar. Changes pushed to this repo appear on the website automatically.

## One-time setup in the website (Next.js)

1. Copy `site-bridge.ts` and `AiApplicationsFrame.tsx` into the website, in the same folder.
2. On the `/ai-applications` page, render `<AiApplicationsFrame />` in place of the current component that loads `/ai-applications/app/index.html`.
3. Delete the local copy of the app under `public/ai-applications/app/`. It is no longer used and would drift out of date.
4. Remove any CSS that gives `.n67-aiapps-frame` a fixed height. The frame now sizes itself to the app.

The component expects the fixed site header to have `id="site-header"`, which it already does.

## What it does

- Sizes the frame to the app's content, so the page scrolls as one.
- Keeps the app's floating panels (side drawer, dialogs, notices, the "Ask Nine-67" button) within the visible part of the screen.
- Forwards the app's "scroll to section" actions to the page.
- Keeps the page URL in step with the app, so links like `/ai-applications?industry=Manufacturing` and `/ai-applications?view=apps/budget-builder.html` open the right view and survive a refresh.
- Opens links that leave the app (for example to nine-67.com) in the full window.
- When embedded, the app hides its own header and uses the website colours (`dist/website-colours.css`).

Messages are only accepted from `https://aiapplications.nine-67.com`, and the app only accepts messages from the page that contains it.
