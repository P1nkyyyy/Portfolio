import React, { useContext, useEffect, useState } from "react";
import { Menu } from "./Menu";
import { AppContext } from "../App";
import { Turn as Hamburger } from "hamburger-react";

export const Navbar = () => {
  const { setIsOpen, isOpen, checked } = useContext(AppContext);

  return (
    <nav className="navigation" id="navigation">
      <div className="nav-left">
        <h3>Pinkyyy</h3>
      </div>
      <button className="mobile-menu-btn">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color={checked ? "white" : "back"}
        />
      </button>
      <div className="nav-right">
        <Menu />
      </div>
    </nav>
  );
};
