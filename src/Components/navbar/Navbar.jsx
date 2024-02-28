// Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "./Images/logo.png";
import { List, XLg } from "react-bootstrap-icons";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };
  const menuIcon = showMenu ? (
    <XLg className="HiMenu" onClick={toggleMenu} />
  ) : (
    <List className="HiMenu" onClick={toggleMenu} />
  );

  return (
    <>
      <nav>
        <Link to="/" onClick={closeMenu} className="logo">
          <img src={LOGO} alt="GYWS_Logo" />
          <div>Gopali Youth Welfare Society</div>
        </Link>

        <div
          className={`menu-toggle ${showMenu ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {menuIcon}
        </div>

        <ul className={`nav-links ${showMenu ? "show" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            <li>Home</li>
          </Link>
          <Link to="/about" onClick={closeMenu}>
            <li>About Us</li>
          </Link>
          <Link to="/jvm" onClick={closeMenu}>
            <li>Initiatives</li>
          </Link>
          <Link to="/media" onClick={closeMenu}>
            <li>Media</li>
          </Link>
          <Link to="/member" onClick={closeMenu}>
            <li>Members</li>
          </Link>
          <li>
            <Link to="/donate" id="donatebtn"  onClick={closeMenu}>
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
