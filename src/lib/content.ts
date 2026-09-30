/**
 * Long-form site content: insight essays, the legal and trust pages, the
 * engagement FAQ, and careers. Kept apart from lib/data.ts so the structural
 * content (services, industries, navigation) stays readable.
 */

export type Block = { type: "h2" | "p" | "ul" | "callout"; text: string };
export type PageBlock = { type: "p" | "ul"; text: string };

export type Essay = {
  slug: string;
  deck: string;
  pullQuote: string;
  body: Block[];
};

export type TrustPage = {
  key: string;
  title: string;
  intro: string;
  sections: { heading: string; blocks: PageBlock[] }[];
};

export const essays: Record<string, Essay> = {
  "operations-are-the-product": {
    "slug": "operations-are-the-product",
    "deck": "No customer has ever read your strategy deck, but every one of them has met your queue, your rejected claim and your five-week licence.",
    "pullQuote": "Your brand is not your promise. It is the median experience of your worst-performing process.",
    "body": [
      {
        "type": "p",
        "text": "At 7:40 on a Tuesday there are already thirty-one people waiting outside a district land registry. The doors open at nine. By half past ten, a woman near the front is told her file is not in this building. It moved to the regional office in March, and she should come back Thursday. She will make this trip three times. Somewhere inside the same ministry there is a strategy document committing to citizen-centred service delivery by 2027. She will never read it. She will describe those three trips to everyone she knows for the next five years."
      },
      {
        "type": "p",
        "text": "That is the whole argument. Customers, citizens, patients and regulators do not experience your intent. They experience your throughput, your handoffs, your error rate, and whether you can answer a question without asking them to call back. Whatever an organisation says about itself, its operation says something else, and the operation is louder. Brand is not built in a campaign. It accumulates one transaction at a time, in the gap between what was promised and how long the thing actually took."
      },
      {
        "type": "h2",
        "text": "The queue is a design decision"
      },
      {
        "type": "p",
        "text": "Most leaders read a queue as a demand problem. Too many applicants, not enough staff, not enough budget. The data almost never supports that reading. Queues are usually produced by variability and by handoffs, not by volume. Work does not move slowly because people work slowly. It moves slowly because it spends most of its life sitting still."
      },
      {
        "type": "p",
        "text": "In one registry we mapped, a standard title transfer ran through fourteen steps and nine handoffs across five units. Hands-on work per file totalled about forty-one minutes. Median elapsed time was nineteen working days, and the ninetieth percentile was thirty-four. More than ninety-five percent of that elapsed time was the file waiting in a tray for someone to pick it up. Adding staff would have bought very little. Removing six of the nine handoffs bought most of the improvement available."
      },
      {
        "type": "p",
        "text": "The queue outside the building is only the visible part. The real queue is inside, invisible, made of paper trays, shared inboxes and approvals that exist because of an old audit finding nobody has revisited. Customers cannot see your org chart. They feel every boundary in it."
      },
      {
        "type": "callout",
        "text": "Your brand is not your promise. It is the median experience of your worst-performing process."
      },
      {
        "type": "h2",
        "text": "Claims are where rework becomes reputation"
      },
      {
        "type": "p",
        "text": "Insurers, hospital groups and benefits agencies all run the same shape of process. A claim arrives, it is checked, it is paid or returned. The number that governs the customer's opinion of you is first-time-right: how often a case completes without being sent back."
      },
      {
        "type": "p",
        "text": "In one health insurer's claims desk we reviewed, thirty-one percent of submissions were returned to the provider at least once. Eighty-two percent of those returns came down to three fields being wrong or missing. Each return added roughly nine calendar days and two phone calls. The desk was not under-resourced by any sensible benchmark. Close to a third of its total workload existed only because of its own earlier failures."
      },
      {
        "type": "p",
        "text": "That is failure demand: contact created by an operation not doing the job properly the first time. It is the most expensive line in most service organisations and it almost never appears in a budget, because it is distributed across every team as ordinary volume. Validating three fields at the point of capture removed more cost than any headcount decision available to that business, and it changed what providers said about the insurer in a market where providers talk constantly."
      },
      {
        "type": "h2",
        "text": "Licensing sets the price of doing business with you"
      },
      {
        "type": "p",
        "text": "Licensing and permitting are where an institution's operating quality becomes an economic fact. A trading licence that takes five weeks to renew is not an administrative detail. It is five weeks of a small business not hiring, not importing, not signing a lease. The cost lands outside your organisation, which is precisely why it goes unmeasured inside it."
      },
      {
        "type": "p",
        "text": "In one utility we looked at, a new commercial connection averaged forty-seven days end to end. Thirty-one of those days were spent waiting for a site survey slot allocated from a paper diary held in a single scheduling office. The field crews had spare capacity most weeks. The scheduling method did not. That utility's reputation for being difficult to deal with was, in operational terms, one diary."
      },
      {
        "type": "callout",
        "text": "Reputations that feel cultural are almost always structural. \"They are slow\" is rarely about slow people. It is about waiting work."
      },
      {
        "type": "h2",
        "text": "Five numbers that predict your complaints"
      },
      {
        "type": "p",
        "text": "If you intend to manage operational quality as brand quality, most existing dashboards are the wrong instrument. They report activity: cases handled, calls answered, tickets closed. Track these five instead, per process, weekly."
      },
      {
        "type": "ul",
        "text": "Elapsed time at the ninetieth percentile, not the average. Averages hide exactly the cases that generate complaints and escalations.\nFirst-time-right rate: the share of cases completed without being returned, corrected or resubmitted.\nFailure demand: the share of inbound contacts that exist only because something earlier went wrong.\nHandoff count: how many times a case changes owner between request and resolution.\nChase rate: the share of cases where the customer had to follow up to make anything happen."
      },
      {
        "type": "p",
        "text": "None of these require a new system to start measuring. Four can be counted by hand from a sample of a hundred recent cases. Doing exactly that, before procuring anything, is the highest-return week most operations teams will spend this year."
      },
      {
        "type": "h2",
        "text": "What to do before this quarter ends"
      },
      {
        "type": "p",
        "text": "Choose the one process your customers touch most often. Not the one that is easiest to change, and not the one with an available budget line. Then, inside ninety days:"
      },
      {
        "type": "ul",
        "text": "Walk it as a customer. Submit a real request, under a real name, and time every stage. Leaders who do this usually find two or three steps that nobody in the building can explain the purpose of.\nPull a hundred recent cases and calculate elapsed time at the median and the ninetieth percentile. Publish both internally, by name, weekly.\nCount the handoffs and mark every point where work sits waiting for a person rather than being worked on. That map is your improvement plan.\nIdentify the top three causes of rework and fix them where the information is first captured. Correcting downstream is always more expensive than validating upstream.\nGive one named person ownership of end-to-end elapsed time. Not their department's segment of it. The whole thing, from the customer's first contact to their last."
      },
      {
        "type": "p",
        "text": "Do that and you will move a number your customers can actually feel by the end of next quarter. Digitisation matters and it will matter more, but a system installed on top of a process with nine handoffs produces the same delay with better logging. The order of operations is: understand the flow, remove the waiting, then automate what remains. That sequence is the difference between transformation that shows up in a customer's day and transformation that shows up only in a slide."
      }
    ]
  },
  "ai-where-it-pays": {
    "slug": "ai-where-it-pays",
    "deck": "The returns sit in document handling, record matching, drafted responses and exception queues. Here is how to price that work before you automate any of it.",
    "pullQuote": "The best test of a deployment is not how impressive the demo is. It is whether you already pay people to do the same task.",
    "body": [
      {
        "type": "p",
        "text": "Walk any large back office and you will find a room like this one. Eleven people, three screens each, moving information from one system into another. A supplier invoice arrives as a scanned PDF. Someone opens it, reads the line items, checks them against a purchase order held in a different system, keys the result into a third, and sets aside anything that does not reconcile. Average handling time is eleven minutes. Volume is about 3,000 a month. Nobody on the executive committee can tell you what that room costs. It has never been a line item."
      },
      {
        "type": "p",
        "text": "Two floors up, the same organisation is nine months into a flagship programme with a steering committee, a vendor, a data platform, and a demonstration that impresses every visitor who sees it once. It has not yet changed a single decision the organisation makes."
      },
      {
        "type": "p",
        "text": "The distance between those two rooms is where most of the available return is sitting."
      },
      {
        "type": "h2",
        "text": "The work that never makes the press release"
      },
      {
        "type": "p",
        "text": "The deployments that pay back inside a year look almost identical. They are repetitive, they are already staffed, the output can be checked by someone who was doing the job last month, and a wrong answer costs a correction rather than a lawsuit. Four families cover most of the ground."
      },
      {
        "type": "ul",
        "text": "Reading documents. Invoices, claims, permits, contracts, customs declarations. Anything where a person opens a file and pulls structured facts out of unstructured text.\nMatching records. Reconciling a payment to an obligation, a citizen to a duplicate record, a meter to a premises. It is judgement over near-misses, at enormous volume.\nDrafting responses. First drafts of correspondence, tender clarifications, case notes, standard letters. Not sending. Drafting. A named human still signs.\nMonitoring exceptions. Watching a stream of transactions or alarms for the ones that need attention. Most exception queues are sampled at 2 to 5 percent because full review is unaffordable. Full review changes what an operation is capable of catching."
      },
      {
        "type": "p",
        "text": "None of these make a compelling board slide. All four share the property that makes automation bankable: you can count the current cost, and you can verify the new output against a known answer."
      },
      {
        "type": "callout",
        "text": "The best test of a deployment is not how impressive the demo is. It is whether you already pay people to do the same task, and can count them."
      },
      {
        "type": "h2",
        "text": "Cost per task, before and after"
      },
      {
        "type": "p",
        "text": "Most business cases here are written backwards: someone estimates a benefit, then reverse-engineers a cost to justify it. Establish the current unit economics first and the decision usually makes itself. The method below takes a week per process."
      },
      {
        "type": "ul",
        "text": "Define the unit. One invoice processed. One claim adjudicated. One record matched and confirmed. If you cannot state it in a sentence, the process is not stable enough to automate yet.\nCount twelve months of actual volume, not planned volume, including the peak.\nBuild a fully loaded hourly cost: salary, on-costs, supervision, systems, space, divided by productive hours genuinely available. Use roughly 1,450 hours a year, not 2,080. The gap between those two figures is where most business cases quietly lie.\nMeasure handling time three ways: what staff report, what you observe, what system timestamps show. Use the observed figure; self-reports run 30 to 40 percent low.\nAdd the rework tail: what share comes back, and what each correction costs. This is usually the largest hidden number in the process.\nOnly then model the after case: inference cost per task, review time on the cleared path, full human cost on the exception path, and the annual cost of running and monitoring it."
      },
      {
        "type": "p",
        "text": "A worked example, using figures typical of a mid-sized finance operation we have mapped. 36,000 invoices a year at eleven minutes each is 6,600 hours, about 4.5 full-time equivalents. At a fully loaded $28 per productive hour, that is $184,800. Nine percent come back for correction at 25 minutes each, adding 1,350 hours, or $37,800. True cost per invoice: $6.18."
      },
      {
        "type": "p",
        "text": "Now the after case. Extraction and matching run automatically. 71 percent of invoices clear with a 40-second human confirmation, which is 284 hours. The remaining 29 percent go to a person with the reading already done, at nine minutes each, or 1,566 hours. Inference costs about four cents an invoice, $1,440 a year. Running and monitoring it costs $45,000 a year, including a named owner's time. Rework falls to three percent. Total: roughly $110,800, or $3.08 an invoice. A $180,000 build pays back on labour alone in about nineteen months."
      },
      {
        "type": "p",
        "text": "Two things about that number deserve saying plainly. The $111,000 is released capacity, not cash, until someone decides what those 4.5 people now do; a case that books it as savings without a redeployment plan will not survive the finance director. And labour was not the biggest effect. Approval time fell from eleven days to two, which put early-payment discounts back within reach across a $40m spend base. Nobody had modelled that, because the case had been written about staff time."
      },
      {
        "type": "h2",
        "text": "Why the headline project underperforms"
      },
      {
        "type": "p",
        "text": "The flagship is usually chosen for its narrative rather than its volume. It gets board attention precisely because it is novel, which means no baseline exists, which means nobody will ever be able to say whether it worked. That ambiguity is comfortable for everyone involved, which is why these programmes run for years."
      },
      {
        "type": "p",
        "text": "They also tend to depend on data that does not exist yet, or on a process nobody has written down. A process that varies by office, by officer and by month cannot be automated. It can only be documented, standardised, then automated. Skipping the middle step is the most common and most expensive error in this field. The real cost is not the wasted budget, it is the political capital: when the flagship stalls, the organisation concludes the technology does not work here, and the deployments that would have funded it never get approved."
      },
      {
        "type": "p",
        "text": "A working rule. If a proposal cannot name the unit of work, the current cost per unit, and the person who checks the output, it is not a deployment. It is a research project. Fund research as research, at research scale, and keep it out of the operating plan."
      },
      {
        "type": "h2",
        "text": "What separates a pilot from an operation"
      },
      {
        "type": "p",
        "text": "The difference is rarely technical."
      },
      {
        "type": "ul",
        "text": "The owner sits in the operating line, not in an innovation unit, and carries the result in their own objectives.\nA review path exists, with a sampling rate that starts high and comes down on evidence, not optimism.\nException rate is reported weekly alongside volume and cycle time. A rising rate is the earliest signal that something upstream has changed.\nA kill threshold is agreed before launch: below this accuracy, or above this cost per task, it goes off.\nThe redeployment plan for released hours is agreed before launch, not after."
      },
      {
        "type": "h2",
        "text": "What to do before the quarter closes"
      },
      {
        "type": "p",
        "text": "Pick your three highest-volume repetitive tasks. Not the most interesting ones. The ones with the largest annual count. Instrument them for four weeks: volume, observed handling time, rework rate, exception rate. That is a spreadsheet and an observer, not a programme."
      },
      {
        "type": "p",
        "text": "Then add one line to the management pack that most executive teams have never seen: the annual cost of your ten most repeated tasks, each with its cost per unit. Run a single deployment against the largest number, with an owner in operations, a 90-day cap and a defined budget."
      },
      {
        "type": "p",
        "text": "You will know inside one quarter whether the economics hold, in the same currency you use for everything else. The organisations that can state their cost per task will spend the next two years compounding small verified gains. The rest will still be evaluating."
      }
    ]
  },
  "digitize-before-automate": {
    "slug": "digitize-before-automate",
    "deck": "Most automation programmes deliver a faster version of the wrong process. The order of operations is the whole discipline, and it costs less than the software.",
    "pullQuote": "Automation multiplies. Point it at eleven approvals when five are needed, and you have funded six redundant approvals in perpetuity, at speed.",
    "body": [
      {
        "type": "p",
        "text": "A procurement function we mapped had just finished automating its purchase approval. The chasing emails were gone. The wet signatures were gone. The director had a dashboard. Median approval time before the project was 19 days. After go-live it was 17."
      },
      {
        "type": "p",
        "text": "Nothing had been misrepresented. The workflow tool did exactly what the contract said it would do. The problem sat upstream: the process had eleven approval steps, and the automation had reproduced all eleven with perfect fidelity. Nine months of implementation bought two days and a recurring licence."
      },
      {
        "type": "p",
        "text": "This is the most common failure pattern in operational transformation, and it is a sequencing failure rather than a technology failure. There is an order to the work. Redesign. Digitize. Automate. Programmes that follow it compound. Programmes that invert it spend real money making the current state permanent."
      },
      {
        "type": "h2",
        "text": "Three different jobs, routinely treated as one"
      },
      {
        "type": "p",
        "text": "The three words get used interchangeably in steering committees. They describe different jobs, with different owners and different outputs."
      },
      {
        "type": "ul",
        "text": "Redesign decides what work should exist: which steps, which decisions, which control, which owner. The output is a signed decision, not a system. The owner is an executive.\nDigitize makes the work legible. Every step captured in structured form as it happens: who acted, when, on what evidence. The output is a reliable record and, usually for the first time, a baseline. The owner is the process owner.\nAutomate removes hands from steps that no longer need them. The output is capacity and cycle time. The owner is whoever is accountable for the number that is supposed to move."
      },
      {
        "type": "p",
        "text": "Each stage is only affordable if the one before it is done. Redesign is a conversation. Digitization is a project. Automation is a project plus an annual bill plus a change-control regime. The cost of being wrong rises sharply at every step, which is why the thinking belongs at the front."
      },
      {
        "type": "h2",
        "text": "What breaks at each inversion"
      },
      {
        "type": "p",
        "text": "Automate before you digitize, and you are automating the process as described in the procedure manual rather than the process as performed. The two are never the same. You also have no baseline, so afterwards nobody can say honestly what changed. The reliable symptom is the shadow process: within a quarter of go-live, experienced staff are running a spreadsheet alongside the system to handle everything the system cannot see."
      },
      {
        "type": "p",
        "text": "Digitize before you redesign, and you take a high-resolution photograph of a process you were about to change, then spend three years defending it. Before digitization, removing an approval step costs a memo. After digitization it costs a change request, a regression test, a retraining cycle, and a negotiation with a supplier whose commercial interest is the status quo. Bad process hardens into software, and software is difficult to argue with."
      },
      {
        "type": "callout",
        "text": "Software is the most expensive place to store a bad decision. Once a rule sits inside a system, changing it requires a project, a budget and a vendor."
      },
      {
        "type": "p",
        "text": "Redesign without digitizing is the third failure, and the quietest. The workshop produces a better process. Nobody can see whether it is being followed. Within two quarters the organization has drifted back, and the only evidence is anecdotal. Redesign without measurement is advice, and advice reverts."
      },
      {
        "type": "h2",
        "text": "The approval chain, worked through"
      },
      {
        "type": "p",
        "text": "Take the chain from the opening and run it in the right order. The figures are illustrative. The shape is consistent."
      },
      {
        "type": "p",
        "text": "Baseline. Eleven steps. Median elapsed time 19 days, 90th percentile 41 days. Total touch time, meaning the actual minutes spent reading, checking and deciding, is 4.5 hours per request. Volume is roughly 3,400 requests a year. So of 19 elapsed days, under five hours is work. Everything else is queue."
      },
      {
        "type": "p",
        "text": "Redesign. Ask one question of every step: in the last 24 months, how many times did this approver reject or amend a request? Four of the eleven steps had not changed a single outcome across roughly 6,800 transactions. They were notifications wearing an approver's badge. Three further steps performed the same budget-availability check at three levels of seniority, using three different definitions of available. The redesigned chain has five steps, and only two below a defined value threshold. Budget availability is checked once, at the point of request, against live commitment data."
      },
      {
        "type": "p",
        "text": "Digitize. Structured capture on every request: budget line, commitment balance, category, framework agreement reference, justification, and a timestamped decision at each step. No automation yet. Median elapsed time falls from 19 days to 11, because queue ages are now visible by name and by desk, and visibility alone moves behaviour. More usefully, the organization now knows its rejection rate per step, which is the raw material for the next stage."
      },
      {
        "type": "p",
        "text": "Automate. One rule to start: where the commitment balance covers the request and the category maps to an existing framework agreement, the budget check clears automatically. That covers 62 percent of volume, which now completes same-day. The remaining 38 percent carry genuine judgement and still take about six days. Blended median lands near two days against an original nineteen. Touch time per request falls from 4.5 hours to about one, returning something in the order of six full-time equivalents of senior review capacity."
      },
      {
        "type": "p",
        "text": "Now the part that matters. That 62 percent auto-clear rate does not exist without the redesign. Automation needs rules that are unambiguous and decidable from data. The original chain had three overlapping budget checks with three different definitions, so no rule could be written that all three would accept. Redesign did not simply improve the process before automation. Redesign created the automation opportunity. Organizations that automate first typically find 15 to 20 percent of volume eligible, conclude the technology underdelivered, and blame the supplier."
      },
      {
        "type": "h2",
        "text": "The next ninety days"
      },
      {
        "type": "p",
        "text": "None of this requires a transformation programme to begin. It requires one process and about six weeks."
      },
      {
        "type": "ul",
        "text": "Pick one process with volume above 500 transactions a year that a board member already complains about by name. Volume is what makes the arithmetic worth doing.\nMeasure two numbers before touching anything: median and 90th-percentile elapsed time, and total touch time. The gap between them is the size of the prize, and it is usually larger than anyone expects.\nRun the removal test on every step. Pull 24 months of records and count how many times each approver changed an outcome. Any step with a count of zero is a notification, not a control. Rank the steps by that count and circulate the ranking.\nWrite the redesigned process as a decision memo signed by the accountable executive, naming who now carries the risk of each removed step.\nOnly then open a supplier discussion, and open it with the redesigned process rather than the current one."
      },
      {
        "type": "p",
        "text": "The fourth item is where these efforts stall, because removing an approval means one named person accepts a risk that was previously diffused across four signatures. That is an executive decision and it cannot be delegated to an implementation team. Make it this quarter. The product demonstrations will keep. The fourteen days sitting in queues will not clear themselves."
      }
    ]
  },
  "government-services-standard": {
    "slug": "government-services-standard",
    "deck": "Citizens now judge a licence office against the best service they used that week. Modernization starts with a service time you publish and then hold.",
    "pullQuote": "Trust in the state is built the moment a citizen checks a status and finds the state told the truth.",
    "body": [
      {
        "type": "p",
        "text": "A woman renews her passport on a Tuesday. That same morning she moved money between two banks in under a minute, watched a delivery van approach her street on a map, and was told by an airline exactly which minute to be at the gate. At the counter she is handed a slip of paper with a date written on it in pen. The date is a guess. Everyone in the room knows it is a guess, including the officer who wrote it."
      },
      {
        "type": "p",
        "text": "That gap is the problem, and it is not a technology gap. The ministry may already own a case management system, a payment gateway, and a data centre with capacity to spare. The gap is that nobody inside the building has committed to a number, in public, that they can be measured against."
      },
      {
        "type": "h2",
        "text": "Citizens stopped benchmarking you against other ministries"
      },
      {
        "type": "p",
        "text": "For decades public service performance was graded against itself. Last year's backlog. The neighbouring district. The regional average. That comparison set is gone. Citizens now judge a licence office against the best service they used that week, in any sector, and they make no allowance for one being a commercial product and the other a statutory function."
      },
      {
        "type": "p",
        "text": "What they are comparing is rarely raw speed. A mortgage still takes weeks. A visa to some countries takes months. What the admired services do is tell you where you are, tell you when you will be finished, and then hold to it. The product is certainty."
      },
      {
        "type": "p",
        "text": "That is good news for governments, because certainty is far cheaper than speed. Cutting a permit turnaround from twenty-one days to three requires re-engineering, new staffing models, and probably new law. Telling every applicant accurately that it will take twenty-one days, then finishing on day nineteen, requires instrumentation and discipline. The second is achievable inside a quarter. The first takes a year or more. Most institutions attempt the first, deliver neither, and spend the political capital they needed for the second."
      },
      {
        "type": "h2",
        "text": "What publishing a service time actually forces"
      },
      {
        "type": "p",
        "text": "Publishing a service standard is an operational act disguised as a communications act. The moment a permanent secretary states that business registration completes in five working days for ninety-five percent of applicants, several things that were optional stop being optional."
      },
      {
        "type": "ul",
        "text": "Every application needs one identity from submission to decision. Not a counter number, a file number, and a payment reference that nobody has ever joined up.\nEvery step needs a named owner. \"The legal team\" is not an owner. A role with a queue and a clock is an owner.\nOne clock governs. When the ministry's clock and the citizen's clock disagree, the citizen's clock is the real one.\nHandovers get recorded, including the informal ones currently done by phone call or by walking a file down a corridor.\nExceptions get counted rather than hidden. A file pulled aside for senior review has not left the process. It has entered the slowest part of it."
      },
      {
        "type": "p",
        "text": "None of that is exotic. All of it gets resisted, because each item converts a private discretion into a visible measurement."
      },
      {
        "type": "p",
        "text": "In a vehicle registration office we mapped, the official standard was ten working days and median completion was nine. On that measure the office was performing. The ninetieth percentile was forty-one days. Roughly one file in six spent five or more consecutive days with no recorded owner at all. Those files were not lost. They were on desks, in drawers, and in the space between two units where no system was watching. The published average was true and useless. The tail was where the complaints, the escalations and the informal payments lived."
      },
      {
        "type": "callout",
        "text": "Averages describe the institution. Percentiles describe the citizen. Publish both, and the queue you have been avoiding surfaces within a week."
      },
      {
        "type": "h2",
        "text": "The audit trail is what makes the number believable"
      },
      {
        "type": "p",
        "text": "A published service time without an audit trail is a slogan, and citizens grade slogans harshly. The commitment becomes credible only when the record underneath it can be checked by someone with an interest in disproving it."
      },
      {
        "type": "p",
        "text": "A usable trail records four things per case: who held it, when they held it, what they changed, and on what stated grounds a decision was taken. That single record then serves three constituencies. The citizen asks where the file is. The manager asks where the queue is. The auditor asks whether the decision was lawful and the fee was paid. Most institutions build three separate systems for those three questions and reconcile them approximately never, which is how a ministry ends up with three defensible numbers and no true one."
      },
      {
        "type": "p",
        "text": "Trust in the state is not built by campaigns. It is built the moment a citizen checks a status and finds the state told the truth. Do that four times in a row and the citizen becomes a defender of the institution. Miss once with no explanation and every suspicion they already held is confirmed, at no cost to them and considerable cost to you."
      },
      {
        "type": "h2",
        "text": "Revenue leakage is a process defect before it is a crime"
      },
      {
        "type": "p",
        "text": "Finance ministries treat leakage as an integrity problem and send investigators. Most of what we observe is structural. It is the distance between the moment a service is delivered and the moment the money is recorded, and that distance is created by process design, not by dishonest people."
      },
      {
        "type": "p",
        "text": "In one water utility, six percent of new connections were commissioned before the customer existed in the billing system. Median lag from commissioning to first invoice was forty-three days, and the slowest decile ran past two hundred. No theft occurred. The field crew's job ended when the water was on, and nobody's job began until a paper form reached an office twelve kilometres away."
      },
      {
        "type": "p",
        "text": "The vehicle registration office showed the same shape. Expedited processing carried a fee collected at the counter. The office issued roughly 11,000 expedited receipts in a year and reconciled about 7,400 of them to bank deposits. That 3,600-receipt gap was worth close to four percent of annual fee income. No investigation had ever been opened, because nobody had put the two figures on the same page."
      },
      {
        "type": "p",
        "text": "Instrumenting a service for speed and instrumenting it for revenue integrity are the same piece of work. The event that says the citizen has been served is the event that says the money should be in the account. Institutions that run these as two programmes pay for the plumbing twice and still cannot close their books."
      },
      {
        "type": "h2",
        "text": "Start with one service, this quarter"
      },
      {
        "type": "p",
        "text": "The predictable failure is the institution-wide programme. Eighteen months, a steering committee, a vendor, and nothing published at the end of it. The alternative is narrower and much harder to argue with."
      },
      {
        "type": "ul",
        "text": "Pick one high-volume service with low political risk. Business name registration, not land titling.\nMeasure it honestly for six weeks before promising anything. Median, ninetieth percentile, and the count of cases sitting with no recorded owner.\nPublish a target you can meet ninety-five percent of the time, not the one written in the policy document.\nPut the same record in three places: the citizen's status check, the manager's queue view, the auditor's log. One source, three views.\nReport against the target monthly, in public, including the months you miss. The misses are what make the hits believable."
      },
      {
        "type": "p",
        "text": "The first published number is the hard one, because publishing it is an admission of what the current number has been. Every service after that is easier, and the internal argument shifts from whether to measure to which service goes next. The ministry that publishes a standard and then holds it for two consecutive quarters becomes the one other ministries copy, and the citizen stops noticing the difference between the passport office and the bank."
      }
    ]
  },
  "dashboard-is-not-the-goal": {
    "slug": "dashboard-is-not-the-goal",
    "deck": "Most executive dashboards report faithfully and change nothing. The difference between a control surface and expensive wallpaper is owners, thresholds, and a weekly meeting that ends in decisions.",
    "pullQuote": "If the dashboard went dark on Monday, would the operation notice by Wednesday?",
    "body": [
      {
        "type": "p",
        "text": "Eighteen months into most transformation programmes, the dashboard is the first thing you are shown. Large screen near the executive corridor, refreshed overnight, built by a competent team, genuinely accurate. Then ask the three managers walking past it which number moved last week and what they did about it. The pause that follows is the finding. The reporting layer is finished. The control layer was never built."
      },
      {
        "type": "p",
        "text": "This is rarely a technology failure. The pipelines work, the definitions are mostly sound, the charts are correct. What is missing is the wiring between a number and a decision: who owns it, what it should be, what happens when it drifts, and when that conversation takes place. Without that wiring, a dashboard is decoration with a maintenance budget."
      },
      {
        "type": "h2",
        "text": "One is a control surface. The other is furniture."
      },
      {
        "type": "p",
        "text": "The difference is not visual. Some of the most useful control surfaces are a single table, twelve rows, printed on Monday morning. Some of the most useless charts are beautiful. The difference is consequence. A control surface has a person attached to every line, a threshold that triggers action, and a standing forum where that action is committed and checked. A vanity chart has an audience."
      },
      {
        "type": "p",
        "text": "Five questions separate them. Put them to any chart on your executive screen."
      },
      {
        "type": "ul",
        "text": "Who is the single named person accountable for this number? A directorate is not an answer.\nWhat is the target, and by when? \"Improve\" is not a target. Twenty-one days is a target.\nWhat value forces a conversation, who convenes it, and within how many days?\nWhat decision this week would change if the number were materially different?\nWhen it last moved, what did the organisation actually do differently?"
      },
      {
        "type": "callout",
        "text": "A metric with no named owner and no threshold is not a measurement. It is an opinion with a chart attached."
      },
      {
        "type": "p",
        "text": "Most executive packs fail on the first and third questions. In one utility we reviewed, the monthly pack carried sixty-two indicators. Fewer than ten had a named individual owner. None had a documented trigger. The pack was read carefully every month and changed nothing."
      },
      {
        "type": "h2",
        "text": "Every number gets a name, a target, and a trigger"
      },
      {
        "type": "p",
        "text": "Treat each metric on a control surface as a small contract with six fields: definition, owner by name, current baseline, target with a date, the threshold that forces escalation, and the forum where it is reviewed. If any field is blank, the metric does not belong on the surface. Park it in the reporting library where analysts can find it."
      },
      {
        "type": "p",
        "text": "In a land registry we mapped, the executive view carried forty-six indicators across fourteen dashboards. Median time to complete a title transfer was 41 days against a published standard of 21. Nobody disputed the number. Nobody owned it either, because it was the sum of six sequential steps across four units. We cut the executive view to nine metrics and split the 41 days into stage clocks, each with a named owner. One metric did most of the work: files sitting more than 14 days without an action, published every Friday by unit and by name. Over eleven weeks the aged file count fell from 3,400 to 1,850, and median transfer time moved from 41 days to 29. No new system was procured in that window. The registry did not get better at measuring. It got better at acting."
      },
      {
        "type": "p",
        "text": "Nine metrics is not tidying. Attention is the scarcest resource in any operation. A committee that reviews sixty numbers reviews none of them, because there is no time to ask a second question about any single one. Cutting the surface creates room for the follow-up question, and the follow-up question is where behaviour changes."
      },
      {
        "type": "h2",
        "text": "The cadence is the mechanism"
      },
      {
        "type": "p",
        "text": "Owners and targets without a rhythm decay inside a quarter. The rhythm does the work. Weekly, forty-five minutes, same time, same chair, attendance non-negotiable, and an agenda that is deliberately boring."
      },
      {
        "type": "ul",
        "text": "Exceptions only. Metrics inside threshold are not discussed and not presented.\nFor each breach, the owner states the cause, the countermeasure, and the completion date. Two minutes. No slides.\nOpen actions from the previous three weeks, each with a date and a status. Anything that slips twice goes to the chair for a decision, not another update.\nOne structural item per week: a rule, a handoff, or a form that keeps generating breaches.\nDecisions written down before anyone leaves the room. One page, circulated the same day."
      },
      {
        "type": "p",
        "text": "Two things make this work, and both are about authority. The chair must be senior enough to remove an obstacle in the room, otherwise the forum becomes a status report with better lighting. And owners must have the mandate to change the thing they are accountable for. Holding someone to a number they cannot influence produces excuses rather than improvement, and it teaches the organisation that the surface is theatre."
      },
      {
        "type": "callout",
        "text": "The cadence changes behaviour. The dashboard only makes the meeting short."
      },
      {
        "type": "h2",
        "text": "Instrument what people can actually move"
      },
      {
        "type": "p",
        "text": "Most executive metrics are outcomes: cost per transaction, uptime, time to decision, arrears ratio. They are the right things to be judged on and the wrong things to manage weekly, because they move slowly and they are the product of many hands. Pair every outcome with two or three upstream measures a named owner can change inside seven days. Queue age. Rework rate. First-pass approval. Share of cases with complete documentation at intake."
      },
      {
        "type": "p",
        "text": "Two disciplines protect the surface. First, refresh latency must be shorter than the decision cycle. A number that arrives on the fifteenth of the following month cannot support a weekly conversation, and no amount of visual polish will fix that. Second, pair every throughput measure with a quality counterweight, because any metric under pressure will be optimised, including in ways you did not intend. Cases closed sits next to cases reopened. Handling time sits next to first-contact resolution. If owners dispute a definition, stop and fix the definition. A contested number never drives action."
      },
      {
        "type": "h2",
        "text": "What to do before this quarter closes"
      },
      {
        "type": "p",
        "text": "You do not need a platform decision to start. You need one process where the cost of delay is already visible to everyone."
      },
      {
        "type": "ul",
        "text": "Pick the single process that generates the most complaints, backlog, or rework. One.\nName one owner. One number. One target with a date. Put all four on a single page and have the owner say them out loud in an executive meeting.\nPublish that number weekly, by unit and by name. Visibility to peers does more than any reporting tool.\nBook a forty-five minute weekly review for the next twelve weeks and chair it yourself for the first four.\nAt week six, ask one question: has anything changed in how the work is done? If not, either the metric is wrong or the owner lacks authority. Fix whichever it is before adding a second metric."
      },
      {
        "type": "p",
        "text": "Then apply one test to everything else on your screens. If the dashboard went dark on Monday, would the operation notice by Wednesday? Where the answer is no, you are not looking at a control surface. You are paying to maintain a picture of your problems. Switch those charts off, or give each one a name, a target, and a trigger, and see which ones survive."
      }
    ]
  },
  "cost-of-a-handoff": {
    "slug": "cost-of-a-handoff",
    "deck": "Across the processes we map, the work takes hours and the process takes weeks; the difference is handoffs, and almost no organization counts them.",
    "pullQuote": "Digitizing a handoff does not remove the handoff; it only makes the queue harder to see.",
    "body": [
      {
        "type": "p",
        "text": "In a national business registry we mapped, a standard company incorporation took 19 working days. The total time anyone spent working on that file was 3 hours and 40 minutes. Everything in between was waiting. The file changed hands fourteen times, and each time it joined a queue behind other files that had also just changed hands."
      },
      {
        "type": "p",
        "text": "Nobody in that registry was lazy. The examiners were quick. The approvers were careful. The process was slow because it was fragmented, and fragmentation carries a cost that never appears on a budget line. It shows up as elapsed time, as rework, and as the peculiar situation where a delayed file has seven interested parties and no owner."
      },
      {
        "type": "h2",
        "text": "Three costs, one of them visible"
      },
      {
        "type": "p",
        "text": "Queue time is the first and the largest. Nineteen working days is roughly 152 working hours. Against 3 hours 40 minutes of actual work, that is a flow efficiency of 2.4 percent. In unreformed enterprise and government processes we rarely measure above 12 percent. We have measured below 1 percent. Executives are usually surprised by that number, then quickly stop being surprised, because it explains their entire service-level problem in a single figure."
      },
      {
        "type": "p",
        "text": "Error risk is the second, and it compounds rather than adds. In a utility's new-connection process we mapped, there were nine handoffs, six of which involved re-entering the same customer details into a different system. Assume a modest 2 percent error rate per re-entry. Roughly one file in nine reaches the installation crew carrying at least one defect. Each defect triggers a rework loop that, once you include the return trip through the same queues, averaged eleven days. The re-entry itself takes ninety seconds. The consequence takes a fortnight."
      },
      {
        "type": "p",
        "text": "Accountability loss is the third, and it is the one senior people feel without being able to name. In a hospital group's revenue cycle we reviewed, we asked seven named process owners a simple question: who owns a denied claim on day 30? Five named a different department. Two named a system. Everyone was answering honestly. Ownership had been divided so finely that it had evaporated. When a process carries many handoffs, escalation stops being a route to resolution and becomes a search for jurisdiction."
      },
      {
        "type": "h2",
        "text": "How to count handoffs, precisely"
      },
      {
        "type": "p",
        "text": "Most organizations cannot say how many handoffs a core process contains. That is the first finding of nearly every mapping exercise we run. The count is knowable, and it is not difficult, but it requires a definition tight enough to argue with. A step is work. A handoff is the moment work stops being someone's active task and becomes someone else's pending one. Count custody changes, not activities."
      },
      {
        "type": "p",
        "text": "The counting rules that survive contact with a real process:"
      },
      {
        "type": "ul",
        "text": "Count every change of custody, including within the same team and the same building.\nCount each approval as two handoffs: the file goes out and the file comes back.\nCount system boundaries. If a person re-enters data because two systems do not speak to each other, that is a handoff with a human in the middle.\nCount queues, not headcount. Ten clerks working from one shared inbox is one handoff. One clerk who forwards to a named colleague is two.\nCount rework loops separately and label them. A file that returns to an earlier desk has not gone backwards by accident; it has exposed a control placed too late in the sequence.\nCount the informal channels. Email, chat groups, phone calls and physical folders carry more of the process than the workflow system does, and none of it appears in the workflow report."
      },
      {
        "type": "p",
        "text": "Do not derive the count from a workshop. Take twenty to thirty completed files, a mix of clean and troubled ones, and reconstruct custody from timestamps, system logs, email headers, and the physical register at the front desk. Then walk the process yourself, with a live file, for one full cycle. The difference between the designed process and the observed one is usually four to six handoffs that nobody ever authorized. They accumulated. Someone added a check after an incident years ago and nobody removed it."
      },
      {
        "type": "callout",
        "text": "A workshop map shows the process as designed. A custody trail shows the process as run. The gap between them is where your elapsed time lives."
      },
      {
        "type": "h2",
        "text": "Consolidation before acceleration"
      },
      {
        "type": "p",
        "text": "Once you have the count, the order of operations matters, and most programs invert it. The right sequence is: remove the handoff, then merge the roles on either side of it, then and only then make the remaining handoff instant. Automation applied to a handoff that should not exist buys you a faster version of the wrong process."
      },
      {
        "type": "callout",
        "text": "Digitizing a handoff does not remove the handoff. It only makes the queue harder to see."
      },
      {
        "type": "p",
        "text": "This is the most common failure we are called in to correct. A workflow system replaces the paper tray. Elapsed time falls by 15 percent, which is real, and the program is declared a success. But the file still visits eleven desks, and the eleven queues are now invisible, because the system reports on completed tasks rather than waiting ones. Three years later the elapsed time has crept back, because the structure underneath was never touched."
      },
      {
        "type": "p",
        "text": "The registry described above went from fourteen handoffs to four. The design change was not technological. Eighty-one percent of incorporations were routine and needed no second review, so a single examiner was given authority to approve them end to end, backed by a value threshold and a sampling audit rather than a pre-check. Exceptions routed to one panel that met daily, replacing three sequential approvers who met weekly. Target elapsed time was two days. The examiners' actual working time did not change at all, because it was never the problem."
      },
      {
        "type": "p",
        "text": "The binding constraint on consolidation is almost never technology. It is decision rights. Handoffs multiply because authority is withheld, and authority is withheld because a control was added after an incident and never reviewed since. Every organization carries a layer of controls that were rational when introduced and are now pure queue. Removing them requires someone senior enough to delete a control and honest enough to accept the residual risk in writing."
      },
      {
        "type": "h2",
        "text": "What to do before the end of the quarter"
      },
      {
        "type": "p",
        "text": "Pick one process. Not a portfolio, one process, and preferably one that a minister, a regulator, or your largest customer already complains about. Then do four things."
      },
      {
        "type": "ul",
        "text": "Walk it. One senior person, one full cycle, with the file. Not a delegate, not a survey, not a steering committee.\nPublish two numbers: total handoff count, and flow efficiency, meaning touch time divided by elapsed time. Put them on the same page as your financial indicators, not in an operations annex.\nName one accountable owner for the whole path, with the authority to change it. If that owner needs three signatures to move a step, you have appointed a coordinator, not an owner.\nSet a reduction target on the count itself. Halving the handoffs within two quarters is aggressive and achievable in most casework processes. Track the count monthly, the way you track cash."
      },
      {
        "type": "p",
        "text": "Then apply one rule to every technology proposal that reaches your desk between now and the end of the year. It does not get approved unless the business case states how many handoffs it removes. Not automates. Removes. That one question will stop more bad projects than any governance board you can convene."
      }
    ]
  }
};

export const trustPages: Record<string, TrustPage> = {
  "privacy": {
    "key": "privacy",
    "title": "Privacy Policy",
    "intro": "This policy explains what personal data Ektelo.com collects, why, how long it is kept, and how to act on it. Effective 30 July 2026.",
    "sections": [
      {
        "heading": "Scope and responsibility",
        "blocks": [
          {
            "type": "p",
            "text": "Ektelo is an operational transformation company based in Kampala, Uganda. Ektelo determines what this website collects and how it is used, and is the controller of that data under the EU and UK General Data Protection Regulation and under Uganda's Data Protection and Privacy Act 2019."
          },
          {
            "type": "p",
            "text": "This policy covers the public website only. Data handled inside a client engagement is governed by the contract for that engagement. Ektelo has not appointed a named Data Protection Officer; requests go to the contact address below."
          }
        ]
      },
      {
        "heading": "What the site collects",
        "blocks": [
          {
            "type": "ul",
            "text": "Contact form submissions: name, work email address, organization, area of interest, and the content of your message. All fields are supplied voluntarily.\nServer logs: IP address, date and time of the request, page requested, HTTP status code, referring URL, and browser user agent."
          },
          {
            "type": "p",
            "text": "Nothing else. There is no account system, no behavioural profiling, and no contact data bought from third parties. We do not ask for special category data such as health or political information; please keep it out of your message."
          }
        ]
      },
      {
        "heading": "Purpose and lawful basis",
        "blocks": [
          {
            "type": "p",
            "text": "Submissions are used to answer your enquiry and keep a record of it. The lawful basis is Article 6(1)(b) GDPR where the message concerns steps toward a contract, and Article 6(1)(f), legitimate interests, otherwise. Under Uganda's Act the basis is that processing is necessary for a contract you are entering or considering and that you supplied the data knowingly."
          },
          {
            "type": "p",
            "text": "Server logs support availability, fault diagnosis, and abuse detection, on the basis of legitimate interests. They are not used to profile visitors. We do no automated decision making, and add you to no marketing list unless you ask."
          }
        ]
      },
      {
        "heading": "How long it is kept",
        "blocks": [
          {
            "type": "ul",
            "text": "Form submissions and the correspondence arising from them: 24 months after our last exchange, then deleted. If correspondence becomes part of a signed engagement, it is kept for the life of that engagement and any further period required by contract, tax, or records law.\nServer logs: 90 days, then deleted, unless one is held for an open security investigation."
          },
          {
            "type": "p",
            "text": "You may ask for earlier deletion at any time."
          }
        ]
      },
      {
        "heading": "Who else sees it",
        "blocks": [
          {
            "type": "p",
            "text": "Nobody, with one exception: the providers that host the site and deliver our email. They process the data on our instructions and for no other purpose. We do not sell, rent, or disclose personal data to advertisers, data brokers, or analytics networks. Current providers are named in writing on request; no one else receives data unless we are compelled by valid legal process."
          },
          {
            "type": "p",
            "text": "Traffic is encrypted in transit, and access to submissions is limited to Ektelo personnel who need it to reply. A breach affecting your data will be reported to you and the relevant authority where the law requires it."
          }
        ]
      },
      {
        "heading": "International transfers",
        "blocks": [
          {
            "type": "p",
            "text": "Hosting and email infrastructure generally sits outside Uganda and may sit outside the EEA and the UK, so submitted data crosses borders. For transfers from the EEA or the UK we rely on an adequacy decision covering the receiving country, or on the standard contractual clauses in the provider's data processing terms. Section 19 of Uganda's Act permits transfer abroad where the receiving jurisdiction offers adequate protection or the data subject consents; we rely on provider commitments that meet at least that standard."
          }
        ]
      },
      {
        "heading": "Cookies and tracking",
        "blocks": [
          {
            "type": "p",
            "text": "Ektelo.com sets no advertising cookies. It runs no cross-site tracking, no remarketing pixels, no social media trackers, no fingerprinting, and no third-party advertising tags. There is no ad network relationship to disclose because none exists."
          },
          {
            "type": "p",
            "text": "If a strictly necessary first-party cookie or aggregate traffic measurement is ever added, it will be described here before deployment."
          }
        ]
      },
      {
        "heading": "Your rights",
        "blocks": [
          {
            "type": "p",
            "text": "Under the EU and UK GDPR you may obtain a copy of the data we hold about you; correct it; have it erased where we have no overriding basis to keep it; restrict processing during a dispute; object to processing based on legitimate interests; receive it in a machine-readable format; and withdraw consent where consent is the basis."
          },
          {
            "type": "p",
            "text": "Uganda's Act gives equivalent rights: to know what is held and why, to access it, to have it corrected or destroyed where misleading or unlawfully obtained, to prevent processing likely to cause unwarranted damage or distress, and to stop direct marketing."
          },
          {
            "type": "p",
            "text": "These rights are applied to everyone who contacts us. The site is not directed at children."
          }
        ]
      },
      {
        "heading": "Making a data request",
        "blocks": [
          {
            "type": "p",
            "text": "Email  ssentanmuseth@gmail.com with \"Data request\" in the subject line. State the right you are exercising and the name or email address you used, so we can find the record. We may ask one question to verify identity."
          },
          {
            "type": "p",
            "text": "We respond within 30 days, or sooner where the law that applies to you requires it. There is no fee unless a request is repetitive or manifestly excessive. If you are not satisfied you may complain to a regulator: in Uganda, the Personal Data Protection Office established under the Act; in the EEA, your national supervisory authority; in the UK, the Information Commissioner's Office."
          }
        ]
      },
      {
        "heading": "Changes and contact",
        "blocks": [
          {
            "type": "p",
            "text": "If what we collect, why, how long we keep it, or who processes it changes, this page and its effective date are updated before the change takes effect. Earlier versions are available on request."
          },
          {
            "type": "p",
            "text": "Email ssentanmuseth@gmail.com. Telephone +256 760 344 344. A mailing address is available on request."
          }
        ]
      }
    ]
  },
  "terms": {
    "key": "terms",
    "title": "Terms of Use",
    "intro": "These terms govern access to and use of the Ektelo.com website. They apply to the website alone: they do not create a client relationship and do not govern any engagement with Ektelo, which is always the subject of a separate signed agreement.",
    "sections": [
      {
        "heading": "Acceptance and Scope",
        "blocks": [
          {
            "type": "p",
            "text": "By accessing Ektelo.com or any document hosted on it, you agree to these terms. If you do not accept them, do not use the site. If you use the site for an organization, you confirm you are authorized to accept these terms on its behalf."
          },
          {
            "type": "p",
            "text": "\"Ektelo\", \"we\", and \"us\" mean the Ektelo business operating from Kampala, Uganda, and remotely. \"You\" means the person or organization using the site. This version takes effect on 30 July 2026 and replaces earlier versions."
          }
        ]
      },
      {
        "heading": "Permitted Use of the Site",
        "blocks": [
          {
            "type": "p",
            "text": "You may view, download, and print site material for internal business use, including evaluation and procurement review, provided attributions remain intact. You must not:"
          },
          {
            "type": "ul",
            "text": "republish, sell, or license site content, or include it in a commercial product, without our written permission;\nstate or imply an association with, or endorsement by, Ektelo that does not exist;\ninterfere with the site's operation or security, or attempt unauthorized access to connected systems;\nharvest content or submit data by automated means at a volume that degrades the service."
          }
        ]
      },
      {
        "heading": "Intellectual Property in Site Content and Marks",
        "blocks": [
          {
            "type": "p",
            "text": "Site content, including text, design, diagrams, images, code, and downloadable documents, is owned by Ektelo or its licensors and protected by copyright. Use of the site transfers no ownership and grants no licence beyond the internal use described above."
          },
          {
            "type": "p",
            "text": "\"Ektelo\", the Ektelo logo, and the wording used to identify our work are marks used by Ektelo in trade, whether or not registered in any jurisdiction. Their use requires our written consent. Other names and marks belong to their owners and appear for identification only. Permission requests: ssentanmuseth@gmail.com."
          }
        ]
      },
      {
        "heading": "Solutions, Measures and Figures",
        "blocks": [
          {
            "type": "p",
            "text": "The Operational Solutions pages describe what Ektelo does and the measures an engagement would be baselined and held against. They are descriptions of method, not records of completed work, and this site publishes no client case studies. Any timeframe, range, or indicative figure shown is illustrative of the class of work and is not drawn from a specific engagement."
          },
          {
            "type": "p",
            "text": "Nothing on this site is a forecast, promise, or warranty of the results you would obtain. Outcomes depend on data quality, process maturity, governance, staffing, and decisions outside our control. Any commitment on scope, service levels, or measurable outcomes exists only where it is written into a signed agreement."
          }
        ]
      },
      {
        "heading": "No Professional Advice, and Information You Send Us",
        "blocks": [
          {
            "type": "p",
            "text": "The site is published for general information. Nothing on it is legal, regulatory, tax, financial, clinical, engineering, or information security advice, and nothing on it is a recommendation to act or refrain from acting. Obtain independent advice before acting on anything published here. Using the site or sending an enquiry creates no advisory relationship, no duty of care, and no obligation of confidentiality."
          },
          {
            "type": "p",
            "text": "Do not send confidential, personal, or classified information through the site unless a confidentiality agreement is in place. Any privacy notice published on this site applies to personal data submitted through it."
          }
        ]
      },
      {
        "heading": "Third-Party Links",
        "blocks": [
          {
            "type": "p",
            "text": "The site may link to material published by others. We do not control those sites and are not responsible for their content, availability, security, or privacy practices. A link is not an endorsement."
          }
        ]
      },
      {
        "heading": "Disclaimers and Limitation of Liability",
        "blocks": [
          {
            "type": "p",
            "text": "The site is provided \"as is\" and \"as available\". We do not warrant that it will be uninterrupted, secure, or error-free, or that content is current, complete, or fit for a particular purpose. We may change, suspend, or withdraw any part of it without notice. To the fullest extent permitted by law, warranties and conditions implied by statute or common law are excluded."
          },
          {
            "type": "p",
            "text": "To the fullest extent permitted by the laws of Uganda, Ektelo and its personnel are not liable for loss or damage arising from use of, or reliance on, the site or its content, including loss of profit, revenue, business, goodwill, or data, and any indirect or consequential loss, in contract, tort, or otherwise."
          },
          {
            "type": "p",
            "text": "Nothing here excludes liability that cannot lawfully be excluded, including for death or personal injury caused by negligence and for fraud."
          }
        ]
      },
      {
        "heading": "Engagements Are Governed by a Separate Signed Agreement",
        "blocks": [
          {
            "type": "p",
            "text": "These terms are not an offer, proposal, quotation, statement of work, or tender response. They place no obligation on either party to enter into an engagement."
          },
          {
            "type": "p",
            "text": "Any engagement with Ektelo is governed exclusively by a written agreement signed by both parties, setting out scope, deliverables, timelines, fees, confidentiality, data protection obligations, intellectual property ownership, liability, and termination. Where a signed agreement and these terms differ, the signed agreement governs. Nothing published on the site varies, supplements, or waives it."
          }
        ]
      },
      {
        "heading": "Changes to These Terms",
        "blocks": [
          {
            "type": "p",
            "text": "We may revise these terms. The version published on this page is the version in force, and continued use of the site after a change means you accept it. On request to ssentanmuseth@gmail.com we will confirm which version was in force on a stated date."
          }
        ]
      },
      {
        "heading": "Governing Law and Jurisdiction",
        "blocks": [
          {
            "type": "p",
            "text": "These terms, and any dispute arising from them or from use of the site, are governed by the laws of the Republic of Uganda. The courts of Uganda have exclusive jurisdiction, except where mandatory law in your jurisdiction gives you the right to bring proceedings elsewhere."
          }
        ]
      },
      {
        "heading": "General and Contact",
        "blocks": [
          {
            "type": "p",
            "text": "If a provision is found unenforceable, it is severed and the remainder continues in force. Questions, permission requests, and correction or takedown requests: ssentanmuseth@gmail.com, +256 760 344 344"
          }
        ]
      }
    ]
  },
  "accessibility": {
    "key": "accessibility",
    "title": "Accessibility Statement",
    "intro": "This statement applies to the Ektelo website. It records the standard the site is built to, what has been tested, what has not, and how to report a barrier.",
    "sections": [
      {
        "heading": "Standard and Scope",
        "blocks": [
          {
            "type": "p",
            "text": "Ektelo builds this site to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. That is the target for every page, template, and component we control."
          },
          {
            "type": "p",
            "text": "The scope of this statement is the HTML, CSS, and scripts served on the Ektelo website and authored by Ektelo. It does not extend to third-party content embedded in those pages, which is addressed under Known Limitations."
          },
          {
            "type": "p",
            "text": "This statement was prepared on 30 July 2026 and reflects our own assessment of the site as published on that date."
          }
        ]
      },
      {
        "heading": "Contrast and Legibility",
        "blocks": [
          {
            "type": "p",
            "text": "Every load-bearing text pair on this site has been contrast-audited against the background it is actually rendered on, and meets or exceeds a ratio of 4.5:1. Graphic elements that carry meaning, including icons, chart marks, and the boundaries of interactive controls, meet or exceed 3:1. These ratios were measured against computed colour values rather than estimated by eye."
          }
        ]
      },
      {
        "heading": "Keyboard Operation and Focus",
        "blocks": [
          {
            "type": "ul",
            "text": "Every interactive control can be reached and operated with a keyboard alone. No part of the site requires a pointing device.\nFocus is visible on every interactive element, so a keyboard user can always see where they are on the page.\nA skip-to-content link is provided as the first focusable element. It moves focus directly to the main content region and bypasses repeated navigation."
          }
        ]
      },
      {
        "heading": "Structure and Semantics",
        "blocks": [
          {
            "type": "p",
            "text": "Headings are semantic and in order. Each page carries a single first-level heading, and levels descend without skipping. Headings describe the content beneath them rather than the size of the type. The outline a screen reader announces is therefore the real structure of the page, which makes the site navigable by heading rather than by scrolling."
          }
        ]
      },
      {
        "heading": "Forms and Error Handling",
        "blocks": [
          {
            "type": "ul",
            "text": "Every form field has a label that is programmatically associated with the field, not only placed near it visually.\nValidation errors are announced to screen readers rather than shown only on screen.\nError messages identify the field concerned and state what needs to be corrected. Colour is never the sole signal that something has failed."
          }
        ]
      },
      {
        "heading": "Motion, Text Scaling, and Colour",
        "blocks": [
          {
            "type": "ul",
            "text": "The site respects the prefers-reduced-motion setting. Where a visitor's operating system requests reduced motion, non-essential animation and transition are suppressed.\nBrowser text scaling is supported. Content and functionality remain available when text is enlarged in the browser.\nNo information is conveyed by colour alone. Status, emphasis, and error states are carried by text, shape, or position in addition to colour."
          }
        ]
      },
      {
        "heading": "How This Was Assessed",
        "blocks": [
          {
            "type": "p",
            "text": "The assessment is internal. It combines manual keyboard testing, direct measurement of contrast ratios, inspection of heading order and form semantics, and testing of the site with reduced motion enabled and text enlarged. Accessibility checks are part of our change process rather than a single exercise carried out before launch."
          }
        ]
      },
      {
        "heading": "Known Limitations",
        "blocks": [
          {
            "type": "p",
            "text": "We state these plainly because a statement that omits them is not useful to a procurement, legal, or data protection reviewer."
          },
          {
            "type": "ul",
            "text": "This site has not had a formal third-party accessibility audit. No independent body has certified conformance. Every statement above is the result of our own testing and should be read on that basis.\nEmbedded third-party content may not meet the same standard. Where a page includes material served by another provider, we do not control its markup or behaviour and cannot warrant that it conforms to WCAG 2.1 Level AA. Where we identify a barrier in such content, we will seek an accessible alternative or provide the same information by another route.\nWe have not tested every combination of browser, operating system, and assistive technology. Testing covers common combinations, not all of them.\nDocuments published in formats other than HTML may not meet the same standard. We will supply the same information in an accessible format on request.\nAutomated checking does not find every barrier. Some become apparent only when a person using assistive technology attempts a real task. Reports from visitors are the most reliable signal available to us."
          }
        ]
      },
      {
        "heading": "Reporting an Accessibility Problem",
        "blocks": [
          {
            "type": "p",
            "text": "Write to ssentanmuseth@gmail.com with \"Accessibility\" in the subject line. You can also telephone +256 760 344 344 or +256 759 139 728. Ektelo operates from Kampala, Uganda, and remotely."
          },
          {
            "type": "p",
            "text": "If you are able to include the following, it will speed up diagnosis:"
          },
          {
            "type": "ul",
            "text": "The address of the page concerned.\nWhat you were trying to do.\nWhat happened instead.\nYour browser, operating system, and any assistive technology in use, if you know them."
          },
          {
            "type": "p",
            "text": "A report is still useful without these details. Send what you have."
          }
        ]
      },
      {
        "heading": "Our Commitment to Respond",
        "blocks": [
          {
            "type": "ul",
            "text": "We acknowledge every accessibility report within five working days.\nWithin ten working days we confirm whether we have reproduced the problem and state what we intend to do about it.\nWhere the remedy is within our control, we target resolution within 30 days. Where it is not, or where it will take longer, we give a target date and, where possible, an alternative way to obtain the same information or complete the same task.\nInformation published on this site is available in an alternative accessible format on request, at no charge.\nIf our response does not resolve the matter, reply to the same address and ask for it to be reviewed. Where a client organization or an applicable jurisdiction requires a formal complaints route, we follow the procedure set out in the relevant contract or in law."
          }
        ]
      },
      {
        "heading": "Review and Future Verification",
        "blocks": [
          {
            "type": "p",
            "text": "This statement is reviewed at least annually and after any significant change to the site. It was last reviewed on 30 July 2026."
          },
          {
            "type": "p",
            "text": "We intend to commission an independent accessibility audit. When one has been completed, this statement will be updated to record who carried it out, on what date, and what it found. Until that point, no claim of third-party verification is made here."
          },
          {
            "type": "p",
            "text": "We ask client organizations to hold their digital services to a measurable standard. We apply the same test to our own."
          }
        ]
      }
    ]
  },
  "security": {
    "key": "security",
    "title": "Security and Data Protection",
    "intro": "Ektelo works inside the operational core of governments, banks, utilities, and hospital groups. This page states the controls we commit to in every engagement, what we will not do with client data, and how to obtain supporting documentation.",
    "sections": [
      {
        "heading": "Contractual basis before discovery",
        "blocks": [
          {
            "type": "ul",
            "text": "A mutual non-disclosure agreement is signed before the first discovery session, document exchange, or system walkthrough. Confidentiality obligations survive termination.\nWhere the client has its own NDA, security schedule, or supplier code of conduct, we sign the client's paper rather than insisting on ours.\nWhere personal data is in scope, a data processing agreement defines purpose, data categories, retention, sub-processing, and deletion before any processing starts."
          }
        ]
      },
      {
        "heading": "Access to client systems",
        "blocks": [
          {
            "type": "ul",
            "text": "Access is least-privilege and purpose-bound: read-only during discovery, write access only for a specific agreed task.\nAccounts are issued to named individuals. No shared logins. No standing administrative credentials held for convenience.\nWhere the client's architecture allows, accounts are created and controlled by the client, inside the client's directory, and subject to the client's multi-factor authentication and logging.\nAccess is time-boxed to the phase that requires it and revoked at phase close, confirmed in writing."
          }
        ]
      },
      {
        "heading": "Data minimisation and handling",
        "blocks": [
          {
            "type": "ul",
            "text": "We request the minimum data the agreed scope requires. Synthetic, masked, or sampled data is preferred over production extracts.\nWhere production data is necessary, we work with subsets and pseudonymised fields wherever the analysis permits.\nWork runs inside client environments where the architecture allows. Any copy held by us is catalogued, time-bound, and deleted at engagement close, with written confirmation of deletion.\nProcessing locations and data residency constraints are agreed in writing before work begins."
          }
        ]
      },
      {
        "heading": "Client data is not used to train models",
        "blocks": [
          {
            "type": "ul",
            "text": "Client data is never used to train, fine-tune, or otherwise improve any model, ours or a third party's.\nWhere third-party model providers are used, we use configurations that exclude client inputs and outputs from provider training and retention. The providers in scope are disclosed before work begins, and the client may exclude any of them.\nNo client data, document, or derived output is reused for another client."
          }
        ]
      },
      {
        "heading": "Segregated environments per client",
        "blocks": [
          {
            "type": "ul",
            "text": "Each client has its own environment: separate credentials, storage, encryption keys, repositories, and agent workspaces.\nNo shared multi-tenant workspace is used across clients.\nPersonnel are granted access only to the engagements they are assigned to."
          }
        ]
      },
      {
        "heading": "Encryption and secrets",
        "blocks": [
          {
            "type": "ul",
            "text": "Connections use TLS 1.2 or higher. Client data and credentials are never sent in plaintext or carried on removable media.\nData at rest is encrypted with AES-256 or equivalent, with keys in a managed key store, or held by the client where customer-managed keys are required.\nCredentials live in a secrets manager. They are never placed in source code, tickets, chat, or documents."
          }
        ]
      },
      {
        "heading": "Automated actions: logging, human review, reversibility",
        "blocks": [
          {
            "type": "ul",
            "text": "Every action taken by an agent we deploy is logged: what ran, under whose authority, against which system, at what time, and with what result. Logs are available to the client and can be written into the client's own logging.\nActions with financial, legal, clinical, or citizen-facing consequence require human approval. The agent proposes; a named person authorises before execution.\nReversibility is designed before deployment: a defined blast radius, a rollback path, and a stop control the client can operate without us.\nAutonomy widens only by written agreement after a review period, never by default."
          }
        ]
      },
      {
        "heading": "Secure development practices",
        "blocks": [
          {
            "type": "ul",
            "text": "Changes go through version control and review. Nothing is changed directly in production.\nDependency and secret scanning run in the build pipeline. Development, test, and production are separated, and production access is restricted and logged.\nDeliverables are handed over with source, configuration, and documentation so the client can run and audit them without us."
          }
        ]
      },
      {
        "heading": "Personnel and subcontractors",
        "blocks": [
          {
            "type": "ul",
            "text": "Everyone assigned to an engagement is bound by written confidentiality obligations that continue after they leave.\nIdentity and background checks are proportionate to the sensitivity of the engagement. Where a client requires specific vetting or clearance, meeting that standard is a condition of assignment.\nWork is performed by Ektelo personnel by default. Any subcontractor is named to the client in advance, engaged only with the client's written consent, and bound by the same obligations. Ektelo remains accountable for their work, and a current sub-processor list is available on request."
          }
        ]
      },
      {
        "heading": "Incident response and notification",
        "blocks": [
          {
            "type": "ul",
            "text": "Each engagement has a named point of contact for security matters.\nOn a suspected incident affecting client data or systems, containment comes first and the client is notified without undue delay, and no later than 24 hours after confirmation.\nA written report follows within five business days: what happened, which data and systems were affected, what was done, and what changes follow.\nWhere the client carries statutory reporting duties, including 72-hour regimes, we provide what is needed to meet the deadline and support client-led forensic review."
          }
        ]
      },
      {
        "heading": "Control framework and certification status",
        "blocks": [
          {
            "type": "p",
            "text": "The control set is designed to map to the ISO 27001 domains relevant to this work: access control, cryptography, operations security, supplier relationships, incident management, and continuity. Ektelo does not hold ISO 27001, SOC 2, or any other certification, and does not represent otherwise. Where an engagement requires formal certification or independent audit, we will state in writing what will be pursued, on what timeline, and at whose cost. We complete client security questionnaires, accept client audit and inspection rights, and adopt the client's security schedule where it is stricter than ours."
          }
        ]
      },
      {
        "heading": "This website",
        "blocks": [
          {
            "type": "ul",
            "text": "Every page is statically generated and served over HTTPS. There is no visitor database and no visitor account system.\nThe one exception is the contact form, which posts to a single server endpoint. That endpoint validates the submission, applies rate limiting and spam filtering, and relays the message to us by email. Submissions are not written to a database.\nThere are no third-party analytics, advertising trackers, or social media pixels, and no cookies are set for tracking or profiling.\nThe only personal data reaching us from this site is what you send through the contact form, by email, or by telephone, used solely to respond to you."
          }
        ]
      },
      {
        "heading": "Requesting documentation",
        "blocks": [
          {
            "type": "p",
            "text": "Security questionnaires, data processing agreements, sub-processor lists, and control documentation are available on request: ssentanmuseth@gmail.com, +256 760 344 344. Ektelo operates from Kampala, Uganda and works remotely with clients in other jurisdictions. Data protection enquiries use the same channel. Where an engagement requires a named data protection contact, that person is designated in the engagement documentation and identified to the client before processing begins."
          }
        ]
      }
    ]
  }
};

export const faq: { q: string; a: string }[] = [
  {
    "q": "How does an engagement start, and what happens in a diagnostic?",
    "a": "Every engagement starts with an operational diagnostic. We spend two to four weeks inside your organization tracing how work actually moves, not how the process manual says it moves: interviewing the people doing the work, sitting in the queues, pulling system logs, timing the handoffs. You receive a written map of where time, money and decision authority are lost, ranked by annual cost. The diagnostic stands alone as a deliverable, and you are free to act on it with or without us."
  },
  {
    "q": "How long does this take?",
    "a": "The diagnostic runs two to four weeks. The first change reaches production within 90 days of signing; we do not run year-long design phases that produce documents instead of results. A single directorate or business unit is typically six to nine months end to end. A central bank's core operations or a national system runs 18 to 36 months, delivered in quarterly increments that each stand on their own if funding or leadership changes."
  },
  {
    "q": "How do you price work?",
    "a": "Three ways. The diagnostic is a fixed fee set by scope and site count, quoted before anything begins. Delivery is priced against milestones defined as operational outcomes, not billable hours or headcount on site. On long programmes we place part of the fee at risk against agreed measures such as cycle time, cost per transaction and error rate, so our economics move with yours."
  },
  {
    "q": "What happens to our data, and does it train your models?",
    "a": "Your data remains yours and remains where your regulator requires it, including fully in-country or on your own hardware. Nothing you give us trains general models, ours or anyone else's. We sign your data protection terms before the first file moves, and every system we build records who accessed what and when. If the engagement must run entirely inside your network with no external calls, we design it that way and tell you at the outset what that costs in delivery speed."
  },
  {
    "q": "Do you replace our existing vendors and our internal IT department?",
    "a": "Usually neither. Most of what is broken is process ownership and data flow, not the core banking platform or the ERP you have already paid for, so we integrate with what works and replace only what demonstrably blocks the outcome. Where an incumbent vendor is the actual constraint, we say so in writing with the evidence, and you decide. Your own engineers sit on the delivery teams from week one, because they are the people who will run the result."
  },
  {
    "q": "What happens to staff whose work gets automated?",
    "a": "We tell you at the diagnostic which roles change, which shrink and which disappear. In most engagements the dominant effect is redeployment rather than redundancy: institutions overstaffed in data entry are almost always understaffed in supervision, inspection and frontline service. Retraining is a funded workstream with named owners, and your people are trained to operate what we build. Where headcount genuinely reduces, that is a decision you make in advance, not something discovered after go-live."
  },
  {
    "q": "Who owns the software and the IP that gets built?",
    "a": "You do. Source code, data models, documentation and deployment scripts transfer to you, and the contract states this before we write a line. We retain our pre-existing methods and internal tooling, licensed to you perpetually for the systems we deliver. No part of your operation should depend on our continued goodwill or our continued invoicing."
  },
  {
    "q": "What happens when the engagement ends?",
    "a": "Exit is designed at the start, not negotiated at the end. Every workstream has a named counterpart in your organization who is accountable for it afterwards, and in the final phase they run it in production while we observe rather than the reverse. You receive runbooks, test suites, monitoring and a trained operating team, then a support arrangement you can cancel on notice. The measure of a good engagement is that year two does not require us."
  },
  {
    "q": "We have already failed a transformation. Will you work with us?",
    "a": "That describes most of the organizations we work with. Programmes fail for reasons that are rarely technical: no single accountable owner, requirements written by people who do not do the work, a go-live date set politically, and no funded plan for the change in behaviour. Before proposing anything we read the record of the last attempt, and we will not restart the same design under a new name. Salvaging the parts that work is usually cheaper and faster than a second full rebuild, and we will tell you honestly which parts those are."
  },
  {
    "q": "What is the smallest sensible engagement?",
    "a": "One process, one diagnostic. Two to four weeks, fixed fee, ending in a written finding and a costed execution plan you are free to run with anyone you choose. Pick the process that generates the most complaints or the most manual reconciliation, because that is where the evidence is clearest and the arithmetic is hardest to argue with. If the return on that one process is not defensible, a larger programme would not have been either."
  }
];

export const careers: {
  intro: string;
  whoWeHire: string[];
  howWeWork: string[];
  roles: { title: string; discipline: string; summary: string }[];
} = {
  "intro": "Ektelo is small and senior by design. The people we hire go inside national governments, central banks, utilities, hospital groups, and large enterprises, and rebuild how the work actually flows. Your name sits against a number the client already tracks: cycle time, cost per transaction, leakage, throughput.",
  "whoWeHire": [
    "You have run something real — an operation, a delivery team, a production system — and can describe precisely what broke and what you did about it.",
    "You are comfortable measuring your own work: a baseline, a target, and a number you are willing to be held to in front of the client.",
    "You move between the executive floor and the operating floor without changing how you speak or what you claim.",
    "You write clearly and briefly, because most of our influence travels as written analysis rather than presentation."
  ],
  "howWeWork": [
    "Every engagement opens with measurement; we baseline the operation before proposing anything and publish the number we intend to move.",
    "We work inside the operation — on the plant floor, in the branch, at the border post, beside the people whose day we are changing.",
    "Teams are flat and directly accountable: there is no layer between the person who designed the process and the person answerable for it working.",
    "We finish what we start. Diagnostics run two to four weeks, transformation programs three to twelve months, and we stay until the client's own team can run what we built.",
    "Candor is a working requirement. If the problem is leadership cadence rather than technology, we say so, with the data in hand."
  ],
  "roles": [
    {
      "title": "Transformation Lead",
      "discipline": "Delivery",
      "summary": "You own an engagement end to end: the baseline, the redesign, the delivery plan, and the target metric written into the statement of work. You sit with the client executive weekly and with their operators daily."
    },
    {
      "title": "Process Engineer",
      "discipline": "Delivery",
      "summary": "You map how work actually moves, time every step, and rebuild the flow around throughput and control. Handoffs and approval loops come out before anyone writes a line of code."
    },
    {
      "title": "Platform Engineer",
      "discipline": "Engineering",
      "summary": "You build the systems the new operation runs on: case managers, operations consoles, field tools, and integrations into core systems never designed to talk to each other. You ship into environments with real audit, security, and uptime constraints."
    },
    {
      "title": "Applied AI Engineer",
      "discipline": "Engineering",
      "summary": "You put models against the reading, matching, and drafting work that consumes client hours, with evaluation sets, human-in-the-loop guardrails, and a documented cost per task before and after. You own the failure modes as closely as the gains."
    },
    {
      "title": "Operations Analyst",
      "discipline": "Data",
      "summary": "You establish the baseline the organization does not currently have: cycle times, error rates, cost per transaction, revenue at risk. You build the pipelines and the reporting cadence that keep those numbers honest long after handover."
    },
    {
      "title": "Executive Advisor",
      "discipline": "Advisory",
      "summary": "You sit beside ministers, chief executives, and boards through operating model decisions, make-versus-buy calls, and transformation governance. Advice arrives with a delivery plan attached, and you stay to see it executed."
    }
  ]
};
