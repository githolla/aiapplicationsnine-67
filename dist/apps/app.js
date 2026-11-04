'use strict';
const CATALOG=[
{name:'Proposal Builder',accent:'#345fea',tint:'#eff2fd',label:'PROPOSAL WORKSPACE',headline:'Proposal workspace',sub:'Northstar operations modernization · Response due November 18',tabs:['Workspace','Proposals','Content library'],action:'New proposal',cols:['Proposal','Client','Stage','Due','Owner'],rows:[['Operations modernization','Northstar Manufacturing','In progress','Nov 18','Alex Morgan'],['Customer intelligence pilot','Harbor & Field','In review','Nov 21','Taylor Kim'],['Quarterly planning platform','Cedar Home Goods','Draft','Dec 02','Jordan Ellis']],library:[['Manufacturing case study','SharePoint','Approved','Updated Oct 29'],['Delivery methodology','Knowledge library','Approved','Updated Oct 24'],['Team qualifications','SharePoint','Review','Updated Oct 18']],libcols:['Reference','Source','Status','Last updated'],ai:'The RFP calls for a 90-day pilot, a phased implementation plan, and an operating handoff. The delivery section still needs named acceptance criteria. Use the approved manufacturing case study as supporting evidence; confirm the client-specific timeline before submitting.'},
{name:'Lead Response',accent:'#007870',tint:'#ebf4f4',label:'CAMPAIGN WORKSPACE',headline:'Follow-up campaign',sub:'From webinar insight to personalized follow-up',tabs:['Campaign desk','Audience','Content & cadences'],action:'New campaign',cols:['Attendee','Organization','Engagement','Segment','Status'],rows:[['Morgan Reed','Harbor & Field','86% watched','Operations','Ready for review'],['Alex Chen','Cedar Home Goods','Asked a question','Retail','Draft'],['Taylor Brooks','Northstar Markets','62% watched','Leadership','Ready for review'],['Jordan Ellis','Meadow Personal Care','Downloaded report','Operations','Needs context']],library:[['Initial follow-up','Day 0','Personalized summary','Review'],['Practical example','Day 3','Relevant case study','Draft'],['Team discussion','Day 7','Implementation questions','Draft'],['Final follow-up','Day 14','Next-step invitation','Draft']],libcols:['Cadence step','Timing','Content','Status'],ai:'Morgan watched the operations section and asked about connecting existing systems. Lead with that question, reference the workflow example from the transcript, and offer the approved operations brief. Keep each follow-up distinct: a case study, a practical checklist, then a direct invitation.'},
{name:'Lead Triage',accent:'#6941c6',tint:'#f3f0fa',label:'REVENUE INTELLIGENCE',headline:'Lead priority queue',sub:'Correlated fit, intent, and account signals',tabs:['Priority queue','Accounts','Routing rules'],action:'Add lead',cols:['Contact / account','Business need','Fit','Intent','Owner'],rows:[['Morgan Reed · Northstar','Workflow integration','92','88','Alex Morgan'],['Alex Chen · Cedar','Customer insights','85','76','Taylor Kim'],['Jordan Ellis · Meadow','Capacity planning','81','71','Unassigned'],['Taylor Brooks · Harbor','Reporting automation','74','64','Jordan Ellis']],library:[['High fit + high intent','Assign account owner','Same day','Active'],['Missing business context','Research queue','2 days','Active'],['Existing relationship','Account team','Same day','Active']],libcols:['Signal pattern','Route','Target','Status'],ai:'Northstar ranks first because it matches the operating profile and has repeated engagement around workflow integration. The sample score combines fit and intent signals; it is not a probability of conversion. Confirm the decision-maker and the current systems before outreach.'},
{name:'Simulation Analysis',accent:'#5052b5',tint:'#f1f1f9',label:'SIMULATION LAB',headline:'Message testing lab',sub:'Synthetic persona panel · Directional feedback, not market research',tabs:['Experiment','Experiments','Persona library'],action:'New experiment',cols:['Experiment','Audience','Variants','Status','Last run'],rows:[['Operations platform positioning','Enterprise buyers','3','Complete','Today'],['Launch email messaging','Marketing leaders','2','In progress','Yesterday'],['Pilot offer framing','Finance reviewers','2','Draft','Oct 30']],library:[['Dana Foster','COO','Operational clarity','Synthetic persona'],['Sam Rivera','IT director','Security & integration','Synthetic persona'],['Riley Park','Finance leader','Cost & measurable value','Synthetic persona'],['Casey Stone','End user','Ease of use','Synthetic persona']],libcols:['Persona','Role','Evaluation lens','Type'],ai:'The operations persona responds to the concrete workflow improvement. Finance wants a baseline and explicit operating costs. IT needs a clearer access and integration explanation. Reframe the message around one workflow, one owner, and a measurable pilot outcome. These are simulated reactions, not survey findings.'},
{name:'Budget Builder',accent:'#087994',tint:'#ebf4f6',label:'PLANNING WORKSPACE',headline:'Department budget',sub:'FY2027 departmental budget · Working scenario',tabs:['Budget workspace','Department plans','Assumptions'],action:'New budget',cols:['Department','Owner','Plan','Status','Last updated'],rows:[['Operations','Alex Morgan','$426,000','In review','Today'],['Marketing','Taylor Kim','$318,000','Draft','Yesterday'],['Technology','Jordan Ellis','$564,000','In review','Oct 30']],library:[['Staffing growth','3.0%','Planning assumption','Review'],['Software renewals','5.0%','Contract schedule','Review'],['Contingency','8.0%','Scenario input','Draft']],libcols:['Assumption','Value','Basis','Status'],ai:'The current plan concentrates spending in staffing and delivery support. Separate recurring commitments from discretionary projects before applying a uniform reduction. The technology line has a renewal dependency; review that contract before changing the allocation.'},
{name:'Sales Dashboard',accent:'#2861d5',tint:'#eef2fc',label:'REVENUE COMMAND',headline:'Revenue overview',sub:'Illustrative Q4 performance · Connected sales view',tabs:['Executive overview','Opportunities','Sales activity'],action:'Add opportunity',cols:['Opportunity','Account','Stage','Value','Owner'],rows:[['Operations intelligence','Northstar','Proposal','$180,000','Alex Morgan'],['Member support copilot','Harbor & Field','Discovery','$96,000','Taylor Kim'],['Planning workspace','Cedar','Negotiation','$240,000','Jordan Ellis'],['Data intelligence','Meadow','Qualification','$72,000','Alex Morgan']],library:[['Northstar discovery','Meeting','Alex Morgan','Today'],['Cedar proposal review','Review','Jordan Ellis','Yesterday'],['Harbor follow-up','Email draft','Taylor Kim','Yesterday']],libcols:['Activity','Type','Owner','Date'],ai:'Negotiation-stage value is concentrated in two opportunities. Inspect close-date evidence before treating the weighted forecast as committed revenue. The sample pipeline supports a focused review of next steps, decision owners, and stalled opportunities.'},
{name:'Resource Allocation Platform',accent:'#087782',tint:'#ebf4f5',label:'CAPACITY PLANNING',headline:'Weekly capacity planner',sub:'November 2–6 · Delivery team capacity',tabs:['Team planner','Assignments','Capacity rules'],action:'New assignment',cols:['Assignment','Team member','Project','Hours','Status'],rows:[['Workflow design','Alex Morgan','Northstar','24','Confirmed'],['Data integration','Taylor Kim','Harbor & Field','28','Confirmed'],['Application build','Jordan Ellis','Cedar','32','Needs review'],['User testing','Casey Stone','Northstar','16','Proposed']],library:[['Weekly capacity','40 hours','Per person','Active'],['Over-allocation alert','Above 100%','Team lead review','Active'],['Unavailability','Exclude planned leave','Source calendar','Active']],libcols:['Rule','Threshold','Action','Status'],ai:'Jordan has 32 hours of delivery work before meetings and support. Adding the proposed 12-hour integration task would exceed a 40-hour week. Taylor has more room after the current handoff; confirm skills and availability before reassigning.'},
{name:'Collaboration Workspace',accent:'#435ac9',tint:'#f0f2fb',label:'PROJECT WORKSPACE',headline:'Project activity',sub:'Northstar · Operations intelligence pilot',tabs:['Project hub','Project plan','Files & decisions'],action:'New update',cols:['Task','Owner','Due','Status','Workstream'],rows:[['Confirm source access','Taylor Kim','Nov 06','In progress','Integration'],['Review workflow prototype','Alex Morgan','Nov 09','Ready for review','Design'],['Validate acceptance cases','Jordan Ellis','Nov 12','Planned','Testing'],['Pilot onboarding','Casey Stone','Nov 16','Planned','Adoption']],library:[['Project brief v3','SharePoint','Approved','Oct 30'],['Scope decision 04','Teams discussion','Confirmed','Nov 02'],['Integration notes','SharePoint','Working draft','Nov 03']],libcols:['Document / decision','Source','Status','Updated'],ai:'The access dependency is the main blocker for the next milestone. The prototype review can proceed using sample records. Capture the final scope decision in the project record and assign a named owner to source access before the integration checkpoint.'},
{name:'Client Data Hub',accent:'#6842b5',tint:'#f3f0f9',label:'CLIENT DATA HUB',headline:'Client data overview',sub:'One account view across sales, delivery, and finance.',tabs:['Account overview','Report library','Source catalog'],action:'New report',cols:['Report','Business area','Owner','Refresh','Status'],rows:[['Executive performance','Company','Alex Morgan','Today','Available'],['Revenue & pipeline','Sales','Taylor Kim','Today','Available'],['Delivery performance','Operations','Jordan Ellis','Yesterday','Available'],['Account economics','Finance','Casey Stone','Oct 31','Review']],library:[['Sales opportunity records','CRM sample','Daily','Available'],['Project effort','Delivery sample','Daily','Available'],['Finance actuals','Finance sample','Monthly','Available']],libcols:['Source','Origin','Cadence','Status'],ai:'Revenue growth and contribution do not move together in the sample. Delivery effort rose faster in two accounts, while new opportunities remain concentrated in a small group. Open the account economics report to inspect the underlying drivers before concluding that growth is improving margins.'},
{name:'Forecast Builder',accent:'#027783',tint:'#ebf4f5',label:'FORECAST WORKSPACE',headline:'Forecast scenarios',sub:'FY2027 revenue plan · Baseline versus scenario',tabs:['Scenario builder','Saved scenarios','Forecast drivers'],action:'Save scenario',cols:['Scenario','Revenue','Growth','Owner','Status'],rows:[['Base plan','$3.84M','0%','Alex Morgan','Baseline'],['Measured expansion','$4.30M','12%','Taylor Kim','Working'],['Conservative plan','$3.53M','−8%','Jordan Ellis','Working']],library:[['Current annual revenue','$3.84M','Sample baseline','Editable'],['Growth assumption','12%','Scenario input','Editable'],['Delivery capacity','85%','Planning constraint','Review']],libcols:['Driver','Value','Basis','Control'],ai:'The base case uses $3.84M in annual revenue. Growth changes the revenue projection directly in this illustration; capacity and win-rate assumptions should be supported by operating evidence in a production model. Compare the downside case and running costs before making a commitment.'},
{name:'ROI Calculator',accent:'#3560d5',tint:'#eff2fc',label:'INVESTMENT WORKBENCH',headline:'ROI model',sub:'Workflow automation · Illustrative investment model',tabs:['Investment model','Project evaluations','Assumptions & evidence'],action:'Save evaluation',cols:['Project','Build cost','Annual benefit','Payback','Status'],rows:[['Support response assistant','$24,000','$61,200','5.2 months','Evaluated'],['Reporting workspace','$18,000','$43,200','5.5 months','In review'],['Proposal intelligence','$32,000','$72,000','5.8 months','Draft']],library:[['Hours per week','40','User input','Unvalidated'],['Loaded hourly rate','$75','User input','Unvalidated'],['Realization','60%','Scenario input','Unvalidated']],libcols:['Assumption','Value','Source','Status'],ai:'Treat time released as potential capacity rather than guaranteed cash savings. The model separates adoption and realization from theoretical time savings. Validate the weekly effort, the share the tool can reduce, and the cost of operating it before approving the investment.'},
{name:'Project Tracker',accent:'#4b50b8',tint:'#f1f1f9',label:'DELIVERY PORTFOLIO',headline:'Delivery board',sub:'Nine-67 client applications · Sample delivery portfolio',tabs:['Project board','Project register','Milestones'],action:'New task',cols:['Project','Client','Owner','Progress','Status'],rows:[['Operations intelligence','Northstar','Alex Morgan','68%','On track'],['Support copilot','Harbor & Field','Taylor Kim','42%','Needs decision'],['Planning workspace','Cedar','Jordan Ellis','83%','On track']],library:[['Source access ready','Northstar','Nov 06','At risk'],['Prototype review','Harbor & Field','Nov 09','Planned'],['Pilot launch','Cedar','Nov 16','Planned']],libcols:['Milestone','Project','Target','Status'],ai:'Source access is the dependency most likely to affect the current plan. Keep the prototype review separate so the team can continue using sample data. Escalate the access owner and date rather than moving all milestones without evidence.'},
{name:'Nightwatch',accent:'#9cc7ff',tint:'#f7fbff',label:'PROSPECT INTELLIGENCE',headline:'Prospect research desk',sub:'Research, relevance, and reviewable outreach in one workspace',tabs:['Morning briefing','Prospect queue','Outreach drafts'],action:'Run sample research',cols:['Company','Sector','Fit','Research status','Next step'],rows:[['Northstar Manufacturing','Manufacturing','94','Reviewed','Draft email'],['Cedar Home Goods','Retail / distribution','88','Needs review','Inspect research'],['Harbor Logistics','Logistics','86','Reviewed','Draft email'],['Meadow Personal Care','Consumer products','82','Needs context','Research contact']],library:[['Northstar · Workflow idea','Email','3 versions','Draft'],['Cedar · Reporting signal','LinkedIn post','3 versions','Draft'],['Harbor · Capacity planning','Email','3 versions','Review']],libcols:['Draft','Channel','Variants','Status'],ai:'Northstar has the clearest workflow hypothesis in this fictional research batch. Lead with the operational context and a specific question. Contact details and email addresses in a live workflow require independent verification; no messages are sent from this demonstration.'},
{name:'Client Health',accent:'#087965',tint:'#ebf4f3',label:'RELATIONSHIP INTELLIGENCE',headline:'Account health',sub:'Six fictional accounts · Evidence-led portfolio view',tabs:['Portfolio health','Client register','Action plans'],action:'New action plan',cols:['Client','Owner','Health','Renewal','Status'],rows:[['Northstar Manufacturing','Alex Morgan','86','120 days','Healthy'],['Cedar Home Goods','Taylor Kim','58','45 days','Watch'],['Harbor & Field','Jordan Ellis','42','30 days','At risk'],['Meadow Personal Care','Casey Stone','79','150 days','Healthy'],['Summit Logistics','Alex Morgan','68','90 days','Watch'],['Westbridge Services','Taylor Kim','91','180 days','Healthy']],library:[['Confirm sponsor alignment','Harbor & Field','Jordan Ellis','Open'],['Resolve delivery dependency','Cedar','Taylor Kim','In progress'],['Review expansion context','Northstar','Alex Morgan','Planned']],libcols:['Action','Client','Owner','Status'],ai:'Harbor & Field combines lower engagement, a near-term renewal, and an unresolved delivery question. Inspect the evidence and speak with the account owner before treating the score as a decision. A recovery plan should identify a sponsor conversation, a delivery action, and the next review date.'},
{name:'FP&A Dashboard',accent:'#245cc7',tint:'#edf2fb',label:'FINANCIAL PLANNING & ANALYSIS',headline:'Plan vs. actuals',sub:'October close · Sample actuals, budget, and forecast',tabs:['Financial overview','Financial statements','Variance drivers'],action:'Add commentary',cols:['Line item','Actual','Budget','Variance','Direction'],rows:[['Revenue','$642,000','$620,000','+$22,000','Favorable'],['Direct delivery cost','$294,000','$278,000','+$16,000','Unfavorable'],['Operating expense','$184,000','$180,000','+$4,000','Unfavorable'],['Operating contribution','$164,000','$162,000','+$2,000','Favorable']],library:[['Revenue mix','+$22,000','Growth in delivery work','Review'],['Delivery hours','−$16,000','Higher effort on two accounts','Review'],['Software and services','−$4,000','Renewal timing','Review']],libcols:['Driver','Impact','Explanation','Status'],ai:'Revenue is $22,000 above the sample budget, but delivery cost and operating expense absorb most of that increase. Operating contribution is only $2,000 above plan. Inspect account effort and renewal timing before describing the result as broad margin improvement.'},
{name:'Business Cases',accent:'#5842b9',tint:'#f2f0f9',label:'DECISION WORKSPACE',headline:'Business case pipeline',sub:'Application investment portfolio · Review and prioritization',tabs:['Decision pipeline','Case register','Decision records'],action:'New business case',cols:['Business case','Sponsor','Investment','Stage','Decision'],rows:[['Support response copilot','Operations','$24,000','Validation','Review benefit'],['Reporting automation','Finance','$18,000','Approved','Start pilot'],['Proposal intelligence','Sales','$32,000','Discovery','Confirm baseline'],['Capacity planning','Delivery','$28,000','Validation','Review dependencies']],library:[['Reporting pilot','Approved with scope','Alex Morgan','Oct 30'],['Support baseline','More evidence needed','Taylor Kim','Nov 02'],['Capacity dependencies','IT review required','Jordan Ellis','Nov 03']],libcols:['Case','Decision','Owner','Date'],ai:'Prioritize the reporting pilot where the baseline, sponsor, and data access are clearest. The support case has a promising workflow but still needs evidence for time saved and review effort. Keep the decision record tied to explicit assumptions and ownership.'},
{name:'Impact OS',accent:'#007765',tint:'#ebf4f3',label:'VALUE INTELLIGENCE',headline:'Impact measurement',sub:'Illustrative adoption and value model · No actual client results',tabs:['Value overview','Value register','Evidence ledger'],action:'Add value record',cols:['Workflow','Adoption','Potential capacity','Owner','Evidence'],rows:[['Support response','72%','620 hrs / year','Operations','Review'],['Executive reporting','84%','410 hrs / year','Finance','Review'],['Proposal preparation','63%','530 hrs / year','Sales','Review']],library:[['Baseline effort','Workflow observation','Sample evidence','Unvalidated'],['Adoption','Completed workflows','Sample record','Unvalidated'],['Realized benefit','Outcome review','Not yet established','Pending']],libcols:['Measure','Source','Type','Validation'],ai:'The illustration distinguishes potential capacity, adoption, and realized benefit. A valuation multiple applied to modeled benefit is not an appraisal. Confirm whether time is redeployed, whether quality improves, and whether the application changes an actual operating cost before assigning realized value.'},
{name:'Client Profitability',accent:'#265cc1',tint:'#eef2fa',label:'ACCOUNT ECONOMICS',headline:'Account profitability',sub:'Six-month sample period · Contribution before overhead',tabs:['Account economics','Client ledger','Margin actions'],action:'New margin action',cols:['Client','Revenue','Direct labor','Contribution','Margin'],rows:[['Northstar Manufacturing','$420,000','$252,000','$168,000','40.0%'],['Cedar Home Goods','$280,000','$231,000','$49,000','17.5%'],['Harbor & Field','$190,000','$205,000','−$15,000','−7.9%'],['Meadow Personal Care','$310,000','$186,000','$124,000','40.0%']],library:[['Review delivery scope','Harbor & Field','Jordan Ellis','Open'],['Validate effort estimate','Cedar','Taylor Kim','In progress'],['Review effective rate','Northstar','Alex Morgan','Planned']],libcols:['Action','Account','Owner','Status'],ai:'Harbor & Field has negative contribution in this sample because direct labor exceeds revenue. Cedar remains positive but has a lower contribution margin. Inspect scope changes, realized rates, and delivery effort. Contribution excludes overhead and should not be described as net profit.'},
{name:'Tech Support Agent',accent:'#1269ad',tint:'#ecf3f8',label:'SUPPORT WORKSPACE',headline:'Support inbox',sub:'Sample support inbox · Reviewed knowledge and past emails',tabs:['Response desk','Support queue','Knowledge sources'],action:'New support case',cols:['Case','Customer','Topic','Priority','Status'],rows:[['SUP-1048','Morgan Reed','Device connection','High','Needs response'],['SUP-1049','Alex Chen','Setup question','Normal','In review'],['SUP-1050','Jordan Ellis','Account access','Normal','Escalated']],library:[['Connection troubleshooting','Approved guide','Current','Sample source'],['Resolved case SUP-0921','Past email','Reviewed','Sample source'],['Escalation policy','Support knowledge','Current','Sample source']],libcols:['Source','Type','Status','Scope'],ai:'The prior reviewed case suggests checking the connection state and reproducing the issue before replacing hardware. Ask for the device indicator state and the exact error. Do not invent a part recommendation or promise a fix without the required evidence. Escalate if the approved troubleshooting path does not resolve it.'},
{name:'Knowledge Agent',accent:'#5c41b7',tint:'#f2f0f9',label:'COMPANY KNOWLEDGE',headline:'Knowledge search',sub:'Approved company references · Source-aware assistance',tabs:['Ask the workspace','Knowledge library','Review queue'],action:'Add knowledge source',cols:['Document','Collection','Owner','Reviewed','Status'],rows:[['Project delivery playbook','Operations','Alex Morgan','Oct 29','Approved'],['Security access policy','IT','Taylor Kim','Oct 31','Approved'],['Proposal standards','Sales','Jordan Ellis','Oct 25','Approved']],library:[['Delivery checklist update','Alex Morgan','Version 4','Needs review'],['Access policy question','Taylor Kim','Unresolved','Open'],['Missing support reference','Jordan Ellis','Source gap','Open']],libcols:['Review item','Owner','Context','Status'],ai:'The sample delivery playbook requires a named business owner, approved source access, agreed acceptance cases, and a review before launch. The access policy adds role-based approval. These are fictional demonstration sources, and the answer should be checked against your approved production documentation.'},
{name:'Operations Agent',accent:'#006e78',tint:'#ebf3f4',label:'OPERATIONS CONTROL',headline:'Operations queue',sub:'Sample request queue · Approval-led execution',tabs:['Work queue','Task register','Approval history'],action:'New request',cols:['Request','Source','Owner','Due','Status'],rows:[['Prepare new client workspace','Email','Alex Morgan','Nov 06','Needs approval'],['Confirm contractor access','Teams','Taylor Kim','Nov 05','Missing context'],['Summarize weekly delivery','SharePoint','Jordan Ellis','Nov 06','Ready for review'],['Review data exception','Email','Unassigned','Nov 04','Needs triage']],library:[['Workspace setup','Reviewed draft','Alex Morgan','Today'],['Weekly summary','Approved locally','Jordan Ellis','Yesterday'],['Access request','Awaiting IT review','Taylor Kim','Yesterday']],libcols:['Work item','Decision','Owner','When'],ai:'The workspace request has a clear goal but requires approved access and an accountable owner before execution. Draft the task breakdown and checklist, identify the missing context, and route the proposal for review. No external workspace or account is created from this demo.'}
];
const ID=Number(document.body.dataset.app),APP=CATALOG[ID];
const sector=sectorCase(resolveIndustry(new URLSearchParams(location.search).get('industry')),ID);
if(sector){
  const [question,source,output,decision]=sector.example;
  Object.assign(APP,{
    headline:sector.desk,sub:question,label:'APPLICATION WORKSPACE',ai:output,
    tabs:[sector.desk,'Case records','Source library'],
    cols:['Record','Owner','Status','Details'],
    rows:[[sector.source,sector.team,'Received',source],[sector.desk+' draft',sector.owner,'Draft',output],['Review decision',sector.owner,'Awaiting review',decision]],
    libcols:['Reference','Context','Evidence'],
    library:[[sector.source,sector.industry,source],['Working analysis',sector.desk,output],['Approval checklist',sector.owner,decision]],
    action:'Add case record'
  });
}
// Illustrative monthly activity for the reporting views, independent of the individual case.
const sectorActivity = {
 "Accounting Services": [
  41,
  38,
  44,
  52
 ],
 "Aerospace & Defense": [
  18,
  21,
  20,
  24
 ],
 "Automotive Aftermarket": [
  53,
  60,
  57,
  65
 ],
 "Banking & Financial Services": [
  39,
  45,
  42,
  48
 ],
 "Commercial Real Estate": [
  21,
  23,
  26,
  25
 ],
 "Construction": [
  18,
  16,
  21,
  19
 ],
 "Consulting Firms": [
  22,
  25,
  24,
  27
 ],
 "Distribution": [
  94,
  89,
  102,
  98
 ],
 "Energy & Utilities": [
  32,
  36,
  34,
  39
 ],
 "Engineering & Architecture": [
  12,
  15,
  13,
  17
 ],
 "Field & Home Services": [
  81,
  88,
  85,
  93
 ],
 "Food, Beverage & Hospitality": [
  68,
  75,
  71,
  80
 ],
 "Healthcare & Life Sciences": [
  44,
  49,
  47,
  53
 ],
 "IT Services": [
  58,
  63,
  61,
  68
 ],
 "Legal Services": [
  33,
  36,
  31,
  38
 ],
 "Manufacturing": [
  46,
  51,
  49,
  56
 ],
 "Marketing Services": [
  41,
  44,
  39,
  47
 ],
 "Private Equity Portfolios": [
  16,
  19,
  18,
  22
 ],
 "Professional Services": [
  66,
  71,
  69,
  75
 ],
 "Retail & Consumer": [
  82,
  88,
  85,
  97
 ],
 "SaaS": [
  41,
  46,
  44,
  51
 ],
 "Supply Chain & Logistics": [
  67,
  72,
  71,
  76
 ]
};
function sectorChart(){
  const metric={4:'Budget revisions reviewed',5:'Opportunities reviewed',6:'Assignments reviewed',8:'Reconciliations completed',
    9:'Forecast updates reviewed',13:'Account reviews',14:'Variance explanations drafted',17:'Margin reviews'}[ID];
  if(!metric)return '';
  return panel(metric,comparisonPlot(['July','August','September','October'],[
    {label:metric,values:sectorActivity[sector.industry]}
  ],value=>String(value)),sector.industry+' · illustrative monthly activity');
}
function sectorWorkspace(){
  const [question,source,output,decision]=sector.example;
  const summary=[...APP.rows,...state.newRows].map((row,i)=>`<tr><td><button class="record-link" data-browse onclick="inspectWorkspace(false,${i})">${esc(row[0])}</button></td><td>${esc(row[1])}</td><td>${esc(row[2])}</td></tr>`).join('');
  return `${head(APP.headline,sector.team)}${sectorChart()}<div class="layout"><div class="stack">${panel('Case activity',`<div class="tablewrap"><table><thead><tr><th>Work item</th><th>Responsible team</th><th>State</th></tr></thead><tbody>${summary}</tbody></table></div>`,sector.industry)}
    ${panel('Source evidence',`<p>${esc(source)}</p><button data-browse onclick="inspectWorkspace(true,0)">Inspect source record</button>`,sector.source)}</div>
    <aside class="stack">${panel('AI work product',`<p>${esc(output)}</p>`,sector.desk)}${panel('Decision for review',`<p>${esc(decision)}</p>${button(state.approved?'Reviewed':'Mark reviewed','reviewRecord()','primary')}`,sector.owner)}</aside></div>`;
}

const state={view:0,selected:0,query:'',filter:'All',growth:12,hours:40,rate:75,reduction:50,adoption:80,realization:60,build:24000,running:3600,capacity:40,simVariant:0,simRun:false,approved:false,budget:[180000,72000,48000,54000,36000,36000],messages:[],reply:'',post:'',version:0,checked:{},tasks:[],newRows:[],aiMessages:[]};
const PATHS={arrow:'M4 12h15m-6-6 6 6-6 6',back:'m14 6-6 6 6 6',plus:'M12 5v14M5 12h14',search:'M20 20l-5-5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0',spark:'m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3',file:'M6 3h8l4 4v14H6zM14 3v5h4M9 12h6M9 16h6',check:'m5 12 4 4L19 6',close:'m6 6 12 12M6 18 18 6',chart:'M3 3v18h18M7 16v-5m5 5V6m5 10v-8',clock:'M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0',people:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M17 4a4 4 0 0 1 0 8m5 9v-2a4 4 0 0 0-3-3.9',mail:'M3 5h18v14H3zM3 5l9 8 9-8',download:'M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4',chevron:'m6 9 6 6 6-6',send:'m3 3 18 9-18 9 4-9-4-9zm4 9h14',link:'m9 15 6-6M7 14l-2 2a3 3 0 0 0 4 4l4-4M11 8l4-4a3 3 0 1 1 4 4l-2 2',folder:'M3 6h7l2 2h9v12H3z',calendar:'M3 5h18v16H3zM7 3v4m10-4v4M3 10h18'};
const icon=n=>`<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="${PATHS[n]||PATHS.file}"/></svg>`;
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=n=>n.toLowerCase().replaceAll(' ','-');
const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
const tag=(t,type='')=>`<span class="tag ${type}">${esc(t)}</span>`;
const avatar=(n='AM')=>`<span class="avatar">${esc(n)}</span>`;
const button=(text,action,type='',ic='')=>`<button class="${type}" ${text?'':`aria-label="${ic==='search'?'Search and help':ic==='close'?'Close dialog':'Open details'}"`} onclick="${action}">${ic?icon(ic):''}${text}</button>`;
const panel=(title,content,subtitle='',extra='')=>`<section class="panel"><div class="panelhead"><div><h2>${title}</h2>${subtitle?`<p>${subtitle}</p>`:''}</div>${extra}</div><div class="panelbody">${content}</div></section>`;
const metric=(label,value,detail='',neutral=false)=>`<div class="metric"><span>${label}</span><b>${value}</b><small class="${neutral?'neutral':''}">${detail}</small></div>`;
const metrics=items=>`<div class="metrics">${items.map(x=>metric(...x)).join('')}</div>`;
const progress=(v)=>`<div class="progress"><i style="width:${Math.max(0,Math.min(100,v))}%"></i></div>`;
const field=(label,key,value,type='number',min='',max='',step='1')=>`<div class="field"><label for="${key}">${label}</label><input id="${key}" aria-label="${label}" type="${type}" value="${esc(value)}" ${min!==''?`min="${min}"`:''} ${max!==''?`max="${max}"`:''} step="${step}" onchange="setInput('${key}',this.value)"></div>`;
const slider=(label,key,value,min=0,max=100,unit='%')=>`<div class="field"><div class="field-row"><label for="${key}">${label}</label><strong id="${key}-value">${value}${unit}</strong></div><input id="${key}" type="range" min="${min}" max="${max}" value="${value}" aria-label="${label}" oninput="document.getElementById('${key}-value').textContent=this.value+'${unit}'" onchange="setInput('${key}',this.value)"></div>`;
function table(cols,rows,click=true){return `<div class="tablewrap"><table><thead><tr>${cols.map(x=>`<th>${x}</th>`).join('')}${click?'<th></th>':''}</tr></thead><tbody>${rows.map((r,i)=>`<tr ${click?`data-record="${i}" onclick="openRecord(${Math.max(0,APP.rows.findIndex(original=>original[0]===String(r[0]).split('<small>')[0].replace(/<[^>]*>/g,'')))})"`:''}>${r.map(v=>`<td>${v}</td>`).join('')}${click?`<td>${icon('arrow')}</td>`:''}</tr>`).join('')||`<tr><td colspan="${cols.length+1}"><div class="empty">No records match this view.</div></td></tr>`}</tbody></table></div>`}
function chart(values=[25,36,30,47,43,59,55,70,63,82,78,93],baseline=true){const points=values.map((v,i)=>`${i*600/(values.length-1)},${170-v*1.5}`).join(' ');return `<div class="chart"><svg viewBox="0 0 600 190" preserveAspectRatio="none" role="img" aria-label="Illustrative trend chart">${[30,75,120,165].map(y=>`<line class="gridline" x1="0" x2="600" y1="${y}" y2="${y}"/>`).join('')}${baseline?'<polyline points="0,155 55,143 110,151 165,126 220,135 275,111 330,125 385,93 440,106 495,85 550,91 600,69" fill="none" stroke="#c9d4dc" stroke-width="2" stroke-dasharray="5 5"/>':''}<polygon points="0,180 ${points} 600,180" fill="${APP.accent}" opacity=".055"/><polyline points="${points}" fill="none" stroke="${APP.accent}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="chartlabels">${['Jan','Mar','May','Jul','Sep','Dec'].map(m=>`<span>${m}</span>`).join('')}</div>`}
const aiCard=(title='AI perspective',text=APP.ai)=>`<section class="ai-card"><h3>${title}</h3><p>${esc(text)}</p>${button('Explore the analysis','openAI()','','arrow')}</section>`;
const bar=(label,v,tail)=>`<div class="barrow"><span>${label}</span>${progress(v)}<b>${tail??v+'%'}</b></div>`;
const checklist=items=>items.map(x=>`<div class="checkrow">${icon('check')}<span>${x}</span></div>`).join('');
let clientGuideVisible=typeof location!=='undefined'&&typeof URLSearchParams!=='undefined'&&new URLSearchParams(location.search).get('guide')==='1';
const workReviews = [
  [
    "Proposal on deadline",
    "Confirm the acceptance criteria before this draft goes to delivery.",
    [
      1,
      3,
      4
    ]
  ],
  [
    "Attendee follow-up",
    "Review the attendee\u2019s question before approving the first email.",
    [
      1,
      2,
      4
    ]
  ],
  [
    "Qualification review",
    "Verify the buyer\u2019s role before accepting the account handoff.",
    [
      2,
      3,
      4
    ]
  ],
  [
    "Experiment review",
    "Compare persona objections across variants before choosing wording.",
    [
      1,
      2,
      3
    ]
  ],
  [
    "Budget review",
    "Check recurring commitments before approving department spend.",
    [
      1,
      2,
      3
    ]
  ],
  [
    "Pipeline review",
    "Ask the deal owner for evidence supporting the close date.",
    [
      2,
      3,
      4
    ]
  ],
  [
    "Assignment review",
    "Compare the hours on this assignment with the weekly team plan.",
    [
      1,
      2,
      3
    ]
  ],
  [
    "Project dependency",
    "Confirm the access decision with the owner before the milestone review.",
    [
      1,
      2,
      3
    ]
  ],
  [
    "Report under review",
    "Check the reporting period and metric definition before comparing results.",
    [
      1,
      2,
      3
    ]
  ],
  [
    "Forecast baseline",
    "Compare the working scenario against the approved base plan.",
    [
      1,
      2,
      3
    ]
  ],
  [
    "Investment review",
    "Check the adoption assumption behind this saved evaluation.",
    [
      1,
      2,
      3
    ]
  ],
  [
    "Delivery review",
    "Review milestones and dependency owners before the next status update.",
    [
      1,
      2,
      3
    ]
  ],
  [
    "Research review",
    "Verify the source signal before choosing an outreach draft.",
    [
      1,
      3,
      4
    ]
  ],
  [
    "Renewal review",
    "Check the relationship evidence before agreeing on a next step.",
    [
      1,
      2,
      3
    ]
  ],
  [
    "Close review",
    "Reconcile actuals against plan before writing variance commentary.",
    [
      1,
      2,
      3
    ]
  ],
  [
    "Investment decision",
    "Confirm the baseline evidence before advancing the case.",
    [
      1,
      2,
      3
    ]
  ],
  [
    "Evidence review",
    "Separate usage evidence from the capacity estimate before reporting impact.",
    [
      1,
      2,
      4
    ]
  ],
  [
    "Account economics",
    "Reconcile direct labor against the client\u2019s delivered scope.",
    [
      1,
      2,
      4
    ]
  ],
  [
    "Ticket under review",
    "Confirm the connection state before recommending a fix.",
    [
      1,
      2,
      3
    ]
  ],
  [
    "Approved reference",
    "Verify the source revision before using its launch criteria.",
    [
      1,
      2,
      3
    ]
  ],
  [
    "Approval queue",
    "Confirm the workspace owner and access policy before approval.",
    [
      1,
      2,
      4
    ]
  ]
];
function inspectWorkspace(library=false, index=0) {
  const list = library ? APP.library : [...APP.rows,...state.newRows];
  const columns = library ? APP.libcols : APP.cols;
  const selected = list[index];
  if (!selected) return;
  let dialog = document.querySelector('.record-inspector');
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.className = 'record-inspector';
    document.body.append(dialog);
    dialog.addEventListener('close', () => dialog.remove());
  }
  dialog.innerHTML = `<div class="inspector-top"><span>${esc(APP.name)} / Record explorer</span>
    <button aria-label="Close record explorer" onclick="this.closest('dialog').close()">${icon('close')}</button></div>
    <div class="inspector-layout"><nav aria-label="Browse sample records">
      ${[[...APP.rows,...state.newRows], APP.library].map((records,group)=>`<h3>${esc(APP.tabs[group+1])}</h3>
        ${records.map((r,i)=>`<button aria-current="${Number(library)===group&&i===index?'true':'false'}" onclick="inspectWorkspace(${Boolean(group)},${i})">${esc(r[0])}</button>`).join('')}`).join('')}</nav>
      <section><span class="inspector-label">${esc(columns[0])}</span><h2>${esc(selected[0])}</h2>
      <dl>${columns.slice(1).map((field,j)=>`<div><dt>${esc(field)}</dt><dd>${esc(selected[j+1]??'—')}</dd></div>`).join('')}</dl>
      <small>Sample workspace record</small></section></div>`;
  if (!dialog.open) dialog.showModal();
  else dialog.querySelector('button[aria-current="true"]')?.focus();
}

const outputExamples = [
  [
    "Proposal draft",
    "Acceptance criteria need an owner",
    "By day 90, the pilot owner will validate the agreed workflow against the acceptance checklist. Open item: who signs off on source access?"
  ],
  [
    "Follow-up email",
    "First touch · draft",
    "You asked how the workflow connects to your existing systems. The operations brief walks through that handoff. Which system holds the record your team updates today?"
  ],
  [
    "Qualification note",
    "Northstar · route to sales",
    "Repeated engagement around workflow integration supports a priority follow-up. The buying contact is still unknown. Confirm who owns the workflow before routing."
  ],
  [
    "Persona comparison",
    "Pilot offer · simulated reactions",
    "Operations wants a specific task the pilot will improve. IT asks which systems need access. Finance wants a baseline against which to judge the pilot."
  ],
  [
    "Budget review",
    "Software request · open assumption",
    "Separate the renewal from the implementation cost. The recurring charge belongs in next year’s run rate. Ask the owner to confirm the renewal date before approving the line."
  ],
  [
    "Forecast note",
    "Late-stage deals · evidence check",
    "Two deals carry much of the late-stage forecast. Request a buyer-confirmed decision date for each before including either in committed revenue."
  ],
  [
    "Capacity exception",
    "Jordan Ellis · 4 hours over capacity",
    "32 assigned hours plus 12 proposed hours would bring Jordan to 44 against a 40-hour week. Check whether Taylor can take the integration task before moving it."
  ],
  [
    "Project briefing",
    "Source access · awaiting owner",
    "The prototype review can continue on sample records. Integration is waiting for source access. Assign an owner to that decision before the next checkpoint."
  ],
  [
    "Report reconciliation",
    "Performance review · comparison needed",
    "Revenue and contribution moved differently. Compare both reports over the same period and inspect delivery effort by account before attributing the gap to higher costs."
  ],
  [
    "Scenario commentary",
    "Measured expansion · 12% growth",
    "At 12% growth, the $3.84M baseline becomes about $4.30M. The projection assumes delivery can absorb the increase. Finance should test that assumption against capacity."
  ],
  [
    "Investment review",
    "Payback sensitivity · adoption",
    "Run the same case with lower adoption. Keep the build cost fixed and compare payback. Released hours count as capacity until the sponsor verifies how they will be used."
  ],
  [
    "Status draft",
    "Next milestone · decision pending",
    "Client access is still open. Record the decision owner and due date before marking the milestone on track."
  ],
  [
    "Outreach draft",
    "Reporting workflow · research hypothesis",
    "How does your team reconcile reports from multiple owners before the weekly review? Verify that this workflow exists at the account before using the draft."
  ],
  [
    "Account brief",
    "Renewal review · owner follow-up",
    "Engagement has declined while a delivery question remains open. Ask the account owner to verify both signals and agree a follow-up before the renewal conversation."
  ],
  [
    "Variance commentary",
    "Actuals vs. budget · draft",
    "Revenue exceeded plan, but delivery costs rose as well. Reconcile labor and contractor charges before attributing the cost variance to higher volume."
  ],
  [
    "Business case draft",
    "Recurring report · baseline missing",
    "The proposed automation would reduce report preparation. Weekly effort has not been measured. Capture a full reporting cycle before calculating the investment case."
  ],
  [
    "Impact assessment",
    "Adoption observed · benefit unverified",
    "Usage confirms the application is being opened. It does not establish time saved. Measure completion time for the same task before and after rollout."
  ],
  [
    "Margin exception",
    "Account review · scope check",
    "Delivery hours grew faster than revenue. Verify the labor allocation and compare the work delivered with the contracted scope before changing pricing."
  ],
  [
    "Suggested reply",
    "Connection issue · specialist review",
    "Which device model are you using, and what does its connection indicator show? Those details will help us check whether the steps in the reviewed case apply here."
  ],
  [
    "Cited answer draft",
    "Pilot launch · readiness check",
    "Confirm source access, a named workflow owner, and the acceptance criteria in the approved delivery guidance. Ask the owner to resolve any missing sign-off."
  ],
  [
    "Access review",
    "Contractor request · missing owner",
    "Which system does the contractor need, who owns it, and when should access expire? Hold the request for owner review until those fields are complete."
  ]
];
const decisionScenes = [
  ['RFP intake','A 90-day pilot','Scope is specified. Acceptance ownership is still open.','Proposal review'],
  ['Webinar follow-up','One attendee question','An integration question gives marketing a reason to follow up.','Campaign approval'],
  ['Lead qualification','92 fit / 88 intent','Northstar leads the queue. The buying contact still needs verification.','Sales handoff'],
  ['Message test','Three buyer perspectives','Operations, finance, and IT evaluate the same pilot offer.','Message revision'],
  ['Budget request','A renewal decision','Separate recurring software cost from the one-time implementation.','Finance review'],
  ['Revenue desk','Two late-stage deals','Concentration makes buyer-confirmed close dates especially important.','Forecast review'],
  ['Capacity planning','44 h against 40 h','A proposed 12-hour assignment would push Jordan beyond weekly capacity.','Assignment decision'],
  ['Project coordination','One blocked handoff','Prototype review can proceed while the source-access decision is pending.','Owner assignment'],
  ['Account reconciliation','Three source systems','CRM opportunities, project hours, and finance actuals meet at the account.','Account review'],
  ['Revenue scenario','12% growth case','Compare the $3.84M baseline with the $4.30M expansion scenario.','Scenario validation'],
  ['Investment decision','40 hours per week','The pilot depends on how much released capacity the team actually uses.','Funding review'],
  ['Delivery briefing','A pending access decision','A milestone depends on client access. Its owner and decision date need confirmation.','Milestone review'],
  ['Account research','Three outreach angles','A reporting bottleneck is a research hypothesis until the sales owner verifies it.','Outreach review'],
  ['Renewal desk','Two upcoming renewals','Cedar and Harbor & Field renew within 60 days. Inspect engagement and delivery together.','Account plan'],
  ['October close','$22k revenue upside','Higher delivery costs and operating expenses absorb $20k of the gain.','Variance sign-off'],
  ['Investment case','A missing time baseline','The sponsor needs a measured reporting cycle before valuing automation.','Sponsor review'],
  ['Impact measurement','Usage versus value','Adoption is observable. Time released still needs a workflow baseline.','Evidence review'],
  ['Account economics','One loss-making account','Harbor & Field needs a delivery-cost and scope review before a pricing decision.','Margin review'],
  ['Support triage','A failed reconnection','The device restarts but will not reconnect. Its indicator state narrows the next question.','Specialist review'],
  ['Knowledge retrieval','A pilot launch question','An employee needs approved readiness criteria and the source behind them.','Source verification'],
  ['Access intake','A missing source owner','A contractor request needs a system owner and an access window.','Permission review']
];
// Compare quantities only within a common unit. Values belong to the worked example.
const caseComparisons = {
  2: [['Fit',92],['Intent',88],' / 100'],
  6: [['Capacity',40],['Proposed load',44],' h'],
  9: [['Baseline',3.84],['Expansion',4.30],'M'],
  14: [['Revenue upside',22],['Additional costs',20],'k'],
  16: [['Support response',620],['Executive reporting',410],['Proposals',530],' h']
};
function caseComparison(){
  const config=caseComparisons[ID];
  if(!config)return '';
  const rows=config.slice(0,-1),unit=config.at(-1),max=Math.max(...rows.map(row=>row[1]));
  return `<div class="case-comparison">${rows.map(([label,value])=>`<div><span>${esc(label)}</span><i aria-hidden="true"><b style="width:${value/max*100}%"></b></i><strong>${unit==='M'||unit==='k'?'$':''}${unit==='M'?value.toFixed(2):value}${unit}</strong></div>`).join('')}</div>`;
}
function decisionPreview(stage=0) {
  const [desk, signal, finding, handoff] = decisionScenes[ID];
  const [artifact, subject, draft] = outputExamples[ID];
  const flow = CLIENT_PROJECTS[ID].workflow;
  const steps = [
    [desk, signal, finding],
    [artifact, subject, draft],
    ['Decision owner', handoff, flow.review]
  ];
  const industry=sector?.industry||'';
  const example=sector?.example;
  const industrySteps=example && [
    [industry,example[0],example[1]],
    ['AI output',example[0],example[2]],
    ['Team decision',example[0],example[3]]
  ];
  const [label,title,body]=(industrySteps||steps)[stage];
  return `<section class="decision-desk" aria-label="Worked example">
    <div class="decision-nav"><small>${example?esc(industry)+' · SAMPLE CASE':'WORKED EXAMPLE'}</small><div role="group" aria-label="Explore this case">${['Source','AI output','Team decision'].map((name,i)=>`<button data-browse aria-pressed="${i===stage}" onclick="showDecision(this,${i})"><span>0${i+1}</span>${name}</button>`).join('')}</div></div>
    <div class="decision-content" aria-live="polite"><div><small>${esc(label)}</small><h2>${esc(title)}</h2></div><div><p>${esc(body)}</p>${stage===0&&!example?caseComparison():''}</div></div>
  </section>`;
}
function showDecision(control,stage) {
  const panel=control.closest('.decision-desk');
  const replacement=document.createElement('template');
  replacement.innerHTML=decisionPreview(stage);
  const next=replacement.content.firstElementChild;
  panel.replaceWith(next);
  next.querySelectorAll('button')[stage].focus({preventScroll:true});
}
function workflowPreview() {
  const project = CLIENT_PROJECTS[ID];
  const flow = project.workflow;
  const [artifact, subject, draft] = outputExamples[ID];
  return `<details class="ai-workbench" data-browse>
    <summary class="workflow-summary"><span class="workflow-marker" aria-hidden="true"></span><span class="workflow-heading"><small>AI work sample · ${esc(artifact)}</small><strong>${esc(subject)}</strong></span><span class="workflow-toggle"><span class="when-closed">Inspect workflow</span><span class="when-open">Close workflow</span><i aria-hidden="true"></i></span></summary>
    <div class="ai-workbench-grid"><div class="work-evidence"><small>Source context</small>
      <p>${esc(flow.example[0])}</p>
      <details data-browse><summary>Inspect inputs</summary><ul>${flow.inputs.map(([key,value])=>`<li><b>${esc(key)}</b> ${esc(value)}</li>`).join('')}</ul></details></div>
    <div class="work-result"><small>${esc(artifact)}</small><h2>${esc(subject)}</h2><p>${esc(draft)}</p>
      <details data-browse><summary>How AI produced this</summary><ol>${flow.ai.map(([key,value])=>`<li><b>${esc(key)}</b> ${esc(value)}</li>`).join('')}</ol></details></div></div>
    <footer><b>Team review</b><span>${esc(flow.review)}</span></footer>
  </details>`;
}
function reviewStrip(){
  if(sector)return '';
  const [label,question,fields] = workReviews[ID];
  const followsSelection = [0, 1, 12, 18].includes(ID);
  const row = APP.rows[followsSelection ? state.selected : 0] || APP.rows[0];
  return `<section class="review-strip" aria-label="${esc(label)}"><div class="review-item"><small>${esc(label)}</small><button class="inspect-active" data-browse onclick="inspectWorkspace(false,${followsSelection ? state.selected : 0})">${esc(row[0])} ${icon('arrow')}</button>${followsSelection && state.selected ? '' : `<p>${esc(question)}</p>`}</div><dl>${fields.map(i=>`<div><dt>${esc(APP.cols[i])}</dt><dd>${esc(row[i])}</dd></div>`).join('')}</dl></section>`;
}
const readOnlyPreview = new URLSearchParams(location.search).get('preview') === '1';
function render(){document.documentElement.style.setProperty('--accent',APP.accent);document.documentElement.style.setProperty('--tint',APP.tint);document.body.classList.toggle('night',ID===12);document.title=APP.name+' | Nine-67';document.getElementById('app').innerHTML=`<div class="suitebar"><a href="../${location.search.includes('industry=')&&sector?'?industry='+encodeURIComponent(sector.industry):''}#home">${icon('back')} Recent projects</a><span>DESIGNED & BUILT BY NINE-67</span><div><a href="../${sector?'?industry='+encodeURIComponent(sector.industry):''}#${slug(APP.name)}/how-it-works">How it works</a><span>Interactive example · Sample data</span></div></div><header class="appbar"><div class="appbrand"><a class="product-mark" href="https://nine-67.com/" aria-label="Visit Nine-67"><img src="../nine67-logo.png" alt=""></a><div><b>${APP.name}</b><small>Team workspace</small></div></div><div class="userbar"><span>Sample workspace</span>${button('Guided example','toggleClientGuide()','quiet')}${button('','openHelp()','quiet','search')}${avatar('AM')}</div></header><div class="workspace-switcher"><span class="rail-caption">Workspace views</span><nav class="appnav" aria-label="Application views">${APP.tabs.map((t,i)=>`<button class="${state.view===i?'active':''}" aria-current="${state.view===i?'page':'false'}" onclick="changeView(${i})">${esc(t)}${i===1?' <small>'+ (APP.rows.length+state.newRows.length)+'</small>':''}</button>`).join('')}</nav><button class="browse-records" data-browse onclick="inspectWorkspace()">${icon('folder')} Browse records</button><div class="rail-records"><span class="rail-caption">${sector?'Case records':esc(APP.cols[0])+' records'}</span>${APP.rows.slice(0,3).map((row,i)=>`<button data-browse onclick="inspectWorkspace(false,${i})">${icon('file')}<span>${esc(row[0])}</span></button>`).join('')}</div></div><main class="workspace">${sector?sectorHero(sector.industry,'../'):''}${clientGuideVisible?clientGuidePanel():''}${state.view===0?(sector?sectorWorkspace():SCREENS[ID]()):recordView()}${state.view===0&&!sector?workflowPreview():''}<p class="disclosure">Representative application UI · Fictional records · Simulated AI · No external actions or messages</p></main>`;
if(readOnlyPreview) lockPreviewControls();
}
function lockPreviewControls(){
  const root=document.getElementById('app');
  root.querySelectorAll('button,a,input,select,textarea,[tabindex],[onclick]').forEach(el=>{
    if(el.closest('.appnav,[data-browse]')) return;
    if(el.matches('[onclick]') && /^(selectProposal|selectAttendee|selectProspect|selectSupport)\(\d+\)$/.test(el.getAttribute('onclick'))){el.dataset.browse='';return;}
    el.tabIndex=-1;
    if(el.matches('input,textarea')) el.readOnly=true;
  });
}
function head(title=APP.headline,sub=APP.sub,actions=''){return `<div class="pagehead"><div><span class="eyebrow">${APP.label}</span><h1>${title}</h1><p>${sub}</p></div><div class="actions">${actions||button(APP.action,'primaryAction()','primary','plus')}</div></div>${state.view===0?decisionPreview()+reviewStrip():''}`}
function changeView(v){state.view=v;state.query='';render()}
function setInput(k,v){let n=Number(v);if(!Number.isFinite(n))return;const bounds={growth:[-40,60],hours:[0,10000],rate:[0,10000],reduction:[0,100],adoption:[0,100],realization:[0,100],build:[0,10000000],running:[0,10000000],capacity:[1,80]};if(bounds[k])n=Math.min(bounds[k][1],Math.max(bounds[k][0],n));state[k]=n;render()}
function recordView(){const lib=state.view===2,cols=lib?APP.libcols:APP.cols,rows=lib?APP.library:[...APP.rows,...state.newRows];const filtered=rows.map((r,i)=>({r,i})).filter(({r})=>!state.query||r.join(' ').toLowerCase().includes(state.query.toLowerCase()));return `${head(APP.tabs[state.view],lib?'Approved references, decisions, and working context.':'Inspect a record to see its context and next step.',button('Export CSV','exportRecords()','','download')+button('Add record','newRecord()','primary','plus'))}<div class="toolbar"><div class="search">${icon('search')}<input data-browse aria-label="Search records" placeholder="Search ${lib?'references':'records'}…" value="${esc(state.query)}" oninput="filterRecords(this.value)"></div><span class="small muted">${filtered.length} records · Sample workspace</span></div><div id="records-table" class="panel">${recordTable(filtered,cols)}</div><div class="grid2" style="margin-top:22px">${aiCard('Context for this workspace')}${panel('Review and ownership',checklist(['Inspect the original record and source context.','Confirm missing information with the accountable owner.','Review AI-prepared work before taking an external action.']))}</div>`}
function recordTable(items,cols){return `<div class="tablewrap"><table><thead><tr>${cols.map(x=>`<th>${esc(x)}</th>`).join('')}<th></th></tr></thead><tbody>${items.map(({r,i})=>`<tr data-record="${i}" onclick="openRecord(${i})">${r.map((v,j)=>`<td>${readOnlyPreview&&j===0?`<button class="record-link" data-browse onclick="event.stopPropagation();inspectWorkspace(${state.view===2},${i})">${esc(v)}</button>`:esc(v)}</td>`).join('')}<td>${icon('arrow')}</td></tr>`).join('')||`<tr><td colspan="${cols.length+1}"><div class="empty">No matching records.</div></td></tr>`}</tbody></table></div>`}
function filterRecords(q){state.query=q;const lib=state.view===2,rows=lib?APP.library:[...APP.rows,...state.newRows],items=rows.map((r,i)=>({r,i})).filter(({r})=>r.join(' ').toLowerCase().includes(q.toLowerCase()));document.getElementById('records-table').innerHTML=recordTable(items,lib?APP.libcols:APP.cols)}
function modal(title,content,wide=false){document.getElementById('modal-root').innerHTML=`<div class="modal-backdrop" onclick="if(event.target===this)closeModal()"><section class="modal ${wide?'wide':''}" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="modalhead"><div><span class="eyebrow">${APP.name} / SAMPLE WORKSPACE</span><h2>${esc(title)}</h2></div>${button('','closeModal()','quiet','close')}</div>${content}</section></div>`;document.querySelector('.modal button')?.focus()}
function closeModal(){document.getElementById('modal-root').innerHTML=''}
function toast(t){const el=document.getElementById('toast');el.className='toast';el.textContent=t;el.hidden=false;clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>{el.hidden=true},3500)}
function openRecord(i){const lib=state.view===2,rows=lib?APP.library:[...APP.rows,...state.newRows],cols=lib?APP.libcols:APP.cols,r=rows[i]||APP.rows[0];modal(r[0],`<div class="grid2">${cols.slice(1).map((h,j)=>`<div class="contextitem"><span>${esc(h)}</span><b>${esc(r[j+1]||'To confirm')}</b></div>`).join('')}</div><div class="divider"></div><h3>Context & next step</h3><p style="margin-top:12px">${esc(APP.ai)}</p><div class="actions">${button('Mark reviewed','reviewRecord()','primary','check')}${button('Ask AI about this','openAI()','','spark')}${button('Inspect source','openSource()','','file')}</div>`)}
function reviewRecord(){if(sector){if(state.view===2)APP.library[2][2]=sector.example[3]+' Reviewed in this session.';APP.rows[2][2]='Reviewed'}state.approved=true;closeModal();toast('Record marked reviewed in this sample workspace.');render()}
function newRecord(){modal(APP.action,`<div class="field"><label for="new-name">${esc(APP.cols[0])}</label><input id="new-name" placeholder="Enter ${esc(APP.cols[0].toLowerCase())}"></div><div class="grid2">${APP.cols.slice(1).map((label,i)=>`<div class="field"><label for="new-field-${i+1}">${esc(label)}</label><input id="new-field-${i+1}" value="${/owner/i.test(label)?(sector?.owner||'Alex Morgan'):/status|stage/i.test(label)?'Draft':''}" placeholder="${esc(label)}"></div>`).join('')}</div><p class="note">Saved in the current demo session. No external system is updated.</p><div class="actions">${button('Create record','createRecord()','primary','plus')}</div>`)}
function createRecord(){const name=document.getElementById('new-name').value.trim();if(!name){toast('Enter a record name.');return}const row=[name,...APP.cols.slice(1).map((_,i)=>document.getElementById('new-field-'+(i+1)).value.trim()||'To confirm')];state.newRows.push(row);state.view=1;closeModal();render();toast('Record added to this sample workspace.')}
function primaryAction(){if(sector){newRecord();return}if([9,10].includes(ID)){toast('Scenario saved in this sample session.');state.approved=true;return}if(ID===12){toast('Sample research batch refreshed. No web research was run.');return}if(ID===3){state.simRun=true;render();toast('Illustrative persona evaluation complete.');return}newRecord()}
function openSource(){modal('Source context',`<div class="attachment">${icon('file')}<div><b>${esc(APP.library[0][0])}</b><div class="tiny muted">Illustrative reference · Not a production source</div></div></div><p>${esc(APP.ai)}</p><div class="divider"></div><p class="note">A production implementation would show the approved source passage, document location, version, and access scope. This is fictional demonstration context.</p><div class="actions">${button('Back to workspace','closeModal()','primary')}</div>`)}
function openAI(){state.aiMessages=[];drawAI()}
function drawAI(){modal('AI workspace assistant',`<div class="ai-dialog-log">${state.aiMessages.length?state.aiMessages.map(x=>`<p><strong>${esc(x.q)}</strong>${esc(x.a)}</p>`).join(''):`<p><strong>Workspace context</strong>${esc(APP.ai)}</p>`}</div><div class="field" style="margin-top:17px"><label for="ai-question">Ask about this workspace</label><input id="ai-question" placeholder="What should the team do next?" onkeydown="if(event.key==='Enter')askAI()"></div><div class="actions">${button('Ask a question','askAI()','primary','spark')}${button('Inspect source','openSource()','','file')}</div><p class="note" style="margin-top:14px">Predefined AI simulation using the sample workflow context. No API is called.</p>`)}
function askAI(){const input=document.getElementById('ai-question'),q=input.value.trim();if(!q)return;let a=APP.ai;if(/source|evidence|where/i.test(q))a='The relevant demonstration references are '+APP.library.map(r=>r[0]).join(', ')+'. Open source context to inspect the sample passage. A live implementation would cite your approved documents and preserve their access permissions.';else if(/cost|price|security|legal|compliance/i.test(q))a='This sample does not establish a production cost, security approval, or compliance decision. Those depend on your data, integrations, access requirements, model usage, and operating scope. The team would confirm them during discovery.';else if(!/next|review|risk|help|recommend|summar|why|how|what|compare|draft|priority/i.test(q))a='I do not have an approved source for that question in this sample workspace. Try asking about the next step, review requirements, risks, or sources.';state.aiMessages.push({q,a});drawAI()}
function exportRecords(){const lib=state.view===2,rows=lib?APP.library:[...APP.rows,...state.newRows],cols=lib?APP.libcols:APP.cols;const csv=[cols,...rows].map(r=>r.map(x=>'"'+String(x).replaceAll('"','""')+'"').join(',')).join('\n');download(slug(APP.name)+'-sample.csv',csv,'text/csv');toast('Sample records exported as CSV.')}
function download(name,text,type='text/plain'){const url=URL.createObjectURL(new Blob([text],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function openHelp(){modal('Explore this example application',`<p>${esc(APP.sub)}. Use the application navigation to explore the main workspace, records, and references. Click a record to inspect its context. Try the filters, editable inputs, or AI assistance in the main workspace.</p><div class="divider"></div><h3>What this demonstration represents</h3><p style="margin-top:12px">A designed example of the product experience. Records are fictional, AI responses are simulated, and no external messages or system changes occur.</p><div class="actions">${button('Explore the workspace','closeModal()','primary')}</div>`)}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

function toggleClientGuide(){clientGuideVisible=!clientGuideVisible;render()}
function clientGuidePanel(){if(sector)return `<section class="client-guide-panel"><div class="client-guide-intro"><div><span>${esc(sector.industry)} · Guided example</span><h2>${esc(sector.desk)}</h2></div>${button('Hide guide','toggleClientGuide()','quiet')}</div><div class="client-guide-steps">${APP.rows.map((r,i)=>`<button data-browse onclick="inspectWorkspace(false,${i})">${esc(r[0])}</button>`).join('')}</div></section>`;const p=CLIENT_PROJECTS[ID];return `<section class="client-guide-panel" aria-label="Guided example"><div class="client-guide-intro"><div><span>GUIDED EXAMPLE · SAMPLE DATA</span><h2>${esc(p.scenario)}</h2><p>Try these three actions. Inspect the output, then consider the equivalent workflow in your team.</p></div>${button('Hide guide','toggleClientGuide()','quiet')}</div><div class="client-guide-steps">${p.steps.map((s,i)=>`<button onclick="clientGuideAction(${i})"><span>0${i+1}</span><b>${esc(s)}</b>${icon('arrow')}</button>`).join('')}</div><p class="note">AI responses are simulated. Changes stay in this demo session; no external action is taken.</p></section>`}
function clientGuideAction(i){const p=CLIENT_PROJECTS[ID];if(!p.actions[i])return;closeModal();state.view=0;render();const action=CLIENT_GUIDE_ACTIONS[ID]?.[i];if(typeof action==='function')action()}
