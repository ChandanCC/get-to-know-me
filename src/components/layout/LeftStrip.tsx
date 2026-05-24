import { GitHubIcon, LinkedInIcon, EmailIcon } from "@/components/shared/Icons";
import { OWNER } from "@/data";

export default function LeftStrip() {
  return (
    <aside className="left-strip">
      <div className="strip-line" />
      <div className="strip-icons">
        <a href={OWNER.github} target="_blank" rel="noopener noreferrer" className="strip-icon" title="GitHub">
          <GitHubIcon />
        </a>
        <a href={OWNER.linkedin} target="_blank" rel="noopener noreferrer" className="strip-icon" title="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href={`mailto:${OWNER.email}`} className="strip-icon" title="Email">
          <EmailIcon />
        </a>
      </div>
    </aside>
  );
}
