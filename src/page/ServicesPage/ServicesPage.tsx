import { motion } from "framer-motion";
import styles from "./ServicesPage.module.css";
import {
  FiCamera,
  FiWifi,
  FiSmartphone,
  FiAlertTriangle,
  FiSettings,
  FiVideo,
  FiRadio,
  FiKey,
} from "react-icons/fi";

import { GiElectricalSocket, GiNetworkBars, GiWrench } from "react-icons/gi";
import { MdEngineering, MdLocalFireDepartment, MdLockOutline } from "react-icons/md";
import { BiBuildingHouse, BiIdCard } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { LuHotel } from "react-icons/lu";
import { IoHardwareChipOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const servicesData = [
  {
    title: "Security & Surveillance",
    icon: <FiCamera className={styles.sectionTitleIcon} />,
    items: [
      {
        name: "CCTV System",
        desc: "Real-time video monitoring with AI-powered analytics and cloud storage.",
        icon: <FiVideo />,
      },
      {
        name: "Access Control System",
        desc: "Multi-layered security with facial recognition and mobile integration.",
        icon: <BiIdCard />,
      },
      {
        name: "Biometric & Attendance System",
        desc: "Frictionless attendance tracking with live reporting dashboards.",
        icon: <FiKey />,
      },
      {
        name: "Smart Locks",
        desc: "Advanced keyless entry systems with remote access control.",
        icon: <MdLockOutline  />,
      },
    ],
    color: "#1D4ED8",
    gradient: "linear-gradient(135deg, #1a45c0 0%, #1d4ed8 100%)",
    image: "assets/images/servicepage/Security&Surveillance.svg",
  },
  {
    title: "Network Infrastructure",
    icon: <GiNetworkBars className={styles.sectionTitleIcon} />,
    items: [
      {
        name: "Structured Cabling",
        desc: "Future-proof fiber optic and Cat8 solutions for enterprise networks.",
        icon: <FiWifi />,
      },
      {
        name: "EPABX Systems",
        desc: "VoIP-enabled communication systems with conference capabilities.",
        icon: <IoMdCall />,
      },
      {
        name: "Data Centers",
        desc: "Enterprise-grade network architecture and cloud integration.",
        icon: <GiElectricalSocket />,
      },
      {
        name: "IT Products",
        desc: "High-performance computing solutions and enterprise hardware.",
        icon: <IoHardwareChipOutline  />,
      },
    ],
    color: "#059669",
    gradient: "linear-gradient(135deg, #047857 0%, #059669 100%)",
    image: "assets/images/servicepage/NetworkInfrastructure.svg",
  },
  {
    title: "Smart Automation",
    icon: <FiSmartphone className={styles.sectionTitleIcon} />,
    items: [
      {
        name: "Home Automation",
        desc: "Voice-controlled ecosystems with energy optimization AI.",
        icon: <BiBuildingHouse />,
      },
      {
        name: "Hotel Management",
        desc: "Integrated guest experience systems with IoT sensors.",
        icon: <FiSettings />,
      },
      {
        name: "Industrial IoT",
        desc: "Production line automation with real-time monitoring.",
        icon: <MdEngineering />,
      },
      {
        name: "Hotel Automation",
        desc: "Smart room control systems for hospitality industry.",
        icon: <LuHotel  />,
      },
    ],
    color: "#d97706",
    gradient: "linear-gradient(135deg, #b45309 0%, #d97706 100%)",
    image: "assets/images/servicepage/SmartAutomation.jpg",
  },
  {
    title: "Safety Solutions",
    icon: <MdLocalFireDepartment className={styles.sectionTitleIcon} />,
    items: [
      {
        name: "Fire Alarm System",
        desc: "Multi-sensor alarms with emergency response integration.",
        icon: <AiOutlineFire  />,
      },
      {
        name: "Fire Fighting System",
        desc: "Automated sprinkler and gas-based fire control systems.",
        icon: <FiAlertTriangle />,
      },
      {
        name: "Emergency Lighting",
        desc: "Smart exit path systems with backup power solutions.",
        icon: <FiRadio />,
      },
      {
        name: "Public Announcement System",
        desc: "Crisis management and emergency broadcast systems.",
        icon: <HiOutlineMegaphone  />,
      },
    ],
    color: "#dc2626",
    gradient: "linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)",
    image: "assets/images/servicepage/SafetySolutions.svg",
  },
  {
    title: "Engineering Solutions",
    icon: <MdEngineering className={styles.sectionTitleIcon} />,
    items: [
      {
        name: "MEP Services",
        desc: "Integrated mechanical, electrical, and plumbing solutions.",
        icon: <GiWrench />,
      },
      {
        name: "Video Door Phone",
        desc: "Smart entry systems with visual verification.",
        icon: <FiVideo />,
      },
    ],
    color: "#4f46e5",
    gradient: "linear-gradient(135deg, #4338ca 0%, #4f46e5 100%)",
    image: "assets/images/servicepage/EngineeringSolutions.svg",
  },
];
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "backOut" },
  },
};

const ServicesPage = () => {
  return (
    <div className={styles.servicesPageContainer}>
      {/* Hero Section */}
      <motion.header
        className={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Smart Solutions for
            <br />
            <span className={styles.highlight}>Modern Infrastructure</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={styles.heroDescription}
          >
            Integrating cutting-edge technology to create safer, smarter, and
            more efficient environments
          </motion.p>
        </div>
        <div className={styles.heroIllustration}>
          {/* <img
            src="/images/smart-city.svg"
            alt="Smart city illustration"
            className={styles.heroImage}
          /> */}
        </div>
      </motion.header>

      {/* Services Sections */}
      <main className={styles.mainContent}>
        {servicesData.map((section, index) => (
          <motion.section
            key={index}
            className={`${styles.serviceSection} ${
              index % 2 === 0 ? styles.even : styles.odd
            }`}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.sectionVisual}>
              <motion.img
                src={section.image}
                alt={section.title}
                className={styles.sectionImage}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div
                className={styles.sectionBadge}
                style={{
                  background: `${section.gradient}`,
                }}
              >
                {section.icon}
                <h3>{section.title}</h3>
              </div>
            </div>

            <div className={styles.sectionContent}>
              <div className={styles.serviceGrid}>
                {section.items.map((item, i) => (
                  <motion.article
                    key={i}
                    className={styles.serviceCard}
                    variants={cardVariants}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div
                      className={styles.cardIcon}
                      style={{ color: section.color }}
                    >
                      {item.icon}
                    </div>
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>
        ))}
      </main>

      {/* CTA Section */}
      <motion.section
        className={styles.ctaSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.ctaContent}>
          <h2>Ready to Transform Your Space?</h2>
          <p>Schedule a free consultation with our solutions experts</p>
          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
