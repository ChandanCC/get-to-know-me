import type { Metadata } from "next";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";
import { PERSONAL_PROJECTS, PROFESSIONAL_PROJECTS } from "@/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects and professional work by Chandan Chhouda — Nouriq, FlowOps, BuilderX, Arctic Wolf, Yellow.ai.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-hero">
        <p className="page-slash"><span className="slash">/</span>projects</p>
        <p className="page-subtitle">— personal work &amp; professional impact</p>
      </div>

      {/* ── Personal projects ── */}
      <section className="s">
        <SectionHeading label="personal-projects" />
        <div className="proj-grid">
          {PERSONAL_PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* ── Professional work ── */}
      <section className="s">
        <SectionHeading label="professional-work" />
        <div className="proj-grid proj-grid-2">
          {PROFESSIONAL_PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
