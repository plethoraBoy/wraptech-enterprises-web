import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Footer.css";

const FooterSection = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="footer-container">
        {/* Brand */}
        <motion.div
          className="footer-brand"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2>WRAPTECH Enterprises</h2>
          <p>Innovative Security & Automation Solutions.</p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div className="footer-links">
          <motion.a
            href="/"
            whileHover={{ scale: 1.1, color: "#000" }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            Home
          </motion.a>
          <Link to="/services" className="footer-link">Services</Link>
          {/* <motion.a
            href="/#clients"
            whileHover={{ scale: 1.1, color: "#000" }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            Clients
          </motion.a> */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1, color: "#000" }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div className="footer-socials">
          {["facebook", "instagram", "linkedin"].map((platform, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={`assets/images/footer/${platform}.png`}
                alt={platform}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>&copy; {new Date().getFullYear()} WRAPTECH Enterprises. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default FooterSection;
