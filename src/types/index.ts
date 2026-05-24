// ============================================================
// CHANDAN CHHOUDA — Portfolio types
// All component props and data shapes are defined here.
// ============================================================

// ---- Navigation ----

export interface NavLink {
  href: string;
  /** Text after the # symbol */
  label: string;
  /** Used to match pathname for active state */
  key: string;
}

// ---- Stats ----

export interface Stat {
  value: string;
  label: string;
}

// ---- Projects ----

export type ProjectStatus = "live" | "wip" | "internal" | "private";

export interface ProjectAction {
  label: string;
  href?: string;
  disabled: boolean;
}

export interface Project {
  id: string;
  name: string;
  /** Displayed badge inside the name (e.g. "WIP", "In Progress") */
  badge?: string;
  /** Space-separated tech stack string — rendered as-is */
  tech: string;
  description: string;
  /** CSS class that sets the thumb gradient */
  thumbClass: string;
  /** Placeholder text inside the thumb */
  thumbLabel: string;
  status: ProjectStatus;
  action: ProjectAction;
  /** Optional metric line in cyan mono */
  metric?: string;
}

// ---- Skills ----

export interface SkillBlock {
  category: string;
  items: string[];
}

// ---- Experience ----

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  points: string[];
}

// ---- Social ----

export type SocialType = "github" | "linkedin" | "email";

export interface SocialLink {
  href: string;
  title: string;
  type: SocialType;
}

// ---- Contact rows ----

export interface ContactRow {
  label: string;
  value: string;
  href: string;
}

// ---- Quote ----

export interface Quote {
  text: string;
  attribution: string;
}

// ---- Education ----

export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
}
