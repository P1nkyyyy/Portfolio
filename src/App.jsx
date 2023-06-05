import { useState, createContext, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./Pages/Main/Header/Hero";
import { About } from "./Pages/Main/Content/About";
import { Projects } from "./Pages/Main/Content/Projects";
import { Experience } from "./Pages/Main/Content/Experience";
import { Contact } from "./Pages/Main/Content/Contact";
import { Footer } from "./Pages/Main/Footer/Footer";
import "./style.css";

export const AppContext = createContext();

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 720;
        if (ismobile !== isMobile) setIsMobile(ismobile);
        if (ismobile < isMobile) setIsOpen(false);
      },
      false
    );
  }, [isMobile, isOpen]);

  /* TODO */
  // fotku změnit
  // video na fullscreen
  // video proklik na muj kanal (podbody)
  // about text oddělit na dva odstavce

  return (
    <>
      <AppContext.Provider value={{ isMobile, setIsMobile, isOpen, setIsOpen }}>
        <Navbar />
        <main className="main">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;