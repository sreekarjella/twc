import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'; // Importing the styles

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.jpg" alt="TWC Logo" />
        <span>TWC Architects</span>
      </div>
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Architecture</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;
