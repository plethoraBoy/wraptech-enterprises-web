import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'
import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const target = document.getElementById(elementId);
      if (target) {
        // Scroll after a short delay to make sure the DOM is ready
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="company-logo">
          <img
            src="/assets/navbar/logotitle.png"
            alt="Logo-Title"
            className="logo-title"
          />

          <img src="/assets/navbar/logo.png" alt="Logo" className="logo-img" />
        </div>

        {/* Hamburger for mobile */}
        <input
          className="checkbox"
          type="checkbox"
          id="toggle-menu"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <label htmlFor="toggle-menu" className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </label>

        {/* Nav Items */}
        <ul className={`menu-items ${isOpen ? "open" : ""}`}>
          <li>
            {" "}
            {/* <Link to="/" >
              Home
            </Link> */}
            <a href="/">Home</a>

          </li>
          <li>
          <Link to="/#about">About</Link>

          </li>
          <li>
          <Link to="/services" >Services</Link>
          </li>
          <li>
            <Link to="/#clients">Clients</Link>
          </li>
          <li>
          <Link to="/contact" >Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
