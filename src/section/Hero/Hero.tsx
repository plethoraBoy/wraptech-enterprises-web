import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id='hero' className="hero-section">
      {/* Decorative Squares */}
      <div className="hero-square square-one" />
      <div className="hero-square square-two" />
      <div className="hero-square square-three" />
      <div className="hero-square square-four" />

      {/* Hero Content */}
      <div className="hero-background-wrapper">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Explore the Technology</h1>
          <p>Uncover the power of cutting-edge technology designed to elevate innovation and drive smarter outcomes.</p>
          <motion.button
            className="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/assets/navbar/product-development-concept-illustration.png" alt="AI Analytics Visual" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
