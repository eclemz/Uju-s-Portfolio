import Reaxt, { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Hamburger from "./Components/Hamburger";
import Testimonial from "./Components/Testimonial";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import ScrollToTop from "./Components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import { TestimonialCard } from "./Data/Data";
import Footer from "./Components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#FCFCFC]  dark:bg-[#2B2B2B] min-h-screen transition-colors duration-300">
        <Dashboard onHamburgerClick={() => setMenuOpen(true)} />
        <Hamburger open={menuOpen} onClose={() => setMenuOpen(false)} />
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </AnimatePresence>
        <section id="testimonial" className="lg:scroll-mt-36 scroll-mt-20 mt-7">
          <Testimonial data={TestimonialCard} />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
