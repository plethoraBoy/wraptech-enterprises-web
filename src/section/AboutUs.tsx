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
            src="/assets/images/aboutus.svg"
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
    WRAPTECH Enterprises is a leading provider of digital, security, and surveillance solutions, delivering high-quality and reliable technology tailored to modern business needs. Our commitment lies in empowering clients with seamless and scalable solutions.
  </p>

          <div className="company-started">
            <h3>How We Started</h3>
            <p>
              WRAPTECH Enterprises was founded in <strong>2018</strong> with a vision to empower businesses with smart digital and security solutions. 
              What began as a small initiative among tech enthusiasts is now a growing brand committed to innovation and customer satisfaction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
