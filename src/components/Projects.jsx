import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../data/data";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [ref, visible] = useInView();

  return (
    <section id="projects" style={{ padding: "5rem 3rem", maxWidth: 1200, margin: "0 auto", boxSizing: "border-box", width: "100%" }}>
      <style>{`
        @media (max-width: 768px) {
          #projects { padding: 4rem 1rem !important; }
        }
      `}</style>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: "0.72rem",
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: "var(--accent-light)", marginBottom: "0.75rem",
      }}>Work</div>

      <h2 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: "clamp(2rem,4vw,3rem)",
        letterSpacing: "-0.02em", marginBottom: "3rem",
      }}>Projects</h2>

      <div ref={ref} style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))",
        gap: "1.5rem",
      }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            delay={i * 100}
            visible={visible}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
