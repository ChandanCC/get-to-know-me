// ============================================================
// CHANDAN CHHOUDA — Portfolio content
//
// GUARDRAIL: All visible strings on the site live here.
// Do NOT edit these values without the owner's approval.
// Do NOT hardcode any of this content inside components.
// ============================================================

import type {
  NavLink,
  Stat,
  Project,
  SkillBlock,
  ExperienceItem,
  SocialLink,
  ContactRow,
  Quote,
  Education,
} from "@/types";

// ---- Identity ----

export const OWNER = {
  name: "Chandan Chhouda",
  title: "Senior Frontend Engineer",
  location: "Bengaluru, India",
  email: "chandanchhouda.cc@gmail.com",
  linkedin: "https://linkedin.com/in/chandancc",
  github: "https://github.com/chandanCC",
  resumePath: "/chandan_resume_2026.pdf",
} as const;

// ---- Navigation ----

export const NAV_LINKS: NavLink[] = [
  { href: "/",         label: "home",       key: "home" },
  { href: "/projects", label: "projects",   key: "projects" },
  { href: "/about",    label: "about-me",   key: "about" },
  { href: "/contacts", label: "contacts",   key: "contacts" },
];

// ---- Social strip ----

export const SOCIAL_LINKS: SocialLink[] = [
  { href: OWNER.github,   title: "GitHub",   type: "github" },
  { href: OWNER.linkedin, title: "LinkedIn", type: "linkedin" },
  { href: `mailto:${OWNER.email}`, title: "Email", type: "email" },
];

// ---- Hero ----

export const HERO = {
  eyebrow: "Bengaluru, India · Senior Frontend Engineer",
  heading: {
    prefix: "Chandan is a",
    hl1: "Senior Frontend",
    middle: "Engineer &",
    hl2: "React Specialist",
  },
  description:
    "6+ years building high-performance React & TypeScript interfaces for high-volume CRM, SaaS, and security products. Specialised in Webpack Module Federation, micro-frontends, and real-time UI.",
  cta: { label: "Contact me !!", href: "/contacts" },
  currentlyBuilding: "FlowOps",
} as const;

// ---- Stats ----

export const STATS: Stat[] = [
  { value: "6+",  label: "Years Experience" },
  { value: "3",   label: "Companies" },
  { value: "7",   label: "Products Shipped" },
  { value: "40pt",label: "Lighthouse Gain" },
  { value: "35%", label: "Triage Time Reduction" },
];

// ---- Quote ----

export const QUOTE: Quote = {
  text: "Any fool can write code that a computer can understand.\nGood programmers write code that humans can understand.",
  attribution: "— Martin Fowler",
};

// ---- Skills ----

export const SKILLS: SkillBlock[] = [
  { category: "Languages",   items: ["TypeScript", "JavaScript", "HTML5 / CSS3"] },
  { category: "Frameworks",  items: ["React", "TanStack Query v5", "Redux Toolkit"] },
  { category: "Build & Arch",items: ["Webpack", "Module Federation", "Vite / Rollup"] },
  { category: "Databases",   items: ["MongoDB", "REST APIs", "WebSockets"] },
  { category: "Tools",       items: ["GitHub Actions", "Storybook", "Playwright / Jest"] },
  { category: "Styling",     items: ["Tailwind CSS", "Material UI", "SCSS"] },
];

// ---- About (home preview) ----

export const ABOUT_PREVIEW =
  "Front-End Engineer with 6+ years building React and TypeScript UIs for high-volume CRM and SaaS products. Specialised in Webpack Module Federation, micro-frontends, virtualisation, and real-time interfaces for large datasets — with measurable impact including a 40-point Lighthouse gain, 70% faster deployments, and 50% fewer DB calls.";

// ---- About page (full bio) ----

export const ABOUT_BIO: string[] = [
  "Front-End Engineer with 6+ years building React and TypeScript UIs for high-volume CRM and SaaS products. Specialised in Webpack Module Federation, micro-frontends, virtualisation, and real-time interfaces for large datasets — with measurable impact including a 40-point Lighthouse gain, 70% faster deployments, and 50% fewer DB calls.",
  "At Arctic Wolf Networks, I built a real-time security analytics UI handling 10,000-row threat tables at sub-100ms latency and led micro-frontend architecture across 4 product squads — reducing analyst triage time by 35%. At Yellow.ai, I migrated a monolithic frontend to a Webpack Module Federation architecture, cutting deployment time by 70% and improving Lighthouse performance by 40 points.",
  "Outside of work I build personal projects — Nouriq, an AI-powered nutrition and training tracker, and FlowOps, an AI SaaS tool to automate Program Manager workflows via configurable agents.",
];

// Segments within bio paragraphs that need <strong> wrapping
export const ABOUT_BIO_HIGHLIGHTS: Record<number, string[]> = {
  0: ["6+ years", "Webpack Module Federation", "40-point Lighthouse gain", "70% faster deployments", "50% fewer DB calls"],
  1: ["Arctic Wolf Networks", "10,000-row", "sub-100ms", "35%", "Yellow.ai", "70%", "40 points"],
  2: ["Nouriq", "FlowOps"],
};

// ---- Experience ----

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Jan 2025 — Present · Bengaluru",
    role: "SDE III — Frontend",
    company: "Arctic Wolf Networks",
    points: [
      "Built high-performance React interfaces for ADS security workflows — real-time event tables and dashboard widgets for large datasets.",
      "Defined micro-frontend boundaries with Webpack Module Federation to support independent squad deployments across 4 product squads.",
      "Implemented real-time analytics UI with WebSocket data streams updating 10,000-row threat tables at sub-100ms latency using React 19 concurrent rendering.",
      "Mentored 4 engineers on React architecture, reducing onboarding ramp-up by 30%.",
      "Established AI-assisted development workflow with Copilot + custom agents, increasing PR velocity by 30%.",
    ],
  },
  {
    period: "Aug 2023 — Jan 2025 · Remote",
    role: "SDE II — Frontend",
    company: "Yellow.ai",
    points: [
      "Migrated a monolithic frontend to a Webpack Module Federation micro-frontend architecture, cutting deployment time by 70%.",
      "Built CRM-style inbox filters, real-time dashboards, and conversation segmentation UIs handling millions of records.",
      "Improved Lighthouse performance by 40 points through bundle splitting, lazy loading, and render-path optimisation.",
      "Reduced DB calls by 50% with client-side caching and optimistic UI patterns.",
      "Led design system and component library work, accelerating feature delivery by 25% across 3 teams.",
    ],
  },
  {
    period: "Jan 2022 — Aug 2023 · Remote",
    role: "SDE I — Frontend",
    company: "Yellow.ai",
    points: [
      "Built large-scale CRM-style interfaces with real-time dashboards, filter views, and conversation segmentation UIs.",
      "Developed standalone integration apps for Genesys, Atlassian, and Zendesk, driving 20% adoption growth.",
      "Led the redesigned integrations experience, improving user satisfaction by 70%.",
    ],
  },
  {
    period: "Jul 2019 — Dec 2021 · Bengaluru",
    role: "SDE I — React / Frontend",
    company: "GeekyAnts",
    points: [
      "Built a Fantasy Gaming web app using React and Node.js, improving user retention by 25%.",
      "Developed a Monaco Editor plugin for syntax highlighting and code intelligence in BuilderX.",
      "Automated a design-to-React component conversion pipeline for BuilderX, saving 10+ engineering hours per week.",
      "Delivered cross-platform MERN-stack products for clients across e-commerce, travel, and social domains.",
    ],
  },
];

// ---- Achievements ----

export const ACHIEVEMENTS: string[] = [
  "35% reduction in analyst triage time via AI-powered threat summarization dashboard at Arctic Wolf.",
  "40% TTI improvement after React 19 migration with concurrent features at Arctic Wolf.",
  "500+ enterprise customers using AI chatbot builder product at Yellow.ai.",
  "LLM streaming search interface used daily by 500+ SOC security analysts.",
  "30% increase in PR velocity after establishing Cursor / Claude Code AI development workflow.",
];

// ---- Education ----

export const EDUCATION: Education = {
  degree: "B.E. in Computer Science & Engineering",
  institution: "Chitkara University",
  period: "2016–2020",
  cgpa: "9.3 / 10",
};

// ---- Personal projects ----

export const PERSONAL_PROJECTS: Project[] = [
  {
    id: "nouriq",
    name: "Nouriq",
    tech: "React   Node.js   MongoDB   AWS   Gemini",
    description: "AI-powered nutrition & training tracker with daily/weekly/monthly goal analysis.",
    thumbClass: "thumb-nouriq",
    thumbLabel: "[ screenshot ]",
    status: "live",
    action: {
      label: "Live ↗",
      href: "https://d1ctw8ugnbnbg1.cloudfront.net/",
      disabled: false,
    },
  },
  {
    id: "flowops",
    name: "FlowOps",
    badge: "In Progress",
    tech: "React   Node.js   MongoDB   Gemini API   Claude API",
    description:
      "AI-powered SAAS tool to automate Program Manager workflows. Configure AI agents with company context, define EPIC rules, and connect Slack, JIRA, and email integrations to handle scheduling, conflict resolution, and timeline tracking automatically.",
    thumbClass: "thumb-flowops",
    thumbLabel: "[ in progress ]",
    status: "private",
    action: { label: "Private Repo", disabled: true },
  },
  {
    id: "builderx",
    name: "BuilderX — Monaco Plugin",
    tech: "React   TypeScript   Monaco Editor   CSS",
    description:
      "Monaco Editor plugin that syncs code highlighting with UI components selected in BuilderX's drag-and-drop designer — auto-surfacing the generated React code for any selected element in real time.",
    thumbClass: "thumb-builderx",
    thumbLabel: "[ GIF coming soon ]",
    status: "live",
    action: {
      label: "Github ↔",
      href: "https://github.com/GeekyAnts/react-monaco-surfer",
      disabled: false,
    },
  },
];

// ---- Professional projects ----

export const PROFESSIONAL_PROJECTS: Project[] = [
  {
    id: "arctic-wolf",
    name: "Arctic Wolf Networks",
    tech: "React 19   TypeScript   WebSockets   Webpack Module Federation",
    description:
      "Real-time security analytics UI for ADS workflows — 10,000-row threat tables updating at sub-100ms latency using React 19 concurrent rendering. Includes AI-powered threat summarization dashboard and micro-frontend architecture across 4 product squads.",
    thumbClass: "thumb-arctic",
    thumbLabel: "[ internal product ]",
    status: "internal",
    metric: "↓ 35% reduction in analyst triage time · 40% TTI improvement post React 19 migration",
    action: { label: "Internal Product", disabled: true },
  },
  {
    id: "yellow-ai",
    name: "Yellow.ai",
    tech: "React   TypeScript   WebSockets   Webpack Module Federation",
    description:
      "Redesigned integrations experience for Genesys, Atlassian, and Zendesk. Built CRM-style real-time dashboards, inbox filters, and conversation segmentation UIs handling millions of records with WebSocket streams and virtualisation.",
    thumbClass: "thumb-yellow",
    thumbLabel: "[ internal product ]",
    status: "internal",
    metric: "↑ 70% user satisfaction · ↑ 40pt Lighthouse score · ↓ 50% DB calls",
    action: { label: "Internal Product", disabled: true },
  },
];

// ---- Contacts page ----

export const CONTACT_ROWS: ContactRow[] = [
  { label: "EMAIL",    value: OWNER.email,    href: `mailto:${OWNER.email}` },
  { label: "LINKEDIN", value: "linkedin.com/in/chandancc", href: OWNER.linkedin },
  { label: "GITHUB",   value: "github.com/chandanCC",      href: OWNER.github },
];

export const AVAILABILITY_TEXT =
  "Open to senior frontend / lead engineering roles — full-time or contract. Particularly interested in high-scale product teams working with React, TypeScript, and real-time systems.";

export const CONTACTS_INTRO =
  "I'm open to senior frontend engineering and lead roles — full-time or contract. Don't hesitate to reach out directly.";

export const HOME_CONTACTS_INTRO =
  "I'm open to new opportunities, interesting projects, or just a good frontend engineering conversation. Don't hesitate to reach out.";

// ---- Footer ----

export const FOOTER = {
  logo: "⌘ CC",
  copyright: "© Copyright 2026, Made by Chandan",
} as const;
