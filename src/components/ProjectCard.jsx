import { useState } from "react";

function ProjectCard({ project, delay, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--white)", border: "1px solid var(--border)",
        borderRadius: "1.25rem", padding: "2rem",
        display: "flex", flexDirection: "column", gap: "1rem",
        position: "relative", overflow: "hidden",
        transform: hovered ? "translateY(-7px)" : visible ? "translateY(0)" : "translateY(28px)",
        opacity: visible ? 1 : 0,
        boxShadow: hovered ? "0 20px 48px rgba(0,0,0,0.11)" : "none",
        transition: `opacity 0.5s ${delay}ms, transform 0.5s ${delay}ms, box-shadow 0.3s`,
      }}>

      {/* Top accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg, var(--accent), var(--accent-light))",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.35s ease",
      }} />

      {/* Number */}
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: "0.68rem",
        color: "var(--muted)", letterSpacing: "0.1em",
      }}>{project.num} </div>

      {/* Name */}
      <div style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: "1.5rem", letterSpacing: "-0.02em", color: "var(--ink)",
      }}>{project.name}</div>

      {/* Description */}
      <p style={{
        fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.75, flex: 1,
      }}>{project.desc}</p>

      {/* Stack tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.stack.map(tag => (
          <span key={tag} style={{
            fontFamily: "'DM Mono', monospace", fontSize: "0.68rem",
            background: "var(--accent-pale)", color: "var(--accent)",
            padding: "0.25rem 0.65rem", borderRadius: "0.35rem", letterSpacing: "0.04em",
          }}>{tag}</span>
        ))}
      </div>

      {/* Link */}
      <a href={project.link} style={{
        display: "inline-flex", alignItems: "center", gap: "0.4rem",
        fontFamily: "'DM Mono', monospace", fontSize: "0.85rem",
        color: hovered ? "var(--accent)" : "var(--ink)",
        textDecoration: "none",
        borderTop: "1px solid var(--border)", paddingTop: "1rem",
        transition: "color 0.2s",
      }}>View Project →</a>
    </div>
  );
}

export default ProjectCard;
