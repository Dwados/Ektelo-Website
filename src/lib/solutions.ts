/**
 * The operational solutions catalogue.
 *
 * This replaces case studies deliberately: Ektelo is a new firm, so instead of
 * publishing results it cannot evidence, each solution states the measures the
 * engagement is baselined and held against. Nothing here claims a past client
 * or an achieved outcome.
 */

import type { LucideIcon } from "lucide-react";
import { Layers } from "lucide-react";
import { services } from "@/lib/data";

export type SolutionSegment = "government" | "enterprise" | "small-business";

export type Solution = {
  slug: string;
  title: string;
  oneLiner: string;
  problem: string;
  /** What Ektelo physically does. */
  deploy: string[];
  /** The numbers baselined at the start and committed to in writing. */
  measures: { metric: string; commitment: string }[];
  startingPoint: string;
  /** Exact service titles from lib/data.ts. */
  services: string[];
  segments: SolutionSegment[];
};

export type SolutionSegmentMeta = {
  key: SolutionSegment;
  title: string;
  framing: string;
  buyerNote: string;
};

export const solutionsIntro =
  "Ektelo is a new firm, and this catalogue is written accordingly. It contains no case studies, no named clients and no achieved results — we have not yet earned the right to publish them, and invented ones would not survive a procurement file or a diligence question. What it contains instead is the commitment: for every solution, the numbers baselined at inception, the target agreed in writing before any build begins, and the threshold that has to hold at handover. Read it as the stronger position. A firm that names the measures it accepts being judged on, before it has your money, is easier to hold to account than one quoting percentages from work you cannot inspect.";

export const solutionSegments: SolutionSegmentMeta[] = [
  {
    "key": "government",
    "title": "Governments and Public Institutions",
    "framing": "Public institutions carry mandates they cannot suspend, on budgets voted annually and examined line by line. The work still runs on paper files, parallel spreadsheets and the memory of long-serving staff. So service times go unmeasured, revenue leaks between assessment and bank, and no two registers hold the same version of the same citizen. The licence counter, the hospital records office and the utility service point are now judged against a mobile money app, and the public does not accept the difference.",
    "buyerNote": "We scope to survive a procurement file and a financial year. Fixed deliverables, a documented method, milestones that outlast a change of minister, source code and documentation transferred to the institution, no design that depends on removing staff, and payment tied to milestones you can verify yourself."
  },
  {
    "key": "enterprise",
    "title": "Corporations and Large Enterprises",
    "framing": "A large enterprise usually has more technology than it can reconcile, not less. Each function runs a system bought to be definitive, none of them fully agree, and the joining is done by hand — in email threads, in spreadsheets nobody owns, in overtime. That work never reaches a board pack because it sits in headcount and rework rather than in a line item, which is how years of technology spend can leave unit operating cost roughly where it started.",
    "buyerNote": "Procurement, security review and incumbent vendor contracts set the pace here, so engagements are staged. A fixed-fee diagnostic produces a measured baseline and a business case internal IT is invited to attack. Build phases are then scoped to work alongside the existing estate and its vendor contracts rather than across them. The diagnostic is the document we expect to be judged on before any build is committed."
  },
  {
    "key": "small-business",
    "title": "Small and Growing Businesses",
    "framing": "In a business of five to two hundred people, the operating system is usually a person. Orders arrive on WhatsApp, stock gets counted when something goes missing, invoices go out when someone remembers, and the only complete picture of the business sits in the founder's head. None of it is broken enough to stop trading, which is why it never reaches the top of the list — until volume doubles and every one of those informal arrangements fails in the same month.",
    "buyerNote": "Work here is fixed-price and sequenced one process at a time, in blocks of four to eight weeks, priced so you can stop after any block. Something measurable changes inside the first month, and your own staff run it at handover. We are not building a retainer."
  }
];

export const solutions: Solution[] = [
  {
    "slug": "revenue-assurance-programme",
    "title": "Revenue Assurance Programme",
    "oneLiner": "We trace collection from register entry to bank posting, and name every point where money stops moving.",
    "problem": "Your register does not match the economy you are collecting from, and your billing figures do not match the bank statement. Assessments are raised, some are paid at a counter against a manual receipt, some are reduced at a desk with no record of who authorised the reduction, and reconciliation happens weeks later by hand. The gap between what is owed, what is billed and what reaches the account is not a mystery. It is simply unmeasured.",
    "deploy": [
      "Map the collection chain hand-off by hand-off — register, assessment, notice, payment channel, receipt, banking, reconciliation — and record where value and time are lost at each step",
      "Match the register against independent sources you can already obtain — utility connections, trading licences, property records, import declarations — to size the population you are not billing",
      "Close the receipting gap: retire manual receipt books at points that cannot be reconciled, and post cash, bank, mobile and agent collections into a single ledger",
      "Rebuild the waiver, exemption, objection and write-off workflow so every reduction carries a named approver, a reason code and a retrievable file",
      "Stand up arrears management: age the debt, rank it by recoverability, and drive collection from a worklist with named owners rather than a general circular"
    ],
    "measures": [
      {
        "metric": "Billable population identified against independent data sources",
        "commitment": "Sized in the first six weeks against third-party records. The coverage target and the enrolment sequence are signed by the commissioner before any system is built."
      },
      {
        "metric": "Days from collection to reconciled bank posting",
        "commitment": "Timed at the current state across every channel. The target cycle is fixed with the institution and its bankers at inception, because settlement depends on parties outside this contract."
      },
      {
        "metric": "Value of assessments reduced with no recorded approver",
        "commitment": "Counted across a full prior period and reported to the accounting officer. Inside the new workflow the figure is zero by construction, and any reduction made outside it is reported as an exception."
      },
      {
        "metric": "Arrears over twelve months old as a share of the book",
        "commitment": "Baselined and reported monthly against a recovery target set before build and carried in the milestone schedule, not renegotiated at review."
      }
    ],
    "startingPoint": "A six-week diagnostic on one revenue stream in one region — property rates, trading licences or a single tax head — ending in a quantified leakage map, a costed remediation sequence and a signed baseline. Build starts only after the baseline is signed.",
    "services": [
      "Data & Analytics",
      "Process Engineering",
      "Systems Integration",
      "Business Process Automation"
    ],
    "segments": [
      "government"
    ]
  },
  {
    "slug": "registry-reconstruction",
    "title": "Registry Reconstruction",
    "oneLiner": "We turn a room of files into a register of record with custody, version history and an audit trail that survives challenge.",
    "problem": "The register lives in files, bound ledgers and the memory of the two officers who know where things are kept. A certified search takes days, competing entries survive because nothing cross-checks them, and one missing file can suspend a transaction or a court matter indefinitely. If a digitization round has already been attempted, check whether it produced searchable records or only page images. The second outcome leaves the backlog growing while the budget is already spent.",
    "deploy": [
      "Inventory the physical holdings, classify by condition and legal weight, and sequence capture so live transactions clear before dormant history",
      "Define the capture standard — structured, indexed records searchable by party, parcel, entity and date, not photographs of pages — and verify every batch against it before acceptance",
      "Supervise capture performed by your own registry staff or a capture bureau you procure separately; we set the standard, run quality control and hold the schedule rather than bill senior time to turn pages",
      "Deduplicate and adjudicate competing entries under a written rule signed by the registrar, escalating exceptions instead of guessing at them",
      "Build the register on a platform that enforces custody — every search, amendment and certification carries a user, a timestamp and a reason — and run it alongside paper, with staff trained on the live workflow, until a written test says the digital register is the version of record"
    ],
    "measures": [
      {
        "metric": "Median time to produce a certified search or record",
        "commitment": "Timed on a live sample before capture begins and re-timed at cutover in front of registry staff. The target is set with the registrar and carried in the milestone schedule."
      },
      {
        "metric": "Backlog volume and weekly clearance rate",
        "commitment": "Counted physically at the start. The clearance rate is committed against a dated plan, with the capture staffing it assumes stated on the same page."
      },
      {
        "metric": "Duplicate and conflicting entries per ten thousand records",
        "commitment": "Reported as found, with the adjudication route agreed before capture starts rather than negotiated once the conflicts are on a screen."
      },
      {
        "metric": "Share of transactions completed without pulling a paper file",
        "commitment": "Baselined from current practice and stepped up milestone by milestone through parallel running, with the final threshold a condition of handover."
      }
    ],
    "startingPoint": "One register class in one office. Inventory and pilot capture run eight to ten weeks and end with a verified capture rate, a defect rate and a cost per record you can defend in a budget submission.",
    "services": [
      "Workflow Digitization",
      "Custom Internal Platforms",
      "Government Modernization",
      "Process Engineering"
    ],
    "segments": [
      "government"
    ]
  },
  {
    "slug": "risk-based-inspection-operations",
    "title": "Risk-Based Inspection Operations",
    "oneLiner": "Inspectors stop covering what is close and start covering what carries risk, with evidence that survives appeal.",
    "problem": "Inspectors leave with paper checklists and come back with observations that are typed up, filed and rarely followed to closure. Coverage follows proximity and habit, so premises near the office are visited repeatedly while whole categories go years without a visit. When a closure or a penalty is challenged, the file has to be reconstructed from memory, and the institution settles rather than defends.",
    "deploy": [
      "Reconstruct the register of regulated entities first — an inspection plan cannot run against a list that does not exist",
      "Score entities by risk on inspection history, complaints, size and sector, keep the scoring rules written and reviewable so an enforcement decision can be explained, and drive the calendar from the score rather than the map",
      "Deploy mobile capture so findings, photographs, location and time are recorded at the premises rather than reconstructed at a desk, including where there is no network at the gate",
      "Wire findings into enforcement with statutory clocks — notice, remedy period, re-inspection, sanction — so the evidence pack for each case assembles itself as the case moves",
      "Give the directorate a live view of coverage against plan, open findings and cases past their remedy date"
    ],
    "measures": [
      {
        "metric": "Share of the regulated population inspected in the last twelve months",
        "commitment": "Baselined against the reconstructed register rather than the old list, with an annual coverage target set with the director and reported quarterly."
      },
      {
        "metric": "Days from finding to enforcement decision",
        "commitment": "Measured from existing case files by class of finding, with a maximum fixed in writing for each class before the workflow is built."
      },
      {
        "metric": "Share of inspections with a complete evidence pack captured on site",
        "commitment": "Proven through a supervised pilot with real inspectors in the field. The tool and workflow are accepted only if completeness holds at the agreed threshold."
      },
      {
        "metric": "Repeat non-compliance at re-inspection",
        "commitment": "Baselined and tracked so the directorate can judge whether enforcement changes behaviour, not whether inspectors are busy."
      }
    ],
    "startingPoint": "A four-week field study — riding with inspectors, reading a year of case files and testing the register against what is actually out there — produces the risk model and the coverage baseline. Deployment follows one directorate at a time.",
    "services": [
      "Data & Analytics",
      "AI Strategy & Implementation",
      "Workflow Digitization",
      "Custom Internal Platforms"
    ],
    "segments": [
      "government"
    ]
  },
  {
    "slug": "inter-agency-data-exchange",
    "title": "Inter-Agency Data Exchange",
    "oneLiner": "One citizen, one record. Agencies verify each other directly instead of sending the public between buildings carrying paper.",
    "problem": "Each agency holds its own version of the same citizen, business or property, and none of them reconcile. The public is sent to fetch a letter from one institution to prove something another institution already knows, and policy is argued from numbers that do not agree across the table. The missing piece is not technology. It is a written answer to who owns each field, who may see it, and who is accountable when it is wrong.",
    "deploy": [
      "Establish the authoritative source for each shared data element and have it signed at accounting-officer level before anything is connected",
      "Run identity resolution across the existing registers and report the mismatch openly, including the records that will never match and the manual route for handling them",
      "Build the exchange as a defined interface each agency queries, so verification stops travelling as an email attachment and a spreadsheet",
      "Enforce access control and logging at field level under the data protection rules that apply, so every lookup is attributable and disclosure survives audit",
      "Retire the paper letters the exchange replaces — an integration that removes no document has not changed the process"
    ],
    "measures": [
      {
        "metric": "Documents a citizen must physically collect from another agency",
        "commitment": "Counted per transaction type at baseline. Each removal is a dated milestone and is verified at the counter, not on a diagram."
      },
      {
        "metric": "Match rate between registers after identity resolution",
        "commitment": "Reported in full before any go-live decision, unmatched remainder included, because the unmatched remainder is where the operational risk sits."
      },
      {
        "metric": "Verification turnaround between agencies",
        "commitment": "Baselined in days from current practice, then committed as a service level inside the memorandum the agencies sign with each other."
      },
      {
        "metric": "Share of exchanges logged and attributable to a named user",
        "commitment": "Complete coverage is a condition of handover, and the log is walked through with your internal audit before the exchange opens."
      }
    ],
    "startingPoint": "Two agencies and one high-volume verification. The technical exchange can be ready inside a quarter. Go-live waits on the data-sharing instrument between the agencies, which is the critical path and sits with them — we draft it, sequence it and chase it, and we say so at inception rather than after the technical work is finished.",
    "services": [
      "Systems Integration",
      "Digital Transformation",
      "Data & Analytics",
      "Government Modernization"
    ],
    "segments": [
      "government"
    ]
  },
  {
    "slug": "cycle-time-and-throughput",
    "title": "Cycle Time and Throughput",
    "oneLiner": "Elapsed time is mostly queue, not work. Every application, claim and case gets a clock, a named owner and a turnaround you can publish.",
    "problem": "An application enters the building and disappears. A claim, a credit file, an account opening or a new connection takes three weeks. Most of that elapsed time is queue — waiting between desks, waiting on a document, sitting in an approver's inbox — but touch time is rarely measured anywhere, so nobody inside the organisation can state the median time to decision or where the queue actually forms. Internal reporting shows handling time, so the weeks the applicant, the customer and the regulator experience never reach a management pack. Applicants work this out and conclude the reliable route is a phone call to someone they know. That is what an unmeasured queue costs, long before anyone calls it a service problem.",
    "deploy": [
      "Time-stamp the journey from first submission to decision, using system logs and desk observation, and separate touch time from wait time at every hand-off",
      "Cut sequential approvals that carry no control and re-set thresholds with risk, compliance or counsel in the room, recording each change as a control decision they sign; where the power is statutory, delegate only against written criteria approved by the head of the institution and cleared by counsel",
      "Rebuild intake so the applicant, customer or agent supplies complete information once, validated at the point of entry rather than three days later",
      "Deploy case management where every file carries a reference, an owner, a deadline and a status the applicant can see without entering the building, working from the same record officers use so the counter and the online queue cannot disagree",
      "Put automation and AI agents on the steps that create waiting rather than judgement — document checks, data extraction, status chasing — and leave the judgement steps with named people",
      "Instrument ageing and escalation so a file past its deadline surfaces to a supervisor automatically rather than on complaint, and run the daily management routine against live queue views through the first quarter"
    ],
    "measures": [
      {
        "metric": "Median and ninetieth-percentile time from submission to decision",
        "commitment": "Both baselined from a full quarter of your own file and system records before anything changes, with the ninetieth percentile as the number held to. In a public institution both figures are published as a service standard rather than kept as an internal target."
      },
      {
        "metric": "Share of cases decided inside the statutory or contracted service period",
        "commitment": "Measured at baseline, then reported monthly against a threshold fixed with management before build, from a reporting line that cannot be assembled by hand."
      },
      {
        "metric": "Touch time as a share of elapsed time",
        "commitment": "Measured step by step during the diagnostic, with an explicit target ratio agreed for the redesigned journey."
      },
      {
        "metric": "Files with no recorded movement for fourteen days",
        "commitment": "Counted at baseline, then held under a ceiling agreed with management and enforced by automatic escalation. The weekly count reaches the head of the institution or the accountable executive whether or not it is flattering."
      },
      {
        "metric": "Rework, re-submission and counter visits per completed case",
        "commitment": "Baselined per licence, product or claim type, with each removed step set as a dated milestone rather than a general aspiration."
      }
    ],
    "startingPoint": "One journey, chosen for volume, elapsed time or complaint load — a single licence or permit type, one claim category, one product's onboarding. Mapping from file records and system data runs three to four weeks. Redesign to first live decision runs eight to twelve weeks, assuming access to the file room and a named decision-maker on your side. Later journeys reuse the same intake and workflow components, so the sequence is deliberately one journey at a time rather than a programme running across the whole organisation.",
    "services": [
      "Process Engineering",
      "Workflow Digitization",
      "Enterprise Software Solutions",
      "AI Agents",
      "Government Modernization"
    ],
    "segments": [
      "government",
      "enterprise"
    ]
  },
  {
    "slug": "accountable-reporting-line",
    "title": "The Accountable Reporting Line",
    "oneLiner": "Leadership sees the month as it stands, sourced from systems rather than assembled by hand after the period closes.",
    "problem": "Monthly and quarterly reporting is built by hand from department, district, facility and division returns. It arrives well after the period it describes, the versions disagree, and it reports activity rather than cost. When Parliament, the parent ministry, the auditor or the board asks a direct question — how many, how fast, how much absorbed, what does it cost us to process one — the organisation goes quiet while someone rebuilds the figures in a spreadsheet. Decisions then run on the last number anyone is willing to defend, which is usually an old one, and operational performance ends up argued anecdotally by whoever presents last.",
    "deploy": [
      "Fix the small set of numbers the organisation is genuinely accountable for — volume, cycle time, first-pass yield, cost to serve, absorption — cut the rest out of the report, and have the set signed off by the officers and executives who will be held to it",
      "Trace every measure to a system of record, and repair or replace the sources that cannot support one rather than publishing the measure with a caveat",
      "Automate collection from the operating systems and from district, facility and division returns, so reports are compiled rather than typed",
      "Deploy reporting at three levels — officer, department or division head, accounting officer or executive — each showing only what that level can act on",
      "Stand up a benefits ledger tracking committed targets against actuals for every improvement programme, including this one",
      "Rewrite the review calendar and run the first quarter of it alongside the leadership team, so the meeting opens on live figures and closes with named actions and dates"
    ],
    "measures": [
      {
        "metric": "Lag between period close and reliable reporting",
        "commitment": "Baselined in days and weeks, with a fixed reporting day of the month committed before build starts and held after handover."
      },
      {
        "metric": "Share of reported indicators traceable to a system of record",
        "commitment": "Measured at the current state, with a minimum threshold as a condition of acceptance. Any indicator that cannot be traced is either fixed or struck from the report, and every measure still assembled by hand is named with its manual step justified."
      },
      {
        "metric": "Staff hours spent compiling the monthly pack",
        "commitment": "Counted by observation across departments, finance and the programme office at baseline, and re-counted the same way at handover in front of the same people who did the compiling."
      },
      {
        "metric": "Cost to serve per transaction, by process",
        "commitment": "Established as a baseline where none exists today, with the calculation method documented and agreed with finance so later movement is defensible rather than arguable."
      },
      {
        "metric": "Budget absorption or spend visible by vote, division and quarter",
        "commitment": "Baselined against the current reporting cycle and committed to monthly currency, so absorption is a management number during the year rather than a reconstruction at year end."
      }
    ],
    "startingPoint": "Two to four weeks to fix the accountable measure set and audit its data sources. The difficulty is agreement on what a measure means, not the dashboard. A live reporting line for one directorate or division follows in six to eight weeks, starting where a build programme is already running so the numbers have something to measure, before it extends across the organisation.",
    "services": [
      "Performance Dashboards",
      "Data & Analytics",
      "Business Process Automation",
      "Operational Consulting"
    ],
    "segments": [
      "government",
      "enterprise"
    ]
  },
  {
    "slug": "core-systems-interoperability",
    "title": "Core Systems Interoperability",
    "oneLiner": "Your core systems stay. The manual joining between them stops.",
    "problem": "Core banking, ERP, billing, claims and CRM were each bought to be definitive, and each is definitive about something different. Between them sit people exporting a file, re-keying it and mailing it onward, and every hop is a place where two systems stop agreeing and a customer waits. The cost is not in the cores. It is in the gaps between them, and no budget line is called gaps.",
    "deploy": [
      "Map every point where data leaves one core system and re-enters another inside an agreed boundary, including the manual hops nobody documented",
      "Rank those interfaces by transaction volume, error rate and downstream handling cost, and build the most expensive ones first",
      "Build against the interfaces the cores already expose — APIs, file drops, database views — leaving core configuration untouched, and name any vendor licence or interface dependency in the diagnostic rather than discovering it mid-build",
      "Instrument each interface with reconciliation checks, retries and a break queue that names an owner and a due date for every failure",
      "Hand the layer, its runbooks and its monitoring to internal IT, whose engineers sit on the build team from week one as a contracted condition rather than a courtesy at the end"
    ],
    "measures": [
      {
        "metric": "Manual hand-offs between core systems",
        "commitment": "Counted and named individually during the diagnostic. A specific, listed set is committed for removal in the build contract."
      },
      {
        "metric": "Interface failure rate and mean time to clear a break",
        "commitment": "Baselined per interface before any build, with thresholds written into acceptance criteria rather than reported after the fact."
      },
      {
        "metric": "Hours per month spent re-keying and correcting between systems",
        "commitment": "Measured by direct observation rather than by survey in week one, and re-measured the same way at handover against an agreed target."
      },
      {
        "metric": "Prioritised interfaces running without manual intervention",
        "commitment": "Fixed as a named list at scope-lock and reported weekly through build."
      }
    ],
    "startingPoint": "A four-to-six week diagnostic bounded to one value chain — typically two or three cores and the traffic between them — producing a costed interface register, a build sequence and a business case the board can approve. Mapping the whole estate in one pass is not attempted, and the first interfaces are scoped to reach production inside the first quarter of build.",
    "services": [
      "Systems Integration",
      "Enterprise Software Solutions",
      "Digital Transformation"
    ],
    "segments": [
      "enterprise"
    ]
  },
  {
    "slug": "back-office-rework-reduction",
    "title": "Back-Office Rework Reduction",
    "oneLiner": "Back offices absorb the errors made upstream. Remove the upstream causes and the capacity returns without a headcount programme.",
    "problem": "Work arrives at the back office incomplete, incorrect, or in a format that has to be re-keyed, and teams have quietly built their capacity plan around that reality. Exceptions are cleared by experienced staff who hold the rules in their heads, so volume growth turns into headcount growth. Automation demonstrated on clean cases tends to stall here, because the real queue is not clean.",
    "deploy": [
      "Sample and classify a month of exceptions by root cause, upstream owner and observed handling cost",
      "Fix the upstream causes first — form design, validation, contract templates, supplier data — and automate only what cannot be removed",
      "Codify the exception rules that currently live with senior staff into written decision logic, reviewed and signed off by the function that owns the risk",
      "Deploy AI agents on document classification, data extraction and rule-based dispositioning, with confidence thresholds, human review below them and a standing audit sample",
      "Instrument the queue so every exception carries its root cause, and route recurring causes back weekly to the function that created them, with a named accountable manager"
    ],
    "measures": [
      {
        "metric": "First-pass yield at intake",
        "commitment": "Baselined by sampling actual work items rather than system status codes, with a target committed before build starts."
      },
      {
        "metric": "Exception volume by root cause",
        "commitment": "Baselined and ranked in the diagnostic, with specific root causes named in the contract for elimination."
      },
      {
        "metric": "Handling cost per exception",
        "commitment": "Calculated at baseline from observed handling time and loaded cost, on a method agreed with finance, and re-measured the same way at handover."
      },
      {
        "metric": "Share of exceptions dispositioned without human touch",
        "commitment": "Committed per exception type, each with a stated accuracy threshold and an agreed audit sample size."
      }
    ],
    "startingPoint": "A four-week exception diagnostic on one high-volume queue: a month of items classified by root cause and costed. Upstream fixes start during the diagnostic wherever the owning function agrees. Automation follows only where the root cause cannot be removed at source.",
    "services": [
      "Process Engineering",
      "Business Process Automation",
      "AI Agents",
      "AI Strategy & Implementation"
    ],
    "segments": [
      "enterprise"
    ]
  },
  {
    "slug": "shadow-process-recovery",
    "title": "Shadow Process Recovery",
    "oneLiner": "The processes running in email and personal spreadsheets are the ones nobody can audit, staff or hand over.",
    "problem": "Some of the work that keeps the business running is not in any system: approvals granted in email threads, trackers on personal drives, messaging groups coordinating field crews, a macro written by someone who left two years ago. It holds until the owner takes leave, an auditor asks for evidence, or volume doubles. Internal IT usually knows where these are. What it does not have is a mandate or a budget to take them on.",
    "deploy": [
      "Run structured discovery across operating units to catalogue shadow processes with their owner, volume, and the specific failure each one would cause",
      "Triage the register into three decisions — retire, absorb into a system already licensed, or rebuild as a small internal application — with financial reconciliations routed to their own programme rather than handled here",
      "Rebuild what is worth keeping with access control, audit logging and approval routing, inside internal IT's environment and to their standards",
      "Migrate live data and cut over one process at a time, with the source file locked read-only and its former owner named as reviewer for the first two cycles",
      "Document each rebuilt process and transfer ownership, with the support arrangement agreed with internal IT in writing before handover"
    ],
    "measures": [
      {
        "metric": "Shadow processes catalogued, with volume and risk rating",
        "commitment": "Delivered as a signed register at the close of discovery. Nothing is rebuilt before the register is agreed."
      },
      {
        "metric": "Operational volume running outside a system of record",
        "commitment": "Estimated at baseline against a stated counting method and re-measured the same way after migration against a committed target."
      },
      {
        "metric": "Processes with no written rules and no trained backup",
        "commitment": "Counted at baseline. Every process rebuilt leaves handover with written rules, a named owner and a named backup."
      },
      {
        "metric": "Approvals with a retrievable audit trail",
        "commitment": "Assessed at baseline, where the evidence is usually somebody's mailbox. Complete and retrievable logging is an acceptance criterion for each rebuild rather than a target to aim at."
      }
    ],
    "startingPoint": "Three to four weeks of discovery in one division or function, producing a signed register and a triage decision for every item. Rebuild then runs in short cycles, one process at a time, so working replacements land while the register is still being worked through.",
    "services": [
      "Workflow Digitization",
      "Custom Internal Platforms",
      "Operational Consulting"
    ],
    "segments": [
      "enterprise"
    ]
  },
  {
    "slug": "reconciliation-and-close-control",
    "title": "Reconciliation and Close Control",
    "oneLiner": "One system of record per number, reconciliation that runs on rules instead of on one person's spreadsheet, and a close that lands on a date.",
    "problem": "The ledger, the operating systems and the bank statements are reconciled in a workbook that lives on a laptop, maintained by someone who knows where the tabs break. In a smaller business the same sale is keyed into the point of sale, the stock sheet and the accounting package, and the totals disagree while staff quietly correct the differences as they go. Either way, close runs long because breaks surface late and are then chased by email, the numbers are history by the time they are agreed, and when an auditor, a regulator or a lender asks how a figure was derived, the answer is a person rather than a system.",
    "deploy": [
      "Inventory every reconciliation and every place the same fact is entered twice, with volume, frequency, owner, and what stops when that person is on leave",
      "Name the system of record for each type of data — sales, stock, cash, payroll, ledger — and have it agreed by the people who key it",
      "Rebuild the matching logic as explicit rules, on a platform the business already licenses where one exists, with tolerances agreed in writing by finance and operations",
      "Automate the data pulls so each reconciliation starts from source-system data rather than from someone's export; where a bank offers no feed, a dated statement import stands in until it does",
      "Route unmatched items into an aged break queue with an owner, a due date and a defined escalation path, worked the same morning rather than at a month-end meeting",
      "Retire each spreadsheet formally on a dated schedule, running the rebuilt reconciliation in parallel for a full cycle first, and record the retirement as a control change"
    ],
    "measures": [
      {
        "metric": "Working days to close",
        "commitment": "Baselined across two to three full cycles before any build, with a target close calendar agreed in writing with finance and applied from handover."
      },
      {
        "metric": "Share of items matched automatically",
        "commitment": "Baselined per reconciliation, with thresholds committed per reconciliation rather than as a blended average."
      },
      {
        "metric": "Value and count of breaks aged over thirty days",
        "commitment": "Counted and valued at baseline, with a reduction target and an ageing policy committed before go-live."
      },
      {
        "metric": "Places a single transaction is recorded, and staff hours spent re-keying",
        "commitment": "Counted and timed at baseline across every affected role. One system of record per data type is written into scope as the committed target, and the hours are re-timed the same way at handover."
      },
      {
        "metric": "Reconciliations only one person can run",
        "commitment": "Listed at diagnostic. Every in-scope reconciliation leaves handover documented, rule-based, and demonstrated in full by a second trained operator."
      }
    ],
    "startingPoint": "An inventory first — two to three weeks across finance and one operating division in a large enterprise, one week in a smaller business — mapping every reconciliation and every contradiction, and saying plainly whether this is the binding constraint or whether a single process fix would do more for less. Build then runs one reconciliation or one connection at a time, highest volume first, each live in parallel with the spreadsheet for a full cycle before the spreadsheet is switched off. Blocks are priced so trading never stops and you can stop after any one of them.",
    "services": [
      "Workflow Digitization",
      "Business Process Automation",
      "Systems Integration",
      "Data & Analytics",
      "Custom Internal Platforms"
    ],
    "segments": [
      "enterprise",
      "small-business"
    ]
  },
  {
    "slug": "order-intake-control",
    "title": "Order Intake Control",
    "oneLiner": "Keep WhatsApp — your customers like it. Stop letting it be the only place an order exists.",
    "problem": "Orders, quotes, complaints and staff questions arrive across three phone numbers, two WhatsApp groups, a walk-in counter and direct calls to the owner. Whether a job gets done depends on who happened to see the message. When someone is off sick or resigns, their chat history goes with them, and nobody can say what was promised to whom or by when.",
    "deploy": [
      "Map every channel a customer request arrives on and count, over a full week, what falls through each one",
      "Move the business onto a single business number on the official business messaging platform rather than personal handsets, so inbound is captured once and outbound is auditable",
      "Build one intake queue where every order lands as a record with a customer, a promise date and a named owner",
      "Put an AI agent on the inbound message stream that drafts order records from what customers actually write; nothing moves to fulfilment until a person confirms it",
      "Define the status states — received, confirmed, fulfilled, invoiced — with a named owner for each transition, then train counter and dispatch staff and work alongside them for the first two weeks, remotely by default and in person where the work warrants it"
    ],
    "measures": [
      {
        "metric": "Share of orders captured as a record on the day received",
        "commitment": "Baselined by sampling one week of chat, counter and phone traffic, with a target committed in writing before build."
      },
      {
        "metric": "Median hours from request to confirmed order",
        "commitment": "Measured from queue timestamps. A service standard is agreed and published to your staff, and to customers if you choose."
      },
      {
        "metric": "Orders reaching fulfilment without the owner being asked anything",
        "commitment": "Counted at baseline and again at handover against an agreed target."
      },
      {
        "metric": "Disputes over what was promised",
        "commitment": "Counted at baseline from whatever record exists — credit notes, returns, chat history — over a fixed sample period, then tracked against the written promise date every order now carries."
      }
    ],
    "startingPoint": "One week of watching orders actually arrive and counting what gets lost, with nothing built in that week. The queue then runs in parallel with WhatsApp from week three, and nothing is switched off until it holds. Six to eight weeks in total.",
    "services": [
      "Workflow Digitization",
      "AI Agents",
      "Business Process Automation",
      "Operational Consulting"
    ],
    "segments": [
      "small-business"
    ]
  },
  {
    "slug": "order-to-cash-control",
    "title": "Order-to-Cash Control",
    "oneLiner": "You are not short of cash. You are short of invoices that went out on time and got chased by someone.",
    "problem": "Goods leave the yard on Tuesday and the invoice — or the fee note, or the claim — is raised the following week, if at all. Nobody owns the chase, so it happens when the bank balance gets uncomfortable. The ageing picture lives in a spreadsheet updated during a crisis, which means you are financing your customers without ever having decided to.",
    "deploy": [
      "Trace every step from confirmed order to cleared payment, and time each one against your own records",
      "Rebuild invoicing so it fires on delivery or service confirmation, not on someone remembering",
      "Age every open invoice by customer, salesperson and days outstanding, and put that ledger somewhere your team looks daily",
      "Automate reminders by SMS, email and messaging — from a business number on the official business messaging platform, with escalation rules and a named owner at each step",
      "Install a weekly collections review: one page, ten minutes, chaired by your team from the first week so it survives our exit"
    ],
    "measures": [
      {
        "metric": "Days sales outstanding",
        "commitment": "Baselined from twelve months of your open ledger in week one. The target is agreed in writing before any build starts."
      },
      {
        "metric": "Hours from delivery or service completion to invoice issued",
        "commitment": "Measured per transaction at baseline. A maximum is committed as a service standard and shown on the dashboard."
      },
      {
        "metric": "Share of receivables past sixty days",
        "commitment": "Baselined at start and reviewed monthly against the ceiling agreed in scope."
      },
      {
        "metric": "Invoices raised with no matching delivery or service record",
        "commitment": "Counted at baseline. The rebuilt process blocks them at entry and the count is committed to zero from handover."
      }
    ],
    "startingPoint": "Two weeks of baseline first — twelve months of invoices, payments and delivery notes pulled and aged — so the real number is on the table before anything is built. Build and handover run four to six weeks after that, with the invoice trigger live first. Scope begins at a confirmed order; getting the order captured in the first place is Order Intake Control.",
    "services": [
      "Process Engineering",
      "Business Process Automation",
      "Workflow Digitization",
      "Performance Dashboards"
    ],
    "segments": [
      "small-business"
    ]
  },
  {
    "slug": "stock-and-reorder-control",
    "title": "Stock and Reorder Control",
    "oneLiner": "Your stock position should be a number you can read, not a number you have to go and count.",
    "problem": "Fast movers run out while cash sits in items nobody has asked for in a year. Goods-in is a delivery note in a drawer; goods-out is whatever the shop floor or the driver remembers. Shrinkage surfaces at the annual count, months after it happened, when it can no longer be tied to a shift, a route or a person.",
    "deploy": [
      "Run a full physical count and reconcile it line by line against every record you currently keep",
      "Build a clean item master: one code per item, one unit of measure, one cost basis, agreed with the people who order and sell",
      "Capture goods-in and goods-out where they physically happen — phone capture that works offline and syncs, with no back-office re-entry",
      "Set reorder points and order quantities from actual sell-through rather than from habit",
      "Route variance and stockout alerts to the person who can act on them the same day, not into a monthly report"
    ],
    "measures": [
      {
        "metric": "Physical count variance against system",
        "commitment": "Established at the opening count. No variance figure is assumed going in — the exercise exists to establish yours. A tolerance is agreed in writing once it is known, and tracked at every subsequent count."
      },
      {
        "metric": "Stockout days on your top twenty items",
        "commitment": "Counted across the preceding quarter from sales and purchase records, then tracked weekly against the agreed ceiling."
      },
      {
        "metric": "Cash held in items with no movement in ninety days",
        "commitment": "Valued at baseline. A reduction target and a written disposal plan are agreed before build begins."
      },
      {
        "metric": "Hours to complete a full count",
        "commitment": "Timed at the opening count and re-timed at handover against a committed target."
      }
    ],
    "startingPoint": "The count comes first — one location, one week, your team doing it and us running the method. Item master, capture and reorder logic follow over six to eight weeks, and a second site is only added once the first holds a clean count.",
    "services": [
      "Workflow Digitization",
      "Custom Internal Platforms",
      "Data & Analytics",
      "Performance Dashboards"
    ],
    "segments": [
      "small-business"
    ]
  },
  {
    "slug": "owner-off-the-critical-path",
    "title": "Owner Off the Critical Path",
    "oneLiner": "Your ceiling is not the market. It is how many decisions a day can pass through one person.",
    "problem": "Every discount, credit decision, purchase order and staffing exception routes through the founder or the single operations manager. It works at ten decisions a day. At thirty, none of them gets the attention it deserves and the approval queue becomes the limit on how fast the business can trade. Hiring adds load before it removes it, because a new person with no written rule to follow comes back with questions.",
    "deploy": [
      "Log every decision the owner touches for two weeks, with time taken and value at stake",
      "Separate the decisions that follow a rule from the ones that genuinely need judgement",
      "Write the rules down as thresholds — discount limits, credit terms, purchase authority, overtime — and name who holds each",
      "Encode those thresholds so routine approvals route and clear on their own, and only exceptions reach the owner",
      "Build a one-page daily operating review so the owner can see the business without sitting inside every transaction"
    ],
    "measures": [
      {
        "metric": "Decisions per week routed to the owner",
        "commitment": "Baselined from the two-week decision log. A target reduction is agreed in writing before a single rule is written."
      },
      {
        "metric": "Owner hours per week spent on transactional work",
        "commitment": "Timed at baseline and re-timed at handover against the committed target."
      },
      {
        "metric": "Share of approvals clearing inside threshold rules without escalation",
        "commitment": "Tracked from system logs against an agreed floor and reported weekly."
      },
      {
        "metric": "Consecutive working days the business runs with no owner approval",
        "commitment": "One full week with the owner approving nothing is the handover test, and the target is set at the start of the engagement."
      }
    ],
    "startingPoint": "Two weeks of shadowing and a decision log before anything is built — in person where travel is warranted, otherwise a daily logged capture with the owner and a standing call. Rules, thresholds and the daily review follow over four to six weeks.",
    "services": [
      "Operational Transformation",
      "Process Engineering",
      "Operational Consulting",
      "Custom Internal Platforms"
    ],
    "segments": [
      "small-business"
    ]
  },
  {
    "slug": "margin-by-customer-and-product",
    "title": "Margin by Customer and Product",
    "oneLiner": "Your biggest customer may not be your best one. Right now nothing in the business can prove it either way.",
    "problem": "Revenue is known. Margin is a guess made at the level of the whole business. Whether your largest account also takes the longest credit, the most delivery runs and the deepest discount is knowable, but no report anywhere puts those three costs against its revenue. Prices get set on instinct and then defended for years because nothing exists that could challenge them.",
    "deploy": [
      "Build a unit cost model for the thing you actually sell — a job, a delivery, a case, a term, a pallet",
      "Allocate the costs that never reach a P&L line: delivery runs, rework, returns, discounts, credit days",
      "Pull revenue and cost data from the accounting package, the operational sheets and the paper records into one view, as a costed analysis rather than a systems rebuild",
      "Stand up a margin view by customer, product and salesperson that refreshes without anyone rebuilding it each month",
      "Chair the first monthly margin review with your management team, sit in the second, then hand over the agenda and the pack"
    ],
    "measures": [
      {
        "metric": "Share of revenue with a computed unit margin",
        "commitment": "Baselined at start, with a coverage target agreed in writing before build. Full coverage is usually the wrong target, so the committed figure names what is out of scope and why."
      },
      {
        "metric": "Gap between quoted margin and realised margin",
        "commitment": "Measured per job or order once the cost model exists, with a tolerance agreed and reviewed monthly."
      },
      {
        "metric": "Loss-making accounts and product lines identified",
        "commitment": "Counted once the model runs. Each one carries a repriced, renegotiated or exited decision with a named owner and a date. The decisions are yours; the deadline is written into scope."
      },
      {
        "metric": "Days to produce the monthly margin pack",
        "commitment": "Timed at baseline, with a committed maximum applying from handover."
      }
    ],
    "startingPoint": "Three months of transaction data and one costing workshop with your team put the first margin picture on the table inside three weeks. Model, dashboard and the review cycle are scoped at six to eight weeks, ending with a review your own management team runs.",
    "services": [
      "Data & Analytics",
      "Performance Dashboards",
      "Systems Integration",
      "Operational Consulting"
    ],
    "segments": [
      "small-business"
    ]
  }
];

/** A solution borrows the icon of the first service it deploys. */
export function iconForSolution(solution: Solution): LucideIcon {
  for (const title of solution.services) {
    const match = services.find((s) => s.title === title);
    if (match) return match.icon;
  }
  return Layers;
}
