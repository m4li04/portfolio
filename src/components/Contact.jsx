import { useState } from "react";

export default function Contact({ contact, showToast }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const setField = key => event => {
    setForm(currentForm => ({ ...currentForm, [key]: event.target.value }));
  };

  const submit = () => {
    if (!form.firstName || !form.email || !form.message) {
      showToast("⚠️", "Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      showToast("⚠️", "Please enter a valid email address.");
      return;
    }

    setSending(true);
    setTimeout(() => {
      setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      setSending(false);
      showToast("✅", "Message sent! I'll reply within 24 hours.");
    }, 1500);
  };

  return (
    <section id="contact" className="pf-section contact-section">
      <div className="pf-container">
        <span className="sec-label reveal">Get In Touch</span>
        <h2 className="sec-title reveal">Let&apos;s Work Together</h2>

        <div className="contact-grid">
          <div className="reveal">
            <div className="contact-info">
              <h3>{contact.heading}</h3>
              <p>{contact.blurb}</p>
            </div>

            <div className="contact-links">
              {contact.items.map(item => (
                <a
                  href={item.href}
                  className="contact-link"
                  key={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <div className="contact-link-icon">{item.icon}</div>
                  <div className="contact-link-text">
                    <div className="contact-link-label">{item.label}</div>
                    <div className="contact-link-value">{item.value}</div>
                  </div>

                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal reveal-d2">
            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Jane" value={form.firstName} onChange={setField("firstName")} />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Smith" value={form.lastName} onChange={setField("lastName")} />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="jane@company.com" value={form.email} onChange={setField("email")} />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Project Inquiry" value={form.subject} onChange={setField("subject")} />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell me about your project..." value={form.message} onChange={setField("message")} />
              </div>

              <div className="form-submit">
                <button className="btn btn-primary" onClick={submit} disabled={sending}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  {sending ? "Sending..." : "Send Message"}
                </button>
                <span className="form-note">I&apos;ll reply within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
