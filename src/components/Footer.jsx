export default function Footer({ footer }) {
  return (
    <footer className="pf-footer">
      <div className="pf-container">
        <div className="footer-inner">
          <a href="#hero" className="footer-logo">
            {footer.logo}
            <span>.</span>
          </a>

          <p className="footer-copy">{footer.copy}</p>

          {footer.socials.length > 0 && (
            <div className="footer-socials">
              {footer.socials.map(social => (
                <a
                  key={social.title}
                  href={social.href}
                  className="social-btn"
                  title={social.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    {social.circle && (
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    )}
                    <path d={social.d} />
                    {social.extra}
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
