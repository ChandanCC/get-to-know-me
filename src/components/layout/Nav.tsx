"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "@/components/shared/Icons";
import { NAV_LINKS, OWNER } from "@/data";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
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
            <Image src="/logo-default.svg" alt="CC" width={24} height={24} className="logo-svg" />
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

      {/* Mobile overlay */}
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
          <a href={OWNER.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={OWNER.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${OWNER.email}`} aria-label="Email">
            <EmailIcon />
          </a>
        </div>
      </div>
    </>
  );
}
