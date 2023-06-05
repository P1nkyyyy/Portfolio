import React, { useContext } from "react";
import Computer from "../../../assets/about-images/computer-two.jpg";
import { useInView } from "react-intersection-observer";
import { AppContext } from "../../../App";
export const About = () => {
  const {
    ref: myRef,
    inView: elementIsVisible,
    entry,
  } = useInView({ rootMargin: "-400px 0px -150px 0px" });
  const { isMobile } = useContext(AppContext);

  const text = ``;

  return (
    <section className="about" id="about">
      <div ref={myRef} className="about-container">
        <img src={Computer} alt="" />
        <div
          className={`${"about-description"} ${
            elementIsVisible ? "about-show" : "about-hide"
          }`}
        >
          <h2 className="section-title">About me 💡</h2>
          <p>
            Hello, I am a front-end web developer with proficiency in HTML, CSS,
            JavaScript, Sass and React. Also I have small experience in jQuery
            and Blender. I have a passion for designing and creating responsive
            websites and applications. I enjoy challenging myself to learn new
            technologies and techniques to stay current in the ever-evolving
            world of web development.
          </p>
        </div>
      </div>
    </section>
  );
};
