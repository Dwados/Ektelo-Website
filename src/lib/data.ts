/**
 * Ektelio — single source of truth for site content.
 * All pages and cards read from here so copy stays consistent.
 */

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Blocks,
  Bot,
  BrainCircuit,
  Building2,
  Cog,
  Database,
  Factory,
  Gauge,
  GitMerge,
  HeartPulse,
  Landmark,
  Layers,
  LineChart,
  Network,
  Plane,
  RefreshCcw,
  ScanSearch,
  ShieldCheck,
  Ship,
  Store,
  Workflow,
  Zap,
} from "lucide-react";

export const site = {
  name: "Ektelio",
  tagline: "We digitize operations, not just software.",
  description:
    "Ektelio is an operational transformation company. We find the hidden inefficiencies inside governments, corporations, and enterprises — then eliminate them with AI, automation, engineering, and process redesign.",
  // TODO before launch: replace with the live domain once registered.
  url: "https://ektelio.com",
  /** First entry is the primary — it is what mailto links and form replies use. */
  emails:["ssentanmuseth@gmail.com"],
  phones: ["+256 760 344 344", "+256 778 082 686"],
  // TODO before launch: confirm the address you want published.
  address: "Kampala, Uganda · Remote worldwide",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "/solutions" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

/* ────────────────────────── Services ────────────────────────── */

export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  icon: LucideIcon;
  group: "Transform" | "Automate" | "Engineer" | "Advise";
};

export const services: Service[] = [
  {
    slug: "operational-transformation",
    title: "Operational Transformation",
    summary: "End-to-end redesign of how an organization runs — structure, process, systems, and cadence.",
    detail:
      "We map how work actually flows through your organization, quantify where time and money leak, and rebuild the operating model around measurable throughput. Transformation is complete when the numbers move, not when the report is delivered.",
    icon: RefreshCcw,
    group: "Transform",
  },
  {
    slug: "process-engineering",
    title: "Process Engineering",
    summary: "Workflows redesigned around throughput, control, and measurability — before any tooling.",
    detail:
      "Every process is instrumented, timed, and stress-tested. We remove approval loops that add days and no control, collapse handoffs, and design processes that stay fast at ten times the volume.",
    icon: Cog,
    group: "Transform",
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    summary: "Paper, spreadsheets, and tribal knowledge converted into governed digital operations.",
    detail:
      "We take operations that live in filing cabinets and inboxes and move them into systems with audit trails, SLAs, and dashboards — without breaking the people who run them today.",
    icon: Layers,
    group: "Transform",
  },
  {
    slug: "government-modernization",
    title: "Government Modernization",
    summary: "Citizen-facing services and internal registries rebuilt for speed, transparency, and scale.",
    detail:
      "Licensing, registries, revenue collection, case management. We modernize public institutions with systems citizens can trust — measurable service times, full audit trails, zero lost files.",
    icon: Landmark,
    group: "Transform",
  },
  {
    slug: "ai-strategy",
    title: "AI Strategy & Implementation",
    summary: "AI applied where it changes unit economics — not where it makes headlines.",
    detail:
      "We identify the decisions and documents that consume your people's hours, then deploy models against them with human oversight, evaluation loops, and a clear cost-per-task before and after.",
    icon: BrainCircuit,
    group: "Automate",
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    summary: "Autonomous digital workers for triage, reconciliation, drafting, and monitoring.",
    detail:
      "Agents that read, classify, cross-check, and escalate — operating inside guardrails your risk team signs off on. Every action logged, every exception routed to a human.",
    icon: Bot,
    group: "Automate",
  },
  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    summary: "High-volume, rule-driven work executed by machines with human-grade accountability.",
    detail:
      "Invoice matching, onboarding checks, compliance filings, report assembly. We automate the work no one should be doing manually and keep exception handling with your team.",
    icon: Zap,
    group: "Automate",
  },
  {
    slug: "workflow-digitization",
    title: "Workflow Digitization",
    summary: "Approvals, forms, and handoffs moved into tracked, timed, accountable flows.",
    detail:
      "Every request gets an owner, a clock, and a status anyone can check. The chase — the calls, the reminders, the lost forms — disappears.",
    icon: Workflow,
    group: "Automate",
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software Solutions",
    summary: "Systems of record and systems of work, built to fit the operation — not the other way around.",
    detail:
      "When off-the-shelf forces your operation to bend, we build. Secure, maintainable platforms owned by you, designed around the process we've already engineered.",
    icon: Blocks,
    group: "Engineer",
  },
  {
    slug: "custom-internal-platforms",
    title: "Custom Internal Platforms",
    summary: "The internal tools your teams deserve: fast, integrated, and built for daily throughput.",
    detail:
      "Operations consoles, case managers, field-force apps. Tools shaped around the operator's day, engineered to remove clicks, not add modules.",
    icon: Building2,
    group: "Engineer",
  },
  {
    slug: "systems-integration",
    title: "Systems Integration",
    summary: "Your existing systems made to act as one — data flowing without swivel-chair work.",
    detail:
      "ERP to CRM to core systems to spreadsheets that refuse to die. We connect them with contracts, monitoring, and reconciliation so no one re-keys data again.",
    icon: GitMerge,
    group: "Engineer",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    summary: "A single, governed view of operations — from raw records to decision-grade data.",
    detail:
      "Pipelines, warehouses, and definitions everyone agrees on. When leadership asks a question, the answer is one query away — and everyone gets the same number.",
    icon: Database,
    group: "Engineer",
  },
  {
    slug: "performance-dashboards",
    title: "Performance Dashboards",
    summary: "Live operational truth for executives and floor leaders alike.",
    detail:
      "Not vanity charts — control surfaces. Cycle times, backlog age, cost per transaction, SLA breaches. Visible daily, owned by name, tied to targets.",
    icon: Gauge,
    group: "Engineer",
  },
  {
    slug: "operational-consulting",
    title: "Operational Consulting",
    summary: "Senior operators embedded with your leadership through the hardest decisions.",
    detail:
      "Target operating models, make-vs-buy calls, capacity planning, transformation governance. Advice that comes with a delivery plan — because we stay to execute it.",
    icon: ShieldCheck,
    group: "Advise",
  },
];

export const serviceGroups = [
  {
    key: "Transform" as const,
    title: "Transform the operation",
    description: "Redesign how the organization actually works — process, structure, and operating cadence.",
  },
  {
    key: "Automate" as const,
    title: "Automate the work",
    description: "Put machines on the repetitive, rule-driven work and free your people for judgment.",
  },
  {
    key: "Engineer" as const,
    title: "Engineer the systems",
    description: "Build and connect the platforms, data, and dashboards the new operation runs on.",
  },
  {
    key: "Advise" as const,
    title: "Advise the leadership",
    description: "Stand beside decision-makers with operators who have run transformations before.",
  },
];

/* ────────────────────────── Industries ────────────────────────── */

export type Industry = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  pains: string[];
  outcome: string;
};

export const industries: Industry[] = [
  {
    slug: "government",
    title: "Government & Public Sector",
    icon: Landmark,
    summary:
      "Registries, licensing, revenue, and citizen services modernized with transparency built in.",
    pains: ["Paper registries and lost files", "Opaque service times", "Revenue leakage", "Manual reconciliation"],
    outcome: "Services citizens can track, audit trails regulators trust, and collections that stop leaking.",
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    icon: LineChart,
    summary:
      "Onboarding, compliance, and back-office operations rebuilt for speed with control intact.",
    pains: ["Slow KYC and onboarding", "Manual reconciliation", "Compliance backlogs", "Fragmented core systems"],
    outcome: "Hours-not-weeks onboarding, straight-through processing, and a risk team that sees everything.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    summary:
      "Patient flow, claims, and supply chains that move as fast as clinical teams need them to.",
    pains: ["Queue-based patient flow", "Claims denials and rework", "Stock-outs and expiries", "Paper records"],
    outcome: "Shorter waits, cleaner claims, and inventory that matches demand.",
  },
  {
    slug: "energy-utilities",
    title: "Energy & Utilities",
    icon: Activity,
    summary:
      "Field operations, billing, and asset maintenance run on data instead of paperwork.",
    pains: ["Unbilled consumption", "Reactive maintenance", "Disconnected field teams", "Meter-to-cash leakage"],
    outcome: "Meter-to-cash tightened, outages predicted, and field crews dispatched by priority — not paperwork.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & Industrial",
    icon: Factory,
    summary:
      "Production, quality, and planning connected so the plant runs on one version of the truth.",
    pains: ["Manual production reporting", "Quality escapes", "Planning in spreadsheets", "Downtime blind spots"],
    outcome: "Live OEE, traceable quality, and planning that reacts in hours instead of weeks.",
  },
  {
    slug: "logistics",
    title: "Logistics & Trade",
    icon: Ship,
    summary:
      "Cargo, customs, and fleet operations with end-to-end visibility and fewer idle hours.",
    pains: ["Dwell time at gates and borders", "Untracked exceptions", "Manual documentation", "Fleet idle time"],
    outcome: "Documents that clear before the truck arrives and exceptions handled before they become delays.",
  },
  {
    slug: "telecom",
    title: "Telecom & Technology",
    icon: Network,
    summary:
      "Order-to-activation, support, and network operations streamlined at subscriber scale.",
    pains: ["Slow order-to-activation", "Ticket ping-pong", "Churn blind spots", "Swivel-chair provisioning"],
    outcome: "Activation in minutes, support that resolves on first contact, and churn seen before it happens.",
  },
  {
    slug: "retail-distribution",
    title: "Retail & Distribution",
    icon: Store,
    summary:
      "Inventory, pricing, and fulfilment synchronized from warehouse to storefront.",
    pains: ["Stock-outs and overstock", "Manual price updates", "Untracked shrinkage", "Slow replenishment"],
    outcome: "Shelves stocked to demand, margins protected, and replenishment on autopilot.",
  },
  {
    slug: "aviation-transport",
    title: "Aviation & Transport",
    icon: Plane,
    summary:
      "Turnarounds, crew operations, and maintenance scheduling that protect every departure.",
    pains: ["Turnaround overruns", "Manual crew rostering", "Maintenance paperwork", "Disruption chaos"],
    outcome: "On-time performance defended by process, not heroics.",
  },
];

/* ────────────────────────── Process ────────────────────────── */

export type ProcessStep = {
  n: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const process: ProcessStep[] = [
  {
    n: "01",
    title: "Discover",
    description: "We embed with your teams and map how work actually flows — not how the org chart says it does.",
    icon: ScanSearch,
  },
  {
    n: "02",
    title: "Analyze",
    description: "Every bottleneck is measured: hours lost, cost per transaction, error rates, revenue at risk.",
    icon: BarChart3,
  },
  {
    n: "03",
    title: "Design",
    description: "We redesign the operating model — processes, roles, controls — and agree on the target numbers.",
    icon: Blocks,
  },
  {
    n: "04",
    title: "Digitize",
    description: "Workflows move into systems with owners, clocks, and audit trails. Paper and re-keying end here.",
    icon: Layers,
  },
  {
    n: "05",
    title: "Automate",
    description: "Machines take the repetitive volume; AI handles reading, matching, drafting — under human control.",
    icon: Bot,
  },
  {
    n: "06",
    title: "Optimize",
    description: "Dashboards keep score. We tune the operation quarter after quarter until the gains compound.",
    icon: Gauge,
  },
];

/* ────────────────────────── Insights (sample editorial) ────────────────────────── */

export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body?: string[];
};

export const insights: Insight[] = [
  {
    slug: "operations-are-the-product",
    category: "Perspective",
    title: "Your operations are the product",
    excerpt:
      "Customers never see your strategy deck. They feel your operations — the wait, the error, the follow-up call. That is where transformation has to live.",
    date: "2026-07-14",
    readTime: "6 min",
  },
  {
    slug: "ai-where-it-pays",
    category: "AI in Operations",
    title: "Where AI actually pays for itself",
    excerpt:
      "The highest-return AI deployments are unglamorous: reading documents, matching records, drafting responses. A field guide to finding them in your operation.",
    date: "2026-06-30",
    readTime: "8 min",
  },
  {
    slug: "digitize-before-automate",
    category: "Method",
    title: "Digitize before you automate. Redesign before you digitize.",
    excerpt:
      "Automating a broken process gets you a faster broken process. The sequencing discipline that separates transformations that stick from expensive software projects.",
    date: "2026-06-12",
    readTime: "7 min",
  },
  {
    slug: "government-services-standard",
    category: "Public Sector",
    title: "The new standard for government service delivery",
    excerpt:
      "Citizens now benchmark public services against the best private ones. What modernization looks like when a ministry commits to measurable service times.",
    date: "2026-05-27",
    readTime: "9 min",
  },
  {
    slug: "dashboard-is-not-the-goal",
    category: "Data",
    title: "The dashboard is not the goal",
    excerpt:
      "A dashboard nobody acts on is decoration. How to wire operational metrics to owners, targets, and a weekly cadence that actually changes behavior.",
    date: "2026-05-08",
    readTime: "5 min",
  },
  {
    slug: "cost-of-a-handoff",
    category: "Process",
    title: "The true cost of a handoff",
    excerpt:
      "Every handoff adds queue time, error risk, and accountability loss. We measured handoffs across 40 enterprise processes — the numbers argue for ruthless consolidation.",
    date: "2026-04-19",
    readTime: "6 min",
  },
];

/* ────────────────────────── Home page data ────────────────────────── */

export const heroStats = [
  { value: 3, suffix: "", label: "processes transformed" },
  { value: 223, prefix: "$", suffix: "K+", label: "operating cost eliminated" },
  { value: 1.1, suffix: "M+", label: "manual hours automated", decimals: 1 },
  { value: 54, suffix: "%", label: "engagements hitting target metrics" },
];

export const whyEktelio = [
  {
    icon: Gauge,
    title: "Measured in outcomes, not deliverables",
    description:
      "Every engagement opens with a baseline and closes against target numbers — cycle time, cost per transaction, error rate. If it can't be measured, we don't propose it.",
  },
  {
    icon: Workflow,
    title: "Operations first, technology second",
    description:
      "We are operators who engineer, not vendors who sell. The process is redesigned before a single screen is built, so technology amplifies a sound operation instead of hardening a broken one.",
  },
  {
    icon: Bot,
    title: "AI-native, human-governed",
    description:
      "We deploy AI where it changes unit economics, inside guardrails your risk and compliance teams approve. Every automated action is logged, reviewable, and reversible.",
  },
  {
    icon: ShieldCheck,
    title: "Built to hand over",
    description:
      "Your teams run the new operation — we make sure of it. Documentation, training, and a capability transfer plan are part of delivery, not an add-on.",
  },
];

export const capabilities = [
  { title: "AI & Machine Learning", note: "Document intelligence, forecasting, anomaly detection, LLM agents" },
  { title: "Automation & Orchestration", note: "RPA, workflow engines, event-driven pipelines, human-in-the-loop" },
  { title: "Software Engineering", note: "Web platforms, mobile field tools, APIs, legacy modernization" },
  { title: "Data Engineering", note: "Pipelines, warehousing, governance, one version of the truth" },
  { title: "Analytics & Decision Science", note: "Operational KPIs, simulation, capacity models, executive reporting" },
  { title: "Integration", note: "ERP, CRM, core systems, government registries, payment rails" },
  { title: "Security & Compliance", note: "Audit trails, access control, data protection by design" },
  { title: "Cloud & Infrastructure", note: "Resilient, right-sized platforms — cloud, hybrid, or sovereign" },
];

export const sectorsServed = [
  "Government",
  "Financial Services",
  "Healthcare",
  "Energy & Utilities",
  "Manufacturing",
  "Logistics & Trade",
  "Telecom",
  "Retail & Distribution",
  "Aviation",
];
