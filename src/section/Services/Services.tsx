import { motion } from "framer-motion";
import "./Service.css";
import Carousel from "./Cara.js";
import ServicesCard from "../ServicesCard.js";

const ServicesSection = () => {
  const servicesColumn1 = [
    "CCTV System",
    "Epabx",
    "Networking",
    "MEP",
    "Smart Locks",
    "IT Products",
    "Home Automation",
  ];

  const servicesColumn2 = [
    "Fire Alarm System",
    "Fire Fighting System",
    "Hotel Automation",
    "Video Door Phone",
    "Biometric & Attendance System",
    "Access Control System",
    "Public Announcement System",
  ];

  const allServices = [...servicesColumn1, ...servicesColumn2];

  return (
    <>
      <section className="services-section">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.div>

        <div className="services-wrapper">
          {/* Text Section */}
          <motion.div
            className="services-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="services-subtitle">What We Offer</span>
            <h2 className="services-title">Our Exceptional Services</h2>
            <p className="services-description">
              We provide a wide range of cutting-edge solutions designed to
              improve security, automation, and connectivity in modern living
              and working environments.
            </p>
            <button className="services-button">Explore Services</button>
          </motion.div>

          {/* Bento Grid */}
          <motion.div
            className="services-grid"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {service}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Services Card */}
        <div className="services-card-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ServicesCard />
          </motion.div>
        </div>
      </section>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Carousel />
      </motion.div>
    </>
  );
};

export default ServicesSection;
