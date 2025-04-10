// src/App.tsx
import "./App.css";
import Hero from "./section/Hero/Hero";
import AboutUs from "./section/AboutUs";
import Navbar from "./components/Navbar";
import Services from "./section/Services/Services";
import Clients from "./section/Clients/Clients";
import Footer from "./section/Footer/Footer";
import ServicesPage from "./page/ServicesPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactPage from "./page/ContactPage";
import { useEffect, useRef, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

function HomePage() {
  const scrollBtnRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Clients />

      <button
        ref={scrollBtnRef}
        onClick={scrollToTop}
        className="scroll-up"
        aria-label="Scroll to top"
        style={{ display: isVisible ? "flex" : "none" }}
      >
        <FiChevronUp size={28} />
      </button>
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
