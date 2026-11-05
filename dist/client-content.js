const CLIENT_PROJECTS=[{"name": "Proposal Builder", "summary": "Turn an RFP into a proposal through conversation.", "inputs": "RFP documents, approved past proposals, requirements, and answers from your team.", "does": "Extract requirements, ask clarifying questions, organize a response, and draft sections grounded in the supplied material.", "output": "An editable proposal and a requirements checklist. Your team checks claims, pricing, and commitments before sending.", "problem": "RFP responses require repeated drafting and requirement checks.", "scenario": "Respond to an operations RFP", "steps": ["Inspect the RFP requirements", "Open and edit the first draft", "Review approved source context"], "actions": ["proposalRequirements()", "proposalStudio()", "openSource()"], "team": "Sales owner, proposal writer, and an approver", "systems": "RFP intake, content library, and document storage", "measure": "Draft preparation time and requirement coverage", "workflow": {"inputs": [["The opportunity", "RFP files, submission requirements, deadlines, evaluation criteria, and any requested response format."], ["Your approved knowledge", "Relevant experience, service descriptions, delivery methods, and reusable proposal material."], ["The deal context", "Scope, investment assumptions, delivery constraints, and answers supplied through the conversation."]], "ai": [["Map the response", "Pull out requirements, organize the response structure, and highlight questions the source material does not answer."], ["Work through the gaps", "Ask about missing owners, acceptance criteria, dependencies, or assumptions before treating them as settled."], ["Develop the proposal", "Draft and refine the narrative, scope, delivery approach, and handoff using the supplied business context."]], "outputs": [["An editable proposal", "A structured working document your team can refine section by section."], ["A requirement review", "A clear view of what the response covers and which items still need attention."], ["A submission checklist", "Open assumptions and commitments to confirm before an approver releases the proposal."]], "example": ["A 90-day pilot RFP arrives.", "AI organizes the response and asks who owns source access.", "The team names the owner, refines the draft, and approves the commitments."], "review": "Your proposal owner checks factual claims, commercial terms, scope, and delivery commitments.", "technology": [[["SharePoint", "RFPs & approved proposal material"], ["Supabase", "Opportunity context & working records"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Proposal review interface"], ["Microsoft Teams", "Team review & follow-up"]]], "connection": ["The user adds the RFP and relevant company material to the opportunity workspace.", "The application sends the selected requirements and conversation context to the chosen AI model for a draft.", "The response returns to the proposal workspace for editing; draft versions and review state can be stored."]}}, {"name": "Lead Response", "summary": "Turn webinar content into relevant follow-up.", "inputs": "Webinar recordings or transcripts, approved content, and attendee engagement data.", "does": "Identify key themes, adapt the message to attendee interests, and draft an initial email plus three follow-up cadences.", "output": "Audience-specific email drafts and a reviewable cadence. Marketing approves content and recipients before outreach.", "problem": "Webinar follow-up takes too long and sounds the same for every attendee.", "scenario": "Prepare webinar follow-up", "steps": ["Review the webinar brief", "Compare the first follow-up", "Shorten the email draft"], "actions": ["campaignBrief()", "selectCadence(1)", "shortenReply()"], "team": "Marketing campaign owner and a content approver", "systems": "Webinar platform, approved content, and CRM or email workflow", "measure": "Draft preparation time and approved-message relevance", "workflow": {"inputs": [["The webinar content", "A recording or transcript, session themes, speaker points, and approved supporting resources."], ["Attendee-level context", "Available attendance, viewing behavior, submitted questions, and known account or audience segments."], ["The campaign rules", "Brand voice, the intended next step, email constraints, and approved links or offers."]], "ai": [["Find the relevant moment", "Identify topics and examples from the session that give the follow-up a meaningful reason to exist."], ["Write for the attendee", "Use available engagement and role context to choose an angle without inventing interests or questions."], ["Build the sequence", "Draft the first email and three distinct follow-ups, each adding a useful reason to continue the conversation."]], "outputs": [["A relevant first email", "An editable message tied to the webinar and the attendee context actually available."], ["Three follow-up drafts", "A reviewable cadence with different content, timing intentions, and calls to action."], ["A campaign review queue", "Audience and content together, so marketing can check accuracy before using its sending workflow."]], "example": ["An attendee asks about connecting existing systems.", "AI uses the transcript and approved brief to draft a relevant follow-up.", "Marketing edits the first email and reviews the three follow-up messages."], "review": "Marketing confirms transcript accuracy, audience suitability, recipients, and the approved sending process.", "technology": [[["SharePoint", "Webinar transcript & approved content"], ["Azure", "Connection to approved attendee data"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Email & cadence review workspace"], ["Supabase", "Audience segments & draft records"]]], "connection": ["An approved connection brings transcript content and available attendee signals into the campaign workspace.", "The application combines the relevant webinar passages, attendee context, and brand instructions for the chosen model.", "Draft emails and follow-ups return to the campaign view for editing and approval before any sending integration."]}}, {"name": "Lead Triage", "summary": "Prioritize leads with evidence behind the ranking.", "inputs": "Lead records, company profiles, engagement history, and your qualification criteria.", "does": "Correlate signals, summarize fit and intent, explain prioritization, and suggest the next useful conversation.", "output": "A prioritized queue with reasons and recommended actions. Sales confirms qualification and owns the next step.", "problem": "Sales teams have leads but lack consistent reasons for prioritizing them.", "scenario": "Review a high-priority lead", "steps": ["Inspect the top lead", "Ask about the prioritization", "Review routing rules"], "actions": ["openRecord(0)", "openAI()", "changeView(2)"], "team": "Sales lead, qualification specialist, and CRM owner", "systems": "CRM records and permitted enrichment sources", "measure": "Qualification effort and consistency of routing", "workflow": {"inputs": [["Account and contact records", "Lead details, company information, ownership, and relevant relationship history."], ["Your qualification criteria", "The business profile, needs, exclusions, and routing rules that define a useful opportunity."], ["Engagement signals", "Available inquiries, campaign activity, meetings, and other evidence of a current need."]], "ai": [["Connect the signals", "Bring account fit, stated needs, and engagement together into one qualification view."], ["Explain the priority", "Describe why a lead should be reviewed sooner, and separate evidence from missing or uncertain context."], ["Prepare the handoff", "Summarize the opportunity, flag qualification gaps, and suggest an owner or next conversation."]], "outputs": [["A prioritized lead queue", "An ordered review list with a reason behind each recommendation."], ["A concise account brief", "The available business need, supporting signals, and context a salesperson should verify."], ["A practical next step", "Suggested research, qualification questions, or routing for a salesperson to confirm."]], "example": ["A high-fit account repeatedly engages with integration content.", "AI explains the fit and intent signals and flags the missing decision-maker.", "Sales verifies the contact, qualifies the need, and accepts the handoff."], "review": "Sales validates identity, qualification, ownership, and routing; a priority score is not a conversion probability.", "technology": [[["Azure", "Approved CRM & engagement connections"], ["Supabase", "Lead records & qualification criteria"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Lead priority & evidence view"], ["Microsoft Teams", "Qualification handoffs"]]], "connection": ["Approved lead and engagement information is mapped to the client’s qualification fields.", "The chosen model receives the relevant account signals and criteria to summarize fit, gaps, and suggested next steps.", "The workspace presents the reasoning beside the lead; an owner confirms qualification and the appropriate handoff."]}}, {"name": "Simulation Analysis", "summary": "Test messages with simulated personas.", "inputs": "Message variants, audience definitions, positioning, and the question you want to test.", "does": "Simulate persona reactions, surface objections, compare variants, and explain which themes resonate within the synthetic group.", "output": "Directional feedback and revision ideas. The team validates findings with real people; simulated responses are not market research evidence.", "problem": "Teams need early feedback before committing to a message or concept.", "scenario": "Compare a positioning message", "steps": ["Run the persona simulation", "Inspect finance feedback", "Compare another variant"], "actions": ["runSimulation()", "personaFeedback(2)", "setVariant(1)"], "team": "Marketing owner, subject expert, and real audience reviewers", "systems": "Research briefs and approved audience definitions", "measure": "Useful objections surfaced and changes validated with real people", "workflow": {"inputs": [["The thing you want to test", "A message, concept, email, or positioning statement, with clearly defined variants."], ["A synthetic audience brief", "Persona roles, priorities, likely constraints, and the assumptions behind their simulated viewpoints."], ["The evaluation question", "What you want to learn: clarity, relevance, objections, credibility, or a likely next question."]], "ai": [["Simulate different perspectives", "Generate directional reactions from the defined personas using their stated evaluation lenses."], ["Surface friction", "Identify confusing language, missing proof, tradeoffs, and objections a team should investigate."], ["Compare and refine", "Contrast the variants and suggest changes with a reason for each recommendation."]], "outputs": [["Persona-by-persona feedback", "A structured view of simulated responses rather than one generalized verdict."], ["Specific revision ideas", "Language or proof points to adjust before testing the concept with real people."], ["Questions for real validation", "A starting plan for interviews or research to confirm whether the simulated concerns hold up."]], "example": ["The team compares two pilot-offer messages.", "Synthetic operations, IT, and finance personas surface different objections.", "The team revises the message and tests those questions with real stakeholders."], "review": "Simulated reactions are hypotheses, not survey results, customer evidence, or proof of market demand.", "technology": [[["SharePoint", "Concepts, messages & research briefs"], ["Supabase", "Persona definitions & experiment inputs"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Variant & persona comparison view"], ["Supabase", "Experiment and feedback records"]]], "connection": ["The team selects a message variant, a synthetic audience definition, and the evaluation question.", "The application supplies that bounded scenario to the chosen model to generate directional persona feedback.", "Responses return as variant and persona comparisons for the team to refine and validate with real stakeholders."]}}, {"name": "Budget Builder", "summary": "Build and challenge a budget with an AI partner.", "inputs": "Department plans, historical spending, line items, constraints, and assumptions.", "does": "Translate a conversation into budget categories, flag missing costs, explain variances, and suggest scenarios.", "output": "An editable departmental plan with explicit assumptions. Finance reviews inputs and approves the budget; calculations remain visible.", "problem": "Department budgets are assembled manually with unclear assumptions.", "scenario": "Review a departmental plan", "steps": ["Ask AI about budget risks", "Inspect planning assumptions", "Submit the sample plan for review"], "actions": ["openAI()", "changeView(2)", "approveBudget()"], "team": "Department owner, finance partner, and budget approver", "systems": "Finance exports, planning documents, and department inputs", "measure": "Budget preparation effort and completeness of assumptions", "workflow": {"inputs": [["The financial baseline", "Historical spending, current commitments, categories, and relevant departmental actuals."], ["Department plans", "Staffing needs, initiatives, renewals, proposed purchases, and the reasons behind each request."], ["Planning boundaries", "Budget ceilings, dates, cost assumptions, priorities, and the approvers involved."]], "ai": [["Structure the plan", "Help translate a budget conversation into organized categories, line items, and explicit assumptions."], ["Challenge what is missing", "Flag overlooked recurring costs, dependencies, unclear estimates, or unsupported changes."], ["Explain the choices", "Discuss the impact of changed assumptions and summarize the tradeoffs between spending options."]], "outputs": [["An editable department budget", "A working plan with line items the department owner and finance team can inspect."], ["Visible assumptions and variances", "The reasoning behind the plan alongside transparent totals and baseline comparisons."], ["A review-ready discussion", "Open questions and decisions for finance and departmental sign-off."]], "example": ["A department proposes a new software investment.", "AI asks about renewal costs and implementation effort before adding the request.", "The owner updates the line items and finance reviews the revised plan."], "review": "Finance validates amounts, classification, formulas, and affordability; the application calculates from the entered inputs.", "technology": [[["SharePoint", "Department plans & spending exports"], ["Supabase", "Line items & planning assumptions"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Editable budget & comparison interface"], ["Microsoft Teams", "Department and finance review"]]], "connection": ["Spending information and department requests are organized into editable budget categories and assumptions.", "The chosen model discusses gaps and tradeoffs; application calculations update totals from the entered amounts.", "The revised plan, assumptions, and commentary return to the workspace for department and finance review."]}}, {"name": "Sales Dashboard", "summary": "Ask what changed in sales, and why.", "inputs": "Historical sales, current opportunities, pipeline stages, and forecast assumptions.", "does": "Summarize trends, highlight unusual movements, explain pipeline changes, and draft an executive briefing tied to the data.", "output": "A decision-ready sales narrative and areas to investigate. Leaders review the evidence and distinguish forecasts from actuals.", "problem": "Leaders spend time assembling reports before they can discuss sales performance.", "scenario": "Understand the sales outlook", "steps": ["Inspect the revenue period", "Ask for the pipeline risks", "Review underlying opportunities"], "actions": ["salesPeriod()", "openAI()", "changeView(1)"], "team": "Sales leadership, revenue operations, and a data owner", "systems": "CRM and approved sales reporting data", "measure": "Time to prepare the executive review and data completeness", "workflow": {"inputs": [["Historical performance", "Closed revenue, prior periods, targets, and agreed definitions of sales performance."], ["The current pipeline", "Opportunity stages, values, owners, close dates, and the evidence behind the next milestone."], ["Forecast context", "Stage weights, working assumptions, business changes, and the questions leadership needs answered."]], "ai": [["Explain what changed", "Summarize movements in performance and connect them to the data shown in the dashboard."], ["Surface concentration and uncertainty", "Highlight important pipeline dependencies, stalled opportunities, and assumptions worth checking."], ["Prepare the leadership narrative", "Turn the view into a concise briefing with focused questions for the sales review."]], "outputs": [["An executive sales view", "Performance, pipeline, and forecast information presented in one place."], ["An explainable briefing", "A narrative leaders can compare with the underlying opportunities and reporting definitions."], ["A targeted follow-up list", "Accounts, close dates, or missing evidence for the team to investigate."]], "example": ["A large share of the forecast sits in two late-stage deals.", "AI highlights the concentration and asks about close-date evidence.", "Leadership reviews those opportunities before treating the forecast as committed."], "review": "Revenue operations checks definitions and data quality; leadership distinguishes actual results, weighted forecasts, and commitments.", "technology": [[["Azure", "Approved sales-data connections"], ["Supabase", "Sales snapshots & opportunity records"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Executive dashboard & briefing"], ["Microsoft Teams", "Sales review discussion"]]], "connection": ["An approved sales connection supplies reporting snapshots and the opportunity details behind the dashboard.", "The model receives selected metrics, definitions, and pipeline evidence to prepare an explanation of the view.", "The briefing appears beside the charts and opportunities, giving leadership a path back to the underlying context."]}}, {"name": "Resource Allocation Platform", "summary": "Match capacity and skills to the work ahead.", "inputs": "Team availability, skills, task estimates, deadlines, and assignment constraints.", "does": "Surface overloads, identify skill gaps, and suggest assignment changes with tradeoffs across people and deadlines.", "output": "A proposed allocation plan. Managers check availability and approve changes before work is reassigned.", "problem": "Assignments can overload people or miss the skills a project needs.", "scenario": "Review an overloaded team member", "steps": ["Inspect an assignment", "Review the AI rebalance proposal", "Check capacity rules"], "actions": ["allocationDetail(2,0)", "rebalance()", "changeView(2)"], "team": "Delivery manager, team leads, and availability owners", "systems": "Project tasks, skills records, and availability calendars", "measure": "Over-allocation, assignment effort, and delivery predictability", "workflow": {"inputs": [["The work ahead", "Project tasks, estimates, due dates, dependencies, and delivery priorities."], ["The people available", "Team capacity, assignments, planned leave, and time reserved for meetings or support."], ["Assignment constraints", "Required skills, responsibilities, continuity needs, and rules for manager approval."]], "ai": [["Spot capacity conflicts", "Compare planned work with availability and identify overloads or uncovered assignments."], ["Propose alternatives", "Suggest bounded assignment changes using the skills and availability information supplied."], ["Explain the tradeoff", "Show which conflict an option addresses and what a manager still needs to verify."]], "outputs": [["A proposed allocation plan", "An understandable view of how work could be distributed across the team."], ["A list of capacity concerns", "Overloads, dependencies, or skill gaps that need attention before adding more work."], ["Manager-ready decisions", "Specific reassignment questions and proposals for the accountable owners to review."]], "example": ["One team member has 44 planned hours against a 40-hour week.", "AI suggests reviewing a bounded task for someone with more capacity.", "The manager checks skills and availability before changing the assignment."], "review": "Managers confirm actual availability, skills, priorities, and the impact of any reassignment.", "technology": [[["Azure", "Availability & task-system connections"], ["Supabase", "Skills, capacity & assignment records"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Team planner & conflict review"], ["Microsoft Teams", "Manager coordination"]]], "connection": ["Task estimates, team capacity, and known constraints are assembled in the planner.", "The application supplies the relevant conflicts and skill context to the chosen model to suggest assignment options.", "The proposal returns beside the current plan; managers verify the people and priorities before changing assignments."]}}, {"name": "Collaboration Workspace", "summary": "Keep a project team aligned across its workspace.", "inputs": "Approved Teams discussions, SharePoint documents, project tasks, decisions, and role permissions.", "does": "Summarize activity, surface unresolved questions, draft action lists, and answer questions using the material a user is allowed to access.", "output": "A shared project brief and proposed next steps. Owners verify decisions, assign work, and control client and contractor access.", "problem": "Project decisions and files are scattered across conversations and systems.", "scenario": "Catch up on a project", "steps": ["Ask for a project summary", "Inspect files and decisions", "Write a sample project update"], "actions": ["openAI()", "changeView(2)", "changeView(0);composePost()"], "team": "Project owner, internal users, and client or contractor representatives", "systems": "Teams, SharePoint, and role-based project access", "measure": "Time to find decisions and resolve outstanding dependencies", "workflow": {"inputs": [["Project conversations", "Relevant updates, questions, and decisions from the collaboration workflow."], ["Approved project material", "Briefs, plans, deliverables, and reference files such as those held in SharePoint."], ["People and access", "Internal, client, and contractor roles, with the information each participant is allowed to use."]], "ai": [["Create a shared picture", "Summarize progress, recent decisions, and outstanding issues from approved project context."], ["Connect questions to information", "Help people find the relevant file or decision rather than search disconnected conversations."], ["Prepare the next actions", "Draft follow-ups and identify unresolved dependencies for the project owner to confirm."]], "outputs": [["A current project brief", "A concise catch-up on the work, decisions, and issues that matter now."], ["A reviewable action list", "Proposed next steps with context for the people responsible for the work."], ["A shared collaboration hub", "A consistent place for project information, conversation, and role-appropriate access."]], "example": ["A client asks what is blocking the next milestone.", "AI connects the status update to the outstanding source-access decision.", "The owner confirms the blocker and coordinates the right people."], "review": "Project owners verify decisions and task ownership; production permissions must follow the approved source and workspace roles.", "technology": [[["Microsoft Teams", "Project conversations & updates"], ["SharePoint", "Approved project files & decisions"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Shared project workspace"], ["Supabase", "Tasks, decisions & role-aware records"]]], "connection": ["The agreed project context is brought together from conversations, documents, and workspace records.", "The application prepares the material permitted for the user and asks the chosen model for a summary or answer.", "The result appears in the shared hub, where project owners verify decisions and turn agreed next steps into work."]}}, {"name": "Client Data Hub", "summary": "Bring a client’s sales, delivery, and finance records together in one workspace.", "inputs": "Approved reports, dashboards, source documents, and reporting definitions.", "does": "Find relevant reports, connect themes, summarize results, and explain an answer with links back to its sources.", "output": "An answer with supporting context and a consolidated view. Analysts check source dates, definitions, and conflicting evidence.", "problem": "Reports live in different places and users struggle to connect the findings.", "scenario": "Explore a report and its context", "steps": ["Switch to another report", "Ask about the findings", "Inspect source context"], "actions": ["selectReport(1)", "openAI()", "openSource()"], "team": "Reporting owner, analysts, and source-system owners", "systems": "Approved report libraries and analytical data sources", "measure": "Report discovery time and source traceability", "workflow": {"inputs": [["The report collection", "Approved reports, dashboards, supporting documents, and the reporting periods they cover."], ["The reporting definitions", "Metric meanings, assumptions, source ownership, and any limitations of the underlying information."], ["The business question", "What the user is trying to understand, which periods matter, and what comparison is useful."]], "ai": [["Find the relevant evidence", "Locate reports and source context that relate to the question."], ["Connect the findings", "Summarize themes, compare compatible information, and flag contradictions or missing context."], ["Keep the answer grounded", "Point back to the supporting material and make limitations visible instead of filling gaps with certainty."]], "outputs": [["A consolidated reporting workspace", "A visual place to explore the report collection and relevant findings."], ["A cross-report explanation", "An answer that connects the material without hiding the source or reporting context."], ["A source review path", "The reports, definitions, and open questions an analyst should check next."]], "example": ["A leader asks why two reports suggest different trends.", "AI identifies the periods and metric definitions behind each view.", "An analyst checks comparability before drawing a business conclusion."], "review": "Analysts verify dates, definitions, source quality, and whether the reports can be meaningfully compared.", "technology": [[["SharePoint", "Approved report library"], ["Azure", "Connections to reporting sources"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Report exploration & insight view"], ["Supabase", "Report index & saved analysis context"]]], "connection": ["Reports are organized with their dates, definitions, and source references for retrieval.", "The application retrieves relevant material and sends that context with the user’s question to the chosen model.", "The explanation returns alongside the report context so an analyst can inspect sources and compare definitions."]}}, {"name": "Forecast Builder", "summary": "Explore the assumptions behind the forecast.", "inputs": "Historical results, current trends, planned changes, and editable growth assumptions.", "does": "Explain drivers, propose alternative assumptions, and compare scenario narratives alongside transparent model calculations.", "output": "A forecast with a baseline, scenarios, and documented assumptions. Executives choose the scenario and approve planning decisions.", "problem": "Forecast discussions hide the assumptions behind a headline number.", "scenario": "Compare a growth scenario", "steps": ["Compare baseline and scenario", "Ask about forecast risks", "Review assumptions"], "actions": ["forecastCompare()", "openAI()", "changeView(2)"], "team": "Executive sponsor, finance lead, and business planning owners", "systems": "Historical results and agreed planning inputs", "measure": "Scenario review effort and visibility of forecast assumptions", "workflow": {"inputs": [["A trusted baseline", "Historical results and the starting values for the forecast model."], ["The business drivers", "Growth expectations, capacity constraints, timing, and planned operational changes."], ["Scenario assumptions", "Editable inputs and the evidence or reasoning behind the planning alternatives."]], "ai": [["Make the drivers understandable", "Explain which assumptions influence the outlook and where evidence is weak."], ["Help explore alternatives", "Suggest questions and assumption changes for downside, working, and upside discussions."], ["Explain the difference", "Compare scenario narratives alongside the transparent model calculations."]], "outputs": [["A baseline-to-scenario comparison", "A visible view of what changed when a planning input changed."], ["Documented planning assumptions", "A record of the drivers that support the working outlook."], ["An executive forecast discussion", "A concise explanation of the outlook, risks, and decisions that need review."]], "example": ["An executive changes the growth assumption for next year.", "The model recalculates and AI explains what the new outlook assumes.", "Finance challenges the evidence before adopting the scenario."], "review": "Finance verifies the model and inputs; AI explains scenarios rather than establishing certainty about future results.", "technology": [[["SharePoint", "Planning inputs & baseline evidence"], ["Supabase", "Scenario drivers & versions"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Baseline & scenario comparison"], ["Microsoft Teams", "Executive planning review"]]], "connection": ["The application loads an agreed baseline and the working scenario assumptions.", "Model calculations produce the forecast values; the selected AI explains the drivers, differences, and open questions.", "The comparison and narrative appear together for finance and leadership to review before adopting a scenario."]}}, {"name": "ROI Calculator", "summary": "Pressure-test the value before you build.", "inputs": "Workflow volumes, time per task, labor rates, adoption assumptions, build costs, and ongoing costs.", "does": "Help identify missing costs, challenge benefit assumptions, and explain sensitivity to adoption and time savings.", "output": "An ROI and payback model with reviewable assumptions. Sponsors validate the inputs; modeled value is not a guaranteed return.", "problem": "Teams need to test whether an AI investment has a defensible business case.", "scenario": "Pressure-test an investment", "steps": ["Inspect the calculation method", "Ask about benefit assumptions", "Review supporting references"], "actions": ["roiMethod()", "openAI()", "changeView(2)"], "team": "Business sponsor, finance partner, and workflow owner", "systems": "Task baselines, loaded labor rates, and implementation estimates", "measure": "Modeled payback sensitivity and verified baseline quality", "workflow": {"inputs": [["The current workflow", "Task volume, weekly effort, loaded labor rates, and a defensible baseline for the work."], ["The full investment", "Build estimates, ongoing operating costs, and other costs included in the business case."], ["Benefit assumptions", "Effort reduction, adoption, and benefit realization assumptions that the sponsor can justify."]], "ai": [["Expose weak assumptions", "Help identify missing costs, optimistic adoption, or benefits that do not follow from the baseline."], ["Explain sensitivity", "Describe why changing reduction, adoption, or realized benefit changes the investment case."], ["Prepare the decision", "Summarize the modeled opportunity and the evidence the sponsor still needs."]], "outputs": [["A transparent ROI model", "Capacity, value, net annual benefit, first-year ROI, and payback calculated from visible inputs."], ["A sensitivity discussion", "A practical view of which assumptions make or break the case."], ["An investment review brief", "A reasoned summary for deciding whether to investigate, pilot, or change the proposed scope."]], "example": ["A workflow takes 40 hours a week, but expected adoption is uncertain.", "AI prompts the sponsor to test a lower adoption assumption.", "The sponsor compares the recalculated payback before funding a pilot."], "review": "Finance and the sponsor validate inputs; modeled capacity is not automatically cash savings or a guaranteed return.", "technology": [[["SharePoint", "Cost estimates & baseline evidence"], ["Supabase", "Investment & benefit assumptions"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "ROI & payback model"], ["Microsoft Teams", "Sponsor & finance review"]]], "connection": ["The sponsor enters workflow effort, costs, adoption, and benefit-realization assumptions.", "The calculator computes ROI and payback; the chosen AI challenges assumptions and explains sensitivity.", "Calculated results and commentary appear together, helping the sponsor inspect the case before funding a build."]}}, {"name": "Project Tracker", "summary": "Turn project updates into a clear delivery picture.", "inputs": "Milestones, tasks, owners, status updates, dependencies, and project notes.", "does": "Summarize progress, identify blockers, draft status reports, and suggest follow-up actions from the recorded work.", "output": "A client-ready update and an action queue. Project owners confirm status and approve any changes to scope or commitments.", "problem": "Clients need a reliable view of progress, milestones, and open decisions.", "scenario": "Review project delivery", "steps": ["Ask for a project briefing", "Inspect project records", "Create a sample task"], "actions": ["openAI()", "changeView(1)", "changeView(0);newTask()"], "team": "Client sponsor, project manager, and delivery owners", "systems": "Project plans, task systems, and approved status updates", "measure": "Status-reporting effort and timeliness of blocker resolution", "workflow": {"inputs": [["The project portfolio", "Client initiatives, owners, milestones, task progress, and the status of each workstream."], ["The delivery context", "Dependencies, blockers, review dates, and decisions waiting on a person or team."], ["The latest updates", "Project notes and progress information that the delivery team has confirmed."]], "ai": [["Create a clear status picture", "Turn task and milestone context into a concise portfolio or project update."], ["Surface what needs attention", "Highlight unresolved dependencies, overdue decisions, and risks that merit an owner review."], ["Prepare the next conversation", "Draft the questions and follow-ups that help the client and delivery team stay aligned."]], "outputs": [["A client-facing portfolio view", "A single place to inspect progress, owners, and the next milestone across projects."], ["A concise project update", "A readable summary that can be checked against the recorded work."], ["An action and decision queue", "The outstanding items people need to resolve to keep delivery moving."]], "example": ["A milestone depends on a client access decision.", "AI includes that dependency in the draft status briefing.", "The project manager confirms the facts and agrees the next decision date."], "review": "Project owners confirm status, scope changes, deadlines, and commitments before sharing updates.", "technology": [[["Microsoft Teams", "Delivery updates & decisions"], ["Supabase", "Projects, milestones & task records"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Client project portfolio"], ["SharePoint", "Linked deliverables & review material"]]], "connection": ["Project records and confirmed updates provide the current delivery picture.", "The application sends relevant milestone and dependency context to the chosen model for a draft status briefing.", "The briefing appears beside the portfolio and linked deliverables; the project owner checks it before sharing."]}}, {"name": "Nightwatch", "summary": "Prepare prospect research and outreach overnight.", "inputs": "Prospect research, approved company information, audience criteria, and brand guidance.", "does": "Organize prospect context, suggest relevant talking points, and draft emails and LinkedIn posts in three versions.", "output": "A research-backed outreach review queue. Your team verifies facts and selects a version before publishing or sending.", "problem": "Prospect research and first-draft outreach consume recurring sales effort.", "scenario": "Review a prospect and outreach angle", "steps": ["Inspect the research scope", "Compare a second message version", "Ask about the prospect context"], "actions": ["nightScope()", "nightVersion(1)", "openAI()"], "team": "Sales owner, research reviewer, and brand approver", "systems": "Approved public research and company messaging", "measure": "Research preparation effort and verified account relevance", "workflow": {"inputs": [["A focused prospect profile", "Target company characteristics, geography, exclusions, and signals worth investigating."], ["Account research", "Permitted public company information and source evidence supporting a workflow hypothesis."], ["Approved messaging", "Company positioning, useful examples, brand voice, and the outreach constraints your team sets."]], "ai": [["Synthesize the account context", "Organize the research into a concise brief and distinguish facts from a proposed business need."], ["Find relevant angles", "Connect the account context to specific recurring work that may be worth discussing."], ["Prepare three versions", "Draft differentiated email and LinkedIn content directions for a person to compare and refine."]], "outputs": [["A prospect review queue", "Accounts with context and reasons for the team to investigate further."], ["Three outreach directions", "Editable email and LinkedIn drafts with different ways to open the conversation."], ["A fact-checking handoff", "Research context and claims to verify before any message is used."]], "example": ["Research suggests an account coordinates reporting across several teams.", "AI prepares three outreach angles around that workflow hypothesis.", "Sales verifies the research and selects a draft before sending anything."], "review": "Your team verifies account facts and message claims; this demonstration does not perform overnight research or send outreach.", "technology": [[["Azure", "Research-source orchestration options"], ["SharePoint", "Approved positioning & outreach content"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Prospect & message review workspace"], ["Supabase", "Research briefs & three draft versions"]]], "connection": ["A configured research workflow would gather permitted account evidence against the agreed prospect profile.", "The chosen model receives verified context and messaging guidance to prepare an account brief and outreach versions.", "Drafts and research context appear in a review queue; a person verifies claims before any sending or publishing step."]}}, {"name": "Client Health", "summary": "Spot client risk before the next review.", "inputs": "Account activity, support themes, engagement, delivery updates, and agreed health indicators.", "does": "Connect relationship signals, explain potential risks, summarize supporting evidence, and suggest an account action plan.", "output": "A health briefing and recommended follow-ups. Account owners validate the context and decide how to engage the client.", "problem": "Account teams may miss early signs of relationship or renewal risk.", "scenario": "Investigate a client health concern", "steps": ["Open a relationship evidence view", "Ask for a portfolio briefing", "Review priority actions"], "actions": ["healthAccount(2)", "openAI()", "changeView(2)"], "team": "Account owner, customer success lead, and delivery or support owners", "systems": "CRM, delivery updates, support themes, and engagement signals", "measure": "Time to identify a concern and complete an agreed follow-up", "workflow": {"inputs": [["Relationship activity", "Engagement, conversations, and account-owner context relevant to the client relationship."], ["Delivery and support signals", "Project progress, unresolved issues, recurring support themes, and known dependencies."], ["Commercial context", "Renewal timing, agreed health indicators, and relevant changes in the account."]], "ai": [["Bring the signals together", "Create a relationship summary across the available account, delivery, and support context."], ["Explain the concern", "Describe which evidence may indicate risk and distinguish an observed signal from a conclusion."], ["Prepare an account response", "Suggest specific follow-ups and open questions for the account owner to consider."]], "outputs": [["A portfolio health view", "A consistent way to identify accounts that deserve closer attention."], ["An account evidence brief", "The drivers behind the concern, together with context a relationship owner should verify."], ["A proposed action plan", "Practical client and internal follow-ups for people to own and track."]], "example": ["A renewal is approaching while engagement drops and a delivery question stays open.", "AI connects those signals and suggests an account review.", "The account owner validates the situation and agrees the follow-up plan."], "review": "Account owners confirm the relationship context; health scores need explicit source signals and agreed interpretation.", "technology": [[["Azure", "Approved account & activity connections"], ["Supabase", "Health signals & account records"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Account health & evidence view"], ["Microsoft Teams", "Relationship review & action planning"]]], "connection": ["The agreed engagement, delivery, support, and renewal signals are assembled for the account.", "The application provides the relevant evidence and health definitions to the chosen model for an account briefing.", "The briefing appears with the account drivers; the owner verifies the situation and agrees the follow-up plan."]}}, {"name": "FP&A Dashboard", "summary": "Explain financial performance beyond the numbers.", "inputs": "Actuals, budgets, account categories, variance thresholds, and finance assumptions.", "does": "Draft variance commentary, identify drivers worth investigating, and help leaders ask focused questions about performance.", "output": "A financial briefing linked to the underlying model. Finance validates accounting context and signs off on the narrative.", "problem": "Finance teams repeatedly explain the same actual-versus-budget changes.", "scenario": "Explain a financial variance", "steps": ["Ask for the variance briefing", "Inspect financial records", "Review finance assumptions"], "actions": ["openAI()", "changeView(1)", "changeView(2)"], "team": "Finance lead, budget owners, and accounting data owner", "systems": "Approved financial actuals and budget exports", "measure": "Close commentary effort and validated variance explanations", "workflow": {"inputs": [["Actual financial results", "Approved revenue, direct-cost, and operating-expense records for the reporting period."], ["The comparison plan", "Budget values, prior periods, account mappings, and agreed finance definitions."], ["Business explanations", "Known staffing, delivery, contract, or timing changes that help explain movements."]], "ai": [["Focus the variance review", "Identify the differences that deserve investigation based on the supplied comparison."], ["Draft the commentary", "Explain possible drivers using the available evidence, and flag causes that remain unconfirmed."], ["Support the leadership review", "Turn the financial view into concise questions about performance and planning assumptions."]], "outputs": [["An actual-versus-budget view", "An operating statement and contribution context presented for review."], ["A variance narrative", "A working explanation that finance can check against the source records."], ["A focused review agenda", "Unresolved explanations and decisions for budget owners and leadership."]], "example": ["Revenue is ahead of budget, but delivery cost is also higher.", "AI drafts commentary that separates the revenue movement from the cost question.", "Finance verifies the explanation before using it in the leadership review."], "review": "Finance validates classifications, periods, calculations, accounting context, and the final commentary.", "technology": [[["Azure", "Approved finance-data connections"], ["SharePoint", "Budget files & explanatory context"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Actual-versus-budget dashboard"], ["Supabase", "Financial snapshots & review context"]]], "connection": ["Actual and budget values are mapped to agreed periods, categories, and comparison definitions.", "The application calculates the comparisons and supplies relevant variances and business context for AI commentary.", "The draft explanation appears beside the statement and bridge so finance can validate it against the numbers."]}}, {"name": "Business Cases", "summary": "Build an evidence-led case for investment.", "inputs": "The business problem, current effort, proposed scope, estimated costs, expected benefits, and constraints.", "does": "Structure the case, expose unsupported assumptions, compare alternatives, and draft a decision summary.", "output": "A reviewable business case with open questions and assumptions. Sponsors assess the evidence and make the investment decision.", "problem": "Investment proposals arrive with inconsistent evidence and assumptions.", "scenario": "Review an investment case", "steps": ["Inspect a sample case", "Ask for a portfolio review", "Review supporting evidence"], "actions": ["changeView(1);openRecord(0)", "openAI()", "changeView(2)"], "team": "Investment sponsor, finance partner, and business case owner", "systems": "Cost estimates, workflow baselines, and decision criteria", "measure": "Case preparation effort and evidence completeness", "workflow": {"inputs": [["The decision to be made", "A business problem, current workflow, accountable sponsor, and the outcome being considered."], ["The alternatives", "Proposed scope, other ways to address the problem, and the option of keeping the current process."], ["The evidence", "Baseline effort, costs, expected benefits, constraints, dependencies, and uncertain assumptions."]], "ai": [["Structure the argument", "Organize the problem, options, investment, expected benefit, and delivery considerations."], ["Challenge the evidence", "Highlight unsupported benefits, missing baseline information, and dependencies that could change the decision."], ["Prepare an executive summary", "Compare the alternatives and make the remaining decision questions explicit."]], "outputs": [["A consistent business case", "A reviewable document with the same core questions answered across proposals."], ["An evidence-gap list", "What still needs to be measured, verified, or agreed before committing resources."], ["A decision-ready discussion", "A concise case for investigation, a focused pilot, or a change in approach."]], "example": ["A team proposes automating a recurring report.", "AI structures the case and flags the missing time baseline.", "The sponsor gathers evidence before asking for investment approval."], "review": "The sponsor and finance team validate the assumptions and make the investment decision.", "technology": [[["SharePoint", "Problem briefs, estimates & evidence"], ["Supabase", "Cases, options & assumption records"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Business-case review interface"], ["Microsoft Teams", "Sponsor and stakeholder decisions"]]], "connection": ["The sponsor assembles the problem, alternatives, costs, and available operating evidence.", "The selected model structures the case and identifies gaps using that supplied context.", "The reviewable case returns to the decision workspace for finance and stakeholders to test and approve."]}}, {"name": "Impact OS", "summary": "Understand where AI is creating useful capacity.", "inputs": "Workflow baselines, adoption signals, usage measures, task estimates, and delivery costs.", "does": "Connect adoption to modeled operational effects, explain gaps, and suggest where to investigate or improve usage.", "output": "An impact narrative with explicit measurement assumptions. Leaders validate realized outcomes separately from modeled capacity.", "problem": "Leaders need to distinguish AI usage from measurable operational value.", "scenario": "Review modeled AI impact", "steps": ["Ask about modeled value", "Inspect impact records", "Check measurement references"], "actions": ["openAI()", "changeView(1)", "changeView(2)"], "team": "Executive sponsor, workflow owner, and measurement lead", "systems": "Agreed baselines, usage signals, and operating cost records", "measure": "Adoption and independently validated operational outcomes", "workflow": {"inputs": [["The starting baseline", "Workflow effort, operating costs, current output, and the definition of a useful improvement."], ["Adoption and usage signals", "Available measures of who uses the application, which workflow is used, and how consistently."], ["The measurement assumptions", "Effort estimates, benefit realization assumptions, and the evidence needed to distinguish modeled value from results."]], "ai": [["Connect usage to the workflow", "Help explain whether adoption is occurring in the work the application was intended to improve."], ["Interpret the model", "Describe how baseline, adoption, and effort assumptions affect modeled capacity or value."], ["Identify the next investigation", "Surface gaps where the team should collect evidence or improve adoption before making an impact claim."]], "outputs": [["An adoption and impact view", "A consistent place to review usage signals alongside the agreed operating baseline."], ["A qualified impact narrative", "An explanation that keeps estimated effects separate from independently verified outcomes."], ["An improvement discussion", "Questions and follow-ups for the workflow owner to test in daily use."]], "example": ["An application is used frequently, but the operational benefit is unclear.", "AI separates the usage evidence from the assumed time reduction.", "The team measures the workflow before reporting realized value."], "review": "Leaders validate outcomes with operational evidence; usage and modeled capacity alone do not establish financial return.", "technology": [[["Azure", "Approved usage & operating-data connections"], ["Supabase", "Baselines, adoption & measurement assumptions"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Adoption & modeled-impact view"], ["Microsoft Teams", "Outcome reviews with workflow owners"]]], "connection": ["Agreed usage signals and workflow baselines are organized with their measurement assumptions.", "Application calculations model the effects; the chosen AI explains the relationship between usage, assumptions, and evidence.", "The narrative appears with the impact view so leaders can separate estimates from verified operational outcomes."]}}, {"name": "Client Profitability", "summary": "See which client relationships drive contribution.", "inputs": "Client revenue, delivery hours, labor costs, scope, and account-level financial records.", "does": "Explain contribution changes, surface possible scope drift, and propose questions or scenarios for account review.", "output": "An account profitability briefing. Finance checks cost allocation and account teams decide on commercial actions.", "problem": "Account revenue can obscure delivery cost and scope drift.", "scenario": "Investigate account contribution", "steps": ["Ask about margin drivers", "Inspect account financials", "Review cost context"], "actions": ["openAI()", "changeView(1)", "changeView(2)"], "team": "Finance partner, account lead, and delivery manager", "systems": "Revenue, delivery hours, and agreed cost allocations", "measure": "Contribution visibility and resolution of scope questions", "workflow": {"inputs": [["Account revenue", "Client-level revenue, reporting periods, and commercial context supplied for the review."], ["Delivery effort and cost", "Hours, loaded rates, direct costs, and the allocation rules the finance team has agreed."], ["Scope and account changes", "Work promised, extra effort, delivery dependencies, and known changes in the relationship."]], "ai": [["Explain contribution changes", "Connect the account view to the supplied revenue and delivery-cost information."], ["Surface questions about scope", "Highlight patterns that may warrant a discussion about effort, pricing, or unplanned work."], ["Prepare the account review", "Summarize the financial context and suggest the evidence to check before taking commercial action."]], "outputs": [["An account contribution view", "A clear comparison of revenue, delivery effort, and modeled contribution."], ["A margin-driver briefing", "An explanation that account and finance teams can review together."], ["A commercial review agenda", "Specific scope or cost questions to resolve with accountable owners."]], "example": ["A client account grows in revenue while delivery hours increase faster.", "AI flags the contribution change and a possible scope question.", "Finance checks the allocation and the account lead reviews the work being delivered."], "review": "Finance confirms the cost methodology; account leaders decide any pricing, scope, or relationship action.", "technology": [[["Azure", "Approved revenue & delivery-data connections"], ["Supabase", "Account cost & allocation records"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Account contribution analysis"], ["Microsoft Teams", "Finance and account review"]]], "connection": ["Revenue and delivery effort are aligned to the agreed account-level cost methodology.", "The application calculates contribution and gives the selected model relevant changes and scope context to explain.", "The account view and commentary appear together for finance to verify and the account lead to investigate."]}}, {"name": "Tech Support Agent", "summary": "Draft support replies from approved knowledge.", "inputs": "Past support emails, approved answers, product documents, and the customer question.", "does": "Retrieve relevant guidance, draft a grounded response, highlight source material, and flag missing information for escalation.", "output": "An editable reply with sources. A support specialist checks suitability and approves the answer before it reaches a customer.", "problem": "Support specialists repeatedly search past replies and product documentation.", "scenario": "Prepare a source-backed support response", "steps": ["Review a previous support answer", "Inspect the approved source", "Review the draft response"], "actions": ["supportPrior()", "openSource()", "reviewSupport()"], "team": "Support lead, experienced specialist, and knowledge owner", "systems": "Approved past emails, manuals, and current product guidance", "measure": "Response drafting time and reviewed answer accuracy", "workflow": {"inputs": [["The customer question", "The current email, symptoms, product details, and any relevant context already supplied."], ["Reviewed past resolutions", "Approved support answers and prior cases that may help explain a similar issue."], ["Current product knowledge", "Manuals, technical guidance, and the limits or escalation rules the support team approves."]], "ai": [["Find a relevant starting point", "Retrieve guidance and prior resolution context that relates to the current question."], ["Prepare a grounded draft", "Write an answer from approved knowledge and identify missing details rather than guess at the cause."], ["Support escalation", "Flag questions that need a specialist or more evidence, with context for the person taking over."]], "outputs": [["An editable support reply", "A first draft the specialist can adapt to the customer and the actual issue."], ["Supporting source context", "Relevant guidance and prior-case information to inspect before relying on the response."], ["A clear next step", "A clarification, approved troubleshooting direction, or escalation for a person to confirm."]], "example": ["A customer says a device will not connect.", "AI finds a reviewed similar case and asks for the missing connection details.", "The specialist checks applicability, edits the draft, and approves the reply."], "review": "A support specialist verifies product applicability and troubleshooting steps before the customer receives an answer.", "technology": [[["SharePoint", "Reviewed support answers & product documents"], ["Azure", "Approved support-email connections"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Support inbox & draft review"], ["Supabase", "Question, draft & review records"]]], "connection": ["The support question is matched with relevant approved guidance and prior-resolution context.", "The application sends that selected material and the customer’s question to the chosen model to prepare a reply.", "The draft returns with supporting context for a specialist to edit, approve, or escalate before a response is sent."]}}, {"name": "Knowledge Agent", "summary": "Give teams answers with sources attached.", "inputs": "Permission-appropriate policies, manuals, process documents, and reference material.", "does": "Retrieve relevant passages, synthesize an answer, cite the supporting documents, and flag when the sources are insufficient.", "output": "A source-linked answer and a path to expert review. Employees check the cited guidance before consequential decisions.", "problem": "Employees lose time finding current, approved internal guidance.", "scenario": "Find an answer with evidence", "steps": ["Inspect a knowledge source", "Ask a follow-up question", "Review the reference library"], "actions": ["knowledgeSource(0)", "knowledgeFollowup()", "changeView(2)"], "team": "Knowledge owner, subject experts, and permission administrator", "systems": "Permission-aware document libraries and current policies", "measure": "Search effort, citation quality, and unsupported-answer handling", "workflow": {"inputs": [["Approved internal material", "Policies, manuals, process documents, and other guidance the company wants people to use."], ["Source and access context", "Document owners, versions, intended audience, and role-appropriate access boundaries."], ["The employee question", "The task, decision, or follow-up the employee needs help with."]], "ai": [["Find supporting passages", "Locate material that is relevant to the question within the approved information scope."], ["Give a source-linked explanation", "Summarize the guidance while keeping the supporting reference available for inspection."], ["Handle a gap honestly", "Flag insufficient or conflicting information and identify when an expert should review the question."]], "outputs": [["An answer with evidence", "A concise explanation with a path back to the supporting source."], ["A useful follow-up", "Clarifying questions or next steps related to the employee’s task."], ["A route to the right owner", "An explicit handoff when the approved material cannot support a reliable answer."]], "example": ["An employee asks what must be checked before a pilot launches.", "AI summarizes the approved delivery guidance and identifies the reference.", "The employee checks the source and confirms unresolved details with the owner."], "review": "Knowledge owners maintain current guidance; users and experts review consequential decisions and access requirements.", "technology": [[["SharePoint", "Policies, manuals & reference documents"], ["Azure", "Identity & source-access integration options"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Search & source-linked answer workspace"], ["Microsoft Teams", "Internal collaboration & expert follow-up"]]], "connection": ["Approved documents are made retrievable with their source context and agreed access rules.", "The application retrieves relevant passages for the user and supplies them with the question to the selected model.", "The answer returns with supporting references or an explicit gap for the employee and knowledge owner to review."]}}, {"name": "Operations Agent", "summary": "Move routine requests toward a clear decision.", "inputs": "Incoming requests, operating policies, required fields, approval rules, and task context.", "does": "Classify requests, extract details, identify missing information, and propose a route or next action.", "output": "A structured review queue with suggested actions. Authorized people approve consequential steps and handle exceptions.", "problem": "Routine requests need consistent intake, routing, and approval.", "scenario": "Review an operations request", "steps": ["Inspect a request", "Ask about routing and exceptions", "Review operating policies"], "actions": ["operationsRequest(0)", "openAI()", "changeView(2)"], "team": "Operations owner, request handlers, and authorized approvers", "systems": "Request channels, policy sources, and approval rules", "measure": "Routing effort, exception handling, and approval turnaround", "workflow": {"inputs": [["Incoming requests", "The request text, channel, requester context, required fields, and the task being asked for."], ["Operating guidance", "Approved policies, intake requirements, routing criteria, and common exception cases."], ["Approval boundaries", "The accountable owners, decision rules, and actions that require an authorized person."]], "ai": [["Structure the intake", "Identify the request type, extract useful details, and flag missing information."], ["Propose the route", "Suggest an owner, task breakdown, clarification, or approval step based on the supplied rules."], ["Prepare the next action", "Draft the handoff or plan so a person can inspect what would happen before anything is executed."]], "outputs": [["An organized request queue", "Requests with consistent context rather than unstructured messages alone."], ["A proposed task plan", "A reviewable breakdown of the work, dependencies, and suggested routing."], ["A clear approval handoff", "The information an authorized owner needs to approve, amend, or handle an exception."]], "example": ["A contractor access request arrives without a source owner.", "AI identifies the gap and drafts the questions needed for a permission review.", "The authorized team confirms the scope and approves the next step."], "review": "Authorized owners decide on access and consequential actions; this demonstration makes no external system changes.", "technology": [[["Microsoft Teams", "Request intake & coordination"], ["SharePoint", "Operating guidance & approval policies"]], [["Claude API", "Model option for this AI workflow"], ["OpenAI API", "Alternative model option"]], [["Vercel", "Request and approval workspace"], ["Supabase", "Structured requests & review state"]]], "connection": ["The request text and relevant intake rules are collected in one structured record.", "The selected model classifies the request, identifies missing details, and drafts a route or task plan.", "The plan returns to the queue for an authorized owner to amend or approve before any connected action."]}}];

const industryExamples = {
 "Accounting Services": {
  "0": [
   "Does the engagement letter cover the R&D credit?",
   "EL-418 covers the client's 2026 corporate return and quarterly estimates for a $60,000 fee. The client, which the firm also audits, now asks us to add a research credit study before the April 15 filing.",
   "The credit study is outside the letter's scope and needs its own fee and a revised letter. As a new nonattest service for an audit client it needs an independence review, and the AI cannot confirm the proposed fee is not contingent.",
   "The engagement partner confirms independence and approves the revised letter before any work starts."
  ],
  "6": [
   "Can we staff two audits in the same week?",
   "AUD-214 and AUD-221 both start fieldwork February 8, and both need an in-charge senior with construction contractor experience. Only one such senior is unassigned that week.",
   "AUD-221's report is not due to its bonding company until May 14, so starting it a week later still leaves time. Two other seniors list construction training but have not run a contractor audit.",
   "The audit manager confirms the new start date with the client and approves the staffing change."
  ],
  "8": [
   "Why doesn't WIP match the billing ledger?",
   "The October WIP report shows $412,000 unbilled across tax clients. The WIP and billing ledger shows $388,000 for the same clients at the same cutoff.",
   "About $19,000 is October time entered after the ledger's October 31 billing cutoff. The remaining $5,000 sits on a client code with no matching engagement number and cannot be reconciled yet.",
   "The firm controller approves the reconciliation before the WIP report goes to the partners."
  ],
  "13": [
   "Which client is at risk before renewal?",
   "Client C-207 paid $18,500 in fees 94 days late, and two state tax notices it forwarded have sat unanswered with our team for six weeks. Its engagement letter renews in January.",
   "The late payment and unanswered notices point to service friction rather than a fee dispute. The AI cannot see the partner's last conversation with the client, so the cause is unconfirmed.",
   "The engagement partner calls the client and assigns an owner for the notices before the renewal letter goes out."
  ],
  "17": [
   "Why did realization drop on this client?",
   "CAS-316 bills a fixed $3,200 a month for bookkeeping and payroll. Last quarter, staff logged 41 hours a month against a 28-hour budget, including catch-up work on two new bank accounts.",
   "Realization fell to about 68 percent of standard rates, and most of the overrun is the new accounts and payroll corrections. Whether the catch-up work is in scope depends on engagement letter wording the AI could not confirm.",
   "The firm controller verifies the hours, and the CAS partner decides whether to propose a fee change."
  ],
  "18": [
   "Why does the auditor need bank confirmations?",
   "The PBC tracker for AUD-214 shows 42 of 58 items received. The client's controller asks why we need bank confirmations when statements were already provided.",
   "A reply is drafted from the firm's approved client FAQ, explaining that confirmations must come directly from the bank. Two accounts on the list may be closed, which the AI cannot confirm.",
   "The audit senior reviews the reply and the account list before it goes to the client."
  ],
  "19": [
   "Which sampling guide applies this year?",
   "The AUD-214 inventory workpaper cites the firm's 2023 sampling guide and plans a 40-item sample. The methodology group issued a revised guide in June, effective for December 2026 year-ends, that raises sample sizes for higher-risk areas.",
   "The revised guide applies, and inventory is assessed as higher risk, so the sample may need to rise to about 55 items. The AI found no documented transition decision for this engagement.",
   "The audit manager confirms the applicable guide before inventory testing begins."
  ],
  "20": [
   "Why can't the audit report be released?",
   "AUD-214's report is due to the client's lender on April 30. All workpapers are signed off, but the management representation letter on file is unsigned and dated before the subsequent events review.",
   "The representation letter is the only open release item, and it needs to be dated as of the report date. A request for a signed, redated letter is drafted for the client's CFO.",
   "The audit manager confirms the signed letter, and the engagement partner approves release of the report."
  ]
 },
 "Aerospace & Defense": {
  "0": [
   "Did we quote the right revision?",
   "The customer requests actuator drawing revision D. Two supplier quotations still reference revision C.",
   "Flag the two quotes and draft a clarification before the proposal owner locks the price.",
   "The program manager confirms the applicable revision and obtains updated supplier pricing."
  ],
  "2": [
   "Which RFQ should we bid first?",
   "Three RFQs arrived this week. RFQ-408 covers 40 landing gear actuators a year, and it is the only part number on our repair station capability list.",
   "Rank RFQ-408 first on capability fit and volume. The customer's award date and incumbent supplier are not confirmed.",
   "The program manager confirms capability and shop capacity before committing to bid."
  ],
  "6": [
   "Can inspection clear the shipment window?",
   "Actuator batch ACT-742 needs 18 inspection hours before Friday. The assigned bench has 12 available.",
   "Show the six-hour shortfall and identify the next available qualified inspection slot for review.",
   "The inspection lead confirms staffing and equipment before the planner updates the shipment commitment."
  ],
  "11": [
   "What is blocking the overhaul handoff?",
   "The shop traveler lists assembly as complete, but the serialized inspection record is missing from the work package.",
   "Identify the missing record and the dependent delivery milestone. Prepare a status update for the program owner.",
   "Quality verifies the inspection evidence before the program manager changes the milestone status."
  ],
  "14": [
   "Why is WP-311 over its estimate?",
   "WP-311 has an estimate at completion of $412,000 against a $360,000 budget. Fourteen actuators needed housing repairs outside the standard overhaul scope.",
   "Those repairs explain about $41,000 of the $52,000 overrun. The AI cannot confirm whether the contract allows them to be billed as over-and-above work.",
   "The program controller reviews the contract terms before updating the EAC."
  ],
  "17": [
   "Which overhaul contract is losing margin?",
   "The fixed-price contract for customer AC-23 shows $1.2 million in revenue and $1.14 million in direct cost this year. Average turn time rose from 21 to 34 days.",
   "Contribution is about 5 percent before overhead, driven by longer turn times and expedited parts. Exchange pool and freight costs are not yet allocated, so margin may be lower.",
   "The program controller verifies the allocation before the program manager discusses pricing at renewal."
  ],
  "18": [
   "What does the operator need to send us?",
   "An airline reports repeated slow extension on actuator S/N 4471 and asks for an exchange unit. The report has no hours since installation and no fault isolation results.",
   "Request time since installation and fault isolation results before quoting an exchange. Any decision on continued operation stays with the operator's maintenance control.",
   "The customer support engineer approves the reply and confirms exchange unit availability."
  ],
  "19": [
   "Which CMM revision applies to this actuator?",
   "An actuator from batch ACT-742 is in for overhaul under CMM 32-31-07. The shop copy is revision 12, and revision 13 was issued last month with a new seal kit.",
   "Revision 13 is the latest in the publication index and changes the seal kit part number. The AI found no record of whether a service bulletin or airworthiness directive applies to this serial range.",
   "The inspection lead confirms the applicable revision and any airworthiness directive before work proceeds."
  ],
  "20": [
   "Why is this servo valve held at receiving?",
   "Receiving logged servo valve P/N 7715-3 for WP-311. The packing slip is present, but no FAA Form 8130-3 or certificate of conformance is attached.",
   "The part cannot enter stock without traceable release documentation. Draft a request to the supplier for the certificate and a serial number match.",
   "The receiving inspector verifies the paperwork before the inspection lead releases the part to the work package."
  ]
 },
 "Automotive Aftermarket": {
  "0": [
   "Do our line review terms match the request?",
   "Line review LR-212 from a regional parts retailer asks for pricing on 48 suspension SKUs with 90-day dating and a 3 percent co-op allowance. Our draft quotes standard net 30 terms.",
   "Flag the terms gap and estimate the margin effect of 90-day dating and co-op. The retailer's return allowance is not stated in the request.",
   "The channel manager confirms terms with finance before submitting the line review response."
  ],
  "2": [
   "Which dealer applicant should we call first?",
   "Fourteen shops applied to the dealer program this month. Applicant DA-077 reports three lift bays and $250,000 a year in off-road parts sales.",
   "DA-077 ranks first on bay count and off-road sales, with no existing dealer within 30 miles. Two other applicants have not provided a resale certificate, so their ranking is incomplete.",
   "The channel manager verifies territory and credit before approving any new dealer."
  ],
  "5": [
   "Why did leveling kit sales drop in the Southwest?",
   "Sell-in to Southwest warehouse distributors fell 18 percent in September. Point-of-sale data from 40 reporting dealers was down only 4 percent.",
   "The gap suggests distributors are drawing down inventory rather than losing demand. Twelve dealers have not reported sell-through, so the read is provisional.",
   "The channel manager confirms stock positions with the top distributors before changing the forecast."
  ],
  "9": [
   "How many lift kits should we build for spring?",
   "SKU-316 shipped 2,140 units from March to May last year. A new pickup generation launches in February, and fitment for it is not yet validated.",
   "Carry-forward demand supports about 2,000 units for current applications. Volume for the new platform is an assumption until the test fit is done and the catalog lists it.",
   "The product manager approves the build plan after engineering confirms fitment."
  ],
  "13": [
   "Which dealer is drifting away?",
   "Dealer DLR-418 ordered $38,000 last quarter, down from $61,000. The account logged six backorder complaints on coilover kits.",
   "The drop lines up with a 23-day backorder on two coilover SKUs. The AI cannot see whether the dealer has started stocking a competing line.",
   "The channel manager calls the dealer with a confirmed ship date before offering any program incentive."
  ],
  "17": [
   "Which kit is losing margin after returns?",
   "A distributor earned $6,400 in gross profit on a suspension kit line before $1,800 in return freight and $900 in warranty handling for the same period.",
   "Show the $3,700 remaining after those costs. Group returns by SKU and reason so the team can distinguish fitment errors from warranty claims.",
   "The product manager verifies return codes and asks the catalog team to review the fitment listing before changing price."
  ],
  "18": [
   "Does this suspension kit fit the truck?",
   "A dealer asks about a rear suspension kit for a 2022 pickup. The order lists the model year but omits the drivetrain and rear axle configuration.",
   "Flag the missing fitment fields and draft a request for the drivetrain and axle configuration. Link the current application guide for the specialist to check.",
   "The specialist verifies the configuration against the approved fitment guide before recommending a part."
  ],
  "19": [
   "Which installation guide matches the kit in the bay?",
   "An installer has kit revision B and a saved installation sheet for revision A. The parts lists show different spacer hardware.",
   "Identify the revision mismatch, surface the approved revision B guide, and flag the spacer discrepancy for technical review.",
   "The technician checks the kit label and hardware against the current guide before proceeding."
  ],
  "20": [
   "Can this warranty claim be approved?",
   "Claim WC-551 requests a replacement strut for a kit installed 14 months ago. The dealer sent the invoice but no installer details or photos of the leaking unit.",
   "The claim is inside the 24-month term, but the policy requires proof of professional installation and failure photos. Draft a request to the dealer for both.",
   "The warranty administrator reviews the evidence before approving credit."
  ]
 },
 "Banking & Financial Services": {
  "2": [
   "Which commercial referrals should we call first?",
   "The referral register has 23 new commercial loan referrals this week. REF-317, a $1.8 million owner-occupied CRE request, has no borrower financials attached.",
   "Rank referrals by request size and stated timing using loan request fields only, and list missing items beside each one. Flag that REF-317 cannot be sized for credit until financials arrive.",
   "The commercial lending manager reviews the order before referrals are assigned to relationship managers."
  ],
  "3": [
   "Which equipment loan message should we test?",
   "Marketing has two drafts for an equipment loan campaign to business owners. One promises a credit decision within 24 hours.",
   "Compare simulated borrower reactions and label them as hypotheses. Flag that the 24-hour claim is not supported by the current median decision time of 4 business days.",
   "Compliance reviews both drafts before any customer test."
  ],
  "8": [
   "Why do the pipeline and finance totals differ?",
   "The CRM shows 14 loans at closing. The funding ledger shows 12 disbursements at month-end.",
   "Match loan IDs and separate two scheduled closings from funded loans. Show both totals with their cutoff dates.",
   "Finance confirms the two exceptions before releasing the monthly report."
  ],
  "9": [
   "Which approved loans will close this quarter?",
   "The commercial pipeline shows 18 approved loans totaling $42.6 million expected to close this quarter. Last year, 78% of approved loans closed in the quarter forecast.",
   "Show a closing forecast at the historical close rate and flag 4 loans whose appraisals have not been ordered. Note that last year's rate may not hold if pricing has changed.",
   "The finance controller validates the close-rate assumption with the commercial lending manager before the forecast is released."
  ],
  "13": [
   "Which borrower needs a covenant conversation?",
   "Borrower file LN-377 shows a debt service coverage ratio of 1.18x on Q3 statements against a 1.25x covenant. The relationship manager's last call note is 74 days old.",
   "Flag the likely covenant shortfall and show the calculation with its statement date. Note that the Q3 statements are borrower-prepared and not yet spread by credit.",
   "The credit officer confirms the calculation before the relationship manager contacts the borrower."
  ],
  "18": [
   "Why did this borrower's payment go up?",
   "A borrower emails asking why the monthly payment on LN-482 rose $214. The annual escrow analysis dated March 3 shows a property tax increase and a shortage.",
   "Draft a reply from the approved escrow template that explains the tax increase and the 12-month shortage spread. Flag that the sender's identity is not yet verified against the account.",
   "The servicing specialist verifies the borrower's identity before any account details are sent."
  ],
  "19": [
   "Which servicing procedure applies?",
   "An associate finds two payoff-letter procedures. One is marked superseded in the policy library.",
   "Surface the current approved procedure and its effective date. Flag the retired version for the associate.",
   "The servicing lead verifies applicability before the letter goes out."
  ],
  "20": [
   "What is holding up this loan file?",
   "Loan file LN-204 has an appraisal and income documents. The income statement references a different reporting period than the checklist requests.",
   "Flag the period mismatch and draft a request for the correct statement. Keep the file in document review.",
   "The processor checks the source document and approves the request. The credit decision stays with the authorized reviewer."
  ]
 },
 "Commercial Real Estate": {
  "0": [
   "What should our counterproposal say?",
   "Tenant-rep RFP-309 asks for a 10-year term on 12,000 RSF with $85 per RSF in TI allowance. Approved deal parameters allow $65.",
   "Draft a counterproposal within approved parameters and show a free-rent option that closes part of the TI gap. Flag that the tenant's financial statements have not been received.",
   "The leasing director approves the terms before the proposal goes to the broker."
  ],
  "4": [
   "Which costs can we recover from tenants?",
   "The PROP-611 operating budget includes $96,000 for a roof repair. Most leases at the building cap controllable operating expense increases at 5% a year.",
   "Flag that the roof repair may need capital treatment and may not be recoverable under most leases. Show which leases would exceed their 5% cap.",
   "The asset manager confirms treatment with property accounting before the budget is approved."
  ],
  "8": [
   "Why does the rent roll differ from billed rent?",
   "The rent roll lists 42 occupied suites. The billing export shows 40 base-rent charges for the same month.",
   "Match suite and lease IDs, then isolate two suites with rent-abatement entries for verification.",
   "Property accounting checks the executed lease schedules before closing the reconciliation."
  ],
  "9": [
   "What happens if lease commencement slips?",
   "A signed office lease starts July 1 subject to buildout completion. A one-month delay would shift $38,000 of July base rent.",
   "Show on-time and delayed rent schedules and identify the construction milestone behind the difference.",
   "The asset manager checks the lease terms and buildout schedule before updating the forecast."
  ],
  "11": [
   "What could delay tenant possession?",
   "The tenant possession walkthrough is booked for Friday. The punch list still has two open items with no named contractor.",
   "Flag the missing owners and show which walkthrough milestone depends on the work.",
   "The property manager confirms completion dates before communicating a possession date."
  ],
  "13": [
   "Which tenant is at risk before renewal?",
   "LEASE-417 covers 18,500 RSF and expires in 14 months. The tenant logged 11 HVAC work orders this quarter and has listed 4,000 RSF for sublease.",
   "Flag the renewal risk and show the work-order trend beside the sublease listing. Note that the tenant's headcount plans are unknown.",
   "The asset manager agrees on a retention approach with the leasing director before renewal outreach begins."
  ],
  "19": [
   "What rate applies to after-hours HVAC?",
   "A tenant requests weekend HVAC for a move. The lease abstract lists $75 per hour, but a 2025 amendment may have changed the rate.",
   "Cite the lease section and surface the amendment for review. Flag that the abstract has not been updated since the amendment was signed.",
   "The property manager confirms the rate against the executed lease before billing the tenant."
  ],
  "20": [
   "Why can't this contractor start Monday?",
   "A ceiling contractor is booked for TI-208 on Monday. The certificate of insurance on file expired last month and does not name the landlord as additional insured.",
   "Flag the expired certificate and missing endorsement and draft a request to the contractor. Keep building access on hold.",
   "The property manager verifies the updated certificate before access is granted."
  ]
 },
 "Construction": {
  "0": [
   "What is missing from the subcontractor bid?",
   "The bid includes installation labor, but the scope also requires commissioning and an owner training session.",
   "Flag the two unpriced items and draft a clarification for the subcontractor.",
   "The estimator confirms coverage before comparing final bids."
  ],
  "4": [
   "What happens if the change order is approved?",
   "The cost plan carries $32,000 in contingency. A pending concrete change is estimated at $18,500.",
   "Show $13,500 contingency remaining in the approval scenario and keep the pending cost separate from committed spend.",
   "The project manager verifies the estimate before finance revises the budget."
  ],
  "6": [
   "Can both crews use the crane Thursday?",
   "The tower crane is booked for steel picks all day Thursday. The curtain wall crew needs 2 hours of picks, and forecast gusts reach 25 mph after 1 p.m., above the 20 mph limit for panel lifts in lift plan LP-12.",
   "Suggest moving the panel lifts into the morning and shifting 2 hours of steel picks to the afternoon. Confirm the steel picks stay within the crane's wind limits, since the forecast may change.",
   "The superintendent approves the revised sequence after the lift director reviews it."
  ],
  "7": [
   "Who owes the answer on RFI-218?",
   "RFI-218 asks for slab edge embed locations on level 3. It has been with the structural engineer for 9 days, and the pour is in 6.",
   "Summarize the open question, the drawing references, and the pour date at risk. The engineer's current status is not logged, so confirm it directly.",
   "The project engineer escalates through the architect, and the superintendent confirms the pour date."
  ],
  "8": [
   "Why don't the pay app and sub billings agree?",
   "Pay application 7 on JOB-185 bills $412,000 to date on the structural steel line. The steel subcontractor's approved pay requests total $371,500 through the same cutoff.",
   "The $40,500 gap matches stored steel billed to the owner before the subcontractor's stored-materials invoice was approved. Confirm the delivery tickets and stored-material backup before treating it as overbilling.",
   "The project controller verifies the backup before the pay app goes to the owner."
  ],
  "11": [
   "What puts the inspection date at risk?",
   "The pour is scheduled for Thursday. The revised drawing has been submitted, but engineer approval is still open.",
   "Flag the approval as a dependency and identify the inspection and trade bookings affected by a delay.",
   "The superintendent verifies the approval date before changing the site schedule."
  ],
  "14": [
   "Why did projected profit fade this month?",
   "The WIP schedule shows projected gross profit on JOB-185, a $7.4 million contract, dropping from 6.1% to 4.8%. Concrete and rebar cost-to-complete rose $96,000 after the level 4 redesign.",
   "The fade traces to the redesign, and PCO-12 for that work is still pending owner approval. Show projected profit with and without the change, since entitlement is not yet confirmed.",
   "The project executive confirms cost-to-complete before the WIP schedule is finalized."
  ],
  "19": [
   "Which spec section covers this sealant?",
   "Submittal SBM-062 proposes a substitute joint sealant. Spec section 07 92 00 and Addendum 2 list different approved products.",
   "Addendum 2 supersedes the original section, and the substitute appears in neither list. Cite both and flag that a formal substitution request is needed.",
   "The project engineer confirms the substitution path with the architect before forwarding the submittal."
  ],
  "20": [
   "Why can't the drywall crew start Monday?",
   "Request MOB-114 asks to mobilize a 6-person drywall crew on level 2 Monday. The subcontractor's insurance certificate expired October 31, and two workers have no site safety orientation on file.",
   "Draft a request to the subcontractor for the renewed certificate and the orientation schedule, and keep the request on hold. The other four workers show no exceptions.",
   "The project engineer confirms the certificate is on file, and the superintendent clears the crew to start."
  ]
 },
 "Consulting Firms": {
  "0": [
   "Does the SOW cover what the client asked for?",
   "PRP-418 is a 10-week, $420,000 fixed-fee supply chain diagnostic covering three distribution centers. The client's latest email asks us to include a fourth site in Mexico.",
   "The fourth site is outside the drafted scope and adds about two weeks of travel and analysis. A separately priced scope option is drafted, but whether the client wants it in this phase is unclear.",
   "The client partner approves the scope and fee before the SOW is released."
  ],
  "5": [
   "Which proposals belong in the Q4 forecast?",
   "The pipeline and proposal register shows $3.1 million in proposals marked 75 percent likely for Q4. PRP-427, a $900,000 cost transformation, has had no logged client contact in five weeks.",
   "PRP-427 carries $675,000 of the weighted Q4 pipeline with no recent sponsor contact, so it is flagged as unconfirmed rather than removed. The AI cannot see whether the partner has spoken with the sponsor outside the system.",
   "The client partner confirms the sponsor's timing before the forecast goes to the managing partner."
  ],
  "6": [
   "Who can staff the new workstream?",
   "SOW-214 needs a senior consultant with ERP selection experience in distribution from November 16. The two people with that background are fully booked on another engagement through December.",
   "Options are an approved subcontractor at a higher day rate, or a manager who rolls off another engagement November 13 and would lower workstream margin. The subcontractor's rate approval and the client's consent to subcontracting are not on file.",
   "The engagement manager confirms availability, and the staffing partner approves any subcontractor before assignment."
  ],
  "8": [
   "Why don't subcontractor costs match?",
   "PRJ-316 shows $86,000 in subcontractor costs in the project margin ledger. The subcontractor's invoices for the same period total $97,500.",
   "A $9,000 October invoice arrived after the month-end accrual was booked. The remaining $2,500 is billed expenses with no matching receipts, so it cannot be reconciled yet.",
   "The practice finance lead approves the reconciliation before engagement margin is reported."
  ],
  "11": [
   "What is holding the vendor shortlist?",
   "SOW-214's vendor shortlist milestone is due December 4. The client has not decided whether payroll stays in scope, and three vendor demo scripts depend on that call.",
   "The payroll scope decision is flagged as the critical dependency, and a status note is drafted. The AI does not know when the client's steering committee will meet.",
   "The engagement manager confirms the decision date with the client sponsor before updating the plan."
  ],
  "14": [
   "Why is utilization below plan?",
   "The operations practice ran at 64 percent billable utilization in October against a 72 percent plan, across about 6,800 available hours. Proposal and pursuit hours rose from 410 to 780.",
   "The added pursuit time explains about 5 of the 8 points. About 150 hours, roughly 2 points, sit on internal codes with no description, so the cause of the rest is unclear.",
   "The practice finance lead confirms timesheet coding before commentary goes to the practice leader."
  ],
  "17": [
   "Is the fixed fee still profitable?",
   "PRJ-316 is a $650,000 fixed-fee operating model engagement planned at 1,900 hours. At week 8 of 12, the team has logged 1,640 hours.",
   "At the current burn rate the engagement finishes near 2,450 hours, cutting margin from 38 percent to about 20 percent. Some hours may be client-requested scope a change order could recover, so they need checking against the SOW.",
   "The practice finance lead verifies the hours, and the engagement partner decides whether to raise a change order."
  ],
  "18": [
   "Which scenarios should the demo cover?",
   "A client plant manager asks the SOW-214 team to add 14 plant users to next week's inventory module demos. The request does not list the warehouse scenarios the users want vendors to show.",
   "A reply is drafted asking for the top five inventory scenarios, which the evaluation approach requires before vendors script a demo. The AI cannot tell whether the client sponsor has approved adding plant users.",
   "The engagement manager approves the reply before it goes to the client."
  ],
  "20": [
   "Why can't the change order start?",
   "CO-031 adds three weeks of vendor demo support to SOW-214 for $54,000. The client purchase order field is empty, and the master services agreement requires a PO before added work begins.",
   "The missing PO is the only blocker, and a request is drafted for the client sponsor. Work done before the PO arrives may not be billable.",
   "The engagement manager confirms the PO before the team starts the added work."
  ]
 },
 "Distribution": {
  "0": [
   "Does the quote honor contract pricing?",
   "Quote QT-516 for a contractor account has 14 lines. Three lines are priced at list, but contract pricing agreement CPA-118 covers those SKUs at list less 18%.",
   "Flag the three lines and show the $1,240 difference at contract price. CPA-118 expires at month end, and the renewal terms are not on file.",
   "The inside sales manager confirms the agreement before the quote is sent."
  ],
  "5": [
   "Why did branch margin drop?",
   "Branch 12 sales rose 6% in October, but gross margin fell from 24.1% to 22.3%. Two large orders, ORD-744 and ORD-751, shipped below matrix pricing on manual overrides.",
   "Show the margin effect of the two override orders against the rest of the mix. One override has no recorded approval.",
   "The branch manager reviews both overrides with the rep before the monthly business review."
  ],
  "8": [
   "Why did the customer short-pay this invoice?",
   "A customer paid $18,460 against invoice INV-5527 for $19,720. The remittance cites a pricing deduction, and an $820 damage credit for one pallet is still pending.",
   "Match $820 to the pending damage credit and isolate the $440 pricing deduction. That claim has not been checked against the customer’s contract price.",
   "The credit manager verifies the claim with the customer before clearing the deduction."
  ],
  "9": [
   "Which demand belongs in the forecast?",
   "Next month’s plan includes a 600-case promotion. The customer has committed to 360 cases.",
   "Separate committed volume from the 240-case upside and compare both purchasing scenarios.",
   "The buyer reviews lead times and approves the order quantity."
  ],
  "14": [
   "Why is gross margin below plan?",
   "Q3 gross margin is $86,000 below budget. The plan assumed the next tier of vendor rebate program VR-310, and year-to-date purchases are $140,000 short of it.",
   "Separate the rebate accrual shortfall from price and mix variance. The tier is measured at year end, so the accrual is an estimate.",
   "The controller confirms the rebate accrual before commentary is released."
  ],
  "17": [
   "Where did order margin go?",
   "A customer order shows $4,800 gross profit before $1,900 in expedited freight.",
   "Show the $2,900 remaining after expedited freight and trace the charge to the shipment.",
   "The account manager verifies the freight terms before adjusting the next quote."
  ],
  "18": [
   "Can we substitute this backordered valve?",
   "A customer needs 200 units of SKU-517, a 2-inch ball valve rated 600 WOG, and it is backordered for three weeks. The cross-reference suggests an alternate rated 400 WOG.",
   "Flag the lower pressure rating as a spec mismatch and draft a reply asking the customer to confirm the application. Do not offer the alternate as an equivalent.",
   "The product specialist approves any substitution against the customer’s specification."
  ],
  "19": [
   "Can we send these cases back to the supplier?",
   "Return-to-vendor request RTV-233 covers 12 overstock cases received 75 days ago. The supplier’s return goods policy allows 60 days, but a newer program letter extends stocking items to 90 days.",
   "Surface both documents and flag the program letter as the more recent version. The item’s stocking status is not confirmed in the item master.",
   "The purchasing lead confirms the policy with the supplier before requesting a return authorization."
  ],
  "20": [
   "Can we release this purchase order?",
   "PO 882 requests 48 cases. The supplier acknowledgment lists 48 individual units for the same SKU.",
   "Flag the unit mismatch and draft a clarification against the item master before release.",
   "Purchasing confirms pack size with the supplier and approves the corrected order."
  ]
 },
 "Energy & Utilities": {
  "0": [
   "What goes in this line extension estimate?",
   "Service request SR-415 for a new warehouse needs 1,200 feet of three-phase underground primary. The design estimate is $412,000 before the tariff allowance.",
   "Draft the estimate letter with the tariff allowance and customer contribution shown separately. Flag that the easement status is not confirmed.",
   "The key account manager approves the letter after engineering signs off on the design."
  ],
  "2": [
   "Which large-load request should planning study first?",
   "The new service queue has 11 commercial requests. SR-412 is a 6 MW fleet charging depot on feeder 12F3, last studied at 84% of rated capacity.",
   "Rank requests by load size, requested in-service date, and completeness of the load letter. Flag that 6 MW may exceed the feeder's remaining headroom and that the loading figure comes from last summer's peak study.",
   "The distribution planning engineer confirms available capacity before any service date is offered."
  ],
  "4": [
   "Does the feeder upgrade still fit its budget?",
   "A feeder upgrade has $80,000 of contingency. A revised vendor quote adds $31,000 before any change is approved.",
   "Show $49,000 remaining in the revised scenario and keep the pending quote separate from committed cost.",
   "The capital projects controller validates the quote before revising the budget."
  ],
  "6": [
   "Do we have two crews for the outage window?",
   "Two maintenance jobs share a four-hour window. Both work orders list the same testing crew.",
   "Identify the crew conflict and compare alternative schedule slots for the planner.",
   "The maintenance planner confirms qualifications and the approved outage window before rescheduling."
  ],
  "8": [
   "Which transformer record belongs to this work order?",
   "The asset register lists a replacement transformer. The maintenance export still references the retired serial number.",
   "Match the site and work-order identifiers and surface the serial-number conflict for verification.",
   "The asset owner confirms the installed equipment before the records are reconciled."
  ],
  "17": [
   "Did this customer-funded job recover its cost?",
   "Work order CW-517 billed the customer $148,000 under a contribution agreement. Charged labor, materials, and overheads total $171,000.",
   "Show a $23,000 shortfall and flag $14,000 of overhead loading that may not be billable under the agreement terms.",
   "The capital projects controller reviews the charges before any true-up invoice is issued."
  ],
  "18": [
   "What can we tell this customer about the outage?",
   "A cold storage customer on feeder 12F3 asks whether next week's planned outage will last past four hours. The account notes say the customer's backup generator is out of service.",
   "Draft a reply with the scheduled window from the outage notice and avoid promising a restoration time. Flag the critical-load note for the key account manager.",
   "The key account manager approves the reply before it is sent."
  ],
  "19": [
   "Which relay test procedure applies here?",
   "A relay technician pulls test procedure TP-31 for a feeder protective relay at SUB-219. The asset register shows the relay was replaced in June with a newer model.",
   "Surface the procedure revision written for the installed relay model, with its effective date. Flag that TP-31 was last revised before the replacement and may not cover the new model.",
   "The protection engineer confirms the applicable procedure before testing starts."
  ],
  "20": [
   "Why is this clearance request on hold?",
   "Outage request SUB-219 lists the work scope and crew, but no approved switching order is attached. The window opens Tuesday at 06:00.",
   "Flag the missing switching order and draft a request to the system operations desk. Leave all switching steps to system operations.",
   "The system operator approves switching and issues the clearance before any work begins."
  ]
 },
 "Engineering & Architecture": {
  "0": [
   "Does the proposal cover the requested scope?",
   "An RFP requests three site visits. The draft fee covers two, and the third visit has no travel allowance.",
   "Flag the uncovered visit and draft a scope clarification before the commercial review.",
   "The principal confirms the fee and visit count before submission."
  ],
  "6": [
   "Who can staff the design review?",
   "The same structural engineer is scheduled for two client reviews on Thursday. One review requires her sign-off.",
   "The second review can move to Friday without changing its delivery milestone. Confirm reviewer availability first.",
   "The project lead approves the change and notifies both client teams."
  ],
  "8": [
   "Why is unbilled work so high on ENG-316?",
   "ENG-316 shows $34,000 in unbilled WIP. The fee ledger shows the client invoiced only through the 60% design milestone.",
   "The $34,000 lines up with 90% package hours logged since the last invoice. If the contract bills only at milestone acceptance, this is expected timing rather than a billing delay, so confirm the terms first.",
   "The project controller verifies the billing terms before the next invoice run."
  ],
  "11": [
   "Will we make the 90% design submittal?",
   "DES-214 is due to the client in 12 days. The MEP subconsultant has not returned updated equipment loads, and the roof framing design depends on them.",
   "Flag the equipment loads as the critical dependency and list the drawing sheets affected. The subconsultant's revised delivery date is not yet confirmed.",
   "The project manager confirms the date with the subconsultant before updating the client."
  ],
  "14": [
   "Why did utilization drop in October?",
   "Billable utilization in the 14-person structural group fell from 74% to 66% of about 2,500 available hours. Proposal hours rose from 120 to 310, and 90 hours are not yet approved.",
   "Most of the drop traces to the added proposal effort. The 90 unapproved hours could move the result either way, so show utilization with and without them.",
   "The operations director confirms timesheet approvals before commentary is released."
  ],
  "17": [
   "Is the engagement still on budget?",
   "ENG-316 is a $185,000 fixed-fee design engagement that has used 78% of its labor budget. Two drawing packages and the permit comments are still open.",
   "Remaining package estimates exceed unspent hours by about 140 hours. Two client-requested revisions appear outside the signed scope; confirm against the proposal.",
   "The project manager verifies the hours and decides whether to request an additional services amendment."
  ],
  "18": [
   "What does the contractor's RFI need from us?",
   "RFI-227 from the general contractor asks whether the beam connection at grid C-4 on level 2 can be field welded. The drawings show a bolted detail, and no calculations are attached.",
   "Draft a reply requesting the proposed weld detail and the fabricator's calculations. The draft makes no recommendation on the weld, since the change affects the structural design.",
   "The engineer of record reviews the calculations and approves any response."
  ],
  "19": [
   "Which code edition governs this project?",
   "Project ENG-316 is in a jurisdiction that adopted the 2021 building code with local amendments. The firm's standard structural general notes cite the 2015 edition.",
   "Flag the standard notes as outdated for this project and cite the adopted edition, since the referenced load standards changed. The local amendment text was not found in the library.",
   "The engineer of record confirms the governing edition before the notes are used on sealed drawings."
  ]
 },
 "Field & Home Services": {
  "0": [
   "Does the proposal price the new locations?",
   "Proposal SVC-318 renews weekly linen and mat service for a restaurant group at 14 locations. The customer's request adds two locations and a second weekly delivery at three, which the draft does not price.",
   "Flag the two unpriced locations and the added deliveries as open line items in the draft. Route capacity on the added delivery days is estimated, not confirmed.",
   "The account manager confirms scope and price before the proposal is sent."
  ],
  "6": [
   "Who can take the same-day call?",
   "A restaurant account on route 14 requests a same-day visit at 10 a.m. after a rodent sighting. The nearest technician is not certified in the state pest control category the treatment requires.",
   "Identify two certified technicians within 25 minutes and flag the five recurring stops that would need to move. One technician's certification renewal date is missing from the roster.",
   "The branch service manager confirms the certification record and customer access before assigning the call."
  ],
  "11": [
   "What is holding the chiller replacement?",
   "Install project INS-44 is scheduled for a weekend shutdown in 10 days. The crane permit is approved, but the replacement chiller has not shipped.",
   "Flag the shipment as the critical dependency and list the crane, electrician, and customer shutdown bookings it affects. The carrier's delivery date is not confirmed.",
   "The project coordinator confirms the ship date before rebooking the shutdown."
  ],
  "13": [
   "Which account needs attention before renewal?",
   "Agreement AGR-412 covers alarm monitoring and annual fire alarm inspections at 22 retail sites and renews in 30 days. Three service tickets are open, and two annual inspections are now past their due dates.",
   "Summarize the open tickets and the overdue inspections for the account manager. Whether the customer has raised either issue formally is not on file.",
   "The account manager confirms a recovery plan with the branch before the renewal meeting."
  ],
  "14": [
   "Why is overtime over budget?",
   "October overtime across the north branches was $58,000 against a $40,000 plan. Fall tune-up visits on residential HVAC maintenance plans rose 14%, and two technician positions are open.",
   "Based on scheduled hours, the open positions explain about half the variance. Tune-up volume tapers off after October, so separate it before projecting November.",
   "The branch controller confirms the drivers before commentary is released."
  ],
  "17": [
   "Is this maintenance contract still profitable?",
   "Contract SA-118 bills $42,000 a year for quarterly PM at six sites. Labor and travel have reached $36,500 against a $30,000 annual cost budget with one quarter left, driven by 11 callbacks.",
   "Callbacks account for most of the overrun, and four of them appear coded as PM visits. Confirm the coding before deciding whether the issue is pricing or repeat failures.",
   "The branch service manager reviews the callback coding before the renewal price is set."
  ],
  "18": [
   "Can we avoid another callback?",
   "Ticket FS-82 is the third visit this season for weeds on a residential lawn care plan. The last two service records omit the product applied and the areas treated.",
   "Draft a request to the technician for the missing application details and attach the prior visit notes. Heavy rain after the last application may explain the result, but that is unconfirmed.",
   "The branch service manager reviews the records before scheduling a free re-service."
  ],
  "19": [
   "Which inspection checklist applies here?",
   "Inspection FI-563 is the annual sprinkler inspection at a three-story office building. The technician's checklist is built on an older edition of the inspection standard, and the state fire code adopted a newer edition this year.",
   "Cite the checklist for the adopted edition, flag the older one as superseded, and list the two items that changed. The effective date for this building needs confirmation.",
   "The branch service manager confirms the applicable edition before a licensed inspector signs the report."
  ],
  "20": [
   "Why is this termite retreatment claim on hold?",
   "Claim TW-207 requests a free retreatment under a renewable termite warranty on a residential account. The service history shows no annual inspection this year, and the warranty requires one to stay in force.",
   "Flag the missing inspection and draft a note asking the branch whether it was skipped or not recorded. The warranty terms on file are an older version, so confirm which terms apply to this contract.",
   "The branch service manager confirms the inspection record and warranty terms before approving the retreatment."
  ]
 },
 "Food, Beverage & Hospitality": {
  "5": [
   "Is this a velocity or distribution problem?",
   "Weekly units on SKU-440 at one retailer fell 18%. Store count dropped from 410 to 352 after the shelf reset, and units per store per week slipped from 9.2 to 8.8.",
   "Attribute most of the decline to lost distribution rather than velocity. Two weeks of store-level data are missing from the feed.",
   "The key account manager confirms the reset with the retailer before the next business review."
  ],
  "6": [
   "Do we have enough cooks for Saturday?",
   "Location 7 forecasts 380 covers on Saturday, about 25% above a typical Saturday, because of a stadium event. The schedule has five line cooks, and the staffing guide calls for six above 350 covers.",
   "Flag the one-cook gap and show two cooks at nearby locations with open hours and current food handler cards. The cover forecast is based on last year's event and has not been checked against reservations.",
   "The general manager confirms the forecast and approves any added shifts."
  ],
  "7": [
   "Who owns the allergen meals for Saturday?",
   "Banquet event order BEO-2214 for a 240-guest wedding in the hotel ballroom now lists eight gluten-free and nut-free meals. The revised BEO went to the banquet captain, but the kitchen prep sheet still shows the earlier version with five.",
   "Flag the mismatch between the BEO revision and the prep sheet and draft a handoff to the executive chef. Which revision the client signed is not on file.",
   "The catering manager confirms the signed BEO with the client before the kitchen finalizes prep."
  ],
  "8": [
   "Why do invoices exceed the contract price?",
   "Contract VPC-462 sets chicken breast at $3.15 per pound through December. October invoices across 14 locations average $3.42, adding $11,800 over the contract price.",
   "Match invoice lines to the contract and break out the $11,800 by location. A supplier notice invoking a market-price clause may exist, but it is not in the contract file.",
   "The controller confirms the contract terms with purchasing before disputing the invoices."
  ],
  "11": [
   "What must close before the re-inspection?",
   "A routine health inspection at Location 12 cited three findings, logged as CAP-327, with a re-inspection in 10 days. Two are closed, but the walk-in cooler is holding at 45°F, its product has moved to reach-ins, and the compressor repair is not scheduled.",
   "Flag the cooler repair as the open dependency and list the temperature logs needed to show 41°F or below. The repair vendor's arrival date is not confirmed.",
   "The operations manager confirms the repair and temperature logs before the re-inspection."
  ],
  "13": [
   "Which retailer fines can we dispute?",
   "A retailer's October OTIF scorecard shows 91% against a 98% target, with $8,400 in proposed fines. Carrier PODs show four of the flagged POs, including PO-7715, arrived within their appointment windows.",
   "Separate the four disputed POs and assemble the delivery evidence. The root cause of the remaining misses is unconfirmed.",
   "The key account manager reviews the evidence with logistics before disputing the fines."
  ],
  "14": [
   "Why is food cost over plan at three locations?",
   "October food cost ran 32.8% of sales at Locations 3, 7 and 9 against a 30.0% target, while the other 11 locations held within plan. Theoretical food cost at those three was 30.4% based on menu mix.",
   "Separate the 0.4-point menu mix effect from the 2.4-point gap between theoretical and actual cost, which points to waste, portioning or inventory counts. September ending inventory at Location 9 was estimated, not counted.",
   "The controller confirms the inventory counts with the general managers before commentary is released."
  ],
  "19": [
   "Which allergen changeover procedure applies?",
   "Line 3 is switching from a peanut SKU to a SKU without peanut. Operators have sanitation SOP-214 rev 6, but rev 7 added an allergen-specific protein swab after the wet clean.",
   "Surface SOP-214 rev 7, flag rev 6 as superseded, and list the added swab step. The rev 7 effective date needs QA confirmation.",
   "The QA supervisor verifies the current procedure before the line restarts."
  ],
  "20": [
   "Which finished lots used the held flour?",
   "A supplier placed oat flour lot RM-552 on hold. The lot register shows it went into LOT-182 and LOT-185, and 14 pallets of LOT-182 have shipped to two DCs.",
   "List the affected finished lots and shipments from the lot register. Usage quantities for LOT-185 are not confirmed in the batch record.",
   "The QA manager decides on hold or recall actions with the food safety team."
  ]
 },
 "Healthcare & Life Sciences": {
  "1": [
   "What can we say in this follow-up?",
   "After a webinar, a hospital lab on placement LAB-308 asks whether the analyzer's assay can be used on pediatric samples. The cleared intended use covers adult samples only.",
   "Draft a reply limited to the cleared intended use and route the pediatric question to medical affairs. Flag one webinar claim that has no approved source.",
   "Regulatory affairs approves the reply before it is sent."
  ],
  "6": [
   "Which therapist can take the new intakes?",
   "A behavioral health group's north clinic has 18 new intake appointments next week. Of the two therapists with open hours, one is not yet credentialed with the payer covering 7 of them, and the other has a state license renewal pending.",
   "Flag both gaps and show which appointments each therapist could take now. The renewal status comes from the internal roster, not the state board, and needs verification.",
   "The clinical director confirms licensure and payer credentialing before appointments are assigned."
  ],
  "7": [
   "Who owns this referral after intake?",
   "Referral REF-214 from a hospital discharge planner for home physical therapy was accepted Monday, and the first visit is due within 48 hours of discharge. The intake checklist is complete, but no clinician is named for that visit.",
   "Draft a handoff to scheduling with the visit window and open items. Whether a signed or verbal order from the referring physician is on file is not recorded.",
   "The intake coordinator confirms the order before the clinical manager assigns the first visit."
  ],
  "8": [
   "Why do posted payments differ from remittances?",
   "For October, the practice management system shows $412,300 in posted payments from one payer, while that payer's electronic remittances total $418,900. The batch includes claims CLM-517 and CLM-522, which were denied and later paid on appeal.",
   "Match remittances to postings by claim ID, without patient details, and trace most of the $6,600 gap to the two appealed claims. One remittance line has no matching claim ID and cannot be reconciled yet.",
   "The revenue cycle manager approves the reconciliation before month-end close."
  ],
  "11": [
   "What is holding the design change release?",
   "Change order ECO-731 for a revised pump housing has passed verification testing. The risk file update and two of four approver signatures are still open.",
   "Show the release milestone and its open risk file dependency. Flag that the regulatory assessment of whether a new submission is needed is not yet recorded.",
   "The quality lead confirms all approvals before the change is released to production."
  ],
  "14": [
   "Why are collections below plan?",
   "October net collections across a 12-location physician group came in $96,000 under plan. Denials rose from 6% to 10% of submitted claims, mostly after one payer added a prior authorization requirement.",
   "Attribute most of the shortfall to authorization denials, based on denied amounts by payer. Part of the gap may be timing, since about $40,000 of those claims are under appeal.",
   "The revenue cycle manager confirms the denial drivers before the finance director releases commentary."
  ],
  "18": [
   "Is this support email a complaint?",
   "A lab manager reports that analyzer SN 40-1187 returned two error-coded results after a reagent lot change. The email does not say whether patient results were affected.",
   "Draft troubleshooting steps from the approved service guide and flag the email as a possible complaint for evaluation. Note that patient impact has not been confirmed.",
   "The complaint handling specialist decides complaint and reportability status before the case is closed."
  ],
  "19": [
   "Which authorization requirement applies?",
   "Request INT-308 for a lumbar spine MRI ordered by an orthopedic group is waiting on prior authorization. The intake checklist cites the payer's 2025 imaging policy, but a revision effective October 1 requires six weeks of documented conservative treatment.",
   "Cite the revised policy, flag the checklist as superseded, and list the added documentation. Whether the revision applies to this plan type is not confirmed.",
   "The prior authorization specialist confirms the payer requirement before the request is submitted."
  ],
  "20": [
   "Why is this lot record still in review?",
   "LOT-224 has a test result and reviewer assignment, but the lot record lacks a link to the signed source record.",
   "Identify the missing reference and prepare a documentation request for the record owner.",
   "Quality staff verify the signed record and retain responsibility for disposition."
  ]
 },
 "IT Services": {
  "0": [
   "Does the proposal cover 24/7 response?",
   "The prospect's RFP for OPP-312 asks for one-hour response on critical issues at all hours. Our standard managed services agreement covers 7 a.m. to 7 p.m. on weekdays, and after-hours work is billed separately.",
   "Flag after-hours response as outside standard scope and draft a priced option. Overnight on-call staffing cost has not been confirmed.",
   "The account manager confirms the after-hours option with the service delivery manager before releasing the proposal."
  ],
  "4": [
   "Which license costs belong in next year's plan?",
   "Our backup software agreement renews in January at $8,400 a month, a 9% increase. A proposed endpoint detection upgrade adds $5,100 a month but is not yet approved.",
   "The renewal is shown as committed and the upgrade as pending. The plan assumes the increase cannot be passed through to clients, which depends on each agreement's terms.",
   "The controller confirms the renewal terms before the COO approves the revised plan."
  ],
  "6": [
   "Who can take the onsite call today?",
   "Ticket TKT-5521 needs an onsite visit by 2 p.m. to replace a failed switch at a client's main office. The two nearest technicians are booked on PRJ-207 cutover tasks until 4 p.m.",
   "One network-certified technician could cover if the PRJ-207 firewall pre-staging task moves to Thursday. That move would push the cutover rehearsal, so the trade-off is shown for review.",
   "The service delivery manager checks the client's SLA terms and the project impact before dispatching a technician."
  ],
  "8": [
   "Why are billed endpoints below the monitoring count?",
   "AGR-418 bills 140 managed endpoints at $70 each per month. The remote monitoring tool shows 163 installed agents on the client's network.",
   "The 23 extra endpoints would add about $1,610 a month if all are in scope. Nine have not checked in for 30 days and may be retired devices, so the billable count is unconfirmed.",
   "The controller confirms the device count with the account manager before the next invoice run."
  ],
  "11": [
   "What threatens the cutover weekend?",
   "PRJ-207 replaces firewalls at four client sites, with cutover set for November 15. The client has not approved the new remote access policy, and two of the sites depend on it.",
   "Policy approval is the critical dependency for both sites. A status note is drafted, but the client's decision date is unknown.",
   "The service delivery manager confirms the approval date with the client before holding the cutover date."
  ],
  "13": [
   "Which client is at risk before the QBR?",
   "Client CLT-140 had 6 SLA misses across 310 tickets in October, up from 1 in September. Its agreement renews in February, and two recurring backup failures are still open.",
   "Most misses trace to after-hours tickets landing in a single queue. The AI cannot tell whether the client has raised these issues formally.",
   "The account manager confirms a recovery plan with service delivery before the quarterly business review."
  ],
  "17": [
   "Why did AGR-418 lose margin?",
   "AGR-418 brings in $9,800 a month. Technician time on its tickets rose from 62 to 104 hours in October, at a loaded cost of $68 an hour.",
   "The 42 added hours cost about $2,860 and cut contribution sharply. About half went to a printer rollout that looks like project work and may be billable outside the agreement.",
   "The controller verifies the time entries, and the account manager decides whether to bill the rollout separately."
  ],
  "18": [
   "What does this ticket need before it breaches?",
   "Priority-2 ticket TKT-5498 reports that 12 users cannot reach a line-of-business application. The 4-hour resolution target expires at 3:30 p.m., and the ticket lists no device names or error messages.",
   "Draft a request for the device names and error text, and link the client's runbook for that application. The cause is unconfirmed, so the draft does not promise a fix time.",
   "The service desk lead approves the reply and decides whether to escalate to a senior engineer."
  ],
  "20": [
   "What is blocking incident closure?",
   "Incident SEC-118 at a 90-seat client flagged a suspicious mailbox forwarding rule created overnight. The rule was disabled, but the closure checklist still needs confirmation that the user's password, sessions and MFA methods were reset.",
   "The reset confirmation is the only open checklist item. Sign-in logs show no further access since the rule was removed, but the AI cannot confirm that no other mailboxes were affected.",
   "The security lead verifies remediation, and the service delivery manager confirms client notification before the incident is closed."
  ]
 },
 "Legal Services": {
  "0": [
   "Does the fee proposal meet the client's guidelines?",
   "A manufacturing client's outside counsel guidelines cap blended rates at $485 an hour and bar billing for first-year associates. Our draft proposal for INT-422 assumes a $510 blended rate with two first-year associates.",
   "The draft conflicts with both guideline terms, which would likely trigger e-billing reductions. A revised staffing mix is drafted, but whether the client would grant an exception is unknown.",
   "The relationship partner approves the staffing and rate before the proposal is released."
  ],
  "2": [
   "Which intake request can we open first?",
   "The matter intake log has 9 new requests this week. INT-418, defense of a $2.4 million breach of contract claim, names an adverse party that matches a former client in the conflicts database.",
   "Requests are ranked by stated deadline and matter size, and INT-418 is held because of the possible conflict. The AI cannot tell whether the former matter was substantially related.",
   "The conflicts counsel clears or declines INT-418 before the relationship partner responds to the client."
  ],
  "6": [
   "Who can cover Tuesday's deposition?",
   "MAT-214 has a deposition noticed for Tuesday at 9 a.m., and the senior associate who prepared the outline has a hearing on MAT-230 that morning. The witness is available Tuesday afternoon.",
   "Moving the start to 1 p.m. resolves the conflict if opposing counsel agrees. A second associate knows the record but has not taken a deposition in this matter.",
   "The supervising partner approves the coverage plan before opposing counsel is contacted."
  ],
  "8": [
   "Why was the October invoice cut?",
   "BIL-316's October invoice went out at $64,200 from the time and billing ledger. The carrier's e-billing portal approved $58,900 after reducing 22 entries.",
   "Most reductions cite block billing and a task code the carrier's guidelines do not allow. Four entries cut for a timekeeper rate are not explained by the guidelines on file, which may be out of date.",
   "The billing manager confirms the current guidelines before the director of finance approves any appeal or write-down."
  ],
  "11": [
   "Which deadline is at risk this month?",
   "MAT-214's expert disclosure deadline is November 20 under the scheduling order. The damages expert has not received the client's 2023 sales data, and the report depends on it.",
   "The sales data is flagged as the critical dependency for the disclosure deadline. The AI does not calculate any new deadline, since court rules and the judge's practices govern extensions.",
   "The supervising partner confirms the deadline and decides whether to seek an extension."
  ],
  "17": [
   "Why did realization fall on this client?",
   "An insurance carrier client's matters were worked at $1.42 million in standard value this year, but collections were $1.08 million. The carrier receives a 10 percent rate discount, and e-billing reductions are tracked by matter.",
   "The discount explains $142,000 and e-billing reductions about $96,000. The remaining $102,000 is time written down before billing on two matters, and whether it was billable under the guidelines needs partner review.",
   "The director of finance verifies the write-downs, and the relationship partner decides whether to revisit rates at renewal."
  ],
  "18": [
   "What is the client asking us to confirm?",
   "The client's in-house counsel emails asking whether the company must keep a departed employee's laptop for MAT-214. The email does not say when the employee left or whether the device was wiped.",
   "A privileged acknowledgment is drafted asking for the departure date and device status. The draft gives no legal conclusion, since the answer depends on the hold scope and facts the AI does not have.",
   "The supervising partner reviews the facts and gives the advice to the client."
  ],
  "19": [
   "Which litigation hold template is current?",
   "The draft hold notice for MAT-214 uses the firm's 2022 template. The knowledge management group issued a revised template in May that adds messaging apps and personal devices.",
   "The revised template applies and is cited with its approval date. The AI cannot confirm which custodians use messaging apps, so the custodian list still needs review.",
   "The supervising partner approves the notice before it goes to the client's legal department."
  ],
  "20": [
   "Why can't MAT-238 open for billing?",
   "MAT-238 has cleared conflicts, but the engagement letter field on the new matter form is empty. Time is already being entered against a pending matter code.",
   "The signed engagement letter is the only open item. A reminder is drafted for the responsible attorney, but the AI cannot tell whether the client returned the letter by email.",
   "The supervising partner confirms the signed letter before the matter opens for billing."
  ]
 },
 "Manufacturing": {
  "0": [
   "Is the quote priced on the right volume?",
   "RFQ-512 asks for 2,500 housings a year in releases of 200. Our estimate assumed 500-piece runs at $14.20 per unit.",
   "Smaller releases add seven or eight setups a year, roughly $0.90 per part at the current setup rate. Tooling amortization is not yet in the estimate.",
   "The estimator confirms setup cost before the sales manager releases the quote."
  ],
  "6": [
   "Can we take the rush order?",
   "Work order 418 needs 12 machining center hours by Friday. The horizontal mill has eight hours free before the current shipment cutoff.",
   "The rush order exceeds available spindle time by four hours. Moving the finishing task alone will not resolve the bottleneck.",
   "The planner checks an alternate machine or negotiates a new ship date before confirming the order."
  ],
  "9": [
   "Can cell 4 cover next quarter's releases?",
   "Customer schedules show 7,800 housings for Q1, up 20 percent. Cell 4 ran at 82 percent utilization last quarter, against an 85 percent planning cap, with 6 percent scrap.",
   "At the same scrap rate, Q1 would load cell 4 to about 98 percent, well over the cap. Only two customer releases are firm, and the rest may change.",
   "The production planner confirms firm releases, and the plant controller prices overtime before the plant manager approves it."
  ],
  "13": [
   "Which customer is at risk on delivery?",
   "Customer C-118 received 79 percent of lines on time last quarter, down from 94 percent. Corrective action request CAR-061 on a bore defect is still open.",
   "Late lines cluster on one part family that runs on cell 4, which lost a week to a spindle repair. The AI cannot tell whether the customer has accepted the containment plan.",
   "The sales manager confirms the recovery plan with quality before the quarterly business review."
  ],
  "14": [
   "Why is the housing line over standard?",
   "The housing line posted a $22,400 unfavorable variance in October. Material price variance is $6,100, and labor and machine efficiency account for $16,300.",
   "Much of the efficiency variance traces to the second setup on JOB-316 and two scrap tickets. October overhead absorption is not posted yet, so the total may still move.",
   "The plant controller confirms the labor postings before releasing variance commentary."
  ],
  "17": [
   "Which job lost its margin?",
   "Job 316 earned $48,000. Materials and direct labor totaled $43,000 after a second setup.",
   "Contribution is $5,000 before overhead. The extra setup explains why this run missed its quoted margin.",
   "The plant controller verifies the setup hours, and the estimator reviews the next quote."
  ],
  "18": [
   "What should support ask before shipping a part?",
   "Ticket M-204 reports intermittent shutdowns on a packaging line. The operator supplied the model but omitted the fault code.",
   "Request the fault code and maintenance history before selecting a troubleshooting procedure or replacement part.",
   "The specialist checks the approved procedure for that model and approves the customer reply."
  ],
  "19": [
   "Which inspection plan applies to rev F?",
   "The customer issued drawing revision F for housing 7710. The CMM program and first-article checklist on the floor still reference revision E.",
   "Revision F tightens the main bore tolerance from ±0.002 to ±0.001 inch and adds one inspection callout. No updated control plan was found, so first-article requirements are unconfirmed.",
   "The quality engineer approves the revised inspection plan before the production planner releases the next run."
  ],
  "20": [
   "Why can't WO-422 be released?",
   "WO-422 for 600 housings is scheduled to start Monday. Bar stock LOT-224 is in receiving, but no mill cert is on file to confirm its heat number.",
   "The material cert is the only open release item. The lot may be usable, but nothing yet confirms it meets the alloy and temper on the purchase order.",
   "The quality engineer verifies the cert before the production planner releases the work order."
  ]
 },
 "Marketing Services": {
  "0": [
   "Is this request inside the retainer?",
   "SOW-412 covers 120 hours a month for social and email. The client has asked for a 30-second launch video by November 20, and the scope does not list video.",
   "The video is outside the retainer and would take an estimated 90 to 110 hours, including a freelance editor. The thread does not say whether the client expects it as a no-cost add-on.",
   "The account director approves the change order estimate before it goes to the client."
  ],
  "6": [
   "Who can cover the holiday campaign push?",
   "JOB-218 needs 40 senior designer hours in the week of November 16. Both senior designers are already booked at 90 percent on other retainers that week.",
   "A freelance designer at $95 an hour could cover the gap for about $3,800. The client's agreement requires approval before outside talent works on its brand, and none is on file.",
   "The traffic manager confirms freelancer availability, and the account director approves the cost and client consent before booking."
  ],
  "7": [
   "Who signs off on the press release?",
   "Client CL-219's product launch release is under embargo until 9 a.m. on November 12. The draft in JOB-231 has cleared agency review, but the client has not named who gives legal approval.",
   "Media pitching and wire distribution both wait on that approval. A note asking the client to name an approver is drafted, and the time the client's legal review will take is unknown.",
   "The traffic manager confirms the client approver with the PR account director before pitching starts."
  ],
  "8": [
   "Why doesn't billed media match the platforms?",
   "INV-506 billed the client $184,000 for October paid media. Platform invoices for the same month total $191,300.",
   "About $6,100 of the $7,300 gap is a search campaign that ran over its cap in the last week. The remaining $1,200 has no matching client-approved media estimate and cannot be traced yet.",
   "The agency controller approves the reconciliation, and the account director confirms with the client whether the overspend is billable."
  ],
  "13": [
   "Which client is at risk before renewal?",
   "Client CL-207's retainer renews in 60 days. Two campaign launches slipped a week this quarter, and the client's new CMO skipped the last monthly review.",
   "Both slips trace to late client feedback rounds, not agency delays, but the client may not see it that way. The only sentiment evidence is the meeting notes.",
   "The account director reviews a recovery plan with the agency managing director before the renewal conversation."
  ],
  "14": [
   "Why is freelancer spend over budget?",
   "Freelance costs reached $62,400 in October against a $45,000 budget. Two new-business pitches used $11,000 of outside design and video work.",
   "The pitches explain most of the $17,400 variance, and the rest is retainer overflow. Three freelancer invoices are not yet coded to a client, so the split may change.",
   "The agency controller confirms the invoice coding before releasing variance commentary."
  ],
  "17": [
   "Why is this retainer losing margin?",
   "SOW-412 bills $18,000 a month for 120 scoped hours. October logged 164 hours: 140 internal and 24 freelance copywriting hours costing $2,100.",
   "Out-of-scope requests explain most of the overage, which cut October margin from the planned 32 percent to about 9 percent at a $102 loaded cost rate. Eleven hours have no task code and may belong to another client.",
   "The agency controller verifies the hours, and the account director decides whether to raise a change order."
  ],
  "19": [
   "Which brand guidelines apply?",
   "The client issued brand guidelines version 4.2 in October with a new logo lockup and secondary color palette. Three display ads in JOB-218 were built from the version 4.0 template.",
   "The three ads use the old lockup and palette, so they do not comply with version 4.2. The guidelines do not say whether live ads must be updated or only new work.",
   "The creative director confirms the required changes with the client before the ads are released."
  ],
  "20": [
   "Why can't the spot go live?",
   "Video spot JOB-224 is client-approved and scheduled to air November 9. The stock music license on file covers online use only, not broadcast.",
   "The license scope is the only open release item. An upgraded license quote is needed, and the client has not agreed to the added cost.",
   "The traffic manager verifies the broadcast license before the spot is sent to stations."
  ]
 },
 "Private Equity Portfolios": {
  "6": [
   "Can one lead run both integrations?",
   "VCP-221 needs the shared integration lead for 60 percent of their time in December. The same lead is booked at 70 percent on the PCO-02 add-on integration.",
   "The combined load is 130 percent. An interim controller could cover the finance workstream, but the cost and start date are not confirmed.",
   "The value creation lead confirms priorities with the operating partner before assigning the work."
  ],
  "8": [
   "Why don't the two EBITDA figures match?",
   "The Q3 KPI package shows adjusted EBITDA of $4.62 million for PCO-07. The draft quarterly compliance certificate for the same period shows $4.38 million.",
   "About $210,000 of the $240,000 gap is integration cost added back in the KPI package but not permitted under the credit agreement definition. The remaining $30,000 has no matching journal entry and cannot be reconciled yet.",
   "The portfolio company CFO approves the reconciliation before the package goes to the operating partners."
  ],
  "9": [
   "Will PCO-07 stay inside its leverage covenant?",
   "PCO-07's Q4 forecast shows trailing covenant EBITDA of $18.2 million against $86 million of funded debt, about 4.73x leverage. The covenant steps down to 4.75x at year-end.",
   "Headroom is under 0.1x, and the forecast counts $1.1 million of price increases not yet invoiced. Without them, leverage would be about 5.0x, before any effect of the add-back cap in the June amendment.",
   "The portfolio company CFO validates the forecast, and the operating partner reviews it before the lender update."
  ],
  "11": [
   "What is holding the ERP cutover?",
   "The 100-day plan for add-on ADD-298 sets the ERP cutover for December 1. Chart-of-accounts mapping is 80 percent complete, and no one has signed off on the inventory costing method.",
   "The costing decision blocks mapping, migration testing and the first combined close. The decision owner is unclear between the platform and add-on CFOs, so the date is at risk.",
   "The value creation lead confirms the decision owner and a revised date with the portfolio company CFO."
  ],
  "12": [
   "Which add-on target is worth a call?",
   "Target ADD-312, a regional HVAC services firm with an estimated $14 million in revenue, posted three branch manager openings in a market where our platform company has no coverage.",
   "The hiring suggests expansion, but job postings are indirect evidence. Ownership intentions are unknown, so an outreach note is drafted for review only.",
   "The operating partner verifies the research with the deal team before any outreach."
  ],
  "13": [
   "Which key customer is slipping?",
   "ACCT-314 is 18 percent of revenue at portfolio company PCO-07 and renews in February. October orders fell 22 percent, and two quality complaints are still open.",
   "The order drop lines up with the complaints, but it may also reflect the customer's own inventory correction. No notes from the last quarterly business review are on file.",
   "The operating partner agrees on a retention plan with the portfolio company CEO before the board meeting."
  ],
  "17": [
   "Which cost cut the add-on's margin?",
   "Add-on ADD-298 posted a 14.1 percent EBITDA margin on $3.4 million of October revenue, against 17.5 percent in the deal model. Transition services fees of $96,000 and duplicate software licenses were charged to its P&L.",
   "The transition services fees explain about 2.8 points and end in January. About $22,000 of license cost, roughly 0.6 points, may belong to the platform company and needs allocation review.",
   "The portfolio company CFO verifies the allocation before the margin is reported to the operating partner."
  ],
  "19": [
   "Which integration playbook applies?",
   "ADD-298 onboarding tasks follow the 2024 HR integration playbook. The operating team approved a 2026 version in August that adds a benefits enrollment step.",
   "The 2026 playbook applies and requires a benefits enrollment window before day 30. Whether the add-on's current plan year changes that timing is unconfirmed.",
   "The value creation lead verifies the step with the portfolio company HR lead before the task list is updated."
  ],
  "20": [
   "Why is this data room folder on hold?",
   "The exit readiness checklist for PCO-04 marks customer contracts folder DR-406 as ready for review. Twelve of its 85 contracts have no signed copy, and four include change-of-control clauses.",
   "The twelve missing signed copies keep the folder on hold. The change-of-control clauses are flagged for deal counsel, and the AI does not judge whether consent is needed.",
   "The value creation lead confirms the signed copies, and deal counsel reviews the clauses before the folder is released."
  ]
 },
 "Professional Services": {
  "0": [
   "Can we accept the lower markup?",
   "The MSA-314 renewal asks to cut our markup on light industrial roles from 38 percent to 32 percent across about 140 active contractors.",
   "On an $18 pay rate, a 32 percent markup leaves about $2.20 an hour after payroll taxes and workers' comp, below the account's margin floor. The client's volume commitment is not in writing, so any offset is unconfirmed.",
   "The account manager confirms the volume commitment, and the branch director approves pricing before the renewal is signed."
  ],
  "6": [
   "Which recruiter can take the new openings?",
   "REQ-227 adds 12 forklift operator openings starting November 16. The two recruiters set up on this client's vendor management system each carry 30 open requisitions.",
   "A third recruiter has capacity but has not completed the client's system onboarding, which takes about a day. Fill dates assume the current one-in-four submittal-to-hire rate holds.",
   "The delivery lead confirms onboarding and capacity before reassigning the requisitions."
  ],
  "8": [
   "Why don't hours match the client's VMS?",
   "BILL-508 shows 4,812 approved hours for week 43. The client's vendor management system approved 4,756 hours for the same week.",
   "Forty-four of the 56 missing hours belong to three timesheets approved after the VMS cutoff. The remaining 12 hours have no matching worker ID and cannot be reconciled yet.",
   "The controller approves the reconciliation before invoices are released."
  ],
  "13": [
   "Which outsourcing client is at risk?",
   "Payroll services client CL-142 had two late off-cycle runs this quarter against a 24-hour SLA. Its contract renews in March, and it has an open ticket about tax filing notices.",
   "Both late runs trace to client data arriving after cutoff, but the SLA report does not show that. The tax notice ticket is still open, and its cause is unconfirmed.",
   "The account manager reviews a recovery plan with the service delivery lead before the quarterly business review."
  ],
  "14": [
   "Why is gross margin below budget?",
   "October gross margin was 22.4 percent against a 25 percent budget. Workers' comp accruals rose $38,000 after a rate change on warehouse roles, and two large placements started at reduced markups.",
   "The workers' comp change explains about 1.5 points and the reduced markups about 0.8 points, leaving 0.3 points unexplained. The final rate notice has not arrived, so the accrual may still move.",
   "The controller confirms the accrual before releasing variance commentary."
  ],
  "17": [
   "Which placement lost its spread?",
   "Placement PLC-216 bills $31.50 an hour against a $22 pay rate. October timesheets show 26 overtime hours, which the client's rate card bills at straight time.",
   "Overtime pay of $33 an hour exceeds the $31.50 bill rate, a loss of about $210 for October once payroll burden is included. The AI cannot tell whether the client approved the overtime in advance.",
   "The controller verifies the rate card terms, and the account manager raises overtime billing with the client."
  ],
  "18": [
   "What does the extension request leave out?",
   "A client hiring manager asked to extend assignment PLC-241 through March. The request gives no new end date and does not confirm the $46 hourly bill rate.",
   "The extension cannot be entered without an end date, and the client's vendor management system needs an approved rate. A clarification is drafted for the hiring manager.",
   "The delivery lead approves the reply before it goes to the client."
  ],
  "19": [
   "Which handbook version applies?",
   "An HR consulting client asked whether its leave policy covers a new state paid family leave program. The policy library holds the 2025 handbook template and a 2026 revision approved in September.",
   "The 2026 revision addresses the state program and is the current approved template. The client's handbook adoption date is not on file, so the version it currently uses is unconfirmed.",
   "The HR consulting lead verifies the client's version, and employment counsel reviews the guidance before it is sent."
  ],
  "20": [
   "What is holding this start date?",
   "Placement PLC-233 is set to start Monday at a client warehouse. The background check is clear, but the client-required drug screen result is still pending.",
   "The screen is the only open onboarding item. The lab estimates results within 48 hours, which may not arrive before the start.",
   "The delivery lead verifies the result before confirming the start with the client."
  ]
 },
 "Retail & Consumer": {
  "5": [
   "Why did October comparable sales slip?",
   "Comparable store sales fell 3.2% across 42 stores in October, while e-commerce rose 11%. Buy-online-pick-up-in-store orders count as e-commerce, and they doubled after the September launch.",
   "Part of the store decline may be pickup orders shifting channel rather than lost demand. Without the fulfillment report, the AI cannot split pickup sales by store, so the shift is an estimate.",
   "The channel sales manager confirms the attribution rule with FP&A before commentary goes to leadership."
  ],
  "6": [
   "Can stores staff the reset and the truck?",
   "RST-318 needs 20 labor hours per store on Tuesday for the holiday floor set. Twelve of those stores also receive their 14-hour weekly truck that day and have only 26 hours free after normal coverage.",
   "Those 12 stores are about 8 hours short each on Tuesday. Moving their reset to Wednesday closes the gap, but the AI has not checked that against the marketing launch date.",
   "The store operations manager confirms schedules with district managers before the reset date is set."
  ],
  "8": [
   "Why don't vendor chargebacks match the ledger?",
   "The vendor compliance team issued $46,200 in chargebacks in Q3 for late and mislabeled shipments. Accounts payable shows only $38,900 deducted from vendor payments.",
   "Most of the $7,300 gap is three chargebacks still in vendor dispute. One $1,150 chargeback has no matching vendor invoice and cannot be applied yet.",
   "The merchandise finance lead approves the reconciliation before vendor statements are sent."
  ],
  "13": [
   "Which retail partner needs attention?",
   "Retail partner ACC-127 cut our fill-rate score from 97% to 91% this quarter. Two late-shipment chargebacks totaling $8,600 are in dispute ahead of its January line review.",
   "Late shipments cluster on one SKU family whose inbound freight was delayed in September. The AI cannot see whether the partner's buyer has accepted the recovery dates we sent.",
   "The channel sales manager confirms a recovery plan with supply planning before the line review."
  ],
  "14": [
   "Why is markdown spend over plan?",
   "October markdowns on fall outerwear reached $312,000 against a $240,000 plan across stores and online. Sell-through is 58% versus 70% planned after a warm first half of the month.",
   "About $50,000 of the overage traces to a clearance price on two styles that started a week early, and the rest follows slow sell-through. This data cannot separate the weather effect from pricing.",
   "The merchandise finance lead confirms the markdown postings before variance commentary is released."
  ],
  "17": [
   "Is the marketplace channel still profitable?",
   "Marketplace sales for SKU family SKU-610 were $128,000 in Q3. Referral, fulfillment and a new storage surcharge totaled $41,000, up from 24% to 32% of sales.",
   "Contribution after fees and landed cost fell to about 9%, mostly from the storage surcharge on slow sellers. September return processing fees are not posted yet, so the margin may fall further.",
   "The merchandise finance lead verifies the fee postings before the channel sales manager reprices or delists any SKUs."
  ],
  "18": [
   "Can the store accept this return?",
   "A customer at store 114 wants to return a $240 jacket bought online 41 days ago. The policy allows 30 days, or 60 days for loyalty members, and the request has no order number.",
   "Draft guidance for the associate to look up the order by emailed receipt or loyalty account, without recording any card details. Without the order record, the AI cannot confirm the purchase date or the refund method.",
   "The store manager confirms eligibility and approves any exception to the return policy."
  ],
  "19": [
   "Which planogram applies to the reset?",
   "Reset packets for RST-318 across 42 stores link planogram POG-221 version 3. Merchandising issued version 4 last week, which moves two vendor-funded endcaps and drops 18 SKUs.",
   "Version 4 is the current approved planogram, and version 3 is flagged as superseded. No updated shelf labels or markdown instructions were found for the 18 dropped SKUs.",
   "The store operations manager confirms version 4 with merchandising before packets go to stores."
  ],
  "20": [
   "Why is the store delivery on hold?",
   "Store 207 received 14 cartons of fixtures and product for RST-318. The delivery manifest lists 12, and the 2 extra cartons do not appear on any store transfer.",
   "The two unmatched cartons are the only open receiving item. They may belong to store 209 on the same route, but nothing confirms it, so a request to the distribution center is drafted.",
   "The store operations manager confirms the carton match before the delivery is received into inventory."
  ]
 },
 "SaaS": {
  "4": [
   "Which hosting costs belong in the 2027 plan?",
   "Cloud hosting runs about $150,000 a month under a committed-spend agreement. Engineering has requested a $14,000-a-month observability tool that is not yet approved.",
   "The committed hosting spend stays in the plan, and the tool is shown as a separate pending line. Hosting growth assumes usage rises in line with ARR, which has not been tested.",
   "The controller confirms the committed-spend terms before the CFO approves the revised plan."
  ],
  "5": [
   "Should this expansion stay in commit?",
   "OPP-418 adds 250 seats, about $72,000 in new ARR, and is marked commit for Q4. The buyer has not confirmed the close date since procurement returned redlines on the order form's auto-renewal clause.",
   "Recommend moving the deal from commit to best case until legal resolves the redlines. The AI cannot see whether the economic buyer has signed off on budget.",
   "The account executive confirms the close date with the buyer before the sales leader commits the forecast."
  ],
  "8": [
   "Why are billed seats below provisioned users?",
   "SUB-341 bills 500 seats at $38 per user per month. The admin console shows 562 provisioned users, and the contract allows a quarterly true-up.",
   "The 62 extra users would add about $2,360 a month if all are billable. Fourteen look like admin or service accounts that the contract may exclude, so the true-up amount is uncertain.",
   "The controller confirms the contract's seat definition before the true-up invoice is issued."
  ],
  "11": [
   "What is holding the SSO milestone?",
   "IMP-226 is due to go live on December 1. SAML setup has waited 9 days on the customer's identity team, and user migration for 1,200 seats cannot start without it.",
   "SSO is the critical dependency for both migration and admin training. The customer has not named an owner or a date, so the go-live risk cannot be sized yet.",
   "The implementation lead confirms an owner and date with the customer's project sponsor before updating the go-live plan."
  ],
  "13": [
   "Which renewal is at churn risk?",
   "Renewal REN-205 is worth $186,000 in ARR and comes due in 75 days. Weekly active users fell from 410 to 290 since August, and two priority-1 support escalations are still open.",
   "The usage decline and the open escalations are the main risk signals. The AI cannot tell from these records whether the customer's executive sponsor is still engaged.",
   "The account executive confirms a recovery plan with customer success before the renewal forecast is updated."
  ],
  "14": [
   "Why did gross margin dip in October?",
   "Subscription gross margin fell from 79% to 75% on $1.9 million in monthly revenue. Hosting cost rose $46,000, and $30,000 of support contractor cost was coded to cost of revenue.",
   "Hosting explains most of the drop, and part of it may be a one-time data migration for a new customer. Whether the contractor cost belongs in cost of revenue needs confirming.",
   "The controller verifies the cost coding before margin commentary is released."
  ],
  "18": [
   "What does this escalation still need?",
   "Ticket SUP-1184 reports failed nightly data syncs in the IMP-226 pilot workspace since release 26.10. It was raised to priority 1, but no error log or workspace ID is attached.",
   "Draft a reply asking for the workspace ID and the sync log window, and link the known issue on the 26.10 connector. The root cause is not confirmed, so the draft promises no fix date.",
   "The support lead approves the reply, and the implementation lead updates the customer on any go-live impact."
  ],
  "19": [
   "Which help article reflects release 26.10?",
   "The admin guide for IMP-226 links help article KB-311, which shows export settings as they were before release 26.10 moved them. The 26.10 release notes describe the new location and a 50,000-row export limit.",
   "Cite the release notes and flag KB-311 as superseded. The release notes do not say whether the older API export endpoint still works.",
   "The implementation lead confirms the export behavior with product support before sending the guide to the customer."
  ],
  "20": [
   "What is blocking the security review?",
   "The customer's security team will not approve IMP-226 for production data until it receives our current SOC 2 Type II report. The report on file covers the period through June 30, and the bridge letter for July onward is unsigned.",
   "The unsigned bridge letter is the only open item, and a status note to the customer is drafted. The AI cannot confirm when the letter will be signed or whether it will disclose any control changes.",
   "The implementation lead confirms the signing date with the security lead before the report and letter are shared under NDA."
  ]
 },
 "Supply Chain & Logistics": {
  "0": [
   "Which lanes in the bid need clarification?",
   "Shipper RFP BID-204 covers 42 lanes. Six lanes require drop trailers at the consignee, but our rate sheet prices them as live unload.",
   "Flag the six lanes and draft a clarification on trailer pool size and trailer detention terms. The shipper has not stated volume commitments for those lanes.",
   "The pricing manager confirms equipment and rates before the account director submits the bid."
  ],
  "6": [
   "Which load risks missing its appointment?",
   "Load 611 is due at the dock at 2 p.m. Its assigned tractor returns at 1:45 p.m., 50 minutes away.",
   "Flag a 35-minute gap before loading time and identify an available tractor for dispatch review.",
   "Dispatch confirms driver availability and dock timing before reassigning the load."
  ],
  "8": [
   "Why is this lane missing from billing?",
   "The dispatch log shows 16 delivered loads on the lane. Billing lists 15 invoices at cutoff.",
   "Match load IDs and isolate the delivery whose proof of receipt is still pending.",
   "Billing verifies the receipt before including the load in the invoice batch."
  ],
  "13": [
   "Which shipper needs a service review?",
   "Three of a shipper’s last eight deliveries missed appointment windows. Two exceptions still lack explanations.",
   "Group the late deliveries by lane and flag the incomplete exception records.",
   "The account owner validates the causes with dispatch before the shipper call."
  ],
  "14": [
   "Why did operating ratio rise in October?",
   "October operating ratio rose to 94.8% against a 92.5% plan. $46,000 in detention on accessorial batch ACC-310 is still unbilled while driver timestamps are reviewed.",
   "Separate the unbilled detention from fuel and maintenance variance. The timestamps are unconfirmed, so the detention may not all be billable.",
   "The controller verifies the accessorial support before commentary is released."
  ],
  "17": [
   "Is this dedicated lane losing money?",
   "Dedicated lane DED-615 earns $3.20 per loaded mile, including fuel surcharge. With 38% empty miles, cost runs $3.38 per loaded mile.",
   "Show the $0.18 per mile loss and isolate how much of it comes from empty miles. Fuel surcharge billed for the period has not been reconciled to actual fuel cost.",
   "The pricing analyst verifies the cost data before the account director discusses rates."
  ],
  "18": [
   "What does this damage claim still need?",
   "The consignee noted three damaged cartons on the POD for LOAD-640. The shipper filed claim CLM-118 for $2,350 but has not sent the invoice showing product value.",
   "Draft a reply requesting the invoice and damage photos, and note that the claim cannot be valued until they arrive. The reply does not acknowledge liability.",
   "The claims specialist reviews the evidence before any settlement offer."
  ],
  "19": [
   "What does the routing guide require?",
   "A consignee refused LOAD-623 because the bill of lading had no seal number. The shipper revised its routing guide last month.",
   "Surface the current routing guide section on seal requirements and flag the older version still in the driver packet. The chargeback clause may apply and needs review.",
   "The customer service lead confirms the requirement with the shipper before redelivery."
  ],
  "20": [
   "Can we dispatch this load tonight?",
   "LOAD-618 is ready for a 9 p.m. pickup and needs six hours of driving. The assigned driver’s ELD shows 4.5 hours left on the 11-hour driving limit.",
   "Flag that the run exceeds the driver’s remaining hours of service and list two drivers with enough available hours. Neither driver’s location has been confirmed.",
   "The dispatcher confirms hours and location with the new driver before reassigning the load."
  ]
 }
};

// Each domain supplies commercial, delivery and financial records for the same fictional business.
const sectorRecords = {
 "Accounting Services": [
  [
   "a tax and advisory engagement proposal",
   "engagement letter register",
   "engagement partner",
   "EL-418",
   "tax practice team"
  ],
  [
   "a year-end audit engagement",
   "fieldwork schedule and PBC tracker",
   "audit manager",
   "AUD-214",
   "audit engagement team"
  ],
  [
   "a fixed-fee bookkeeping engagement",
   "WIP and billing ledger",
   "firm controller",
   "CAS-316",
   "firm finance team"
  ]
 ],
 "Aerospace & Defense": [
  [
   "a component overhaul bid",
   "customer RFQ register",
   "program manager",
   "RFQ-408",
   "aftermarket programs team"
  ],
  [
   "a serialized actuator awaiting inspection",
   "shop traveler",
   "inspection lead",
   "ACT-742",
   "overhaul team"
  ],
  [
   "an overhaul work package",
   "program cost ledger",
   "program controller",
   "WP-311",
   "program finance team"
  ]
 ],
 "Automotive Aftermarket": [
  [
   "a dealer stocking program offer",
   "dealer program file",
   "channel manager",
   "DLR-418",
   "dealer sales team"
  ],
  [
   "a suspension kit fitment request",
   "vehicle application guide",
   "technical support lead",
   "KIT-204",
   "parts counter"
  ],
  [
   "the suspension kit line P&L",
   "SKU margin ledger",
   "product manager",
   "SKU-316",
   "product finance team"
  ]
 ],
 "Banking & Financial Services": [
  [
   "a commercial loan referral",
   "referral register",
   "commercial lending manager",
   "REF-317",
   "commercial lending team"
  ],
  [
   "a loan document exception",
   "loan file checklist",
   "processing lead",
   "LN-204",
   "loan operations team"
  ],
  [
   "a lending operations budget",
   "cost center ledger",
   "finance controller",
   "OPS-212",
   "finance team"
  ]
 ],
 "Commercial Real Estate": [
  [
   "a tenant-rep RFP",
   "leasing pipeline",
   "leasing director",
   "RFP-309",
   "leasing team"
  ],
  [
   "a tenant improvement handoff",
   "buildout schedule and lease milestone register",
   "property manager",
   "TI-208",
   "property operations team"
  ],
  [
   "an office asset operating plan",
   "property operating ledger",
   "asset manager",
   "PROP-611",
   "asset management team"
  ]
 ],
 "Construction": [
  [
   "a negotiated GMP pursuit",
   "pursuit pipeline",
   "preconstruction director",
   "PUR-271",
   "business development team"
  ],
  [
   "an open RFI on level 3 slab edge embeds",
   "RFI log",
   "project engineer",
   "RFI-218",
   "project team"
  ],
  [
   "a job cost-to-complete forecast",
   "job cost report",
   "project controller",
   "JOB-185",
   "project controls team"
  ]
 ],
 "Consulting Firms": [
  [
   "a follow-on supply chain proposal",
   "pipeline and proposal register",
   "client partner",
   "PRP-418",
   "operations practice team"
  ],
  [
   "an ERP selection workstream",
   "engagement workplan",
   "engagement manager",
   "SOW-214",
   "technology delivery team"
  ],
  [
   "a fixed-fee operating model engagement",
   "project margin ledger",
   "practice finance lead",
   "PRJ-316",
   "practice finance team"
  ]
 ],
 "Distribution": [
  [
   "a contractor quote request",
   "quote and contract pricing file",
   "inside sales manager",
   "QT-516",
   "inside sales team"
  ],
  [
   "a short-shipped supplier receipt",
   "receiving and ASN log",
   "purchasing lead",
   "ASN-408",
   "receiving team"
  ],
  [
   "a branch outbound freight overrun",
   "freight accrual ledger",
   "regional controller",
   "FRT-721",
   "distribution finance team"
  ]
 ],
 "Energy & Utilities": [
  [
   "a large-load service request",
   "new service request queue",
   "key account manager",
   "SR-412",
   "key accounts team"
  ],
  [
   "a planned substation maintenance window",
   "outage schedule and crew roster",
   "maintenance planner",
   "SUB-219",
   "grid maintenance team"
  ],
  [
   "a distribution capital work plan",
   "capital work order ledger",
   "capital projects controller",
   "CAP-506",
   "utility finance team"
  ]
 ],
 "Engineering & Architecture": [
  [
   "a design services proposal",
   "scope and fee register",
   "engagement principal",
   "RFP-318",
   "proposal team"
  ],
  [
   "a structural review milestone",
   "project schedule",
   "engineering lead",
   "DES-214",
   "design team"
  ],
  [
   "a fixed-fee design engagement",
   "timesheet and fee ledger",
   "project controller",
   "ENG-316",
   "project finance team"
  ]
 ],
 "Field & Home Services": [
  [
   "a multi-site recurring service proposal",
   "proposal and agreement register",
   "account manager",
   "SVC-318",
   "account management team"
  ],
  [
   "a seasonal route change for recurring stops",
   "route schedule and service history",
   "branch service manager",
   "RTE-82",
   "branch service team"
  ],
  [
   "a commercial maintenance agreement",
   "route labor and materials ledger",
   "branch controller",
   "SA-118",
   "branch finance team"
  ]
 ],
 "Food, Beverage & Hospitality": [
  [
   "a retailer feature promotion",
   "customer promotion calendar",
   "key account manager",
   "PROMO-306",
   "retail sales team"
  ],
  [
   "a corrective action from a food safety audit",
   "operations and food safety log",
   "operations manager",
   "CAP-318",
   "operations team"
  ],
  [
   "a supplier price increase on key ingredients",
   "food and labor cost ledger",
   "controller",
   "VPC-462",
   "cost accounting team"
  ]
 ],
 "Healthcare & Life Sciences": [
  [
   "a laboratory instrument placement",
   "instrument proposal register",
   "commercial lead",
   "LAB-308",
   "instrument sales team"
  ],
  [
   "a case held for documentation review",
   "case queue and controlled document register",
   "quality and operations lead",
   "DOC-224",
   "quality and operations team"
  ],
  [
   "a hospital service agreement",
   "contract and remittance ledger",
   "finance director",
   "SVC-511",
   "finance team"
  ]
 ],
 "IT Services": [
  [
   "a new managed services opportunity",
   "PSA opportunity pipeline",
   "account manager",
   "OPP-312",
   "sales team"
  ],
  [
   "a client firewall replacement project",
   "project schedule and ticket queue",
   "service delivery manager",
   "PRJ-207",
   "service delivery team"
  ],
  [
   "a managed services agreement",
   "agreement billing ledger",
   "controller",
   "AGR-418",
   "service billing team"
  ]
 ],
 "Legal Services": [
  [
   "a new matter request from an existing client",
   "matter intake log",
   "relationship partner",
   "INT-418",
   "business development team"
  ],
  [
   "a commercial litigation matter",
   "matter calendar and docket",
   "supervising partner",
   "MAT-214",
   "litigation team"
  ],
  [
   "an insurance defense matter budget",
   "time and billing ledger",
   "director of finance",
   "BIL-316",
   "billing team"
  ]
 ],
 "Manufacturing": [
  [
   "an RFQ for machined housings",
   "quote log",
   "sales manager",
   "RFQ-512",
   "inside sales team"
  ],
  [
   "a CNC cell changeover",
   "machine schedule",
   "production planner",
   "WO-418",
   "machining cell team"
  ],
  [
   "the housing line standard cost update",
   "cost roll-up",
   "plant controller",
   "CST-316",
   "cost accounting team"
  ]
 ],
 "Marketing Services": [
  [
   "a retainer scope renewal",
   "client scope register",
   "account director",
   "SOW-412",
   "client services team"
  ],
  [
   "a holiday campaign creative job",
   "traffic and approval queue",
   "traffic manager",
   "JOB-218",
   "creative operations team"
  ],
  [
   "a monthly retainer and media invoice",
   "client billing ledger",
   "agency controller",
   "INV-506",
   "agency finance team"
  ]
 ],
 "Private Equity Portfolios": [
  [
   "a key customer renewal at a portfolio company",
   "portfolio pipeline roll-up",
   "commercial excellence lead",
   "ACCT-314",
   "portfolio commercial team"
  ],
  [
   "a 100-day plan milestone",
   "value creation plan tracker",
   "value creation lead",
   "VCP-221",
   "portfolio operations team"
  ],
  [
   "a portfolio company operating plan",
   "monthly portfolio reporting package",
   "portfolio company CFO",
   "PLAN-508",
   "portfolio finance team"
  ]
 ],
 "Professional Services": [
  [
   "a contract staffing renewal",
   "client rate card register",
   "account manager",
   "MSA-314",
   "account management team"
  ],
  [
   "an open contractor requisition",
   "requisition and placement queue",
   "delivery lead",
   "REQ-227",
   "client delivery team"
  ],
  [
   "a weekly timesheet billing run",
   "timesheet and billing ledger",
   "controller",
   "BILL-508",
   "billing and payroll team"
  ]
 ],
 "Retail & Consumer": [
  [
   "a new retail listing request",
   "channel account pipeline",
   "channel sales manager",
   "LST-214",
   "channel sales team"
  ],
  [
   "a seasonal store reset",
   "store operations calendar",
   "store operations manager",
   "RST-318",
   "store operations team"
  ],
  [
   "the holiday markdown and receipt plan",
   "merchandise financial plan",
   "merchandise finance lead",
   "MFP-412",
   "merchandise finance team"
  ]
 ],
 "SaaS": [
  [
   "an enterprise expansion opportunity",
   "sales pipeline",
   "account executive",
   "OPP-418",
   "account management team"
  ],
  [
   "an enterprise customer implementation",
   "implementation tracker",
   "implementation lead",
   "IMP-226",
   "onboarding team"
  ],
  [
   "an annual contract with seat true-ups",
   "subscription billing ledger",
   "controller",
   "SUB-341",
   "revenue operations team"
  ]
 ],
 "Supply Chain & Logistics": [
  [
   "a shipper lane bid",
   "RFP lane bid register",
   "account director",
   "BID-204",
   "shipper account team"
  ],
  [
   "an OS&D exception on a delivered load",
   "delivery exception log",
   "dispatch supervisor",
   "LOAD-640",
   "fleet dispatch team"
  ],
  [
   "a dedicated lane over its cost-per-mile target",
   "lane cost ledger",
   "pricing analyst",
   "DED-615",
   "network finance team"
  ]
 ]
};
const sectorJobs=[
  [0,'Proposal review','Which commitment needs clarification?','The requested commitment is not in the approved scope. A clarification is drafted, but the customer\u2019s intent still needs confirming.','release the revised proposal','A customer has asked for a commitment the approved scope does not cover'],
  [0,'Follow-up draft','What should the follow-up address?','The draft reply answers the open question. One promise in the thread has no supporting record and is flagged.','approve the reply and recipient','A customer question from the last call has no reply on file'],
  [0,'Qualification queue','Which opportunity needs attention first?','Fit looks strong, but the qualification record has no buying contact. A suggested owner is shown for review.','verify the buying contact before routing','It arrived without a confirmed buyer or decision date'],
  [0,'Message comparison','Which message should we test?','The timing-led pitch matches the stated concern more closely. Simulated responses are hypotheses, not customer feedback.','select a version for a customer test','Two draft pitches exist for it, one led by timing and one by cost'],
  [2,'Budget review','Which costs belong in the revised plan?','Committed and pending costs are separated. Approving the pending cost is the one assumption that changes the plan.','confirm the cost basis before revising the plan','It carries one committed cost and one pending cost that is not yet approved'],
  [0,'Pipeline review','Which commitment belongs in the forecast?','The close date has no buyer confirmation since the last activity. It is flagged as unconfirmed rather than removed.','verify the date before committing the forecast','The buyer has not confirmed its close date since the last call'],
  [1,'Capacity plan','Where does the next assignment conflict?','The overlap is shown with one alternative schedule. Qualifications for the alternate assignment are not verified.','confirm availability and qualifications before assigning work','It needs the same qualified people another job has booked that week'],
  [1,'Handoff review','Who owns the next handoff?','The blocking task and its downstream impact are summarized. No owner is named in the source, so a handoff is drafted for review.','confirm the dependency and assign the next action','It is waiting on an upstream task with no named owner'],
  [2,'Account reconciliation','Why do the two totals differ?','Most of the gap is timing at cutoff. One record lacks a matching identifier and cannot be reconciled yet.','approve the reconciliation before reporting','Its total differs from the downstream report at the same cutoff'],
  [2,'Forecast scenarios','Which assumption changes the forecast?','Confirmed activity is separated from the upside scenario. The difference depends on a commitment not yet received.','validate the scenario before revising the outlook','The outlook includes a related amount that is not yet confirmed'],
  [2,'Investment comparison','What benefit can the pilot support?','Payback looks short, but it rests on an estimated effort baseline and an assumed adoption rate.','validate recurring cost and the effort baseline','Each review like this takes an estimated three hours, but no one has measured it'],
  [1,'Milestone review','Which dependency threatens the next milestone?','The open decision affects two downstream tasks. A status update is drafted, but the decision date is unknown.','confirm the decision owner and due date','An open decision on it is holding the next milestone'],
  [0,'Prospect research','Which account signal warrants outreach?','The signal suggests a similar need, but it comes from indirect evidence. An outreach angle is drafted for verification.','verify the research before approving outreach','A similar need may exist at a related account the team has not contacted'],
  [0,'Relationship review','Which account needs a follow-up?','Engagement is steady, but two delivery issues remain open. The renewal concern rests on those records only.','confirm a recovery action with the account owner','Two related delivery issues are still open ahead of the next account review'],
  [2,'Variance review','What explains the change against budget?','Part of the variance is timing and part is a cost change. The split depends on one invoice that has not posted.','verify the variance before releasing commentary','Actual cost is running ahead of budget this month, and part of the gap may be timing'],
  [2,'Business case','Which investment assumption is unproven?','The case is drafted around the recurring task. Without a measured baseline, the benefit range is wide and unproven.','collect evidence before requesting investment approval','A proposal to automate this review has no measured time baseline'],
  [2,'Impact review','What value has the team actually verified?','Usage is observed, but time released is estimated. No benefit can be reported as verified yet.','validate the measurement before reporting value','An AI-assisted version of this review has run for a month, but no baseline was recorded'],
  [2,'Margin analysis','Which cost changed the account margin?','The added charges explain most of the margin drop. One charge may belong to a different scope and needs review.','verify the allocation before revising terms','Direct charges have been added that were not in the original quote'],
  [1,'Support desk','Which detail is missing from the request?','The request lacks a detail the approved guidance requires. A clarification is drafted before any resolution is suggested.','check applicability and approve the response','The request came in without a detail the approved guidance requires'],
  [1,'Knowledge search','Which approved reference applies here?','The newer approved version applies. The superseded one is flagged, and both sources are cited for review.','verify the reference and resolve outstanding questions','The file cites a procedure that has a newer approved version'],
  [1,'Exception queue','What is blocking this request?','One required field is empty. A request for the missing evidence is drafted for the accountable owner.','confirm the evidence before releasing the request','One required field is still empty, so it cannot move forward']
];
function sectorCase(industry,id){
  if(!Object.hasOwn(sectorRecords,industry)||!sectorJobs[id])return null;
  const [area,desk,question,analysis,action,situation]=sectorJobs[id];
  const [item,source,owner,ref,team]=sectorRecords[industry][area];
  const example=(industryExamples[industry]||{})[id]||[
    question,
    'The '+team+' is reviewing '+item+' ('+ref+') in the '+source+'. '+situation+'.',
    analysis,
    'The '+owner+' will '+action+'.'
  ];
  return {industry,desk,source,owner,ref,team,example};
}


const sectorImages = {
 "Accounting Services": "accounting-services.jpg",
 "Aerospace & Defense": "aerospace.webp",
 "Automotive Aftermarket": "automotive.webp",
 "Banking & Financial Services": "financial-services.webp",
 "Commercial Real Estate": "commercial-real-estate.webp",
 "Construction": "construction.webp",
 "Consulting Firms": "consulting-firms.jpg",
 "Distribution": "distribution.webp",
 "Energy & Utilities": "energy.webp",
 "Engineering & Architecture": "engineering.webp",
 "Field & Home Services": "field-service.webp",
 "Food, Beverage & Hospitality": "food-beverage.webp",
 "Healthcare & Life Sciences": "medtech.webp",
 "IT Services": "it-services.jpg",
 "Legal Services": "legal-services.jpg",
 "Manufacturing": "manufacturing.webp",
 "Marketing Services": "marketing-services.jpg",
 "Private Equity Portfolios": "private-equity-portfolios.jpg",
 "Professional Services": "professional-services.jpg",
 "Retail & Consumer": "retail-consumer.jpg",
 "SaaS": "saas.jpg",
 "Supply Chain & Logistics": "logistics.webp"
};
// Earlier industry names and the website's industry page slugs open the matching industry.
const industryAliases={
  'Field Service':'Field & Home Services','Food & Beverage':'Food, Beverage & Hospitality',
  'MedTech & Life Sciences':'Healthcare & Life Sciences','Financial Services':'Banking & Financial Services',
  'Wholesale Distribution':'Distribution','Transportation & Logistics':'Supply Chain & Logistics',
  'Engineering & Professional Services':'Engineering & Architecture',
  'private-equity':'Private Equity Portfolios','consulting-partnerships':'Consulting Firms','manufacturing':'Manufacturing',
  'logistics-supply-chain':'Supply Chain & Logistics','distribution':'Distribution','professional-services':'Professional Services',
  'technology-services':'IT Services','accounting':'Accounting Services','banking-financial-services':'Banking & Financial Services',
  'marketing-services':'Marketing Services','legal-services':'Legal Services','food-beverage-hospitality':'Food, Beverage & Hospitality',
  'retail-consumer':'Retail & Consumer','saas':'SaaS'
};
const industrySlug=name=>String(name).toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function resolveIndustry(raw){
  if(!raw)return '';
  if(Object.hasOwn(industryExamples,raw))return raw;
  if(Object.hasOwn(industryAliases,raw))return industryAliases[raw];
  const slug=industrySlug(raw);
  return Object.keys(industryExamples).find(name=>industrySlug(name)===slug)||'';
}
function sectorHero(industry,prefix=''){
  if(!Object.hasOwn(sectorImages,industry))return '';
  return `<div class="sector-photo"><img src="${prefix}industry-media/${sectorImages[industry]}" alt=""><span>${industry.replaceAll('&','&amp;')}</span></div>`;
}
