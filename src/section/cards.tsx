import { motion } from "framer-motion";
import { FiCpu, FiGlobe, FiZap } from "react-icons/fi";
import "./HorizontalCards.css"; // Make sure to create this CSS file

const cards = [
  {
    title: "Performance",
    description: "Experience lightning-fast speeds and unmatched power with our optimized system.",
    icon: FiZap,
    colorClass: "pink-red-gradient",
  },
  {
    title: "Connectivity",
    description: "Stay seamlessly connected wherever you go with our global support system.",
    icon: FiGlobe,
    colorClass: "blue-cyan-gradient",
  },
  {
    title: "Technology",
    description: "Harness cutting-edge tech engineered to elevate your workflow and creativity and creativity.",
    icon: FiCpu,
    colorClass: "green-emerald-gradient",
  },
  {
    title: "Technology",
    description: "Harness cutting-edge tech engineered to elevate your workflow and creativity .",
    icon: FiCpu,
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
