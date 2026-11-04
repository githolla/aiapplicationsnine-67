/* Photographic screen previews first; detailed explanation and live demo are separate. */
let applicationView=location.hash.endsWith('/how-it-works')?'overview':'preview';

const projectWalkthroughs = {
  "Proposal Builder": [
    "Catch the missing commitment before the proposal goes out.",
    "Northstar’s RFP calls for a 90-day pilot. The delivery team has an approved case study and a past proposal, but nobody has named the person who signs off on the pilot.",
    "Maps the RFP requirements to draft sections, pulls in the relevant case study, and flags the open acceptance criteria. The proposal writer can see exactly which promise still needs an owner.",
    "Sales edits a working proposal and takes one precise question to delivery: “Who accepts the pilot, and what will they check?” The approver reviews that answer alongside scope and price."
  ],
  "Lead Response": [
    "Give a webinar attendee a reason to reply.",
    "An attendee asks how to connect existing systems. Marketing has the session transcript, engagement data, and an approved operations brief.",
    "Finds the discussion that answers the attendee’s question and drafts a first email around it. Three follow-ups each add something different: a case, a checklist, and an invitation to discuss the workflow.",
    "The campaign owner gets an editable sequence with a clear reason for each touch. They check the audience, edit the wording, and choose which messages to send."
  ],
  "Lead Triage": [
    "Know why this lead should get the next call.",
    "Northstar shows a fit score of 92 and an intent score of 88. The lead has engaged with integration content, but sales still needs to confirm who owns the decision.",
    "Explains the ranking by separating account fit from observed interest. It surfaces the missing decision-maker and proposes a qualification question tied to the integration need.",
    "The rep opens the call with a specific question, verifies the buying role, and accepts or redirects the lead with the rationale in view."
  ],
  "Simulation Analysis": [
    "Hear the objections before choosing the pilot pitch.",
    "Marketing has two ways to describe the same pilot. Operations, IT, and finance will each evaluate a different part of the offer.",
    "Simulates each persona’s response to the wording. Operations asks how daily work changes, IT asks about access, and finance asks what baseline will prove the value.",
    "Marketing revises the weak passages and takes three specific questions into real buyer interviews. The simulated reactions become a test plan."
  ],
  "Budget Builder": [
    "Find the cost hiding behind the software price.",
    "A department asks for a new tool. Its plan includes the subscription, while the renewal assumption and implementation effort still need review.",
    "Flags those gaps against the department’s existing commitments and explains which assumptions the owner should revisit. The budget model updates totals when the owner edits a line.",
    "Finance receives a revised department plan with recurring costs, one-time work, and open assumptions visible before approval."
  ],
  "Sales Dashboard": [
    "See which two deals your forecast depends on.",
    "The executive view combines closed revenue, open opportunities, stages, and expected close dates. Two late-stage opportunities carry a large share of the forecast.",
    "Calls out that concentration and directs the review to the evidence behind each close date. A weighted pipeline figure becomes a pair of concrete deal questions.",
    "The sales leader can ask each owner what the buyer has confirmed, then decide which deals belong in the committed forecast."
  ],
  "Resource Allocation Platform": [
    "Resolve a 44-hour week before assigning more work.",
    "Jordan has 44 planned hours against 40 available. Taylor has 28 hours assigned. The planner shows their projects and daily commitments side by side.",
    "Surfaces the overload and suggests reviewing a bounded task for reassignment. The manager can inspect the actual assignment alongside the proposed move.",
    "The delivery lead checks skills and dependencies, then decides which task can move. The discussion starts with a named person and a specific capacity gap."
  ],
  "Collaboration Workspace": [
    "Answer “What’s blocking launch?” from the project record.",
    "The latest client update says the next milestone is waiting. An earlier discussion identifies the outstanding decision about source access.",
    "Connects the update to that decision and drafts a briefing with the dependency and next question together. The owner can check the underlying conversation.",
    "The project lead can reply with the blocker, identify who needs to decide, and post the confirmed next step where everyone follows the work."
  ],
  "Client Data Hub": [
    "Explain why two reports tell different stories.",
    "A leader opens two reports that appear to disagree. Each has its own reporting period, metric definition, and source context.",
    "Compares what each report actually measures and identifies the difference a reviewer should check first. The source references stay attached to the explanation.",
    "The analyst can point to the period or definition behind the discrepancy and decide whether the figures belong in the same leadership discussion."
  ],
  "Forecast Builder": [
    "Show the assumption that moved the forecast.",
    "Finance starts with a $3.84M baseline and changes the growth assumption in the working scenario. Both versions are available for comparison.",
    "The model recalculates the projection. AI explains which assumption changed, how it affects the outlook, and what evidence would justify using it.",
    "Finance can show leadership the baseline, the revised number, and the assumption to challenge before adopting the plan."
  ],
  "ROI Calculator": [
    "Find out whether the pilot still pays off at lower adoption.",
    "A sponsor estimates that a workflow consumes 40 hours each week. The model also includes effort reduction, adoption, operating cost, and build cost.",
    "Prompts the sponsor to test the least certain assumption. The calculator recomputes capacity, annual net benefit, and payback as adoption changes.",
    "The sponsor can compare scenarios and identify what the pilot must measure before making a funding decision."
  ],
  "Project Tracker": [
    "Turn a stalled task into a decision someone can own.",
    "The board shows a milestone waiting on client access. Task status alone does not tell the sponsor whose decision will unblock it.",
    "Brings the access dependency into the status briefing, alongside the affected work and the question the project manager needs answered.",
    "The manager verifies the blocker and agrees an owner and decision date. The next status update can report an action people can follow."
  ],
  "Nightwatch": [
    "Give the rep a credible opening for one account.",
    "A research batch suggests a prospect coordinates reporting across several teams. The source evidence and the proposed workflow opportunity sit together.",
    "Drafts three outreach angles around that hypothesis and explains why each might be relevant. The rep can inspect the research before choosing a version.",
    "Sales can discard a weak assumption or turn a verified observation into a specific opening question, then review the message before sending."
  ],
  "Client Health": [
    "See the renewal conversation that needs to happen now.",
    "A renewal is approaching. Engagement has fallen and a delivery question is still open. Each signal on its own could be easy to dismiss.",
    "Brings the signals together in an account briefing and points the owner to the evidence behind the concern.",
    "The account owner checks the context with delivery and prepares a renewal conversation around the unresolved issue."
  ],
  "FP&A Dashboard": [
    "Explain how revenue beat plan while costs climbed.",
    "The close has actuals and budget for revenue and delivery cost. Revenue is ahead of plan, but the cost movement needs its own explanation.",
    "Drafts separate commentary for the two variances and flags where a possible driver still needs evidence from the cost owner.",
    "Finance reviews the numbers and can publish a close narrative that distinguishes a verified movement from a cause still under investigation."
  ],
  "Business Cases": [
    "Catch a weak investment case before it reaches approval.",
    "A team wants to automate a recurring report. It can describe the problem but has yet to measure how long the report takes today.",
    "Structures the proposal around the current workflow, expected benefit, costs, and dependencies. It flags the missing baseline and makes the evidence request explicit.",
    "The sponsor gets a case they can strengthen with a time study before asking leadership to fund the work."
  ],
  "Impact OS": [
    "Show whether adoption actually changed the work.",
    "Usage records show that people open the application regularly. The claimed time reduction still lacks a measured before-and-after comparison.",
    "Separates observed usage from assumed benefit and identifies the evidence needed to support the impact claim.",
    "The owner can report adoption now, assign the workflow measurement, and bring back a validated outcome for the next review."
  ],
  "Client Profitability": [
    "Spot the growing account that is getting less profitable.",
    "Client revenue is rising, but delivery hours are growing faster. The account view brings revenue, allocated cost, and contribution together.",
    "Flags the margin change and directs attention to the delivery effort behind it. It raises scope expansion as a question for the account lead to investigate.",
    "Finance checks the allocation. With those figures in hand, the account lead can decide whether staffing, scope, or commercial terms need a conversation."
  ],
  "Tech Support Agent": [
    "Turn “it won’t connect” into a useful first reply.",
    "A customer reports a connection failure without the exact error or connection state. Support has product guidance and a reviewed prior case.",
    "Retrieves the related case, identifies the missing diagnostic details, and drafts a reply asking for them. A specialist can inspect the reference before recommending a fix.",
    "The specialist edits and approves a focused response or escalates the unanswered question to an expert with the context attached."
  ],
  "Knowledge Agent": [
    "Answer “Are we ready to launch?” with a source people can check.",
    "An employee asks what must be verified before a pilot launches. The workspace has approved guidance with named source owners.",
    "Finds the relevant readiness criteria and summarizes them beside the reference. If the approved material does not cover a question, it identifies the gap.",
    "The employee gets a source-backed checklist and knows which unresolved question to take to the document owner."
  ],
  "Operations Agent": [
    "Catch an incomplete access request before it reaches approval.",
    "A contractor needs access, but the request omits the source owner. The queue shows the intake record, request type, and what is missing.",
    "Classifies the request, checks the supplied fields, and drafts the follow-up questions needed for a permission review.",
    "The operations coordinator can route a complete request to the authorized reviewer, who confirms scope and decides whether access should proceed."
  ]
};

const projectDataNeeds = {
  "Proposal Builder": [
    [
      "RFP or tender package",
      "Latest RFP and addenda, requirement IDs or page references, submission deadline, mandatory sections, and evaluation criteria."
    ],
    [
      "Approved response library",
      "Reusable proposal sections and case studies with version, approval date, and permitted claims."
    ],
    [
      "Opportunity brief",
      "Client, scope, exclusions, proposed dates, pricing assumptions, and the owner who can confirm each open commitment."
    ]
  ],
  "Lead Response": [
    [
      "Webinar transcript",
      "Session ID, transcript with timestamps, topic segments, Q&A, and approved follow-up resources."
    ],
    [
      "Attendee export",
      "Attendee or CRM contact ID, account, role if known, session attended, watch duration, and questions actually submitted."
    ],
    [
      "Campaign rules",
      "Eligible recipients, opt-outs, approved links, sender, tone, cadence dates, and intended next action."
    ]
  ],
  "Lead Triage": [
    [
      "Lead and account records",
      "Contact ID, account ID, industry, size, territory, current owner, lead source, and qualification stage."
    ],
    [
      "Engagement events",
      "Contact or account ID, event type, topic or page, timestamp, and originating system."
    ],
    [
      "Qualification and routing rules",
      "Agreed fit criteria, intent signals, recency windows, ownership exceptions, and missing fields that require research."
    ]
  ],
  "Simulation Analysis": [
    [
      "Message variants",
      "Exact copy for each variant, offer, channel, intended action, and what the experiment is comparing."
    ],
    [
      "Persona briefs",
      "Target roles, buying responsibilities, decision criteria, known objections, and supporting interview notes if available."
    ],
    [
      "Evaluation rubric",
      "Questions each synthetic persona should assess, rating definitions, and the claims that need validation with real buyers."
    ]
  ],
  "Budget Builder": [
    [
      "Department plan",
      "Fiscal period, department, cost center, account code, line owner, requested amount, and currency."
    ],
    [
      "Actuals and commitments",
      "Prior-period spend, contract or PO reference, renewal date, recurring amount, and one-time implementation costs."
    ],
    [
      "Planning assumptions",
      "Headcount or rate changes, effective dates, contingency, scenario name, and approval owner."
    ]
  ],
  "Sales Dashboard": [
    [
      "Opportunity snapshot",
      "Opportunity and account IDs, deal amount, currency, stage, close date, owner, and forecast category."
    ],
    [
      "Deal history",
      "Stage and close-date changes, activity dates, next steps, and buyer evidence for major deals."
    ],
    [
      "Revenue and targets",
      "Closed-won dates and amounts, period targets, fiscal calendar, and agreed rules for weighting open pipeline."
    ]
  ],
  "Resource Allocation Platform": [
    [
      "Team capacity",
      "Person ID, role, skills, work calendar, contracted weekly hours, time off, and availability by date."
    ],
    [
      "Assignment plan",
      "Project and task IDs, assigned person, start and end dates, planned hours per day or week, and hard deadlines."
    ],
    [
      "Scheduling constraints",
      "Required skills, project priority, dependencies, and assignments the manager is allowed to move."
    ]
  ],
  "Collaboration Workspace": [
    [
      "Project roster and milestones",
      "Project ID, milestone, due date, accountable owner, participants, and who may see each update."
    ],
    [
      "Updates and decisions",
      "Dated meeting notes or posts, decision text, responsible person, linked milestone, and status."
    ],
    [
      "Outstanding dependencies",
      "Blocker, affected deliverable, person who can resolve it, next check-in, and source link."
    ]
  ],
  "Client Data Hub": [
    [
      "Report inventory",
      "Report ID, title, owner, source link, refresh date, coverage period, and intended audience."
    ],
    [
      "Metric dictionary",
      "Metric name, calculation, filters, unit, time basis, and source tables or system of record."
    ],
    [
      "Comparison sample",
      "The two report extracts in question, with date ranges, grouping fields, and comparable records or totals."
    ]
  ],
  "Forecast Builder": [
    [
      "Historical series",
      "Period, actual revenue or units, segment, currency, fiscal calendar, and latest closed period."
    ],
    [
      "Baseline forecast",
      "Forecast version, period-by-period values, driver definitions, and assumptions used in the approved plan."
    ],
    [
      "Scenario inputs",
      "Driver to change, baseline and proposed values, effective period, scenario owner, and rationale for the change."
    ]
  ],
  "ROI Calculator": [
    [
      "Workflow baseline",
      "Weekly volume and minutes per item, or measured weekly hours, plus the loaded hourly cost and measurement period."
    ],
    [
      "Benefit assumptions",
      "Expected effort reduction, share of users adopting the tool, and share of released capacity the team can realize."
    ],
    [
      "Investment costs",
      "One-time build and implementation cost, annual running cost, currency, and time horizon for comparing scenarios."
    ]
  ],
  "Project Tracker": [
    [
      "Task board export",
      "Task ID, project, milestone, status, owner, due date, and last update."
    ],
    [
      "Dependencies and blockers",
      "Blocked task ID, prerequisite task or decision, decision owner, and date the dependency was raised."
    ],
    [
      "Review context",
      "Reporting period, dated status notes, target milestones, and escalation criteria for overdue decisions."
    ]
  ],
  "Nightwatch": [
    [
      "Target account criteria",
      "Industries, geography, company-size range, buyer roles, exclusion list, and what qualifies a workflow opportunity."
    ],
    [
      "Account evidence",
      "Company name and domain, source URL, publication date, observed signal, and a short supporting excerpt."
    ],
    [
      "Outreach context",
      "Verified contact or role, prior outreach and dates, suppression status, approved offers, and reviewer."
    ]
  ],
  "Client Health": [
    [
      "Account and renewal records",
      "Account ID, owner, renewal date, contract value, and lifecycle stage."
    ],
    [
      "Relationship signals",
      "Dated meetings, engagement trend, open support or delivery issues, severity, issue owner, and last response."
    ],
    [
      "Health definitions",
      "Agreed risk thresholds, weighting rules, comparison window, and when an account owner should review an alert."
    ]
  ],
  "FP&A Dashboard": [
    [
      "Actuals extract",
      "Fiscal period, entity, cost center, general ledger account, amount, currency, and close status."
    ],
    [
      "Budget or forecast",
      "Plan version with the same period, entity, and account keys as actuals, plus any reporting mappings."
    ],
    [
      "Variance context",
      "Materiality thresholds, sign convention, one-off adjustments, cost-owner notes, and evidence for proposed drivers."
    ]
  ],
  "Business Cases": [
    [
      "Investment request",
      "Sponsor, problem statement, proposed option, alternatives, affected teams, and decision deadline."
    ],
    [
      "Current-state evidence",
      "Workflow volume, measured time per task, error or rework rate, baseline date, and source owner."
    ],
    [
      "Cost and benefit model",
      "Build and run costs, adoption assumption, benefit timing, dependencies, risks, and approval criteria."
    ]
  ],
  "Impact OS": [
    [
      "Initiative register",
      "Initiative ID, owner, go-live date, target workflow, expected benefit, and KPI definition."
    ],
    [
      "Adoption evidence",
      "Dated usage counts, eligible user population, and completed workflow events tied to the initiative."
    ],
    [
      "Outcome evidence",
      "Before and after values for the same metric, observation windows, comparable workload, evidence link, and person validating the result."
    ]
  ],
  "Client Profitability": [
    [
      "Client revenue",
      "Account and engagement IDs, reporting period, invoiced or recognized revenue, credits, and currency."
    ],
    [
      "Cost to serve",
      "Logged delivery hours by client and role, loaded cost rates, direct expenses, and allocation rules."
    ],
    [
      "Commercial context",
      "Contract scope, contracted fees, approved change orders, account owner, and the period used to compare contribution."
    ]
  ],
  "Tech Support Agent": [
    [
      "Incoming ticket",
      "Ticket ID, product or model, version, reported symptom, exact error, connection state, and troubleshooting already attempted."
    ],
    [
      "Approved technical sources",
      "Manuals, decision trees, and service bulletins with model applicability, revision date, and source owner."
    ],
    [
      "Reviewed resolutions",
      "Past ticket symptoms, confirmed cause, accepted fix, and conditions requiring escalation. Remove unnecessary customer identifiers."
    ]
  ],
  "Knowledge Agent": [
    [
      "Approved reference set",
      "Document title, source link, text, version, effective date, approval status, and accountable owner."
    ],
    [
      "Access rules",
      "Which teams or roles may read each source, plus superseded or restricted material to exclude."
    ],
    [
      "Test questions",
      "Common employee questions, expected supporting references, and examples where the correct response is to ask the owner."
    ]
  ],
  "Operations Agent": [
    [
      "Intake records",
      "Request ID, request type, requester role, submission time, requested resource or action, and current status."
    ],
    [
      "Routing and approval rules",
      "Required fields by request type, destination queue, accountable approver, and escalation conditions."
    ],
    [
      "Access-request context",
      "Resource owner, proposed permission level, business justification, expiry date, and evidence of approval."
    ]
  ]
};

const implementationNotes = {
  "Proposal Builder": "Organize each RFP into an opportunity record. Link requirements to source pages, approved content, draft sections, and the person responsible for unresolved commitments.",
  "Lead Response": "Match the webinar transcript and approved resources to the session, then associate attendance and questions with each contact. Apply campaign eligibility and opt-out rules before presenting drafts for review.",
  "Lead Triage": "Join CRM contacts to their accounts and dated engagement events. Apply the agreed fit, intent, and territory rules to produce a ranked queue with an owner and an explanation.",
  "Simulation Analysis": "Version the message variants and persona briefs. Run each variant against the same evaluation criteria and group results by persona so reviewers can compare objections side by side.",
  "Budget Builder": "Map requested spend, actuals, and commitments to the same fiscal period and cost center. Separate recurring and one-time costs and recalculate totals when a department owner edits a line.",
  "Sales Dashboard": "Group opportunities by stage and period, reconcile closed revenue to the target, and calculate weighted pipeline using the agreed stage weights. Keep the underlying deals available for inspection.",
  "Resource Allocation Platform": "Join assignments and available hours by person and week. Subtract leave, sum planned hours, and expose capacity gaps beside the affected tasks and deadlines.",
  "Collaboration Workspace": "Link dated updates, decisions, blockers, and owners to the same project and milestone. Scope each view to its intended audience and retain links back to the original discussion.",
  "Client Data Hub": "Create a report catalog keyed by owner, reporting period, and metric definition. Put source references beside each report so analysts can trace a difference to its origin.",
  "Forecast Builder": "Version the approved baseline separately from the working scenario. Apply changed drivers to the model and display the resulting period-by-period differences.",
  "ROI Calculator": "Encode the benefit and cost assumptions in a calculator. Recalculate annual hours, net benefit, and payback when a user changes adoption, cost, or effort reduction.",
  "Project Tracker": "Connect each task to its milestone, owner, and blocking dependencies. Use status and due dates to build a board that exposes the decision holding up the next task.",
  "Nightwatch": "Group public evidence by company domain, retain its dates and links, and match it against target criteria and exclusions. Place each eligible account in a research review queue.",
  "Client Health": "Align renewal dates, engagement events, and open issues by account. Apply agreed health thresholds and let the owner inspect the signals behind each flagged relationship.",
  "FP&A Dashboard": "Map actuals and the selected plan to a shared fiscal period, entity, and account. Calculate variances using agreed signs and materiality thresholds before preparing commentary.",
  "Business Cases": "Structure each proposal around its sponsor, baseline, alternatives, costs, and expected benefits. Track evidence and unresolved assumptions alongside the approval stage.",
  "Impact OS": "Link each initiative to its target metric, eligible users, usage events, and comparable measurement windows. Keep adoption counts separate from verified outcome measures.",
  "Client Profitability": "Match revenue, delivery time, and direct expenses by account and period. Apply the agreed rates and allocations to calculate contribution, with drill-down to cost drivers.",
  "Tech Support Agent": "Match the ticket\u2019s model and version to applicable guides and reviewed cases. Surface source references beside the reply editor and route unresolved cases to expert review.",
  "Knowledge Agent": "Index approved document versions with source links, owners, and access rules. Retrieve passages available to the requester and keep their citations alongside the generated answer.",
  "Operations Agent": "Normalize incoming requests by type and check the required fields. Route complete requests to the appropriate reviewer and hold incomplete ones for clarification."
};

function applicationAIFlow() {
  const project = CLIENT_PROJECTS[current];
  const sector=sectorCase(activeIndustry(),current);
  const story=sector?sector.example.slice(1):projectWalkthroughs[project.name].slice(1);
  const workflow = project.workflow;
  function bullet(title, sections) {
    return `<li><details><summary>${esc(title)}</summary><dl>${sections.map(([label,body])=>`<dt>${esc(label)}</dt><dd>${esc(body)}</dd>`).join('')}</dl></details></li>`;
  }
  const technologies = i => workflow.technology[i].map(([name,role])=>name+' — '+role).join('. ');
  if(sector){const [q,source,output,decision]=sector.example;return `<section class="application-ai-flow project-story technical-flow"><p class="bullet-hint">${esc(sector.industry)} · Select a bullet to inspect this example.</p><div class="open-spec bullet-spec">${[['Source data',[[sector.source,source],['Case record',q]]],['What Nine-67 builds',[[sector.desk,q],['Team review',decision]]],['What AI does',[['Prepared output',output],['Decision owner',decision]]]].map(([title,items])=>`<section><h2>${title}</h2><ul>${items.map(([label,body])=>bullet(label,[['In this example',body]])).join('')}</ul></section>`).join('')}</div></section>`;}
  const sources = projectDataNeeds[project.name].map(([record,fields],i)=>bullet(record,[
    ['Fields and context',fields], ['How it fits this workflow',workflow.inputs[i][1]]
  ]));
  const engineering = [
    bullet('Intake and source connections', [['What we connect',project.systems],['How intake works',workflow.connection[0]],['Source technology options',technologies(0)]]),
    bullet('Application logic and data flow', [['What we build',implementationNotes[project.name]],['How the model receives context',workflow.connection[1]]]),
    bullet('Final application and team handoff', [['What your team receives',story[2]],...workflow.outputs,['How it is delivered',workflow.connection[2]],['Application technology options',technologies(2)]]),
    bullet('Review and pilot measurement', [['Who participates',project.team],['What they verify',workflow.review],['What to measure',project.measure]])
  ];
  const ai = workflow.ai.map(([task,description],i)=>bullet(task,[
    ['Task detail',description],
    ...[ [['Input in this example',story[0]]], [['What the model does in practice',story[1]],['Model options',technologies(1)]], [['Output for review',project.output],['Human review',workflow.review]] ][i]
  ]));
  return `<section class="application-ai-flow project-story technical-flow" aria-label="How ${esc(project.name)} works">
    <p class="bullet-hint">Select any bullet to see the details.</p>
    <div class="open-spec bullet-spec">${[['Source data',sources],['What Nine-67 builds',engineering],['What AI does',ai]].map(([title,items])=>`<section><h2>${title}</h2><ul>${items.join('')}</ul></section>`).join('')}</div>
  </section>`;

}

function applicationSetView(view){if(view==='example'){openApplicationSite(current);return}if(!['overview','preview'].includes(view))return;applicationView=view;render();document.querySelector('.project-view-nav')?.scrollIntoView({block:'nearest'})}
function applicationScreenshot() {
  const name = toolsList[current][0];
  const preview = new URL(applicationDemoURL(current));
  preview.searchParams.delete('guide');
  preview.searchParams.set('preview','1');
  return `<section class="application-screenshot-preview" aria-label="${esc(name)} preview">
    <div class="screenshot-section-label"><div><span>INSIDE THE APPLICATION</span></div><span class="screenshot-scroll-hint">Switch views or scroll to explore ${icon('arrow')}</span></div>
    <div class="application-browser-frame"><iframe class="sharp-app-preview" title="${esc(name)} scrollable read-only preview" src="${esc(preview.href)}"></iframe></div>
    <div class="screenshot-caption"><span>Read-only application preview · Sample data · Simulated AI</span><a class="demo-launch-link" href="${esc(applicationDemoURL(current))}" target="_blank" rel="noopener">Try guided demo ${icon('arrow')}</a></div>
    <div class="project-next-links"><button onclick="nav(${(current+20)%21})">${icon('back')} Previous project</button><button onclick="nav(${(current+1)%21})">Next project ${icon('arrow')}</button></div></section>`;
}
function applicationDemoHeader(){const sector=sectorCase(activeIndustry(),current);return `<section class="application-demo-header"><button class="project-back-link" onclick="nav(-1)">${icon('back')} All recent projects</button>${sector?sectorHero(sector.industry):''}<div class="application-demo-heading"><div><span class="application-demo-eyebrow">INTERACTIVE EXAMPLE / ${esc(sector?.industry||productStories[current].audience).toUpperCase()}</span><h1>${esc(toolsList[current][0])}</h1><p>${esc(sector?.example[0]||applicationAIStories[current][0])}</p></div><aside class="project-header-context"><span>BUILT AROUND THE BUSINESS PROBLEM</span><p>${esc(sector?.example[1]||CLIENT_PROJECTS[current].problem)}</p><a class="demo-launch-link" href="${esc(applicationDemoURL(current))}" target="_blank" rel="noopener">Try guided demo ${icon('arrow')}</a></aside></div><nav class="project-view-nav" aria-label="Project view"><div><button class="${applicationView==='preview'?'active':''}" aria-pressed="${applicationView==='preview'}" onclick="applicationSetView('preview')">Application preview</button><button class="${applicationView==='overview'?'active':''}" aria-pressed="${applicationView==='overview'}" onclick="applicationSetView('overview')">How it works</button></div><span>Sample data · Simulated AI</span></nav></section>`}
const renderWithDirectory=render;
render=function(){renderWithDirectory();document.body.dataset.projectView=current>=0?applicationView:'';if(current>=13){const hash='#'+toolsList[current][0].toLowerCase().replaceAll(' ','-')+(applicationView==='overview'?'/how-it-works':'');if(location.hash!==hash)history[routingFromHistory?'replaceState':'pushState'](null,'',hash)}if(current>=0)$('#main').insertAdjacentHTML('afterbegin',applicationDemoHeader()+(applicationView==='preview'?applicationScreenshot():applicationAIFlow())+clientProjectFit())};
const navigateWithDirectory=nav;
nav=function(n){if(n>=0&&n!==current)applicationView='preview';navigateWithDirectory(n)};
portfolioRoutesReady=true;
restoreProductRoute();

function clientProjectFitExpanded(){const sector=sectorCase(activeIndustry(),current);const p=sector?{...CLIENT_PROJECTS[current],team:sector.team+" and "+sector.owner,systems:sector.source}:CLIENT_PROJECTS[current];return `<section class="client-project-fit"><div class="client-fit-heading"><span>COULD THIS FIT YOUR TEAM?</span><h2>What an implementation starts with.</h2><p>We shape the scope around your workflow, information, and people. These are starting points for a conversation.</p></div><div class="client-fit-grid">${[['People involved',p.team],['Potential connections',p.systems],['What we would measure',p.measure]].map(([h,t])=>`<article><h3>${h}</h3><p>${esc(t)}</p></article>`).join('')}</div><div class="client-next-step"><div><h3>Bring us a workflow like this.</h3><p>Tell us what repeats, where the information lives, and who reviews the result. We can explore a focused first application together.</p></div><div><button onclick="clientCopyBrief()">Copy project brief</button><a href="https://www.nine-67.com/" target="_blank" rel="noopener">Talk with Nine-67 ${icon('arrow')}</a><span id="client-copy-status" role="status"></span></div></div></section>`}
async function clientCopyBrief(){const sector=sectorCase(activeIndustry(),current);const p=sector?{...CLIENT_PROJECTS[current],problem:sector.example[0],does:sector.example[2],team:sector.team,inputs:sector.example[1]}:CLIENT_PROJECTS[current],brief=p.name+' — workflow discussion\n'+p.problem+'\nAI: '+p.does+'\nOur team: '+p.team+'\nStarting information: '+p.inputs+'\nExplore: '+location.href;try{await navigator.clipboard.writeText(brief);document.getElementById('client-copy-status').textContent='Project brief copied.'}catch(e){const target=document.getElementById('client-copy-status');target.textContent=brief;target.style.whiteSpace='pre-wrap'}}

function applicationDemoURL(i){const url=new URL('/apps/'+toolsList[i][0].toLowerCase().replaceAll(' ','-')+'.html?guide=1',location.origin);if(activeIndustry())url.searchParams.set('industry',activeIndustry());return url.href}

function clientProjectFit(){return `<section class="client-fit-fold"><details><summary><span>How this could fit your team</span><small>People, connections & implementation ${icon('arrow')}</small></summary>${clientProjectFitExpanded()}</details></section>`}
