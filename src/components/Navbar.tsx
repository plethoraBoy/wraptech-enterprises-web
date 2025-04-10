import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
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
            <Link to="/" >
              Home
            </Link>
          </li>
          <li>
            <a href="#" >About</a>
          </li>
          <li>
          <Link to="/services" >Services</Link>
          </li>
          <li>
            <a href="#">Clients</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
