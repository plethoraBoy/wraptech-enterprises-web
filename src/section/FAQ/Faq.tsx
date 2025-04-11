import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide CCTV installation, home automation, IT support, and more, customized for your needs.',
  },
  {
    question: 'Do you provide onsite support?',
    answer:
      'Yes, we offer onsite diagnostics, installations, and system upgrades to ensure smooth operation.',
  },
  {
    question: 'How can I get a quote?',
    answer:
      'Contact us via our website or phone. Our team will assess your needs and provide a personalized quote.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index:any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggle(index)}>
            {faq.question}
            <span className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>
              ▼
            </span>
          </div>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="faq-answer">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
