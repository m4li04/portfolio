export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  :root {
    --bg-primary:    #f4f5f7;
    --bg-secondary:  #ffffff;
    --bg-card:       #ffffff;
    --bg-card-hover: #f1f3f6;
    --border:        rgba(15,23,42,0.08);
    --border-hover:  rgba(15,23,42,0.18);
    --text-primary:  #111827;
    --text-secondary:#4b5563;
    --text-muted:    #9ca3af;
    --accent:        #2563eb;
    --accent-light:  #3b82f6;
    --accent-glow:   rgba(37,99,235,0.07);
    --accent-glow-strong: rgba(37,99,235,0.18);
    --success:       #16a34a;
    --font-display:  'Syne', sans-serif;
    --font-body:     'DM Sans', sans-serif;
    --radius-sm: 8px; --radius-md: 14px; --radius-lg: 20px; --radius-xl: 28px;
    --shadow-card: 0 18px 45px rgba(15,23,42,0.08);
    --shadow-glow: 0 18px 45px rgba(15,23,42,0.06);
    --transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; font-size: 16px; }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: var(--font-body);
    font-weight: 300;
    line-height: 1.7;
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body[data-theme="dark"] {
    --bg-primary:    #0a0a0f;
    --bg-secondary:  #111118;
    --bg-card:       #16161f;
    --bg-card-hover: #1c1c28;
    --border:        rgba(255,255,255,0.07);
    --border-hover:  rgba(99,102,241,0.4);
    --text-primary:  #f5f7ff;
    --text-secondary:#8b8ba0;
    --text-muted:    #4a4a60;
    --accent-glow:   rgba(37,99,235,0.14);
    --accent-glow-strong: rgba(37,99,235,0.26);
    --shadow-card: 0 4px 24px rgba(0,0,0,0.4);
    --shadow-glow: 0 0 40px rgba(37,99,235,0.12);
  }

  a { color: inherit; text-decoration: none; }
  ul { list-style: none; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg-primary); }
  ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

  @keyframes pulse-dot {
    0%,100% { opacity:1; transform:scale(1); }
    50% { opacity:0.6; transform:scale(1.3); }
  }
  @keyframes spin-slow {
    from { transform:rotate(0deg); }
    to { transform:rotate(360deg); }
  }
  @keyframes spin-slow-rev {
    from { transform:rotate(0deg); }
    to { transform:rotate(-360deg); }
  }
  @keyframes float {
    0%,100% { transform:translateY(0); }
    50% { transform:translateY(-8px); }
  }
  @keyframes scroll-bounce {
    0%,100% { transform:scaleY(1); opacity:1; }
    50% { transform:scaleY(0.5); opacity:0.4; }
  }

  .reveal { opacity:0; transform:translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity:1; transform:translateY(0); }
  .reveal-d1 { transition-delay:0.1s; }
  .reveal-d2 { transition-delay:0.2s; }
  .reveal-d3 { transition-delay:0.3s; }
  .reveal-d4 { transition-delay:0.4s; }

  .pf-container { width:100%; max-width:1140px; margin:0 auto; padding:0 32px; position:relative; z-index:1; }
  .pf-section { padding:100px 0; }

  .sec-label {
    font-family:var(--font-display); font-size:11px; font-weight:600;
    letter-spacing:0.2em; text-transform:uppercase;
    color:var(--accent-light); margin-bottom:16px; display:block;
  }
  .sec-title {
    font-family:var(--font-display); font-size:clamp(2rem,4vw,2.75rem);
    font-weight:700; line-height:1.15; color:var(--text-primary); margin-bottom:16px;
  }
  .sec-sub { font-size:1.05rem; color:var(--text-secondary); max-width:520px; margin-bottom:60px; }

  .btn {
    display:inline-flex; align-items:center; gap:8px;
    padding:13px 26px; border-radius:var(--radius-sm);
    font-family:var(--font-body); font-size:0.9rem; font-weight:500;
    cursor:pointer; border:none; transition:var(--transition); white-space:nowrap;
    text-decoration:none;
  }
  .btn-primary { background:var(--accent); color:#fff; }
  .btn-primary:hover { background:var(--accent-light); box-shadow:0 0 30px var(--accent-glow-strong); transform:translateY(-2px); }
  .btn-outline { background:transparent; color:var(--text-primary); border:1px solid var(--border); }
  .btn-outline:hover { border-color:var(--border-hover); background:var(--accent-glow); color:var(--accent-light); transform:translateY(-2px); }
  .btn-sm { padding:8px 16px; font-size:0.82rem; border-radius:6px; }

  .pf-nav { position:fixed; top:0; left:0; right:0; z-index:100; padding:0 32px; transition:var(--transition); }
  .pf-nav.scrolled {
    background:rgba(255,255,255,0.82); backdrop-filter:blur(20px);
    -webkit-backdrop-filter:blur(20px); border-bottom:1px solid var(--border);
  }
  body[data-theme="dark"] .pf-nav.scrolled {
    background:rgba(10,10,15,0.85);
  }
  .nav-inner { max-width:1140px; margin:0 auto; height:70px; display:flex; align-items:center; justify-content:space-between; }
  .nav-logo { font-family:var(--font-display); font-size:1.1rem; font-weight:700; color:var(--text-primary); letter-spacing:-0.02em; }
  .nav-logo span { color:var(--accent); }
  .nav-links { display:flex; align-items:center; gap:36px; }
  .nav-links a { font-size:0.88rem; font-weight:400; color:var(--text-secondary); transition:var(--transition); position:relative; }
  .nav-links a::after { content:''; position:absolute; bottom:-3px; left:0; width:0; height:1px; background:var(--accent); transition:width 0.3s ease; }
  .nav-links a:hover { color:var(--text-primary); }
  .nav-links a:hover::after { width:100%; }
  .nav-links a.active { color:var(--text-primary); }
  .nav-links a.active::after { width:100%; }
  .nav-actions { display:flex; align-items:center; gap:10px; }
  .theme-toggle {
    display:inline-flex; align-items:center; gap:8px;
    padding:8px 12px; border-radius:999px;
    border:1px solid var(--border); background:var(--bg-card);
    color:var(--text-primary); cursor:pointer; transition:var(--transition);
    font-family:var(--font-body); font-size:0.82rem; font-weight:500;
  }
  .theme-toggle:hover {
    border-color:var(--border-hover);
    background:var(--bg-card-hover);
    transform:translateY(-2px);
  }

  .hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; padding:4px; background:none; border:none; }
  .hamburger span { display:block; width:24px; height:1.5px; background:var(--text-primary); transition:var(--transition); }
  .hamburger.open span:nth-child(1) { transform:translateY(6.5px) rotate(45deg); }
  .hamburger.open span:nth-child(2) { opacity:0; }
  .hamburger.open span:nth-child(3) { transform:translateY(-6.5px) rotate(-45deg); }

  .mobile-menu { display:none; position:fixed; top:70px; left:0; right:0; background:rgba(255,255,255,0.96); backdrop-filter:blur(20px); border-bottom:1px solid var(--border); padding:24px 32px; z-index:99; flex-direction:column; gap:20px; }
  .mobile-menu.open { display:flex; }
  .mobile-menu a { font-size:1rem; color:var(--text-secondary); padding:8px 0; border-bottom:1px solid var(--border); transition:var(--transition); }
  .mobile-menu a:hover { color:var(--accent-light); padding-left:8px; }
  body[data-theme="dark"] .mobile-menu { background:rgba(10,10,15,0.97); }
  .mobile-theme-toggle { width:100%; justify-content:center; }

  .hero-section { min-height:100vh; display:flex; align-items:center; padding-top:70px; position:relative; overflow:hidden; }
  .hero-blob { position:absolute; border-radius:50%; filter:blur(100px); pointer-events:none; }
  .hero-blob-1 { width:500px; height:500px; background:rgba(99,102,241,0.08); top:-100px; right:-100px; }
  .hero-blob-2 { width:400px; height:400px; background:rgba(99,102,241,0.05); bottom:-100px; left:10%; }
  .hero-inner { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; padding:80px 0; }
  .hero-badge { display:inline-flex; align-items:center; gap:8px; padding:6px 14px 6px 8px; background:var(--bg-card); border:1px solid var(--border); border-radius:100px; font-size:12px; color:var(--text-secondary); margin-bottom:28px; }
  .hero-badge-dot { width:6px; height:6px; border-radius:50%; background:var(--success); box-shadow:0 0 8px var(--success); animation:pulse-dot 2s ease-in-out infinite; }
  .hero-name { font-family:var(--font-display); font-size:clamp(2.8rem,6vw,4.5rem); font-weight:800; line-height:1.05; letter-spacing:-0.03em; margin-bottom:20px; }
  .hero-name .accent { color:var(--accent-light); }
  .hero-tagline { font-size:1.1rem; color:var(--text-secondary); line-height:1.6; max-width:440px; margin-bottom:40px; font-weight:300; }
  .hero-buttons { display:flex; gap:12px; flex-wrap:wrap; }
  .hero-image-wrap { display:flex; justify-content:center; align-items:center; position:relative; }
  .hero-image-ring { position:relative; width:320px; height:320px; }
  .hero-ring-inner::before {
    content:''; position:absolute; inset:-12px; border-radius:50%;
    border:1.5px dashed rgba(99,102,241,0.35); animation:spin-slow 20s linear infinite;
  }
  .hero-ring-inner::after {
    content:''; position:absolute; inset:-28px; border-radius:50%;
    border:1px dashed rgba(99,102,241,0.15); animation:spin-slow-rev 35s linear infinite;
  }
  .hero-ring-inner { position:relative; width:100%; height:100%; }
  .hero-avatar { width:100%; height:100%; border-radius:50%; background:var(--bg-card); border:2px solid var(--border); overflow:hidden; display:flex; align-items:flex-end; justify-content:center; }
  .avatar-placeholder { width:100%; height:100%; background:linear-gradient(135deg,var(--bg-card) 0%,#1e1e2e 100%); display:flex; align-items:flex-end; justify-content:center; overflow:hidden; }
  .avatar-placeholder svg { width:75%; height:75%; opacity:0.7; }
  .hero-chip { position:absolute; background:var(--bg-card); border:1px solid var(--border); border-radius:100px; padding:8px 14px; font-size:12px; font-weight:500; color:var(--text-secondary); display:flex; align-items:center; gap:6px; white-space:nowrap; animation:float 6s ease-in-out infinite; }
  .chip-dot { width:6px; height:6px; border-radius:50%; background:var(--accent); display:inline-block; }
  .hero-chip-1 { top:10%; left:-30px; animation-delay:0s; }
  .hero-chip-2 { bottom:15%; right:-30px; animation-delay:-3s; }
  .hero-chip-3 { top:55%; left:-50px; animation-delay:-1.5s; }
  .scroll-indicator { position:absolute; bottom:36px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:8px; color:var(--text-muted); font-size:11px; letter-spacing:0.1em; text-transform:uppercase; }
  .scroll-line { width:1px; height:40px; background:linear-gradient(to bottom, var(--text-muted), transparent); animation:scroll-bounce 2s ease-in-out infinite; }

  .about-section { background:var(--bg-secondary); }
  .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
  .about-text p { color:var(--text-secondary); margin-bottom:16px; font-size:1.02rem; }
  .about-stats { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:40px; }
  .stat-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-md); padding:22px; transition:var(--transition); }
  .stat-card:hover { border-color:var(--border-hover); background:var(--bg-card-hover); }
  .stat-number { font-family:var(--font-display); font-size:2rem; font-weight:700; color:var(--text-primary); line-height:1; }
  .stat-number span { color:var(--accent-light); }
  .stat-label { font-size:0.82rem; color:var(--text-muted); margin-top:4px; }
  .tech-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
  .tech-item { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-md); padding:20px 16px; display:flex; flex-direction:column; align-items:center; gap:10px; transition:var(--transition); cursor:default; }
  .tech-item:hover { border-color:var(--border-hover); background:var(--bg-card-hover); transform:translateY(-4px); box-shadow:var(--shadow-glow); }
  .tech-icon { width:36px; height:36px; display:flex; align-items:center; justify-content:center; font-size:22px; }
  .tech-name { font-size:11px; font-weight:500; color:var(--text-secondary); text-align:center; }

  .skills-section { background:var(--bg-primary); }
  .skills-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:24px; }
  .skill-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:28px; transition:var(--transition); }
  .skill-card:hover { border-color:var(--border-hover); background:var(--bg-card-hover); box-shadow:var(--shadow-card); }
  .skill-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; }
  .skill-name { font-family:var(--font-display); font-size:0.95rem; font-weight:600; }
  .skill-pct { font-size:0.82rem; color:var(--accent-light); font-weight:500; }
  .skill-bar-bg { height:4px; background:rgba(255,255,255,0.06); border-radius:2px; overflow:hidden; }
  .skill-bar-fill { height:100%; border-radius:2px; background:linear-gradient(90deg,var(--accent),var(--accent-light)); transition:width 1.2s cubic-bezier(0.4,0,0.2,1); }
  .skill-tags { display:flex; flex-wrap:wrap; gap:6px; margin-top:14px; }
  .skill-tag { padding:3px 10px; background:rgba(99,102,241,0.08); border:1px solid rgba(99,102,241,0.15); border-radius:100px; font-size:11px; color:var(--text-muted); }

  .projects-section { background:var(--bg-secondary); }
  .projects-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
  .project-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); overflow:hidden; transition:var(--transition); display:flex; flex-direction:column; }
  .project-card:hover { border-color:var(--border-hover); transform:translateY(-6px); box-shadow:var(--shadow-card),var(--shadow-glow); }
  .project-image { width:100%; aspect-ratio:16/9; position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg,#12121c,#1a1a2e); }
  .project-image::before { content:''; position:absolute; inset:0; }
  .proj-bg-1::before { background:radial-gradient(circle at 30% 50%,rgba(99,102,241,0.25) 0%,transparent 60%),radial-gradient(circle at 80% 20%,rgba(139,92,246,0.15) 0%,transparent 50%); }
  .proj-bg-2::before { background:radial-gradient(circle at 70% 60%,rgba(16,185,129,0.2) 0%,transparent 60%),radial-gradient(circle at 20% 30%,rgba(99,102,241,0.15) 0%,transparent 50%); }
  .proj-bg-3::before { background:radial-gradient(circle at 50% 50%,rgba(251,146,60,0.2) 0%,transparent 60%),radial-gradient(circle at 80% 80%,rgba(99,102,241,0.15) 0%,transparent 50%); }
  .proj-bg-4::before { background:radial-gradient(circle at 20% 70%,rgba(236,72,153,0.2) 0%,transparent 60%),radial-gradient(circle at 80% 20%,rgba(99,102,241,0.15) 0%,transparent 50%); }
  .proj-bg-5::before { background:radial-gradient(circle at 60% 40%,rgba(6,182,212,0.2) 0%,transparent 60%),radial-gradient(circle at 20% 80%,rgba(99,102,241,0.15) 0%,transparent 50%); }
  .proj-bg-6::before { background:radial-gradient(circle at 40% 60%,rgba(132,204,22,0.2) 0%,transparent 60%),radial-gradient(circle at 70% 20%,rgba(99,102,241,0.15) 0%,transparent 50%); }
  .project-image-icon { width:48px; height:48px; border-radius:var(--radius-sm); background:rgba(99,102,241,0.15); border:1px solid rgba(99,102,241,0.25); display:flex; align-items:center; justify-content:center; font-size:22px; position:relative; z-index:1; }
  .project-body { padding:24px; flex:1; display:flex; flex-direction:column; }
  .project-meta { display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; }
  .project-type { font-size:11px; font-weight:500; letter-spacing:0.08em; text-transform:uppercase; color:var(--accent-light); }
  .project-year { font-size:11px; color:var(--text-muted); }
  .project-title { font-family:var(--font-display); font-size:1.1rem; font-weight:700; margin-bottom:10px; color:var(--text-primary); }
  .project-desc { font-size:0.88rem; color:var(--text-secondary); line-height:1.6; flex:1; margin-bottom:20px; }
  .project-footer { display:flex; gap:8px; }

  .experience-section { background:var(--bg-primary); }
  .timeline-columns { display:grid; grid-template-columns:1fr 1fr; gap:60px; }
  .timeline-section-label { font-family:var(--font-display); font-size:0.9rem; font-weight:600; color:var(--text-secondary); margin-bottom:32px; display:flex; align-items:center; gap:10px; }
  .timeline-section-label::after { content:''; flex:1; height:1px; background:var(--border); }
  .timeline { position:relative; padding-left:40px; }
  .timeline::before { content:''; position:absolute; left:8px; top:0; bottom:0; width:1px; background:linear-gradient(to bottom,var(--accent),transparent); }
  .timeline-item { position:relative; margin-bottom:48px; }
  .timeline-item:last-child { margin-bottom:0; }
  .timeline-dot { position:absolute; left:-36px; top:6px; width:14px; height:14px; border-radius:50%; background:var(--bg-primary); border:2px solid var(--accent); transition:var(--transition); }
  .timeline-item:hover .timeline-dot { background:var(--accent); box-shadow:0 0 12px var(--accent-glow-strong); }
  .timeline-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:28px; transition:var(--transition); }
  .timeline-item:hover .timeline-card { border-color:var(--border-hover); background:var(--bg-card-hover); }
  .timeline-period { font-size:11px; font-weight:500; letter-spacing:0.08em; text-transform:uppercase; color:var(--accent-light); margin-bottom:8px; }
  .timeline-title { font-family:var(--font-display); font-size:1.1rem; font-weight:700; margin-bottom:4px; }
  .timeline-org { font-size:0.9rem; color:var(--text-secondary); margin-bottom:12px; }
  .timeline-desc { font-size:0.88rem; color:var(--text-muted); line-height:1.65; }

  .contact-section { background:var(--bg-secondary); }
  .contact-grid { display:grid; grid-template-columns:1fr 1.2fr; gap:80px; align-items:start; }
  .contact-info h3 { font-family:var(--font-display); font-size:1.4rem; font-weight:700; margin-bottom:16px; }
  .contact-info p { color:var(--text-secondary); font-size:0.95rem; margin-bottom:36px; line-height:1.7; }
  .contact-links { display:flex; flex-direction:column; gap:16px; }
  .contact-link { display:flex; align-items:center; gap:14px; padding:16px 20px; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-md); transition:var(--transition); text-decoration:none; }
  .contact-link:hover { border-color:var(--border-hover); background:var(--bg-card-hover); transform:translateX(4px); }
  .contact-link-icon { width:36px; height:36px; border-radius:8px; background:var(--accent-glow); border:1px solid var(--border-hover); display:flex; align-items:center; justify-content:center; font-size:16px; flex-shrink:0; }
  .contact-link-text { flex:1; }
  .contact-link-label { font-size:11px; color:var(--text-muted); margin-bottom:2px; }
  .contact-link-value { font-size:0.88rem; color:var(--text-primary); font-weight:500; }
  .contact-form { display:flex; flex-direction:column; gap:16px; }
  .form-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
  .form-group { display:flex; flex-direction:column; gap:8px; }
  .form-group label { font-size:12px; font-weight:500; color:var(--text-muted); letter-spacing:0.04em; }
  .form-group input, .form-group textarea {
    background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-sm);
    padding:12px 16px; color:var(--text-primary); font-family:var(--font-body);
    font-size:0.9rem; transition:var(--transition); outline:none; width:100%; resize:none;
  }
  .form-group input::placeholder, .form-group textarea::placeholder { color:var(--text-muted); }
  .form-group input:focus, .form-group textarea:focus { border-color:var(--accent); background:var(--bg-card-hover); box-shadow:0 0 0 3px var(--accent-glow); }
  .form-group textarea { min-height:130px; }
  .form-submit { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
  .form-note { font-size:12px; color:var(--text-muted); }

  .pf-footer { background:var(--bg-primary); border-top:1px solid var(--border); padding:40px 0; }
  .footer-inner { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:20px; }
  .footer-logo { font-family:var(--font-display); font-size:1rem; font-weight:700; color:var(--text-primary); }
  .footer-logo span { color:var(--accent); }
  .footer-copy { font-size:0.82rem; color:var(--text-muted); }
  .footer-socials { display:flex; gap:8px; }
  .social-btn { width:36px; height:36px; border-radius:8px; background:var(--bg-card); border:1px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:15px; transition:var(--transition); cursor:pointer; text-decoration:none; color:var(--text-primary); }
  .social-btn:hover { border-color:var(--border-hover); background:var(--accent-glow); transform:translateY(-2px); }

  .toast { position:fixed; bottom:24px; right:24px; background:var(--bg-card); border:1px solid var(--border-hover); border-radius:var(--radius-md); padding:14px 20px; display:flex; align-items:center; gap:10px; font-size:0.88rem; color:var(--text-primary); box-shadow:0 8px 32px rgba(0,0,0,0.4); z-index:999; transform:translateY(100px); opacity:0; transition:all 0.6s cubic-bezier(0.4,0,0.2,1); pointer-events:none; }
  .toast.show { transform:translateY(0); opacity:1; }

  @media (max-width: 900px) {
    .nav-links, .nav-actions { display:none !important; }
    .hamburger { display:flex !important; }
    .hero-inner { grid-template-columns:1fr; text-align:center; gap:48px; padding:60px 0 40px; }
    .hero-tagline { margin:0 auto 40px; }
    .hero-buttons { justify-content:center; }
    .hero-image-wrap { order:-1; }
    .hero-image-ring { width:240px; height:240px; }
    .hero-chip { display:none; }
    .about-grid { grid-template-columns:1fr; gap:48px; }
    .skills-grid { grid-template-columns:1fr; }
    .projects-grid { grid-template-columns:repeat(2,1fr); }
    .timeline-columns { grid-template-columns:1fr; gap:48px; }
    .contact-grid { grid-template-columns:1fr; gap:48px; }
    .form-row { grid-template-columns:1fr; }
  }
  @media (max-width: 600px) {
    .pf-container { padding:0 20px; }
    .pf-section { padding:70px 0; }
    .hero-name { font-size:2.4rem; }
    .hero-image-ring { width:200px; height:200px; }
    .about-stats { grid-template-columns:1fr 1fr; }
    .tech-grid { grid-template-columns:repeat(3,1fr); }
    .projects-grid { grid-template-columns:1fr; }
    .footer-inner { flex-direction:column; align-items:center; text-align:center; }
  }
`;
