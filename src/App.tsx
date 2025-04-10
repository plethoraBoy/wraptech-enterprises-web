// src/App.tsx
import "./App.css";
import Hero from "./section/Hero/Hero";
import AboutUs from "./section/AboutUs";
import Navbar from "./components/Navbar";
import Services from "./section/Services/Services";
import Clients from "./section/Clients/Clients";
import Footer from "./section/Footer/Footer";
import HorizontalCards from "./section/cards";
import ServicesPage from "./page/ServicesPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Clients />
      <HorizontalCards />
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
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
