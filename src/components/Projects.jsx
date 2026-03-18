export default function Projects({ projects }) {
  return (
    <section id="projects" className="pf-section projects-section">
      <div className="pf-container">
        <span className="sec-label reveal">Portfolio</span>
        <h2 className="sec-title reveal">Selected Projects</h2>
        <p className="sec-sub reveal">
          A focused set of projects that show my range across web, mobile, databases, and low-level programming.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const links = [
              project.codeUrl ? { href: project.codeUrl, label: "GitHub", variant: "btn-outline" } : null,
              project.demoUrl ? { href: project.demoUrl, label: "Live Demo", variant: "btn-primary" } : null,
            ].filter(Boolean);

            const revealClass =
              index % 3 === 1 ? " reveal-d1" : index % 3 === 2 ? " reveal-d2" : "";

            return (
              <div className={`project-card reveal${revealClass}`} key={project.title}>
                <div className={`project-image ${project.bg}`}>
                  <div className="project-image-icon">{project.icon}</div>
                </div>

                <div className="project-body">
                  <div className="project-meta">
                    <span className="project-type">{project.type}</span>
                    <span className="project-year">{project.year}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>

                  {links.length > 0 && (
                    <div className="project-footer">
                      {links.map(link => (
                        <a
                          key={link.label}
                          href={link.href}
                          className={`btn ${link.variant} btn-sm`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
