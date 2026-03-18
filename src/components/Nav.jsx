import { useState, useEffect } from "react";
import { NAV_LINKS, NAV_HREFS } from "../data/data";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.25rem 1.5rem 1.25rem 3rem",
        background: scrolled ? "rgba(247,245,240,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        {/* Logo */}
        <a href="#hero" style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "1.3rem", color: "var(--ink)", textDecoration: "none",
        }}>Kaleeswaran.</a>

        {/* Desktop — nav links + GitHub icon */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
              {NAV_LINKS.map(link => (
                <li key={link}>
                  <a href={NAV_HREFS[link]} style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "1rem", letterSpacing: "0.1em",
                    textTransform: "uppercase", textDecoration: "none",
                    color: active === NAV_HREFS[link].replace("#","") ? "var(--ink)" : "var(--muted)",
                    transition: "color 0.2s",
                  }}>{link}</a>
                </li>
              ))}
            </ul>

            {/* GitHub icon button */}
            {/* <a
              href="https://github.com/SSkaleeswaran"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 36, height: 36, borderRadius: "50%",
                border: "1px solid var(--border)",
                color: "var(--muted)", textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "var(--ink)";
                e.currentTarget.style.borderColor = "var(--ink)";
                e.currentTarget.style.background = "var(--surface)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "var(--muted)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <GitHubIcon />
            </a> */}

            {/* LinkedIn icon button */}
            {/* <a
              href="https://www.linkedin.com/in/sskaleeswaran"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 36, height: 36, borderRadius: "50%",
                border: "1px solid var(--border)",
                color: "var(--muted)", textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "#0A66C2";
                e.currentTarget.style.borderColor = "#0A66C2";
                e.currentTarget.style.background = "#EEF5FF";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "var(--muted)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <LinkedInIcon />
            </a> */}
          </div>
        )}

        {/* Mobile — hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "5px", padding: "4px", zIndex: 101,
            }}
          >
            <span style={{
              display: "block", width: 22, height: 2,
              background: "var(--ink)", borderRadius: 2,
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              transition: "transform 0.3s ease",
            }} />
            <span style={{
              display: "block", width: 22, height: 2,
              background: "var(--ink)", borderRadius: 2,
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s ease",
            }} />
            <span style={{
              display: "block", width: 22, height: 2,
              background: "var(--ink)", borderRadius: 2,
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              transition: "transform 0.3s ease",
            }} />
          </button>
        )}
      </nav>

      {/* Mobile dropdown */}
      {isMobile && (
        <div style={{
          position: "fixed",
          top: menuOpen ? "4.5rem" : "3.5rem",
          left: "1rem", right: "1rem",
          zIndex: 99,
          background: "rgba(247,245,240,0.97)",
          backdropFilter: "blur(16px)",
          borderRadius: "2rem",
          border: "1px solid var(--border)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          overflow: "hidden",
          maxHeight: menuOpen ? "500px" : "0px",
          opacity: menuOpen ? 1 : 0,
          transition: "max-height 0.35s ease, opacity 0.25s ease, top 0.25s ease",
          pointerEvents: menuOpen ? "auto" : "none",
        }}>
          <ul style={{
            listStyle: "none", padding: "1.25rem 1.5rem",
            display: "flex", flexDirection: "column", gap: "0.25rem",
          }}>
            {NAV_LINKS.map((link, i) => (
              <li key={link}>
                <a
                  href={NAV_HREFS[link]}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    fontFamily: "'DM Mono', monospace", fontSize: "0.85rem",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    textDecoration: "none",
                    color: active === NAV_HREFS[link].replace("#","") ? "var(--accent)" : "var(--ink)",
                    padding: "0.85rem 1rem", borderRadius: "1rem",
                    background: active === NAV_HREFS[link].replace("#","") ? "var(--accent-pale)" : "transparent",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => { if (active !== NAV_HREFS[link].replace("#","")) e.currentTarget.style.background = "var(--surface)"; }}
                  onMouseLeave={e => { if (active !== NAV_HREFS[link].replace("#","")) e.currentTarget.style.background = "transparent"; }}
                >
                  {link}
                  <span style={{
                    fontFamily: "'DM Serif Display', serif", fontSize: "1rem",
                    color: active === NAV_HREFS[link].replace("#","") ? "var(--accent)" : "var(--muted)",
                  }}>→</span>
                </a>
                {i < NAV_LINKS.length - 1 && (
                  <div style={{ height: 1, background: "var(--border)", margin: "0 0.5rem" }} />
                )}
              </li>
            ))}

            {/* GitHub link inside mobile menu */}
            <li>
              <div style={{ height: 1, background: "var(--border)", margin: "0 0.5rem 0.25rem" }} />
              <a
                href="https://github.com/SSkaleeswaran"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  fontFamily: "'DM Mono', monospace", fontSize: "0.85rem",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  textDecoration: "none", color: "var(--ink)",
                  padding: "0.85rem 1rem", borderRadius: "1rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--surface)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <GitHubIcon />
                GitHub
                <span style={{ marginLeft: "auto", fontSize: "0.65rem", color: "var(--muted)" }}>↗</span>
              </a>
            </li>

            {/* LinkedIn in mobile menu */}
            <li>
              <div style={{ height: 1, background: "var(--border)", margin: "0 0.5rem 0.25rem" }} />
              <a
                href="https://www.linkedin.com/in/sskaleeswaran"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  fontFamily: "'DM Mono', monospace", fontSize: "0.85rem",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  textDecoration: "none", color: "var(--ink)",
                  padding: "0.85rem 1rem", borderRadius: "1rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#EEF5FF"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <span style={{ color: "#0A66C2" }}><LinkedInIcon /></span>
                LinkedIn
                <span style={{ marginLeft: "auto", fontSize: "0.65rem", color: "var(--muted)" }}>↗</span>
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Backdrop */}
      {isMobile && menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 98,
            background: "rgba(0,0,0,0.15)",
            backdropFilter: "blur(2px)",
          }}
        />
      )}
    </>
  );
}

export default Nav;
