import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../../../App";
import { Languages } from "../../../components/Languages";
import icons from "../../../assets/index";
import {
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  JQueryIcon,
  ReactIcon,
  SassIcon,
} from "../../../assets/icons/LanguagesIndex";
import { useInView } from "react-intersection-observer";
import { Github } from "../../../assets/Github";
import { Blurhash } from "react-blurhash";
import { Balancer } from "react-wrap-balancer";

export const Hero = () => {
  const { setIsMobile } = useContext(AppContext);

  const {
    ref: heroRef,
    inView: heroIsVisible,
    entry,
  } = useInView({
    rootMargin: "-100px 0px -350px 0px",
  });

  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = icons.avatar;
  }, [icons.avatar]);

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
        {!imageLoaded && (
          <Blurhash
            hash="L68En,s;5gD*_KjJD+RjNEkBxuoe"
            width={324}
            height={302}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}
        {imageLoaded && (
          <img
            className={`${"avatar"} ${
              heroIsVisible ? "avatar-show" : "avatar-hide"
            }`}
            src={icons.avatar}
            alt="picture of me"
            loading="lazy"
          />
        )}
      </div>
      <div className="hero-text">
        <h1>Frontend Developer</h1>
        <Balancer className="balancer">
          Hi, I'm Michal Pinkava, 19 years old FrontEnd developer from Czech
          Republic 🇨🇿
        </Balancer>
        <div className="github-container">
          <a href="https://github.com/P1nkyyyy" target="_blank">
            <Github />
          </a>
        </div>
        <div className="languages-container">
          <span className="language-text">Languages</span>
          <div className="icons">
            <Languages source={<HtmlIcon />} alt="Html" />
            <Languages source={<CssIcon />} alt="Css" />
            <Languages source={<JavaScriptIcon />} alt="JavaScript" />
            <Languages source={<JQueryIcon />} alt="jQuery" />
            <Languages source={<ReactIcon />} alt="Sass" />
            <Languages source={<SassIcon />} alt="React" />
          </div>
        </div>
      </div>
    </section>
  );
};
