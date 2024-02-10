// Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from './Images/logo.png';
import { List, XLg } from 'react-bootstrap-icons';
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  function handleClick() {
    setShowDropdown(!showDropdown);
  }
  const closeDropdown = () => {
    setShowDropdown(false);
  };


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

        <div className={`menu-toggle ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
          {menuIcon}
        </div>

        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
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
          <li className="dropdown1" onClick={handleClick}  onMouseLeave={closeDropdown} >
          <Link id="donatebtn">Donate</Link>
          {showDropdown && (
            <ul className="dropdown1-content">
                <li>
                  <Link to="/donate/hostel_construction"onClick={closeMenu}>
                    Hostel Construction
                  </Link>
                </li>
                <li>
                  <Link to="/donate/hostel_sustainability" onClick={closeMenu}>
                    Hostel Sustainability
                  </Link>
                </li>
                <li>
                  <Link to="/donate/each" onClick={closeMenu}>
                    Educate a Child
                  </Link>
                </li>
                <li>
                  <Link to="/donate/light" onClick={closeMenu}>
                    LiGHT Donation
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;