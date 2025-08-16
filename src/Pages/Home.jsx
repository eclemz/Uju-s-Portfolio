import React from "react";
import Hero from "../Components/Hero";
// import Marquee from "../Components/Marquee.jsx";
import { ProjectCards } from "../Data/Data";
import ProjectCard from "../Components/ProjectCard";
import { ExperienceCard } from "../Data/Data";
import About from "../Components/About";
import Experience from "../Components/Experience";

function Home() {
  const onCardClick = (card) => {
    if (card.link) {
      window.open(card.link, "_blank", "noopener noreferrer");
    }
  };
  return (
    <>
      <Hero />
      <section className="py-4">
        <h1 className="text-4xl text-center text-[#FFF] font-bold mb-6">
          Projects
        </h1>
        <ProjectCard data={ProjectCards} onCardClick={onCardClick} />
      </section>
      <section id="about" className="lg:scroll-mt-36 scroll-mt-20">
        <About />
      </section>

      <section id="experience" className="lg:scroll-mt-36 scroll-mt-20">
        <Experience data={ExperienceCard} />
      </section>
    </>
  );
}

export default Home;
