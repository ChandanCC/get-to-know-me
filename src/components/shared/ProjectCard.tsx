import Link from "next/link";
import type { Project } from "@/types";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const techItems = project.tech.split(/\s{2,}/);

  return (
    <div className="proj-card">
      <div className={`proj-thumb ${project.thumbClass}`}>
        <span className="proj-thumb-placeholder">{project.thumbLabel}</span>
      </div>
      <div className="proj-body">
        <p className="proj-tech">
          {techItems.map((item, i) => (
            <span key={item}>
              {item}
              {i < techItems.length - 1 && <span>&nbsp; </span>}
            </span>
          ))}
        </p>
        <h3 className="proj-name">
          {project.name}
          {project.badge && (
            <span className="badge-wip">{project.badge}</span>
          )}
        </h3>
        <p className="proj-desc">{project.description}</p>
        {project.metric && (
          <p className="proj-metric">{project.metric}</p>
        )}
        <div className="proj-actions">
          {project.action.disabled ? (
            <span className="proj-btn disabled">{project.action.label}</span>
          ) : (
            <Link
              href={project.action.href!}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-btn"
            >
              {project.action.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
