import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
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
        <NavLink to="/Reflexologie" className="navLink" onClick={closeMenu}>
          Reflexologie
        </NavLink>
        <NavLink to="/Contact" className="navLink" onClick={closeMenu}>
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
