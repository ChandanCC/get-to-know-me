import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import type { ReactNode } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import SkillsSection from "@/components/shared/SkillsSection";
import { EXPERIENCE, ACHIEVEMENTS, EDUCATION, OWNER } from "@/data";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "About Chandan Chhouda — Senior Frontend Engineer, 6+ years, React, TypeScript, micro-frontends, Arctic Wolf, Yellow.ai, GeekyAnts.",
};

/** Wraps matched phrases in <strong> */
function highlight(text: string, phrases: string[]): ReactNode {
  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    phrases.includes(part) ? <strong key={i}>{part}</strong> : part
  );
}

const BIO: { text: string; highlights: string[] }[] = [
  {
    text: "Front-End Engineer with 6+ years building React and TypeScript UIs for high-volume CRM and SaaS products. Specialised in Webpack Module Federation, micro-frontends, virtualisation, and real-time interfaces for large datasets — with measurable impact including a 40-point Lighthouse gain, 70% faster deployments, and 50% fewer DB calls.",
    highlights: ["6+ years", "Webpack Module Federation", "40-point Lighthouse gain", "70% faster deployments", "50% fewer DB calls"],
  },
  {
    text: "At Arctic Wolf Networks, I built a real-time security analytics UI handling 10,000-row threat tables at sub-100ms latency and led micro-frontend architecture across 4 product squads — reducing analyst triage time by 35%. At Yellow.ai, I migrated a monolithic frontend to a Webpack Module Federation architecture, cutting deployment time by 70% and improving Lighthouse performance by 40 points.",
    highlights: ["Arctic Wolf Networks", "10,000-row", "sub-100ms", "35%", "Yellow.ai", "70%", "40 points"],
  },
  {
    text: "Outside of work I build personal projects — Nouriq, an AI-powered nutrition and training tracker, and FlowOps, an AI SaaS tool to automate Program Manager workflows via configurable agents.",
    highlights: ["Nouriq", "FlowOps"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-hero">
        <p className="page-slash"><span className="slash">/</span>about-me</p>
        <p className="page-subtitle">— 6+ years of frontend engineering</p>
      </div>

      {/* ── Bio ── */}
      <section className="s">
        <SectionHeading label="about-me" />
        <div className="about-grid">
          <div>
            {BIO.map((para, i) => (
              <p key={i} className="about-text">
                {highlight(para.text, para.highlights)}
              </p>
            ))}
            <Link
              href={OWNER.resumePath}
              download
              className="hero-btn primary"
              style={{ marginTop: "1rem", display: "inline-block" }}
            >
              Download Resume ↓
            </Link>
          </div>
          <div className="about-deco">
            {/* eslint-disable @next/next/no-img-element */}
            <img src={asset("/dots.svg")} alt="" width={84} height={84} className="about-dots-tr" aria-hidden />
            <img src={asset("/about-illustration.svg")} alt="About illustration" width={260} height={260} className="about-illus" />
            <img src={asset("/dots.svg")} alt="" width={84} height={84} className="about-dots-bl" aria-hidden />
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <SkillsSection />

      {/* ── Experience ── */}
      <section className="s">
        <SectionHeading label="experience" />
        <div className="timeline">
          {EXPERIENCE.map((item) => (
            <div key={item.period} className="tl-item">
              <p className="tl-period">{item.period}</p>
              <p className="tl-role">{item.role}</p>
              <p className="tl-company">{item.company}</p>
              <ul className="tl-points">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="s">
        <SectionHeading label="achievements" />
        <div className="achievements">
          {ACHIEVEMENTS.map((item, i) => (
            <div key={i} className="achievement-item">{item}</div>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      <section className="s">
        <SectionHeading label="education" />
        <div className="edu-block">
          <p className="edu-degree">{EDUCATION.degree}</p>
          <p className="edu-meta">
            {EDUCATION.institution}&nbsp;·&nbsp;{EDUCATION.period}&nbsp;·&nbsp;
            <span className="edu-cgpa">CGPA {EDUCATION.cgpa}</span>
          </p>
        </div>
      </section>
    </>
  );
}
