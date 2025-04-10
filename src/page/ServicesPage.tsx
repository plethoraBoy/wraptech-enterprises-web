import { motion } from "framer-motion";
import "./css/ServicesPage.css";

const servicesData = [
  {
    title: "Security & Surveillance",
    items: [
      { name: "CCTV System", desc: "Real-time video monitoring and recording solutions with remote access and night vision." },
      { name: "Access Control System", desc: "Secure entry systems for employees and visitors using RFID, biometric, or PIN-based authentication." },
      { name: "Biometric & Attendance System", desc: "Track employee attendance with fingerprint, facial recognition, or retina scan systems." },
    ],
  },
  {
    title: "Communication & Infrastructure",
    items: [
      { name: "Epabx", desc: "Advanced telephone intercom systems for internal communication in offices and buildings." },
      { name: "Networking", desc: "Structured cabling, LAN/WAN setup, and enterprise network design with high-speed internet integration." },
      { name: "IT Products", desc: "Supply and support of computers, servers, routers, and software solutions tailored to your business needs." },
    ],
  },
  {
    title: "Automation & Smart Systems",
    items: [
      { name: "Home Automation", desc: "Control lighting, climate, security, and entertainment systems from anywhere using your smartphone." },
      { name: "Smart Locks", desc: "Keyless entry systems with remote locking/unlocking features and visitor logs." },
      { name: "Hotel Automation", desc: "Room energy management, smart check-in/out systems, and service automation for hospitality." },
    ],
  },
  {
    title: "Fire & Safety",
    items: [
      { name: "Fire Alarm System", desc: "Detection and alert systems for smoke, gas, and fire emergencies, with centralized monitoring." },
      { name: "Fire Fighting System", desc: "Sprinkler, hydrant, and suppression systems to control and extinguish fires in critical areas." },
    ],
  },
  {
    title: "Public Communication",
    items: [
      { name: "Public Announcement System", desc: "Audio systems for real-time communication in schools, malls, hospitals, and public spaces." },
      { name: "Video Door Phone", desc: "Visual confirmation and communication with visitors before granting access." },
    ],
  },
  {
    title: "Engineering Solutions",
    items: [
      { name: "MEP Services", desc: "Mechanical, Electrical, and Plumbing design and implementation services for commercial and residential projects." },
    ],
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

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i:number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      <motion.header
        className="services-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h1>Our Professional Services</h1>
        <p>
          We provide cutting-edge technology and smart solutions to keep your
          spaces secure, efficient, and future-ready.
        </p>
      </motion.header>

      {servicesData.map((section, index) => (
        <motion.div
          key={index}
          className="services-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <strong>{item.name}:</strong> {item.desc}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesPage;
