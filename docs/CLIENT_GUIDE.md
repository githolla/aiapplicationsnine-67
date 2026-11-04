# Client exploration

The homepage is organized into Recent projects, Technology, and Our process. All 21 projects are visible immediately in six original business-track columns directly below the Projects / Technology / Process navigation, with search. Screenshot previews remain inside the individual project pages. Project implementation-fit notes are expandable, and each standalone application retains three guided actions. Add `?guide=1` to a standalone application URL to show its guide. Existing application actions remain functional.

## Content and chat

`dist/client-content.js` holds each application's problem, inputs, AI role, output, scenario, guided steps, supported actions, involved team, potential connections, and success measures.

`dist/showcase-chat.js` implements a local content-based guide. It retrieves answers from that content plus curated implementation/process explanations, maintains follow-up context in session storage, and links to projects. It does not call an LLM or API. The UI discloses this. It does not send messages off-site, collect leads, or establish production integration, pricing, security, or business-outcome claims. A live Claude/OpenAI conversational service is not configured.

The chat is available on the homepage, project/process pages, and all standalone applications. Clearing chat removes its session history. Text is escaped before rendering. Questions outside the supported content receive a bounded fallback.

## Demonstration status

Application records and AI responses are illustrative. No client deployment, production connection, testimonial, delivery date, or realized outcome has been asserted. Case study proof and implementation status should be added only with verified evidence and permission.

## Verification

Validated 21 routes and screenshot previews; 63 standalone views; record creation, editing, financial calculations, approval states and existing workflow controls; 63 guided actions; all 21 chat application answers; comparisons, contextual follow-ups, process, privacy, commercial scope and unknown-question handling. Browser QA covered business filtering, empty search, chat comparisons, linked project/process navigation, guided app entry, and the proposal editor. The final chat layout was visually checked.

## Guided launch hardening

Project launch controls are native absolute links with `target="_blank"` and `rel="noopener"`, preserving the guide query and the original project page. Guide actions use explicit callbacks defined before initial rendering, without dynamic Function evaluation. The revised link and a guided requirements action were verified in the browser; all 21 route/preview checks and 63 action checks pass. The reported original failure was not consistently reproducible in the live browser.

## Portfolio design

The primary navigation jumps directly to recent projects, technology, and process sections. The header remains visible during scrolling. Technology groups explain each tool’s role, with actual vendor logos. The process overview describes the client participants and outputs; full team and delivery detail remains available. The optional content-based chat is visually quieter. All screenshot previews remain scrollable in place.

## Detailed application workflows

Every CLIENT_PROJECTS entry includes a workflow object: three labeled input categories, three AI activities, three team deliverables, a three-step illustrative handoff, and an application-specific review point. Project pages render the same structure with distinct content for all 21 applications. The content describes intended workflows and clearly preserves the simulated-demo status.

## Workflow technology and connections

Each application workflow maps relevant source technologies, AI model options, and delivery/workspace technologies to the three visible stages. Every application includes its own three-step connection explanation. Existing official vendor logo assets are used locally, with a short role label. The UI identifies these as implementation options and distinguishes the intended server-side model request from any live integration.

## Readable presentation

The shared readable-design stylesheet strengthens type hierarchy, darkens body text and labels, replaces capsule controls with restrained corners, and removes decorative counters from workflow headers and connection steps. The six-column homepage, official logo assets, circular supplied project art, scrolling screenshots, and application functionality remain available. The stylesheet is also included in standalone application pages.

## Compact project column correction

The counter-hiding selector now excludes the supplied circular icon wrapper. Category headers use an explicit grid override, with a 44px icon beside the title and an aligned 94px header at desktop width. Generic track descriptions are hidden in the directory to remove excess whitespace. Duplicate header/list borders were removed. Browser verification confirmed all six icons display and all six headers are 94px high while retaining all 21 project links.
