import React from "react";
import Hero from "../Components/Hero";
import { ProjectCards } from "../Data/Data";
import ProjectCard from "../Components/ProjectCard";
import { ExperienceCard } from "../Data/Data";
import About from "../Components/About";
import Experience from "../Components/Experience";
import { motion } from "framer-motion";
import ScrollToTopBtn from "../Components/ScrollToTopBtn";

function Home() {
  const onCardClick = (card) => {
    if (card.link) {
      window.open(card.link, "_blank", "noopener noreferrer");
    }
  };
  return (
    <main className="bg-[#2B2B2B] min-h-screen">
      <Hero />
      <motion.section>
        <h1 className="text-2xl lg:text-[2rem] text-center text-[#FFF] font-bold">
          Projects
        </h1>
        <ProjectCard data={ProjectCards} onCardClick={onCardClick} />
      </motion.section>
      <section id="about" className="lg:scroll-mt-36 scroll-mt-20 mt-7">
        <About />
      </section>

      <section id="experience" className="lg:scroll-mt-36 scroll-mt-20 mt-7">
        <Experience data={ExperienceCard} />
      </section>
      <ScrollToTopBtn />
    </main>
  );
}

export default Home;
