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
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.add("dark");
      }
    }
  };

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

  return (
    <div className={`${"app"} `}>
      <AppContext.Provider
        value={{
          isMobile,
          setIsMobile,
          isOpen,
          setIsOpen,
          toggleDarkMode,
          checked,
          handleChange,
        }}
      >
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
    </div>
  );
}

export default App;
