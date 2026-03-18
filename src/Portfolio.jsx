import { useState, useEffect } from "react";
import { globalStyles } from "./styles/globalStyles";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = globalStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about-me", "skills", "projects", "contact"];
    const handler = () => {
      let current = "hero";
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <Nav active={active} />
      <Hero />
      <div style={{ width: "100%", height: 1, background: "var(--border)" }} />
      <AboutMe />
      <div style={{ width: "100%", height: 1, background: "var(--border)" }} />
      <Skills />
      <div style={{ width: "100%", height: 1, background: "var(--border)" }} />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
