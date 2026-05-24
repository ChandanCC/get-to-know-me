import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import SkillsSection from "@/components/shared/SkillsSection";
import ProjectCard from "@/components/shared/ProjectCard";
import { asset } from "@/lib/asset";
import {
  HERO,
  STATS,
  QUOTE,
  PERSONAL_PROJECTS,
  HOME_CONTACTS_INTRO,
  OWNER,
} from "@/data";

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">{HERO.eyebrow}</p>
          <h1 className="hero-heading">
            {HERO.heading.prefix}{" "}
            <span className="hl">{HERO.heading.hl1}</span>
            <br />
            {HERO.heading.middle}{" "}
            <span className="hl">{HERO.heading.hl2}</span>
          </h1>
          <p className="hero-desc">{HERO.description}</p>
          <div>
            <Link href={HERO.cta.href} className="hero-btn primary">
              {HERO.cta.label}
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-wrap">
            <img src={asset("/logo-outline.svg")} alt="" className="hero-deco-outline" aria-hidden />
            <img src={asset("/hero-bg.svg")} alt="Chandan Chhouda" className="hero-img" />
            <img src={asset("/dots.svg")} alt="" className="hero-dots-svg" aria-hidden />
          </div>
          <div className="hero-working">
            <span className="dot" />
            Currently building&nbsp;<strong>{HERO.currentlyBuilding}</strong>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-row">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="stat-val">{s.value}</div>
            <div className="stat-lbl">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── QUOTE ── */}
      <div className="quote-block" style={{ position: "relative", overflow: "visible" }}>
        <div className="sec-rect-deco right" aria-hidden />
        <div className="quote-inner">
          <span className="quote-open">&ldquo;</span>
          <p className="quote-text">
            {QUOTE.text.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </p>
          <div className="quote-close-row">
            <span className="quote-attr">{QUOTE.attribution}</span>
            <span className="quote-close">&rdquo;</span>
          </div>
        </div>
      </div>

      {/* ── #projects (preview) ── */}
      <section className="s" style={{ position: "relative", overflow: "visible" }}>
        <img src={asset("/dots.svg")} alt="" className="sec-dots-left" aria-hidden />
        <div className="sec-rect-deco right" aria-hidden />
        <div className="viewall-row">
          <h2 className="section-h" style={{ marginBottom: 0 }}>
            <span className="hash">#</span>projects<span className="hline" />
          </h2>
          <Link href="/projects" className="viewall-link">View all ——&gt;</Link>
        </div>
        <br />
        <div className="proj-grid">
          {PERSONAL_PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} className={i === 3 ? "home-proj-mobile-only" : undefined} />
          ))}
        </div>
      </section>

      {/* ── #skills ── */}
      <SkillsSection />

      {/* ── #about-me (preview) ── */}
      <section className="s" style={{ position: "relative", overflow: "visible" }}>
        <div className="sec-logos-left" aria-hidden>
          <img src={asset("/logo-outline.svg")} alt="" />
          <img src={asset("/logo-outline.svg")} alt="" />
          <img src={asset("/logo-outline.svg")} alt="" />
        </div>
        <img src={asset("/dots.svg")} alt="" className="sec-dots-right" aria-hidden />
        <SectionHeading label="about-me" />
        <div className="about-grid">
          <div>
            <p className="about-text">
              Front-End Engineer with <strong>6+ years</strong> building React and TypeScript UIs
              for high-volume CRM and SaaS products. Specialised in{" "}
              <strong>Webpack Module Federation</strong>, micro-frontends, virtualisation, and
              real-time interfaces for large datasets — with measurable impact including a{" "}
              <strong>40-point Lighthouse gain</strong>,{" "}
              <strong>70% faster deployments</strong>, and{" "}
              <strong>50% fewer DB calls</strong>.
            </p>
            <Link href="/about" className="read-more">Read more ——&gt;</Link>
          </div>
          <div className="about-deco">
            <img src={asset("/dots.svg")} alt="" className="about-dots-tr" aria-hidden />
            <img src={asset("/about-illustration.svg")} alt="About illustration" className="about-illus" />
            <img src={asset("/dots.svg")} alt="" className="about-dots-bl" aria-hidden />
          </div>
        </div>
      </section>

      {/* ── #contacts (preview) ── */}
      <section className="s">
        <SectionHeading label="contacts" />
        <div className="contacts-grid">
          <p className="contacts-intro">{HOME_CONTACTS_INTRO}</p>
          <div className="msg-box">
            <p className="msg-box-title">Message me here</p>
            <a href={OWNER.linkedin} target="_blank" rel="noopener noreferrer" className="msg-link">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14, flexShrink: 0 }}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              linkedin.com/in/chandancc
            </a>
            <a href={`mailto:${OWNER.email}`} className="msg-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 14, height: 14, flexShrink: 0 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {OWNER.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
