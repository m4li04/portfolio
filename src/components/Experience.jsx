function TimelineColumn({ items }) {
  return (
    <div className="timeline">
      {items.map(item => (
        <div className="timeline-item" key={`${item.title}-${item.period}`}>
          <div className="timeline-dot" />
          <div className="timeline-card">
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-title">{item.title}</div>
            <div className="timeline-org">{item.org}</div>
            <div className="timeline-desc">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Experience({ experience, education }) {
  return (
    <section id="experience" className="pf-section experience-section">
      <div className="pf-container">
        <span className="sec-label reveal">Journey</span>
        <h2 className="sec-title reveal">Experience &amp; Education</h2>
        <p className="sec-sub reveal">A snapshot of my academic path and hands-on experience so far.</p>

        <div className="timeline-columns">
          <div className="reveal">
            <div className="timeline-section-label">Work Experience</div>
            <TimelineColumn items={experience} />
          </div>

          <div className="reveal reveal-d2">
            <div className="timeline-section-label">Education</div>
            <TimelineColumn items={education} />
          </div>
        </div>
      </div>
    </section>
  );
}
