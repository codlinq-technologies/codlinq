import { useState, useEffect } from "react";
import CodlinqLoader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
// import Clients from "./components/Clients";

import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Ecommerce from "./sections/Ecommerce";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If everything is already fully loaded
    if (document.readyState === "complete") {
      setTimeout(() => setLoading(true), 1000);
      return;
    }

    const handleLoad = () => {
      // Delay before hiding loader (optional)
      setTimeout(() => setLoading(true), 1000);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 1800); // Loader for 1.8s
  //   return () => clearTimeout(timer);
  // }, []);

  if (!loading) return <CodlinqLoader />;

  return (
    <div className="font-[Montserrat] bg-white dark:bg-[#2c2c2c] text-gray-900 dark:text-white transition-colors duration-300 scroll-smooth">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Home />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="testimonials">
                  <Testimonials />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />
          <Route path="/e-commerce" element={<Ecommerce />} />
        </Routes>
      </BrowserRouter>
      <WhatsAppButton />
    </div>
  );
}

export default App;
