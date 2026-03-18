import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { SKILLS } from "../data/data";

function SkillChip({ icon, name, delay, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem",
        background: "var(--white)",
        border: `1px solid ${hovered ? "var(--accent-light)" : "var(--border)"}`,
        borderRadius: "1rem", padding: "1.25rem 1rem",
        fontFamily: "'DM Mono', monospace", fontSize: "0.75rem",
        color: "var(--ink)", letterSpacing: "0.04em", cursor: "default",
        transform: hovered ? "translateY(-5px)" : visible ? "translateY(0)" : "translateY(20px)",
        opacity: visible ? 1 : 0,
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.09)" : "none",
        transition: `opacity 0.4s ${delay}ms, transform 0.4s ${delay}ms, border-color 0.2s, box-shadow 0.2s`,
      }}>
      <span style={{ fontSize: "1.6rem" }}>{icon}</span>
      {name}
    </div>
  );
}

function Skills() {
  const [ref, visible] = useInView();
  return (
    <section id="skills" style={{ background: "var(--surface)", padding: "5rem 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: "var(--accent-light)", marginBottom: "0.75rem",
        }}>Technical Skills</div>

        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(2rem,4vw,3rem)",
          letterSpacing: "-0.02em", marginBottom: "3rem",
        }}>What I work with</h2>

        <div ref={ref} style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
          gap: "1rem",
        }}>
          {SKILLS.map(({ icon, name }, i) => (
            <SkillChip key={name} icon={icon} name={name} delay={i * 40} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
