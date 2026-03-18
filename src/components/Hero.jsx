import { useState, useEffect } from "react";
import myImage from "../assets/myimage.jpeg";
import resume from "../assets/KaleesKalees.pdf";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      alignItems: "center",
      padding: isMobile ? "7rem 1.25rem 3rem" : "8rem 3rem 4rem",
      gap: "4rem",
      maxWidth: 1200,
      margin: "0 auto",
      overflowX: "hidden",
    }}>

      {/* Left */}
      <div style={{ minWidth: 0 }}>

        {/* Good Morning */}
        <div style={{
          display: "inline-block",
          fontFamily: "'Caveat', cursive",
          fontSize: "1.5rem",
          color: "var(--accent)",
          marginBottom: "1.2rem",
          animation: "fadeUp 0.5s ease both",
          transform: "rotate(-1.5deg)",
          borderBottom: "2px solid var(--accent-light)",
          paddingBottom: "2px",
          lineHeight: 1.2,
        }}>
          Hi ...🙏🏼
        </div>

        {/* I am */}
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
          color: "var(--muted)", letterSpacing: "0.18em", textTransform: "uppercase",
          marginBottom: "0.3rem",
          animation: "fadeUp 0.5s 0.08s ease both",
          opacity: 0, animationFillMode: "forwards",
        }}>I am</div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: isMobile ? "clamp(2.5rem, 12vw, 4rem)" : "clamp(3rem, 6vw, 5.5rem)",
          lineHeight: 1.0, letterSpacing: "-0.03em",
          animation: "fadeUp 0.5s 0.1s ease both",
          opacity: 0, animationFillMode: "forwards",
        }}>
          Kalees<em style={{ fontStyle: "italic", color: "var(--accent)" }}>waran</em>
        </h1>

        {/* Role */}
        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.82rem",
          color: "var(--muted)", letterSpacing: "0.06em",
          marginTop: "0.5rem", marginBottom: "1.5rem",
          animation: "fadeUp 0.5s 0.2s ease both",
          opacity: 0, animationFillMode: "forwards",
        }}>
          Full Stack Developer
        </p>

        {/* Mobile avatar + quote */}
        {isMobile && (
          <div style={{
            display: "flex", alignItems: "center", gap: "1rem",
            marginBottom: "2rem",
            animation: "fadeUp 0.5s 0.3s ease both",
            opacity: 0, animationFillMode: "forwards",
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
              border: "2.5px solid var(--accent-light)",
              boxShadow: "0 0 0 4px var(--accent-pale)",
              overflow: "hidden",
            }}>
              <img
                src={myImage}
                alt="Kaleeswaran"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem",
              color: "var(--muted)",
              transform: "rotate(0.8deg)",
              borderLeft: "3px solid var(--accent-light)",
              paddingLeft: "0.75rem",
              lineHeight: 1.4,
              minWidth: 0,
            }}>
              and in case I don't see ya — good morning, good afternoon, good evening, and good night! 
            </div>
          </div>
        )}

        {/* Desktop-only quote */}
        {!isMobile && (
          <div style={{
            display: "inline-block",
            fontFamily: "'Caveat', cursive",
            fontSize: "1.3rem",
            color: "var(--muted)",
            marginBottom: "2.5rem",
            animation: "fadeUp 0.5s 0.3s ease both",
            opacity: 0, animationFillMode: "forwards",
            transform: "rotate(0.8deg)",
            borderLeft: "3px solid var(--accent-light)",
            paddingLeft: "0.75rem",
            lineHeight: 1.4,
          }}>
            and in case I don't see ya — good morning, good afternoon,<br />good evening, and good night! 🌙
          </div>
        )}

        {/* CTA Buttons */}
        <div style={{
          display: "flex", gap: "1rem", flexWrap: "wrap",
          animation: "fadeUp 0.5s 0.4s ease both",
          opacity: 0, animationFillMode: "forwards",
        }}>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            download="KaleesKalees.pdf"
            style={{
              background: "var(--ink)", color: "var(--bg)",
              padding: "0.8rem 1.8rem", borderRadius: "0.5rem",
              fontSize: "0.9rem", fontWeight: 500, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >⬇ Download Resume</a>

          <a href="mailto:kkaleesn@gmail.com" style={{
            background: "transparent", color: "var(--ink)",
            padding: "0.8rem 1.8rem", borderRadius: "0.5rem",
            border: "1px solid var(--border)", fontSize: "0.9rem",
            fontWeight: 500, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            transition: "border-color 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--ink)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >✉ Get in Touch</a>
        </div>
      </div>

      {/* Right — profile photo (desktop only) */}
      {!isMobile && (
        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          animation: "fadeUp 0.5s 0.5s ease both", opacity: 0, animationFillMode: "forwards",
        }}>
          <div style={{ position: "relative", width: 340, height: 380 }}>
            <div style={{
              position: "absolute", top: 16, left: 16,
              width: "100%", height: "100%",
              borderRadius: "2rem", border: "3px solid var(--accent-light)", zIndex: 0,
            }} />
            <div style={{
              position: "absolute", top: 8, left: 8,
              width: "100%", height: "100%",
              borderRadius: "2rem", border: "1.5px solid var(--accent-pale)", zIndex: 0,
            }} />
            <img
              src={myImage}
              alt="Kaleeswaran"
              style={{
                position: "relative", zIndex: 1,
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "top",
                borderRadius: "2rem",
                border: "4px solid var(--white)",
                boxShadow: "0 20px 60px rgba(45, 80, 22, 0.18), 0 4px 16px rgba(0,0,0,0.1)",
                display: "block",
              }}
            />
            <div style={{
              position: "absolute", bottom: -12, right: -12, zIndex: 2,
              width: 48, height: 48,
              background: "var(--accent-pale)", border: "3px solid var(--accent-light)",
              borderRadius: "50%", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "1.3rem",
            }}>⚡</div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Hero;
