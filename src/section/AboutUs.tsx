import './AboutUs.css';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Side - Card */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src="/assets/navbar/product-development-concept-illustration.png"
            alt="Team or concept"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2>About Us</h2>
          <p>
            We are passionate developers building cool stuff with React and Vite. Our mission is to deliver fast, modern web applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
