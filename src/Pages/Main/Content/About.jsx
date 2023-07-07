import React from "react";
import { Timeline } from "../../../components/about-timeline/Timeline";
import { useInView } from "react-intersection-observer";
import { AboutItem } from "../../../components/AboutItem";
import { Blender } from "../../../assets/icons/about/Blender";
import { Figma } from "../../../assets/icons/about/Figma";
import { Vscode } from "../../../assets/icons/about/Vscode";

export const About = () => {
  const {
    ref: myRef,
    inView: elementIsVisible,
    entry,
  } = useInView({ rootMargin: "-400px 0px -150px 0px" });

  return (
    <section className="about" id="about">
      <div ref={myRef} className="about-container">
        <Timeline />
        <div
          className={`${"about-description"} ${
            elementIsVisible ? "about-show" : "about-hide"
          }`}
        >
          <h2 className="section-title">About me 💡</h2>

          <p>
            Hello, I am a front-end web developer with proficiency in HTML, CSS,
            JavaScript, Sass and React. Also I have small experience in jQuery
            and Blender.
            <br />
            <br />I have a passion for designing and creating responsive
            websites and applications. I enjoy challenging myself to learn new
            technologies and techniques to stay current in the ever-evolving
            world of web development.
          </p>

          <div className="about-item-container">
            <AboutItem img={<Vscode />} text="VS Code" />
            <AboutItem img={<Figma />} text="Figma" />
            <AboutItem img={<Blender />} text="Blender" />
          </div>
        </div>
      </div>
    </section>
  );
};
