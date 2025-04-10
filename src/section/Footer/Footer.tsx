import { motion } from "framer-motion";
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
        {/* Company Name / Logo */}
        <motion.div
          className="footer-brand"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2>SecureTech</h2>
          <p>Innovative Security & Automation Solutions.</p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div className="footer-links">
          {["Home", "Services", "Clients", "Contact"].map((link, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.1, color: "#fff" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div className="footer-socials">
          {["facebook", "instagram", "linkedin"].map((platform, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <img src={`/icons/${platform}.svg`} alt={platform} />
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
        <p>&copy; {new Date().getFullYear()} SecureTech. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default FooterSection;
