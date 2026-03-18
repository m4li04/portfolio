import { useSkillBars } from "../hooks/useSkillBars";

export default function Skills({ skillGroups }) {
  useSkillBars();

  return (
    <section id="skills" className="pf-section skills-section">
      <div className="pf-container">
        <span className="sec-label reveal">Expertise</span>
        <h2 className="sec-title reveal">Skills &amp; Proficiency</h2>
        <p className="sec-sub reveal">
          A clear breakdown of the technologies, tools, and strengths I use most often.
        </p>

        <div className="skills-grid">
          {skillGroups.map((skill, index) => (
            <div className={`skill-card reveal${index % 2 === 1 ? " reveal-d1" : ""}`} key={skill.name}>
              <div className="skill-header">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-pct">{skill.pct}%</div>
              </div>

              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: "0%" }} data-width={skill.pct} />
              </div>

              <div className="skill-tags">
                {skill.tags.map(tag => (
                  <span className="skill-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
