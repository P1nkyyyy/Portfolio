import React, { useContext } from "react";
import { AppContext } from "../App";
import Scroll from "react-scroll-to-element";

export const Menu = () => {
  const { isOpen, setIsOpen, isMobile, toggleDarkMode, checked, handleChange } =
    useContext(AppContext);

  const handleClick = () => setIsOpen((current) => !current);

  return (
    <ul className={`menu ${isOpen ? "mobile-menu" : ""} `}>
      <li>
        <a href="#" onClick={isMobile && handleClick}>
          <Scroll type="id" element="hero" offset={-100}>
            Home
          </Scroll>
        </a>
      </li>
      <li>
        <a href="#about" onClick={isMobile && handleClick}>
          About
        </a>
      </li>
      <li>
        <a href="#projects" onClick={isMobile && handleClick}>
          Projects
        </a>
      </li>
      <li>
        <a href="#experience" onClick={isMobile && handleClick}>
          Experience
        </a>
      </li>
      <li>
        <a href="#contact" onClick={isMobile && handleClick}>
          Contact
        </a>
      </li>
      <label className={`${"switch"} `} htmlFor="darkmode-button">
        <input
          id="darkmode-button"
          onClick={toggleDarkMode}
          type="checkbox"
          onChange={handleChange}
          checked={
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? !checked
              : checked
          }
        />
        <span className="slider"></span>
      </label>
    </ul>
  );
};
