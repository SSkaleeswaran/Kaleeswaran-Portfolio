import { useState, useEffect } from "react";

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const NAV_LINKS = [
  { label: "Home",     href: "#hero"     },
  { label: "About",    href: "#about-me" },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

function SocialBtn({ href, icon, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer" title={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 38, height: 38, borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        border: `1px solid ${hovered ? "var(--accent-light)" : "#3A3834"}`,
        color: hovered ? "var(--white)" : "#9A9690",
        background: hovered ? "#1F1E1B" : "transparent",
        textDecoration: "none",
        transition: "all 0.2s",
      }}>
      {icon}
    </a>
  );
}

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <footer style={{ background: "#0F0E0C", color: "#9A9690" }}>

      {/* Main footer content */}
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: isMobile ? "3rem 1.5rem" : "4rem 3rem",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr",
        gap: isMobile ? "2.5rem" : "4rem",
      }}>

        {/* Col 1 — Brand */}
        <div>
          <a href="#hero" style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "1.4rem", color: "var(--accent-light)",
            textDecoration: "none", display: "inline-block", marginBottom: "1rem",
          }}>Kaleeswaran</a>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem",
            lineHeight: 1.75, color: "#7A7670", maxWidth: "36ch", marginBottom: "1.5rem",
          }}>
            Passionate Full-Stack Developer specializing in the MERN stack.
            Building responsive, performant web applications with modern
            technologies and clean code.
          </p>
          <div style={{ display: "flex", gap: "0.65rem" }}>
            <SocialBtn href="https://github.com/SSkaleeswaran"          icon={<GitHubIcon />}   label="GitHub"   />
            <SocialBtn href="https://www.linkedin.com/in/sskaleeswaran" icon={<LinkedInIcon />} label="LinkedIn" />
            <SocialBtn href="mailto:kkaleesn@gmail.com"                 icon={<MailIcon />}     label="Email"    />
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--accent-light)", marginBottom: "1.25rem",
          }}>Quick Links</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem",
                  color: "#7A7670", textDecoration: "none",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--white)"}
                  onMouseLeave={e => e.currentTarget.style.color = "#7A7670"}
                >{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact Info */}
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--accent-light)", marginBottom: "1.25rem",
          }}>Contact Info</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {[
              { icon: <MailIcon />,  text: "kkaleesn@gmail.com",     href: "mailto:kkaleesn@gmail.com" },
              { icon: "📍",          text: "Coimbatore, Tamil Nadu, India",       href: null },
              { icon: "💼",          text: "Available for opportunities", href: null },
            ].map(({ icon, text, href }, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                <span style={{ color: "var(--accent-light)", flexShrink: 0, fontSize: typeof icon === "string" ? "1rem" : "inherit", display: "flex" }}>{icon}</span>
                {href ? (
                  <a href={href} style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
                    color: "#7A7670", textDecoration: "none", transition: "color 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--white)"}
                    onMouseLeave={e => e.currentTarget.style.color = "#7A7670"}
                  >{text}</a>
                ) : (
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#7A7670" }}>{text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Divider + copyright */}
      <div style={{ borderTop: "1px solid #1E1C18" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          padding: isMobile ? "1.25rem 1.5rem" : "1.5rem 3rem",
          textAlign: "center",
          fontFamily: "'DM Mono', monospace", fontSize: "0.85rem",
          color: "#4A4844", letterSpacing: "0.04em",
        }}>
          © 2025 Kaleeswaran. All rights reserved.
        </div>
      </div>

    </footer>
  );
}

export default Footer;
