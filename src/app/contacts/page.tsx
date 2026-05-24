import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import { CONTACT_ROWS, AVAILABILITY_TEXT, CONTACTS_INTRO, OWNER } from "@/data";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Get in touch with Chandan Chhouda — Senior Frontend Engineer based in Bengaluru, India.",
};

export default function ContactsPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-hero">
        <p className="page-slash"><span className="slash">/</span>contacts</p>
        <p className="page-subtitle">— get in touch</p>
      </div>

      {/* ── Contacts ── */}
      <section className="s">
        <SectionHeading label="contacts" />
        <div className="contacts-page-grid">
          <div>
            <p className="contact-intro">{CONTACTS_INTRO}</p>
            <div className="contact-rows">
              {CONTACT_ROWS.map((row) => (
                <div key={row.label} className="contact-row">
                  <span className="c-label">{row.label}</span>
                  <a href={row.href} target={row.label !== "EMAIL" ? "_blank" : undefined} rel="noopener noreferrer" className="c-value">
                    {row.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="msg-box" style={{ marginBottom: "1rem" }}>
              <p className="msg-box-title">Message me here</p>
              <a href={OWNER.linkedin} target="_blank" rel="noopener noreferrer" className="msg-link">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14 }}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                linkedin.com/in/chandancc
              </a>
              <a href={`mailto:${OWNER.email}`} className="msg-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 14, height: 14 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {OWNER.email}
              </a>
            </div>
          </div>
        </div>

        {/* Availability box */}
        <div className="avail-box" style={{ maxWidth: 500, marginBottom: "2rem" }}>
          <p className="avail-label">
            <span className="avail-dot" />
            Availability
          </p>
          <p className="avail-text">{AVAILABILITY_TEXT}</p>
        </div>

        <Link href={OWNER.resumePath} download className="hero-btn primary">
          Download Resume ↓
        </Link>
      </section>

      {/* ── All media ── */}
      <section className="s">
        <SectionHeading label="all-media" />
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
          Find me across the web:
        </p>
        <div className="all-media">
          <a href={OWNER.github} target="_blank" rel="noopener noreferrer" className="proj-btn">GitHub ↗</a>
          <a href={OWNER.linkedin} target="_blank" rel="noopener noreferrer" className="proj-btn">LinkedIn ↗</a>
          <a href={`mailto:${OWNER.email}`} className="proj-btn">Email ↗</a>
        </div>
      </section>
    </>
  );
}
