export default function Hero({ hero, photoSrc }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="pf-container">
        <div className="hero-inner">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              {hero.badge}
            </div>

            <h1 className="hero-name">
              {hero.firstName}
              <br />
              <span className="accent">{hero.lastName}</span>
            </h1>

            <p className="hero-tagline">{hero.tagline}</p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                View Projects
              </a>

              <a href="#contact" className="btn btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-image-ring">
              <div className="hero-ring-inner">
                <div className="hero-avatar">
                  <img src={photoSrc} alt="Muhammad Ali Hassan" className="hero-avatar-img" />
                </div>
              </div>
            </div>

            <div className="hero-chip hero-chip-1">
              <span className="chip-dot" /> {hero.chips[0]}
            </div>
            <div className="hero-chip hero-chip-2">
              <span className="chip-dot" /> {hero.chips[1]}
            </div>
            <div className="hero-chip hero-chip-3">
              <span className="chip-dot" /> {hero.chips[2]}
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
