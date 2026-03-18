import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function ContactLink({ ico, label, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: "0.75rem",
        color: hovered ? "var(--white)" : "#C8C4BC",
        textDecoration: "none", fontSize: "0.9rem",
        padding: "0.75rem 1rem", borderRadius: "0.5rem",
        border: `1px solid ${hovered ? "var(--accent-light)" : "#2E2C28"}`,
        background: hovered ? "#1F1E1B" : "transparent",
        transition: "all 0.2s",
      }}>
      <span style={{ fontSize: "1.1rem" }}>{ico}</span>
      {label}
    </a>
  );
}

function SocialIcon({ href, label, icon, hoverColor, hoverBg }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href} target="_blank" rel="noreferrer" title={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 48, height: 48, borderRadius: "0.75rem",
        display: "flex", alignItems: "center", justifyContent: "center",
        border: `1px solid ${hovered ? "transparent" : "#2E2C28"}`,
        background: hovered ? hoverBg : "#1A1814",
        color: hovered ? hoverColor : "#9A9690",
        textDecoration: "none",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      {icon}
    </a>
  );
}

function SendButton({ sending }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button type="submit"
      disabled={sending}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: sending ? "#2E2C28" : hovered ? "var(--accent-light)" : "var(--accent)",
        color: sending ? "#6A6860" : "var(--white)",
        border: "none", padding: "0.9rem 2rem", borderRadius: "0.5rem",
        fontSize: "0.9rem", fontWeight: 500,
        cursor: sending ? "not-allowed" : "pointer",
        display: "inline-flex", alignItems: "center", gap: "0.5rem",
        transform: hovered && !sending ? "translateY(-2px)" : "translateY(0)",
        transition: "background 0.2s, transform 0.2s, color 0.2s",
        width: "fit-content", fontFamily: "'DM Sans', sans-serif",
      }}>
      {sending ? "Sending..." : "Send Message ↗"}
    </button>
  );
}

const inputStyle = {
  background: "#1F1E1B", border: "1px solid #2E2C28", borderRadius: "0.5rem",
  padding: "0.8rem 1rem", color: "var(--white)",
  fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", outline: "none",
  width: "100%", transition: "border-color 0.2s",
};

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    setError(false);

    emailjs.send(
      "service_r6g0akn",
      "template_ota4rxa",
      {
        from_name: form.name,
        subject:   form.subject,
        message:   `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
      },
      "y-mjlGcWfpEl-lJ8j"
    )
    .then(() => {
      setSent(true);
      setSending(false);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    })
    .catch(() => {
      setError(true);
      setSending(false);
    });
  };

  return (
    <section id="contact" style={{ background: "var(--ink)", padding: "0" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: isMobile ? "4rem 1.5rem" : "5rem 3rem",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "2.5rem" : "4rem",
        alignItems: "start",
      }}>

        {/* Left — info */}
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--accent-light)", marginBottom: "0.75rem",
          }}>Contact</div>

          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em",
            color: "var(--white)", lineHeight: 1.1, marginBottom: "1.5rem",
          }}>
            Let's Get in<br />
            <em style={{ fontStyle: "italic", color: "#6BAA3A" }}>Touch</em>.
          </h2>

          <p style={{
            color: "#9A9690", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "2rem",
          }}>
            I'm open to full-time roles, internships, and freelance projects.
            Drop me a message and I'll get back to you soon.
          </p>

          <ContactLink ico="✉" label="kkaleesn@gmail.com" href="mailto:kkaleesn@gmail.com" />

          {/* Connect Me */}
          <div style={{ marginTop: "1.75rem" }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.68rem",
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--accent-light)", marginBottom: "1rem",
            }}>Connect Me</div>
            <div style={{ display: "flex", gap: "0.75rem" }}>

              {/* GitHub */}
              <SocialIcon
                href="https://github.com/SSkaleeswaran"
                label="GitHub"
                hoverColor="#ffffff"
                hoverBg="#2D2D2D"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                }
              />

              {/* LinkedIn */}
              <SocialIcon
                href="https://www.linkedin.com/in/sskaleeswaran"
                label="LinkedIn"
                hoverColor="#ffffff"
                hoverBg="#0A66C2"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                }
              />

            </div>
          </div>
        </div>

        {/* Right — form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1rem" }}>
            {[
              { name: "name",  label: "Name",  placeholder: "Your name",      type: "text"  },
              { name: "email", label: "Email", placeholder: "your@email.com", type: "email" },
            ].map(f => (
              <div key={f.name} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label style={{
                  fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
                  letterSpacing: "0.08em", textTransform: "uppercase", color: "#9A9690",
                }}>{f.label}</label>
                <input
                  type={f.type} name={f.name} value={form[f.name]}
                  onChange={handleChange} placeholder={f.placeholder} required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "var(--accent-light)"}
                  onBlur={e  => e.target.style.borderColor = "#2E2C28"}
                />
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
              letterSpacing: "0.08em", textTransform: "uppercase", color: "#9A9690",
            }}>Subject</label>
            <input
              type="text" name="subject" value={form.subject}
              onChange={handleChange} placeholder="What's this about?" required
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = "var(--accent-light)"}
              onBlur={e  => e.target.style.borderColor = "#2E2C28"}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
              letterSpacing: "0.08em", textTransform: "uppercase", color: "#9A9690",
            }}>Message</label>
            <textarea
              name="message" value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              required rows={5}
              style={{ ...inputStyle, resize: "none" }}
              onFocus={e => e.target.style.borderColor = "var(--accent-light)"}
              onBlur={e  => e.target.style.borderColor = "#2E2C28"}
            />
          </div>

          <SendButton sending={sending} />
          {sent && (
            <p style={{ color: "#6BAA3A", fontSize: "0.85rem", fontFamily: "'DM Mono', monospace" }}>
              ✓ Message sent! I'll get back to you soon.
            </p>
          )}
          {error && (
            <p style={{ color: "#E05252", fontSize: "0.85rem", fontFamily: "'DM Mono', monospace" }}>
              ✕ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
