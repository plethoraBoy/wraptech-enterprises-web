import { motion } from "framer-motion";
import "./HorizontalCards.css"; // Make sure to create this CSS file

import { FiTruck, FiTool, FiSettings } from "react-icons/fi"; // Use icons representing the new categories

const cards = [
  {
    title: "Supply",
    description: "Reliable and timely delivery of advanced systems and components tailored to your needs.",
    icon: FiTruck,
    colorClass: "pink-red-gradient",
  },
  {
    title: "Installation",
    description: "Professional installation ensuring your systems are set up with precision and efficiency.",
    icon: FiTool,
    colorClass: "blue-cyan-gradient",
  },
  {
    title: "Maintenance",
    description: "Ongoing support and regular servicing to keep your systems running at peak performance.",
    icon: FiSettings,
    colorClass: "green-emerald-gradient",
  },
];


const HorizontalCards = () => {
  return (
    <section className="cards-section">
      <div className="cards-container">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`card group ${card.colorClass}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-icon">
              <card.icon size={24} />
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalCards;
