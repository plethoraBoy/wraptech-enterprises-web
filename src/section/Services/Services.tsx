import { motion } from "framer-motion";
import "./Service.css";

import ServicesCard from "../ServicesCard.js";
import { FaBullhorn, FaCamera, FaFingerprint, FaFireExtinguisher, FaLaptop, FaLock, FaVideo } from "react-icons/fa6";
import { AiFillAlert } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { GiWrench, GiHotMeal, GiCardExchange } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { RiWifiLine } from "react-icons/ri";

const ServicesSection = () => {
  const services = [
    { name: "CCTV System", icon: <FaCamera size={40} /> },
    { name: "Epabx", icon: <IoMdHome size={40} /> },
    { name: "Networking", icon: <RiWifiLine size={40} /> },
    { name: "MEP", icon: <GiWrench size={40} /> },
    { name: "Smart Locks", icon: <FaLock size={40} /> },
    { name: "IT Products", icon: <FaLaptop size={40} /> },
    { name: "Home Automation", icon: <FaHome size={40} /> },
    { name: "Fire Alarm System", icon: <AiFillAlert size={40} /> },
    { name: "Fire Fighting System", icon: <FaFireExtinguisher size={40} /> },
    { name: "Hotel Automation", icon: <GiHotMeal size={40} /> },
    { name: "Video Door Phone", icon: <FaVideo size={40} /> },
    { name: "Biometric & Attendance System", icon: <FaFingerprint size={40} /> },
    { name: "Access Control System", icon: <GiCardExchange size={40} /> },
    { name: "Public Announcement System", icon: <FaBullhorn size={40} /> }
  ];

  return (
    <section className="services-section">
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
<h2>
Our Services
</h2>      </motion.div>

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
            We provide a wide range of cutting-edge solutions designed to improve
            security, automation, and connectivity in modern living and working
            environments.
          </p>
          <button className="services-button">Explore Services</button>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-name">{service.name}</div>
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
  );
};

export default ServicesSection;
