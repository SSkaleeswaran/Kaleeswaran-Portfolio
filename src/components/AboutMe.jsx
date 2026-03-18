import { useState, useEffect } from "react";

function AboutMe() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="about-me" style={{
      padding: isMobile ? "4rem 1rem" : "5rem 3rem",
      background: "#E8E4DC",
      overflowX: "hidden",
      width: "100vw",
      boxSizing: "border-box",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", minWidth: 0, width: "100%", boxSizing: "border-box" }}>

        {/* Section label + title */}
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: "var(--accent-light)", marginBottom: "0.75rem",
        }}>Who I Am</div>

        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: "3rem",
        }}>About Me</h2>

        {/* Two column → single column on mobile */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "2.5rem" : "4rem",
          alignItems: "start",
          minWidth: 0,
        }}>

          {/* ── LEFT — Summary + Education ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", minWidth: 0 }}>

            {/* Summary */}
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: "0.90rem",
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--accent-light)", marginBottom: "0.75rem",
              }}>Executive Summary</div>
              <p style={{
                fontSize: isMobile ? "0.92rem" : "1.05rem", color: "var(--muted)", lineHeight: 1.8,
                fontWeight: 300, borderLeft: "3px solid var(--accent)",
                paddingLeft: "1rem", margin: 0,
                wordBreak: "break-word", overflowWrap: "break-word",
                boxSizing: "border-box",
              }}>
                I am a Computer Application graduate with a strong interest in web development and modern internet technologies.
                I have hands-on experience working with the MERN stack (MongoDB, Express.js, React.js, Node.js)
                and enjoy building responsive and scalable web applications.
                <br /><br />
                I gained practical experience in frontend development, backend integration, REST APIs, and database management.
                I am passionate about creating efficient, user-friendly web solutions and continuously improving my technical skills.
                <br /><br />
                I am eager to grow as a developer, learn new technologies, and contribute to building impactful software and web applications.
              </p>
            </div>

            {/* Education */}
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: "0.90rem",
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--accent-light)", marginBottom: "1rem",
              }}>Education</div>

              <div style={{
                background: "var(--white)", border: "1px solid var(--border)",
                borderRadius: "1rem", overflow: "hidden",
              }}>
                <EduRow icon="🎓" title="Bachelor of Computer Application"
                  institution="APA College of Arts and Culture · MKU" badge="CGPA 7.0" last={false} />
                <EduRow icon="🏫" title="Higher Secondary Certificate"
                  institution="Guruvappa Hr. Sec. School" badge="HSC 74%" last={false} />
                <EduRow icon="📚" title="Secondary School Leaving Certificate"
                  institution="Guruvappa Hr. Sec. School" badge="SSLC 65%" last={true} />
              </div>
            </div>
          </div>

          {/* ── RIGHT — Internship ── */}
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.90rem",
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--accent-light)", marginBottom: "1rem",
            }}>Internship</div>

            <div style={{
              background: "var(--white)", border: "1px solid var(--border)",
              borderRadius: "1rem", overflow: "hidden",
            }}>
              {/* Header */}
              <div style={{
                padding: isMobile ? "1rem 0.85rem" : "1.25rem 1.25rem",
                borderBottom: "1px solid var(--border)",
                display: "flex", alignItems: "flex-start", gap: "0.75rem",
                flexWrap: "wrap",
                boxSizing: "border-box",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "0.75rem", flexShrink: 0,
                  background: "var(--accent-pale)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.3rem",
                }}>💼</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                    fontSize: "0.95rem", color: "var(--ink)", marginBottom: "0.15rem",
                    wordBreak: "break-word",
                  }}>Web Developer — MERN Stack</div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
                    color: "var(--muted)",
                  }}>App Innovation Technologies</div>
                </div>
                <span style={{
                  fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
                  background: "var(--accent-pale)", color: "var(--accent)",
                  padding: "0.25rem 0.65rem", borderRadius: "0.3rem",
                  letterSpacing: "0.04em", flexShrink: 0, whiteSpace: "nowrap",
                  alignSelf: "flex-start",
                }}>Nov 2025 – Jan 2026</span>
              </div>

              {/* Points */}
              {[
                { icon: "⚛️", text: "Designed and developed full-stack web applications using React.js on the front-end and Node.js with Express.js on the back-end." },
                { icon: "🍃", text: "Worked with MongoDB to model and manage application data, gaining hands-on experience with Mongoose and database integration." },
                { icon: "🔗", text: "Built and consumed REST APIs, learning how server-side data flows through endpoints and renders dynamically on the client." },
              ].map(({ icon, text }, i, arr) => (
                <div key={i} style={{
                  display: "flex", gap: "0.75rem", alignItems: "flex-start",
                  padding: isMobile ? "0.85rem 0.85rem" : "1rem 1.25rem",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                }}>
                  <span style={{ fontSize: "1rem", marginTop: "0.1rem", flexShrink: 0 }}>{icon}</span>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
                    color: "var(--muted)", lineHeight: 1.7, margin: 0,
                    wordBreak: "break-word", overflowWrap: "break-word",
                  }}>{text}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
                background: "var(--accent-pale)", color: "var(--accent)",
                padding: "0.25rem 0.7rem", borderRadius: "2rem", letterSpacing: "0.06em",
              }}>Internship</span>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
                color: "var(--muted)", letterSpacing: "0.04em",
              }}>· 3 months · On-site</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function EduRow({ icon, title, institution, badge, last }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "0.85rem",
      padding: "0.9rem 1.25rem",
      borderBottom: last ? "none" : "1px solid var(--border)",
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: "0.6rem", flexShrink: 0,
        background: "var(--accent-pale)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1rem",
      }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
          fontSize: "0.82rem", color: "var(--ink)", marginBottom: "0.15rem",
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>{title}</div>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.67rem",
          color: "var(--muted)",
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>{institution}</div>
      </div>
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: "0.63rem",
        background: "var(--accent-pale)", color: "var(--accent)",
        padding: "0.2rem 0.5rem", borderRadius: "0.3rem",
        letterSpacing: "0.04em", flexShrink: 0, whiteSpace: "nowrap",
      }}>{badge}</span>
    </div>
  );
}

export default AboutMe;
