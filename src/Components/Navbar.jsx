import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // Close the menu after clicking a link
    }
  };

  return (
    <nav className="navbar">
      <a onClick={() => scrollToSection("home")}>
        <img className="logo" src="Logo.png" alt="logo" />
      </a>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a onClick={() => scrollToSection("home")}>HOME</a>
        <a onClick={() => scrollToSection("about")}>ABOUT</a>
        <a onClick={() => scrollToSection("services")}>SERVICES</a>
        <a onClick={() => scrollToSection("testimonials")}>TESTIMONIALS</a>
        <a onClick={() => scrollToSection("contact")}>CONTACT</a>
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
