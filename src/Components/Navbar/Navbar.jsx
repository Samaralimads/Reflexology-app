import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to handle dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navLogo">
        <img src="addimg.png" alt="Logo" className="navLogo" />
        <h3 className="logoName">Dominique Martinie</h3>
      </Link>
      <div className={`navLinks ${isMenuOpen ? "open" : ""}`}>
        <NavLink to="/" className="navLink" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" className="navLink" onClick={closeMenu}>
          About Me
        </NavLink>

        {/* Reflexologie Dropdown */}
        <div
          className="navLink dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="navLink">Reflexologie</span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  to="/benefices"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Les Benefices
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/soins"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Les Soins
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/avis"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Avis
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <NavLink to="/tarifs" className="navLink" onClick={closeMenu}>
          Tarifs
        </NavLink>

        <NavLink to="/contact" className="navLink" onClick={closeMenu}>
          Contact
        </NavLink>
      </div>
      <div
        className={`burger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <img className="menu-icon" src="menu-bar.png" alt="Menu" />
      </div>
    </nav>
  );
}

export default Navbar;
