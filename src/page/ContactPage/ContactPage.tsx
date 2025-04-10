import { motion } from "framer-motion";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Importing React Icons

const ContactPage = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Section */}
      <motion.div
        className="contact-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="logo">
          <h1>
            WRAPTECH
            <br />
            ENTERPRISES
          </h1>
          <p className="tagline">Explore the Technology</p>
        </div>
        <div className="info">
          <h2>DCRUZ ANTONY</h2>
          <p className="position">Managing Director</p>

          <div className="info-group">
            <FaPhone className="icon" size={12} />
            <span>+91 91769 19024</span>
          </div>
          <div className="info-group">
            <FaEnvelope className="icon" />
            <span>
              wraptech1@outlook.com
              <br />
              techwrap1@gmail.com
            </span>
          </div>
          <div className="info-group">
            <FaMapMarkerAlt className="icon" />
            <span>
              No.15, Annai Mary 1st Street,
              <br />
              Kamarajapuram, Anakaputhur,
              <br />
              Chennai - 600 070.
            </span>
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="contact-right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <form className="contact-form">
          <h3>Get in Touch</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button"
            type="submit"
          >
            Send Message
          </motion.button>
        </form>

        <div className="map-container">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Anakaputhur,+Chennai&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
