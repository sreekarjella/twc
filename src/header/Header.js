import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import { Col, Container, Row } from "react-bootstrap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navigateHome = () => {
    window.location.href = '/'
  }

  return (
    // <header className="header">
    // <div className="logo" onClick={navigateHome}>
    //   <img src="/images/logo.png" alt="TWC Logo" />
    //   <h2><span>TWC Architects</span></h2>
    // </div>
    <Container>
      <Row>
        <Col>
          <img src="/images/logo.png" alt="TWC Logo" onClick={navigateHome} />
        </Col>
        <Col>
          <h1 style={{textAlign:"center"}}>TWC Architects</h1>
        </Col>
      </Row>
    </Container>
  );

  {/* <nav className="nav-links">
        <Link to="/architecture">Architecture</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav> */}

  {/* Menu Toggle (Hamburger or Close (X)) */ }
  {/* <div className="menu-toggle">
        {isOpen ? (
          <div className="close-icon" onClick={toggleMenu}>X</div> // Make sure the onClick is attached here
        ) : (
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}
      </div> */}

  {/* Fullscreen overlay menu for smaller devices */ }
  {/* <div className={`overlay ${isOpen ? "open" : ""}`}>
        <nav className="overlay-menu">
          <Link to="/architecture" onClick={toggleMenu}>Architecture</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </nav>
      </div> */}
  {/* </header> */ }
}

export default Header;
