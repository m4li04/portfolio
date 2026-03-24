import { useCallback, useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Toast from "./components/Toast";
import {
  ABOUT,
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  FOOTER,
  HERO,
  NAV_LINKS,
  PROJECTS,
  PROFILE_PHOTO,
  SKILL_GROUPS,
  TECH_STACK,
} from "./data/portfolioData";
import { useReveal } from "./hooks/useReveal";
import { GLOBAL_CSS } from "./styles/globalCss";

export default function App() {
  const [toast, setToast] = useState({ show: false, icon: "", text: "" });
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    if (document.getElementById("pf-global-css")) return;

    const style = document.createElement("style");
    style.id = "pf-global-css";
    style.textContent = GLOBAL_CSS;
    document.head.appendChild(style);

    return () => {
      document.getElementById("pf-global-css")?.remove();
    };
  }, []);

  useReveal();

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const showToast = useCallback((icon, text) => {
    setToast({ show: true, icon, text });
    setTimeout(() => setToast(currentToast => ({ ...currentToast, show: false })), 4000);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme => (currentTheme === "dark" ? "light" : "dark"));
  }, []);

  return (
    <>
      <Navbar links={NAV_LINKS} theme={theme} toggleTheme={toggleTheme} photoSrc={PROFILE_PHOTO} />
      <Hero hero={HERO} photoSrc={PROFILE_PHOTO} />
      <About about={ABOUT} techStack={TECH_STACK} />
      <Skills skillGroups={SKILL_GROUPS} />
      <Projects projects={PROJECTS} />
      <Experience experience={EXPERIENCE} education={EDUCATION} />
      <Contact contact={CONTACT} showToast={showToast} />
      <Footer footer={FOOTER} />
      <Toast toast={toast} />
    </>
  );
}
