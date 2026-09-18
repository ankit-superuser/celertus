export type Pillar = "growth" | "technology";

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceEntry {
  slug: string;
  path: string;
  short: string;
  title: string;
  pillar: Pillar;
  description: string;
  long: string;
  technologies: string[];
  stats: ServiceStat[];
  deliverables: string[];
  pairing: string;
  faqs: ServiceFaq[];
}

export const EMBER = "#FF6A45";
export const TEAL = "#00CFC1";

export const pillarColor = (pillar: Pillar) => (pillar === "growth" ? EMBER : TEAL);
export const pillarLabel = (pillar: Pillar) => (pillar === "growth" ? "Growth & Marketing" : "Technology");

export const SERVICES: ServiceEntry[] = [
  {
    slug: "digital-marketing",
    path: "/digital-marketing",
    short: "Digital Marketing",
    title: "Digital Marketing",
    pillar: "growth",
    description: "Search, content and email working as one system.",
    long: "Search, content and email working as one system — so the right people find you, and the ones who already did keep coming back.",
    technologies: ["SEO", "Content Strategy", "Email", "Analytics", "Automation"],
    stats: [
      { value: "90 days", label: "To first ranking movement" },
      { value: "4 channels", label: "Run as one funnel" },
      { value: "Monthly", label: "Reporting cadence" },
      { value: "1 owner", label: "Single point of contact" },
    ],
    deliverables: [
      "Technical and on-page SEO audit, with the fixes shipped — not just listed",
      "A content plan mapped to real search demand and to your sales cycle",
      "Email flows for onboarding, nurture and win-back",
      "GA4 and Search Console configured so the numbers are trustworthy",
      "Marketing automation wired to your CRM",
    ],
    pairing:
      "SEO recommendations are worth nothing if nobody implements them. Because our engineers own the site, audit findings become deployed changes in the same sprint rather than a PDF you forward to a developer.",
    faqs: [
      { q: "How long before we see results?", a: "Paid channels show signal in days. Organic search typically shows movement in 8 to 12 weeks, with compounding gains after that. We report on leading indicators from week two so you are never waiting in the dark." },
      { q: "Do you write the content yourselves?", a: "Yes. Copywriting, editing and publishing are included. We interview your team for subject-matter depth rather than generating generic filler." },
      { q: "Can you work with our existing site?", a: "Usually, yes. If the platform blocks the work — unfixable page speed, no access to templates — we will tell you plainly and price the rebuild separately." },
    ],
  },
  {
    slug: "performance-marketing",
    path: "/performance-marketing",
    short: "Performance & Ads",
    title: "Performance Marketing & Ads",
    pillar: "growth",
    description: "Paid campaigns measured against revenue, not impressions.",
    long: "Paid campaigns measured against revenue, not impressions. We start small, kill what does not work quickly, and scale what does.",
    technologies: ["Google Ads", "Meta Ads", "PPC", "Retargeting", "CRO"],
    stats: [
      { value: "2 weeks", label: "Test-and-learn cycle" },
      { value: "Revenue", label: "The metric we report" },
      { value: "Weekly", label: "Optimisation passes" },
      { value: "Full funnel", label: "Ad to landing page" },
    ],
    deliverables: [
      "Account structure built or rebuilt, with clean naming and conversion tracking",
      "Creative and copy variants produced in-house, tested in market",
      "Landing pages built and iterated by the same team running the ads",
      "Server-side conversion tracking and attribution you can defend",
      "A spend plan with a ceiling, and the honest read on when to stop",
    ],
    pairing:
      "Most ad accounts underperform because the landing page is the bottleneck, and the agency cannot change it. Ours can — page tests ship the same week the ad data suggests them.",
    faqs: [
      { q: "What is the minimum ad budget?", a: "We prefer at least a modest monthly spend so tests reach significance, but the honest answer depends on your market. In a low-competition B2B niche a small budget goes a long way." },
      { q: "Who owns the ad accounts?", a: "You do, always. We work inside your accounts so the history and the data stay with you if we part ways." },
      { q: "Do you do creative as well as media buying?", a: "Yes — static, motion and copy variants come from our brand and content team, which is why iteration is fast." },
    ],
  },
  {
    slug: "brand-content",
    path: "/brand-content",
    short: "Brand & Content",
    title: "Brand & Content",
    pillar: "growth",
    description: "Identity, voice and creative that make a brand recognisable.",
    long: "Identity, voice and creative that make a brand recognisable — and then the content calendar and systems to sustain it after launch week.",
    technologies: ["Brand Identity", "Social Media", "Video", "Copywriting", "Design"],
    stats: [
      { value: "4–6 weeks", label: "Identity engagement" },
      { value: "Full kit", label: "Logo to social templates" },
      { value: "Monthly", label: "Content production" },
      { value: "In-house", label: "Design and video" },
    ],
    deliverables: [
      "Brand strategy: positioning, audience, voice and messaging hierarchy",
      "Visual identity: logo system, palette, type, usage rules",
      "A component-level design system your developers can actually build",
      "Social and video templates, plus a month-one content calendar",
      "Ongoing production so the brand does not go quiet after launch",
    ],
    pairing:
      "A brand book that the website ignores is wasted money. We hand the identity straight to the engineers who build your site, so the design system and the codebase share one set of tokens.",
    faqs: [
      { q: "We already have a logo — can you work with it?", a: "Often the logo is fine and the system around it is missing. We will tell you whether a refresh or a rebuild is the better use of budget." },
      { q: "Do you handle social media day to day?", a: "Yes, as a monthly engagement: calendar, production, scheduling and community response within agreed hours." },
      { q: "What do we actually own at the end?", a: "Everything — source files, fonts licensing guidance, and editable templates. No retainer lock-in on your own assets." },
    ],
  },
  {
    slug: "web-development",
    path: "/web-development",
    short: "Web Development",
    title: "Web Development",
    pillar: "technology",
    description: "Fast, accessible websites and web apps built to convert.",
    long: "Fast, accessible websites and web apps built to convert and to keep ranking — because a site that scores badly on Core Web Vitals costs you campaign money every day.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    stats: [
      { value: "95+", label: "Target Lighthouse" },
      { value: "WCAG AA", label: "Accessibility baseline" },
      { value: "4–10 weeks", label: "Typical build" },
      { value: "Type-safe", label: "End to end" },
    ],
    deliverables: [
      "Design-to-code build with a real component library, not one-off pages",
      "Server-rendered or statically generated pages for SEO where it matters",
      "CMS or sheet-driven content so your team can edit without a developer",
      "Analytics and conversion tracking wired in from day one",
      "Handover docs, plus the option for us to keep running it",
    ],
    pairing:
      "Every page we build is instrumented for the marketing team before launch. Event tracking is part of the definition of done, not a change request afterwards.",
    faqs: [
      { q: "Do you use page builders?", a: "Only where they genuinely fit. For anything with custom logic or performance targets we build in React and TypeScript." },
      { q: "Can you take over an existing codebase?", a: "Yes. We start with a short audit and an honest read on whether to continue, refactor, or rebuild." },
      { q: "What happens after launch?", a: "Either we hand over with documentation, or we stay on a maintenance agreement. Both are priced up front." },
    ],
  },
  {
    slug: "mobile-development",
    path: "/mobile-development",
    short: "Mobile Apps",
    title: "Mobile Development",
    pillar: "technology",
    description: "Cross-platform iOS and Android apps from one codebase.",
    long: "Cross-platform iOS and Android apps from one codebase — shipped to the stores, instrumented, and maintained past version one.",
    technologies: ["React Native", "Flutter", "Expo", "GraphQL"],
    stats: [
      { value: "1 codebase", label: "iOS and Android" },
      { value: "OTA", label: "Updates without review" },
      { value: "6–12 weeks", label: "To first release" },
      { value: "Store-ready", label: "We handle submission" },
    ],
    deliverables: [
      "Native-feeling UI built to each platform's conventions",
      "Offline behaviour, push notifications and deep links",
      "Analytics and crash reporting from the first build",
      "App Store and Play Console submission, review handling included",
      "Over-the-air update pipeline for fast fixes",
    ],
    pairing:
      "App installs are a marketing channel. We set up attribution and deep links so paid campaigns can point at a screen, not just the store listing.",
    faqs: [
      { q: "React Native or Flutter?", a: "We choose based on your team and the app. If you already have React engineers, React Native keeps you self-sufficient after handover." },
      { q: "Will it feel like a web page in a wrapper?", a: "No. Native navigation, gestures and platform components are the baseline we hold ourselves to." },
      { q: "Do you maintain apps you did not build?", a: "Yes, after an audit — mobile codebases age quickly, so we scope realistically." },
    ],
  },
  {
    slug: "backend-system",
    path: "/backend-system",
    short: "Backend Systems",
    title: "Backend Systems",
    pillar: "technology",
    description: "APIs, data models and services that stay reliable as you grow.",
    long: "APIs, data models and services that stay reliable as traffic and complexity grow — designed so the next feature does not require a rewrite.",
    technologies: ["Node.js", "PostgreSQL", "Redis", "Kafka"],
    stats: [
      { value: "Documented", label: "Every endpoint" },
      { value: "Load-tested", label: "Before launch" },
      { value: "Zero-downtime", label: "Migrations" },
      { value: "99.9%", label: "Uptime target" },
    ],
    deliverables: [
      "Data model and API design reviewed with your team before any code",
      "Typed, documented, versioned APIs with authentication and rate limits",
      "Background jobs, queues and scheduled work that can be observed",
      "Load testing against the traffic your campaigns will actually send",
      "Runbooks and alerting, so an incident has a procedure",
    ],
    pairing:
      "Before a launch campaign goes live we load-test against the projected spike. Marketing tells us the number; engineering proves the system holds.",
    faqs: [
      { q: "Do you work with our existing database?", a: "Yes. We review the schema first and will flag anything that will bite you at scale before we build on top of it." },
      { q: "Can you integrate third-party systems?", a: "Payment, CRM, ERP and messaging integrations are routine work for us." },
      { q: "How do you handle handover?", a: "Architecture docs, API reference, runbooks and a working session with your engineers." },
    ],
  },
  {
    slug: "cloud-solutions",
    path: "/cloud-solutions",
    short: "Cloud & DevOps",
    title: "Cloud Solutions",
    pillar: "technology",
    description: "Infrastructure as code with predictable cloud costs.",
    long: "Infrastructure as code, automated deploys and cloud costs that stay predictable — so scaling for a campaign spike is a configuration change, not a fire drill.",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    stats: [
      { value: "IaC", label: "Everything versioned" },
      { value: "Minutes", label: "Deploy time" },
      { value: "Auto-scaling", label: "For traffic spikes" },
      { value: "Cost-tagged", label: "Per environment" },
    ],
    deliverables: [
      "Terraform-defined infrastructure across staging and production",
      "Containerised services with CI/CD and automated rollbacks",
      "Monitoring, logging and alerting you can actually read",
      "Backup and disaster recovery, tested rather than assumed",
      "A cost review with the changes that reduce the bill",
    ],
    pairing:
      "Campaign calendars become capacity plans. We scale ahead of the launch date instead of reacting to the traffic.",
    faqs: [
      { q: "Do we have to use AWS?", a: "No. We work across the major providers and will recommend based on your stack, budget and team." },
      { q: "Is Kubernetes overkill for us?", a: "Frequently, yes — and we will say so. Plenty of products are better served by managed containers." },
      { q: "Can you reduce our current cloud bill?", a: "Usually. Right-sizing, reserved capacity and killing idle environments are the common wins." },
    ],
  },
  {
    slug: "security-compliance",
    path: "/security-compliance",
    short: "Security",
    title: "Security & Compliance",
    pillar: "technology",
    description: "Authentication and data protection built in, not bolted on.",
    long: "Authentication, data protection and audit readiness built in rather than bolted on — which is both cheaper and the only version that actually holds.",
    technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "OWASP"],
    stats: [
      { value: "OWASP", label: "Top 10 reviewed" },
      { value: "SSO-ready", label: "Enterprise auth" },
      { value: "Encrypted", label: "At rest and in transit" },
      { value: "Audit trail", label: "On sensitive actions" },
    ],
    deliverables: [
      "Authentication and authorisation design, including SSO and roles",
      "Dependency and secrets scanning in the CI pipeline",
      "Data handling review: what you store, where, and for how long",
      "Penetration-test preparation and remediation of findings",
      "Documentation your enterprise clients' security teams will accept",
    ],
    pairing:
      "Marketing collects data — forms, pixels, CRM syncs. We make sure consent, storage and retention are handled properly, so growth work does not create a liability.",
    faqs: [
      { q: "Do you do penetration testing?", a: "We prepare for and remediate third-party pen tests, and run automated scanning ourselves. Independent testing should stay independent." },
      { q: "Can you help with a security questionnaire?", a: "Yes — these come up constantly in enterprise sales and we help you answer them accurately." },
      { q: "What about data residency?", a: "We architect for the region you need, including India-resident deployments." },
    ],
  },
  {
    slug: "performance-optimization",
    path: "/performance-optimization",
    short: "Performance",
    title: "Performance Optimization",
    pillar: "technology",
    description: "Core Web Vitals, caching and delivery tuned.",
    long: "Core Web Vitals, caching and delivery tuned — because slow pages quietly waste campaign spend and rankings at the same time.",
    technologies: ["CDN", "Caching", "Load Balancing", "Monitoring"],
    stats: [
      { value: "LCP < 2s", label: "Target on mobile" },
      { value: "CLS ~0", label: "No layout shift" },
      { value: "2–4 weeks", label: "Typical engagement" },
      { value: "Field data", label: "Not just lab scores" },
    ],
    deliverables: [
      "Field-data audit from real users, not only synthetic Lighthouse runs",
      "Asset, font and image delivery reworked, with a CDN in front",
      "Render-blocking work removed and critical path reduced",
      "Caching strategy across browser, CDN and application layers",
      "Continuous monitoring so regressions are caught in CI",
    ],
    pairing:
      "We price performance work against ad spend: a one-second improvement in load time on a paid landing page is measurable money, and we show that number.",
    faqs: [
      { q: "Will this affect our rankings?", a: "Core Web Vitals are a ranking input, and conversion impact is usually larger. We report both." },
      { q: "Can you work on a site you did not build?", a: "Yes — that is most of this work. We start with an audit and a prioritised list by effort-to-impact." },
      { q: "How do you stop it regressing?", a: "Performance budgets enforced in CI, so a heavy dependency fails the build rather than the launch." },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const relatedServices = (slug: string, count = 3): ServiceEntry[] => {
  const current = getService(slug);
  if (!current) return [];
  return SERVICES.filter((s) => s.pillar !== current.pillar).slice(0, count);
};
