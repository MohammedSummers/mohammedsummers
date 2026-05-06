import { useState, useRef } from "react";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import "./index.css";

const PAGES = {
  home: HomePage,
  about: AboutPage,
  experience: ExperiencePage,
  projects: ProjectsPage,
  contact: ContactPage,
};

export default function App() {
  const [page, setPage] = useState("home");
  const [lightMode, setLightMode] = useState(false);
  const containerRef = useRef(null);

  const nav = (p) => {
    setPage(p);
    if (containerRef.current) containerRef.current.scrollTop = 0;
  };

  const toggleLight = () => setLightMode((l) => !l);

  const PageComponent = PAGES[page];

  return (
    <div
      className={`site${lightMode ? " light" : ""}`}
      ref={containerRef}
      style={{ height: "100vh", overflowY: "auto", overflowX: "hidden" }}
    >
      <Nav page={page} nav={nav} lightMode={lightMode} toggleLight={toggleLight} />
      <PageComponent nav={nav} />
    </div>
  );
}
