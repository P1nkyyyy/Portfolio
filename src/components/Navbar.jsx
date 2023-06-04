import React, { useContext } from "react";
import { Menu } from "./Menu";
import { AppContext } from "../App";
import { Turn as Hamburger } from "hamburger-react";

export const Navbar = () => {
  const { setIsOpen } = useContext(AppContext);

  const handleClick = () => setIsOpen((current) => !current);

  return (
    <nav className="navigation" id="navigation">
      <div className="nav-left">
        <h3>Pinkyyy</h3>
      </div>
      <button onClick={handleClick} className="mobile-menu-btn">
        <Hamburger />
      </button>
      <div className="nav-right">
        <Menu />
      </div>
    </nav>
  );
};
