import React, { useRef } from "react";
import NeuroBackground from "./Components/NeuroBackground";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <NeuroBackground />
      <Navbar scrollToSection={scrollToSection} portfolioRef={portfolioRef} aboutRef={aboutRef} contactRef={contactRef} />
      <Hero />
      <section ref={portfolioRef}>
        <Portfolio />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
