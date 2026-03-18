export default function Hero({ hero }) {
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
                  <div className="avatar-placeholder">
                    <svg viewBox="0 0 200 220" fill="none">
                      <circle cx="100" cy="70" r="46" fill="rgba(99,102,241,0.2)" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" />
                      <path d="M20 220 C20 170 50 145 100 145 C150 145 180 170 180 220" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
                      <circle cx="100" cy="68" r="28" fill="rgba(99,102,241,0.3)" />
                    </svg>
                  </div>
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
