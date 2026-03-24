import { useEffect, useState } from "react";

export default function Navbar({ links, theme, toggleTheme, photoSrc }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`pf-nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#hero" className="nav-brand" aria-label="Go to top">
            <span className="nav-avatar nav-avatar-left">
              <img src={photoSrc} alt="Muhammad Ali Hassan" />
            </span>
            <span className="nav-logo">
              Ali<span>.</span>
            </span>
          </a>

          <ul className="nav-links">
            {links.map(link => (
              <li key={link}>
                <a href={`#${link}`} className={active === link ? "active" : ""}>
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              title={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            </button>
            <a href="#contact" className="btn btn-primary btn-sm">
              Hire Me
            </a>
          </div>

          <button
            type="button"
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(open => !open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {links.map(link => (
          <a key={link} href={`#${link}`} onClick={closeMenu}>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
        <button type="button" className="theme-toggle mobile-theme-toggle" onClick={toggleTheme}>
          <span>{isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
        </button>
      </div>
    </>
  );
}
