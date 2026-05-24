import SectionHeading from "./SectionHeading";
import { SKILLS } from "@/data";
import { asset } from "@/lib/asset";

export default function SkillsSection() {
  return (
    <section className="s">
      <SectionHeading label="skills" />
      <div className="skills-layout">
        <div className="skills-deco">
          {/* eslint-disable @next/next/no-img-element */}
          <img src={asset("/dots.svg")} alt="" width={84} height={84} className="skills-dots" aria-hidden />
          <div className="geo-rect geo-rect-1" />
          <div className="geo-rect geo-rect-2" />
          <div className="geo-rect geo-rect-3" />
          <div className="geo-rect geo-rect-4" />
          <img src={asset("/logo-outline.svg")} alt="" width={70} height={70} className="skills-deco-logo skills-deco-logo-1" aria-hidden />
          <img src={asset("/logo-outline.svg")} alt="" width={70} height={70} className="skills-deco-logo skills-deco-logo-2" aria-hidden />
          <img src={asset("/dots.svg")} alt="" width={84} height={84} className="skills-dots skills-dots-2" aria-hidden />
          {/* eslint-enable @next/next/no-img-element */}
        </div>
        <div className="skills-table">
          {SKILLS.map((block) => (
            <div key={block.category} className="skill-block">
              <p className="skill-block-name">{block.category}</p>
              <ul className="skill-items">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
