import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll handling based on location hash
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const target = document.getElementById(elementId);
      if (target) {
        // Scroll to the target element smoothly
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // Ensure the page scrolls to the top when there's no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
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
            <a href="/" onClick={handleLinkClick}>Home</a>
          </li>
          <li>
            <Link to="/#about" onClick={handleLinkClick}>About</Link>
          </li>
          <li>
            <Link to="/services" onClick={handleLinkClick}>Services</Link>
          </li>
          <li>
            <Link to="/#clients" onClick={handleLinkClick}>Clients</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
