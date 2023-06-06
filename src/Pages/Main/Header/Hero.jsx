import React, { useEffect, useContext } from "react";
import { AppContext } from "../../../App";
import { Languages } from "../../../components/Languages";
import icons from "../../../assets/index";
import { useInView } from "react-intersection-observer";

export const Hero = () => {
  const { setIsMobile } = useContext(AppContext);
  const {
    ref: heroRef,
    inView: heroIsVisible,
    entry,
  } = useInView({
    rootMargin: "-350px 0px -350px 0px",
  });
  const handleResize = () => {
    setIsMobile(false);
    window.innerWidth < 720 && setIsMobile(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <section ref={heroRef} className="hero" id="hero">
      <div className="hero-avatar">
        <img
          className={`${"avatar"} ${
            heroIsVisible ? "avatar-show" : "avatar-hide"
          }`}
          src={icons.avatar}
          alt="picture of me"
        />
      </div>
      <div className="hero-text">
        <h1>Frontend Developer</h1>
        <p>
          Hi, I'm Michal Pinkava, 19 years old FrontEnd developer from Czech
          Republic 🇨🇿
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
