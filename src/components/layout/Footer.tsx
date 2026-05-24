import { GitHubIcon, LinkedInIcon } from "@/components/shared/Icons";
import { OWNER, FOOTER } from "@/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-logo">{FOOTER.logo}</span>
          <div>
            <div style={{ fontSize: "0.8rem", fontWeight: 500 }}>{OWNER.email}</div>
            <div className="footer-info">{OWNER.title}</div>
          </div>
        </div>
        <div className="footer-right">
          <span className="footer-media-label">Media</span>
          <div className="footer-icons">
            <a href={OWNER.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <GitHubIcon />
            </a>
            <a href={OWNER.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-copy">{FOOTER.copyright}</p>
    </footer>
  );
}
