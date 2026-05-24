"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "@/components/shared/Icons";
import { NAV_LINKS, OWNER } from "@/data";
import { asset } from "@/lib/asset";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => { document.body.classList.remove("menu-open"); };
  }, [open]);

  const isActive = (key: string) =>
    key === "home" ? pathname === "/" : pathname.startsWith(`/${key}`);

  return (
    <>
      <nav className="topnav">
        <Link href="/" className="nav-logo">
          <span className="logo-icon">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/logo-default.svg")} alt="CC" width={24} height={24} className="logo-svg" />
          </span>
          CC
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link href={link.href} className={isActive(link.key) ? "active" : ""}>
                <span className="hash">#</span>{link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`burger-btn${open ? " open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <button className="mobile-close" aria-label="Close menu" onClick={() => setOpen(false)}>
          ×
        </button>
        <nav className="mobile-nav">
          {NAV_LINKS.map((link) => (
            <Link key={link.key} href={link.href} className={isActive(link.key) ? "active" : ""}>
              <span className="hash">#</span>{link.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-social">
          <a href={OWNER.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
          <a href={OWNER.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href={`mailto:${OWNER.email}`} aria-label="Email"><EmailIcon /></a>
        </div>
      </div>
    </>
  );
}
