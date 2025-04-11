import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const target = document.getElementById(elementId);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

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
            <a href="/" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <Link to="/services" onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li>
            <a href="#clients" onClick={handleLinkClick}>
              Clients
            </a>
          </li>
          {/* Contact Button in Mobile */}
          <li className="mobile-only">
            <Link to="/contact" onClick={handleLinkClick} className="button">
              Contact
            </Link>
          </li>
        </ul>

        {/* Contact Button for Desktop */}
        <div className="desktop-only">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="button"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
