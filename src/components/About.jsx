export default function About({ about, techStack }) {
  return (
    <section id="about" className="pf-section about-section">
      <div className="pf-container">
        <div className="about-grid">
          <div className="about-text reveal">
            <span className="sec-label">About Me</span>
            <h2 className="sec-title">
              Turning ideas into
              <br />
              elegant solutions
            </h2>

            {about.paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="about-stats">
              {about.stats.map(([number, suffix, label]) => (
                <div className="stat-card" key={label}>
                  <div className="stat-number">
                    {number}
                    <span>{suffix}</span>
                  </div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-d2">
            <span className="sec-label" style={{ marginBottom: "24px" }}>
              Technologies I Use
            </span>

            <div className="tech-grid">
              {techStack.map(name => (
                <div className="tech-item" key={name}>
                  <div className="tech-name">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
