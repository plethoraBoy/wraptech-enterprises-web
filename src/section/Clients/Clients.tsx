import { motion } from "framer-motion";
import "./Clients.css";

const ClientsSection = () => {
  const clients = [
    { name: "Apple", logo: "/logos/apple.svg" },
    { name: "Google", logo: "/logos/google.svg" },
    { name: "Amazon", logo: "/logos/amazon.svg" },
    { name: "Microsoft", logo: "/logos/microsoft.svg" },
    { name: "Meta", logo: "/logos/meta.svg" },
    { name: "Tesla", logo: "/logos/tesla.svg" },
    { name: "Netflix", logo: "/logos/netflix.svg" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i:any) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      className="clients-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h2 className="clients-title">Trusted By</h2>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <motion.div
            className="client-card"
            key={index}
            variants={cardVariants}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.07 }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="client-logo"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ClientsSection;
