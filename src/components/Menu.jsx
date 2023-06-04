import React, { useContext } from "react";
import { AppContext } from "../App";
import Scroll from "react-scroll-to-element";

export const Menu = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);

  const handleClick = () => setIsOpen((current) => !current);

  return (
    <ul className={`menu ${isOpen ? "mobile-menu" : ""} `}>
      <li>
        <a href="#">
          <Scroll type="id" element="hero" offset={-100}>
            Home
          </Scroll>
        </a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};
/* <Scroll type="id" element="about" offset={-50}>
            About
          </Scroll>*/
