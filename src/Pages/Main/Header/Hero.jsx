import React, { useEffect, useContext } from "react";
import { AppContext } from "../../../App";
import { Languages } from "../../../components/Languages";
import icons from "../../../assets/index";

export const Hero = () => {
  const { isMobile, setIsMobile } = useContext(AppContext);

  const handleResize = () => {
    setIsMobile(false);
    window.innerWidth < 720 && setIsMobile(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <section className="hero" id="hero">
      <div className="hero-avatar">
        <img className="avatar" src={icons.avatar} alt="picture of me" />
      </div>
      <div className="hero-text">
        <h1>Frontend Developer</h1>
        <p>
          Hi, I'm Michal Pinkava, 19 years old self-taught FrontEnd developer
          from Czech Republic 🇨🇿
        </p>
        <div className="github-container">
          <a href="https://github.com/P1nkyyyy" target="_blank">
            <img src={icons.github} alt="github logo" />
          </a>
        </div>
        <div className="languages-container">
          <span className="language-text">Languages</span>
          <div className="icons">
            <Languages source={icons.html} alt="Html" />
            <Languages source={icons.css} alt="Css" />
            <Languages source={icons.js} alt="JavaScript" />
            <Languages source={icons.jQuery} alt="jQuery" />
            <Languages source={icons.sass} alt="Sass" />
            <Languages source={icons.react} alt="React" />
          </div>
        </div>
      </div>
    </section>
  );
};
