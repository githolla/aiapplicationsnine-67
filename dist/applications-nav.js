const applicationAIStories=[["Turn an RFP into a proposal through conversation.", "RFP documents, approved past proposals, requirements, and answers from your team.", "Extract requirements, ask clarifying questions, organize a response, and draft sections grounded in the supplied material.", "An editable proposal and a requirements checklist. Your team checks claims, pricing, and commitments before sending."], ["Turn webinar content into relevant follow-up.", "Webinar recordings or transcripts, approved content, and attendee engagement data.", "Identify key themes, adapt the message to attendee interests, and draft an initial email plus three follow-up cadences.", "Audience-specific email drafts and a reviewable cadence. Marketing approves content and recipients before outreach."], ["Prioritize leads with evidence behind the ranking.", "Lead records, company profiles, engagement history, and your qualification criteria.", "Correlate signals, summarize fit and intent, explain prioritization, and suggest the next useful conversation.", "A prioritized queue with reasons and recommended actions. Sales confirms qualification and owns the next step."], ["Test messages with simulated personas.", "Message variants, audience definitions, positioning, and the question you want to test.", "Simulate persona reactions, surface objections, compare variants, and explain which themes resonate within the synthetic group.", "Directional feedback and revision ideas. The team validates findings with real people; simulated responses are not market research evidence."], ["Build and challenge a budget with an AI partner.", "Department plans, historical spending, line items, constraints, and assumptions.", "Translate a conversation into budget categories, flag missing costs, explain variances, and suggest scenarios.", "An editable departmental plan with explicit assumptions. Finance reviews inputs and approves the budget; calculations remain visible."], ["Ask what changed in sales—and why.", "Historical sales, current opportunities, pipeline stages, and forecast assumptions.", "Summarize trends, highlight unusual movements, explain pipeline changes, and draft an executive briefing tied to the data.", "A decision-ready sales narrative and areas to investigate. Leaders review the evidence and distinguish forecasts from actuals."], ["Match capacity and skills to the work ahead.", "Team availability, skills, task estimates, deadlines, and assignment constraints.", "Surface overloads, identify skill gaps, and suggest assignment changes with tradeoffs across people and deadlines.", "A proposed allocation plan. Managers check availability and approve changes before work is reassigned."], ["Keep a project team aligned across its workspace.", "Approved Teams discussions, SharePoint documents, project tasks, decisions, and role permissions.", "Summarize activity, surface unresolved questions, draft action lists, and answer questions using the material a user is allowed to access.", "A shared project brief and proposed next steps. Owners verify decisions, assign work, and control client and contractor access."], ["Bring a client’s sales, delivery, and finance data together in one account view.", "Approved reports, dashboards, source documents, and reporting definitions.", "Find relevant reports, connect themes, summarize results, and explain an answer with links back to its sources.", "An answer with supporting context and a consolidated view. Analysts check source dates, definitions, and conflicting evidence."], ["Explore the assumptions behind the forecast.", "Historical results, current trends, planned changes, and editable growth assumptions.", "Explain drivers, propose alternative assumptions, and compare scenario narratives alongside transparent model calculations.", "A forecast with a baseline, scenarios, and documented assumptions. Executives choose the scenario and approve planning decisions."], ["Pressure-test the value before you build.", "Workflow volumes, time per task, labor rates, adoption assumptions, build costs, and ongoing costs.", "Help identify missing costs, challenge benefit assumptions, and explain sensitivity to adoption and time savings.", "An ROI and payback model with reviewable assumptions. Sponsors validate the inputs; modeled value is not a guaranteed return."], ["Turn project updates into a clear delivery picture.", "Milestones, tasks, owners, status updates, dependencies, and project notes.", "Summarize progress, identify blockers, draft status reports, and suggest follow-up actions from the recorded work.", "A client-ready update and an action queue. Project owners confirm status and approve any changes to scope or commitments."], ["Prepare prospect research and outreach overnight.", "Prospect research, approved company information, audience criteria, and brand guidance.", "Organize prospect context, suggest relevant talking points, and draft emails and LinkedIn posts in three versions.", "A research-backed outreach review queue. Your team verifies facts and selects a version before publishing or sending."], ["Spot client risk before the next review.", "Account activity, support themes, engagement, delivery updates, and agreed health indicators.", "Connect relationship signals, explain potential risks, summarize supporting evidence, and suggest an account action plan.", "A health briefing and recommended follow-ups. Account owners validate the context and decide how to engage the client."], ["Explain financial performance beyond the numbers.", "Actuals, budgets, account categories, variance thresholds, and finance assumptions.", "Draft variance commentary, identify drivers worth investigating, and help leaders ask focused questions about performance.", "A financial briefing linked to the underlying model. Finance validates accounting context and signs off on the narrative."], ["Build an evidence-led case for investment.", "The business problem, current effort, proposed scope, estimated costs, expected benefits, and constraints.", "Structure the case, expose unsupported assumptions, compare alternatives, and draft a decision summary.", "A reviewable business case with open questions and assumptions. Sponsors assess the evidence and make the investment decision."], ["Understand where AI is creating useful capacity.", "Workflow baselines, adoption signals, usage measures, task estimates, and delivery costs.", "Connect adoption to modeled operational effects, explain gaps, and suggest where to investigate or improve usage.", "An impact narrative with explicit measurement assumptions. Leaders validate realized outcomes separately from modeled capacity."], ["See which client relationships drive contribution.", "Client revenue, delivery hours, labor costs, scope, and account-level financial records.", "Explain contribution changes, surface possible scope drift, and propose questions or scenarios for account review.", "An account profitability briefing. Finance checks cost allocation and account teams decide on commercial actions."], ["Draft support replies from approved knowledge.", "Past support emails, approved answers, product documents, and the customer question.", "Retrieve relevant guidance, draft a grounded response, highlight source material, and flag missing information for escalation.", "An editable reply with sources. A support specialist checks suitability and approves the answer before it reaches a customer."], ["Give teams answers with sources attached.", "Permission-appropriate policies, manuals, process documents, and reference material.", "Retrieve relevant passages, synthesize an answer, cite the supporting documents, and flag when the sources are insufficient.", "A source-linked answer and a path to expert review. Employees check the cited guidance before consequential decisions."], ["Move routine requests toward a clear decision.", "Incoming requests, operating policies, required fields, approval rules, and task context.", "Classify requests, extract details, identify missing information, and propose a route or next action.", "A structured review queue with suggested actions. Authorized people approve consequential steps and handle exceptions."]];
const applicationTracks=[
['Sales & Growth',[2,1,0,5,12]],
['Planning & Delivery',[6,7,8,3,11]],
['Client Health & Profitability',[17,13]],
['Financial Planning',[14,9,4]],
['ROI & Impact',[16,10,15]],
['Operations & Support',[18,19,20]]
];

function openApplicationSite(i,guided=false){if(i<0||i>=toolsList.length)return;const url=new URL(applicationDemoURL(i));if(!guided)url.searchParams.delete('guide');location.href=url.href}
let portfolioView='projects';
const nine67ProcessHome=studioHome;
const trackArtVersions=["123383726a", "ef46161653", "43f56dba47", "8aaac7b158", "6a4fa43ba7", "999a48c12f"];
const trackArt=['growth','delivery','margin','finance','value','foundation'];
const providedIconCrops=[[65, 55, 400, 375], [515, 175, 490, 250], [1050, 90, 440, 340], [50, 535, 440, 360], [515, 540, 490, 360], [1050, 540, 450, 360]];
function providedTrackIcon(n){const [x,y,w,h]=providedIconCrops[n],scale=Math.min(62/w,58/h);return `<span class="directory-icon-circle"><span class="provided-track-icon" role="img" aria-label="${esc(applicationTracks[n][0])} icon" style="width:${w*scale}px;height:${h*scale}px;background-size:${1536*scale}px ${1024*scale}px;background-position:-${x*scale}px -${y*scale}px"></span></span>`}
const trackOutcomes=['Find opportunities. Build relationships. Grow revenue.','Bring people, information, and execution together.','Understand the relationships that drive your margin.','Plan with context. Forecast with confidence.','Make the value of your investment visible.','Give your team a stronger operating foundation.'];
let featuredProject=5;
let clientNeed='all';
const clientNeeds=[['all','All applications',null],['sales','Grow sales',[0,1,2,5,12]],['support','Support customers',[13,18,19]],['reports','Understand performance',[5,8,14,16,17]],['planning','Plan & invest',[3,4,9,10,15]],['operations','Run operations',[6,7,11,20]]];
function clientSelectNeed(id){clientNeed=id;document.querySelectorAll('[data-client-need]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.clientNeed===id)));portfolioSearch(document.querySelector('.portfolio-search input')?.value||'')}
function clientStartCards(){return `<section class="client-start" aria-label="Suggested starting points"><div class="client-section-label">NEW HERE? START WITH A WORKFLOW</div><div class="client-start-grid">${[0,18,5].map(i=>`<button onclick="nav(${i})" class="client-start-card"><div class="client-start-image"><img src="screenshots/${toolsList[i][0].toLowerCase().replaceAll(' ','-')}.jpg" alt="${esc(toolsList[i][0])} interface" loading="lazy"></div><div><span>INTERACTIVE EXAMPLE</span><h3>${esc(toolsList[i][0])}</h3><p>${esc(CLIENT_PROJECTS[i].summary)}</p><b>See the workflow ${icon('arrow')}</b></div></button>`).join('')}</div></section>`}

function portfolioFeature(){const i=featuredProject,slug=toolsList[i][0].toLowerCase().replaceAll(' ','-');return `<div class="portfolio-feature-window"><div class="portfolio-feature-chrome"><div><i></i><i></i><i></i></div><span>${esc(toolsList[i][0])}</span><small>SCROLL TO EXPLORE</small></div><div class="portfolio-feature-screen portfolio-scroll-screen" role="region" tabindex="0" aria-label="Scrollable ${esc(toolsList[i][0])} preview"><div class="portfolio-scroll-canvas"><img src="screenshots/${slug}.jpg" alt="${esc(toolsList[i][0])} application screen" width="1348" height="926" draggable="false"></div></div><div class="portfolio-feature-bottom"><span><i></i> AI IN USE · ${esc(applicationAIStories[i][0])}</span><button onclick="nav(${i})">View project ${icon('arrow')}</button></div></div>`}
function portfolioChooseFeature(i){featuredProject=i;document.getElementById('portfolio-feature').innerHTML=portfolioFeature();document.querySelectorAll('[data-feature-id]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.featureId)===i)))}
function portfolioSearch(value){const q=value.toLowerCase().trim();let visible=0;document.querySelectorAll('.directory-project[data-project-name]').forEach(el=>{const ids=clientNeeds.find(n=>n[0]===clientNeed)?.[2];const match=(!ids||ids.includes(Number(el.dataset.projectId)))&&el.textContent.toLowerCase().includes(q);el.hidden=!match;if(match)visible++});document.querySelectorAll('.directory-track').forEach(track=>{const count=Array.from(track.querySelectorAll('.directory-project')).filter(el=>!el.hidden).length;track.hidden=count===0;const label=track.querySelector('.directory-track-count');if(label)label.textContent=count+(count===1?' application':' applications')});const status=document.getElementById('portfolio-search-status');if(status)status.textContent=(q||clientNeed!=='all')?visible+(visible===1?' matching application':' matching applications'):'21 applications · 6 business tracks';const empty=document.getElementById('portfolio-empty');if(empty)empty.hidden=visible!==0}
function showcaseJump(id){if(current>=0||portfolioView!=='projects'){nav(-1)}document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})}
function showcaseProjectCard(i,n){const p=CLIENT_PROJECTS[i],slug=toolsList[i][0].toLowerCase().replaceAll(' ','-');return `<article class="work-card ${n===0?'work-card-featured':''}"><div class="work-screen"><div class="work-browserbar"><div><i></i><i></i><i></i></div><span>${esc(p.name)}</span><small>SCROLL TO EXPLORE</small></div><div class="work-scroll" role="region" tabindex="0" aria-label="Scrollable ${esc(p.name)} recent project preview"><div><img src="screenshots/${slug}.jpg" width="1348" height="926" alt="${esc(p.name)} application screen" loading="${n===0?'eager':'lazy'}" draggable="false"></div></div></div><div class="work-card-copy"><span class="work-category">${['SALES & PROPOSALS','CUSTOMER SUPPORT','SALES INTELLIGENCE'][n]}</span><h3>${esc(p.name)}</h3><p>${esc(p.summary)}</p><div class="work-ai-note"><span>AI AT WORK</span><p>${esc(['Reads the RFP, asks for missing context, and drafts a structured response for your team to review.','Finds relevant guidance in past answers and product documents, then prepares a source-backed reply.','Connects sales trends and pipeline context to an executive briefing and questions worth investigating.'][n])}</p></div><button onclick="nav(${i})">Explore project ${icon('arrow')}</button></div></article>`}
const technologyLayers = [
  [
    "Develop the application",
    "At Nine-67, we use Claude Code or Codex to develop each application around the client’s workflow.",
    [
      ["Claude Code", "A coding assistant our team uses to build and refine application code."],
      ["Codex", "An alternative coding assistant our team uses to implement changes and test the application."]
    ],
    "Tech Support Agent", 18,
    "In the support workspace, the specialist can review a ticket, inspect a related case, and edit a suggested reply before sending it."
  ],
  [
    "Connect the source data",
    "Read approved documents and bring business records into the same workflow.",
    [
      [
        "SharePoint",
        "Read approved files with their owners, versions, and effective dates."
      ],
      [
        "Microsoft Graph",
        "Use scoped permissions to access selected Microsoft 365 resources."
      ],
      [
        "REST APIs & CSV imports",
        "Bring in system records by stable ID. Validate missing fields and keep track of the last successful import."
      ]
    ],
    "Lead Response",
    1,
    "Match webinar questions to the correct session and attendee before drafting a follow-up."
  ],
  [
    "Search company knowledge",
    "Find passages that support an answer and show where they came from.",
    [
      [
        "Azure AI Search",
        "Index documents and retrieve passages using keywords and semantic similarity."
      ],
      [
        "Postgres + pgvector",
        "An alternative for storing document metadata and searching embeddings alongside application records."
      ]
    ],
    "Knowledge Agent",
    19,
    "Retrieve approved launch criteria, link to the source, and flag questions that the available guidance cannot answer."
  ],
  [
    "Run the model task",
    "Select a model for the actual input, expected output, and cost per reviewed result.",
    [
      [
        "OpenAI API",
        "Extract fields or draft structured responses from supplied context."
      ],
      [
        "Claude API",
        "An alternative for comparing requirements, reviewing documents, and drafting text."
      ],
      [
        "Gemini API",
        "An option for workflows where the model must interpret images alongside written instructions."
      ]
    ],
    "Proposal Builder",
    0,
    "Compare a pilot RFP with approved material, draft response sections, and surface missing acceptance criteria."
  ],
  [
    "Coordinate the workflow",
    "Use application rules to control when a model runs and which steps need approval.",
    [
      [
        "Python",
        "Validate inputs, call the selected model, and check the structure of its response."
      ],
      [
        "LangGraph",
        "An option when a multi-step task needs branching, saved state, or a pause for review."
      ],
      [
        "TypeScript",
        "Implement typed application logic, validate records, and calculate figures that must be reproducible."
      ]
    ],
    "Operations Agent",
    20,
    "Check required fields, route the request, and give the authorized reviewer the decision about access."
  ],
  [
    "Build the team workspace",
    "Store decisions and put the result where someone can inspect, edit, and approve it.",
    [
      [
        "Supabase",
        "Store records, review status, and change history in Postgres."
      ],
      [
        "React",
        "Build an interactive queue, editor, or dashboard around the team\u2019s task."
      ],
      [
        "Microsoft Teams",
        "An optional handoff for review notifications linked to the relevant record."
      ]
    ],
    "Tech Support Agent",
    18,
    "Keep the ticket, supporting case, and draft reply in one workspace for the specialist to review."
  ],
  [
    "Test quality and trace failures",
    "Check a change against known examples before it reaches the team.",
    [
      [
        "Langfuse",
        "Trace model calls and compare prompt versions against a repeatable evaluation set."
      ],
      [
        "Human-scored test cases",
        "Have subject experts grade factual accuracy, source support, and escalation decisions."
      ]
    ],
    "Knowledge Agent",
    19,
    "Test both an answerable question and one the approved documents cannot support. Compare citations as well as the answer."
  ],
  [
    "Deploy and operate",
    "Choose the hosting environment, access controls, and operational owner for the client.",
    [
      [
        "Vercel",
        "An option for deploying the web interface and server-side routes."
      ],
      [
        "Azure",
        "An alternative when the application must run inside the client\u2019s cloud environment."
      ],
      [
        "Microsoft Entra ID",
        "Support organization sign-in and map approved roles to application permissions."
      ]
    ],
    "Client Health",
    13,
    "Limit account views to permitted users and track who reviewed a renewal concern."
  ]
];
function selectTechnologyLayer(index) {
  const section = document.getElementById('portfolio-ux-technology');
  section.querySelectorAll('[data-tech-choice]').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
  section.querySelectorAll('[data-tech-panel]').forEach((panel,i)=>panel.hidden=i!==index);
  section.querySelector('select').value=String(index);
}
function showcaseTechnology() {
  const options=technologyLayers.map(([title],i)=>`<option value="${i}">${esc(title)}</option>`).join('');
  const choices=technologyLayers.map(([title,,tools],i)=>`<button data-tech-choice aria-pressed="${i===0}" aria-controls="tech-panel-${i}" onclick="selectTechnologyLayer(${i})"><span>${esc(title)}</span><span class="tech-index-logos" aria-hidden="true">${[...new Set(tools.map(([name])=>technologyLogo(name)).filter(Boolean))].slice(0,2).join('')}</span></button>`).join('');
  const panels=technologyLayers.map(([title,purpose,tools,example,id,scenario],i)=>`
    <article class="tech-detail" data-tech-panel id="tech-panel-${i}" ${i?'hidden':''}>
      <h3>${esc(title)}</h3><p>${esc(purpose)}</p>
      <dl>${tools.map(([name,role])=>`<div><dt>${technologyBrand(name)}</dt><dd>${esc(role)}</dd></div>`).join('')}</dl>
      <div class="tech-case"><b>Project example</b><p>${esc(scenario)}</p><button onclick="nav(${id}); applicationSetView('overview')">See how ${esc(example)} works ↗</button></div>
    </article>`).join('');
  return `<section id="portfolio-ux-technology" class="portfolio-ux-section portfolio-ux-tech">
    <div class="portfolio-ux-section-heading"><div><span>NINE-67 / TECHNOLOGY</span><h2>Technology we use</h2></div><p>Choose a part of the build to see the tools, what each one does, and a project that illustrates the approach.</p></div>
    <div class="tech-explorer"><nav class="tech-index" aria-label="Technology categories">${choices}</nav>
      <label class="tech-select">Explore a category<select onchange="selectTechnologyLayer(Number(this.value))">${options}</select></label>
      <div class="tech-panels">${panels}</div></div>
    <p class="tech-footnote">We select runtime models and integrations for each project. Portfolio demos use sample records and simulated AI.</p></section>`;
}
function showcaseProcess(){return `<section id="portfolio-ux-process" class="portfolio-ux-section portfolio-ux-process"><div class="portfolio-ux-section-heading"><div><span>OUR PROCESS</span><h2>Built with your team.<br>From first workflow to daily use.</h2></div><p>We lead the design and engineering. Your team brings the business context, reviews the work, and helps shape something useful.</p></div><div class="portfolio-ux-process-grid">${[['01','Understand & design','Start with one workflow. Map the task, information, handoffs, and outcome before choosing the solution.','Business owner + people doing the work','A focused scope, prototype, and agreed success measures.'],['02','Connect & build','Bring in approved information and develop a working application through short reviews with your team.','System owners + representative users','A working application with clear AI responsibilities and review points.'],['03','Test, launch & improve','Test realistic cases, launch with a small group, and refine the experience through feedback and actual use.','Workflow owner + users + subject experts','An agreed handoff, adoption plan, and measures for ongoing review.']].map(([n,h,b,team,out])=>`<article><span>${n}</span><h3>${h}</h3><p>${b}</p><dl><div><dt>YOUR TEAM</dt><dd>${team}</dd></div><div><dt>WHAT COMES OUT</dt><dd>${out}</dd></div></dl></article>`).join('')}</div><div class="portfolio-ux-process-footer"><p>We agree who needs to participate, their responsibilities, and the review cadence before the build.</p><button onclick="openProcessPage('workingTogether')">Full process & team roles ${icon('arrow')}</button></div></section>`}
function activeIndustry(){
  const name=new URLSearchParams(location.search).get('industry');
  return Object.hasOwn(industryExamples,name)?name:'';
}
function setIndustry(name){
  const url=new URL(location.href);
  if(name)url.searchParams.set('industry',name);else url.searchParams.delete('industry');
  history.replaceState(history.state,'',url);
  const search=document.querySelector('.portfolio-search input').value;
  render();
  const input=document.querySelector('.portfolio-search input');
  input.value=search;portfolioSearch(search);
  document.getElementById('industry-choice').focus({preventScroll:true});
}
function industryControl(){
  return `<div class="industry-control"><label for="industry-choice">See projects for your industry</label><select id="industry-choice" onchange="setIndustry(this.value)"><option value="">All industries</option>${Object.keys(industryExamples).map(name=>`<option value="${esc(name)}" ${name===activeIndustry()?'selected':''}>${esc(name)}</option>`).join('')}</select>${activeIndustry()?'<span>Every project uses this industry. Featured cases appear first in their columns.</span>':''}</div>`;
}
function projectDirectory(){const industry=activeIndustry();const featured=industryExamples[industry]||{};clientNeed='all';return `<div class="project-directory portfolio-ux-home"><section class="catalog-intro${activeIndustry()?' sector-home':''}" ${activeIndustry()?`style="--sector-image:url(industry-media/${sectorImages[activeIndustry()]}.webp)"`:''} aria-labelledby="catalog-title">
  <span class="studio-kicker">${esc(activeIndustry()||'AI APPLICATION PORTFOLIO')}</span>
  <h1 id="catalog-title">Inside Our Recent AI Projects</h1>
  <p>Browse 21 working examples across six business functions. Open any project to see the application, the data it needs, and what the AI does.</p>
  <nav class="portfolio-ux-section-nav" aria-label="More about Nine-67"><a href="#portfolio-ux-projects" onclick="event.preventDefault();showcaseJump('portfolio-ux-projects')">Recent projects</a><a href="#portfolio-ux-technology" onclick="event.preventDefault();showcaseJump('portfolio-ux-technology')">Technology we use</a><a href="#portfolio-ux-process" onclick="event.preventDefault();showcaseJump('portfolio-ux-process')">Our process</a></nav>
</section><section id="portfolio-ux-projects" class="portfolio-ux-section portfolio-ux-work project-columns-section"><div id="project-gallery"><div class="project-columns-toolbar"><div class="studio-directory-title"><span class="studio-kicker">PROJECT DIRECTORY</span><h2>Explore by business function</h2></div><div class="portfolio-gallery-tools"><label class="portfolio-search">${icon('search')}<input aria-label="Search projects" placeholder="Find a project…" oninput="portfolioSearch(this.value)"></label><span id="portfolio-search-status">21 projects · 6 business tracks</span></div></div>${industryControl()}<div class="directory-grid" aria-label="Nine-67 projects by track">${applicationTracks.map(([name,ids],n)=>`<article class="directory-track"><header class="directory-track-heading"><h2>${name}</h2><p>${trackOutcomes[n]}</p></header><div class="directory-projects">${[...ids].sort((a,b)=>Number(!!featured[b])-Number(!!featured[a])).map(i=>`<button class="directory-project" data-project-id="${i}" data-project-name="${esc(toolsList[i][0].toLowerCase())}" onclick="nav(${i})"><span><strong>${esc(toolsList[i][0])}</strong>${industry?`<small class="industry-question">${esc(sectorCase(industry,i).example[0])}</small>`: ''}</span>${icon('arrow')}</button>`).join('')}</div><div class="directory-track-count">${ids.length} applications</div></article>`).join('')}</div><div id="portfolio-empty" hidden>No projects match that search. Try a different project name.</div></div></section>${showcaseTechnology()}${showcaseProcess()}<section class="portfolio-ux-close"><div><span>START WITH ONE WORKFLOW</span><h2>Where does the work get stuck?</h2><p>Bring us a recurring task, a difficult handoff, or information your team keeps searching for. We can explore what a practical first application could look like.</p></div><a href="https://www.nine-67.com/" target="_blank" rel="noopener">Talk with Nine-67 ${icon('arrow')}</a></section><p class="portfolio-ux-section-note portfolio-ux-demo-note">Project previews use representative screens, fictional records, and simulated AI. They illustrate the application experience; production scope and connections are agreed with each client.</p></div>`}

function openProcessPage(id){portfolioView='process';current=-1;tab=0;location.hash='our-process';render();window.scrollTo(0,0);if(id)document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})}
processJump=function(id){if(current>=0||portfolioView!=='process'){openProcessPage(id);return}document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})};
studioHome=function(){return portfolioView==='process'?nine67ProcessHome():projectDirectory()};
const directoryNav=nav;
nav=function(n){if(n<0)portfolioView='projects';directoryNav(n)};
showcaseSidebar=function(){$('#sidebar').innerHTML='';$('#sidebar').hidden=true;$('#sidebar').setAttribute('aria-hidden','true')};
const directoryRender=render;
render=function(){directoryRender();$('#crumb').innerHTML=`<a class="directory-brand" href="https://nine-67.com/" aria-label="Visit Nine-67" style="text-decoration:none;color:inherit"><img src="nine67-logo.png" alt="Nine-67"><span>AI Applications<small>BY NINE-67</small></span></a>${current>=0?'<span class="directory-breadcrumb">'+esc(toolsList[current][0])+'</span>':''}`;$('.headerRight').innerHTML=`<nav class="brand-header-nav" aria-label="Showcase navigation"><button onclick="showcaseJump('portfolio-ux-projects')">Recent projects</button><button onclick="showcaseJump('portfolio-ux-technology')">Technology</button><button onclick="showcaseJump('portfolio-ux-process')">Our process</button></nav>`;const footer=document.querySelector('.shell>footer');if(footer)footer.innerHTML=`<a class="portfolio-footer-brand" href="https://nine-67.com/" aria-label="Visit Nine-67" style="text-decoration:none;color:inherit"><img src="nine67-logo.png" alt="Nine-67"><span>AI Applications<small>A PORTFOLIO BY NINE-67</small></span></a><div class="portfolio-footer-links"><button onclick="nav(-1)">Recent projects</button><button onclick="showcaseJump('portfolio-ux-technology')">Technology</button><button onclick="showcaseJump('portfolio-ux-process')">Our process</button><a href="https://www.nine-67.com/" target="_blank" rel="noopener">Nine-67.com ${icon('arrow')}</a></div><span class="portfolio-footer-note">Sample data · Simulated AI</span>`};
if(location.hash==='#our-process')portfolioView='process';
render();
