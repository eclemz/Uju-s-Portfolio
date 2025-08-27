import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { ProjectCards } from "../Data/Data";
import ScrollToTopBtn from "../Components/ScrollToTopBtn";

function Project() {
  const onCardClick = (card) => {
    if (card.link) {
      window.open(card.link, "_blank", "noopener noreferrer");
    }
  };
  return (
    <main className="project-page bg-[#2B2B2B] min-h-screen flex flex-col items-center self-stretch gap-6 py-5 lg:py-20 lg:mt-32 mt-20">
      <h1 className="text-2xl font-bold self-stretch text-center text-[#FFF]">
        All Projects
      </h1>
      <ProjectCard
        data={ProjectCards}
        onCardClick={onCardClick}
        isMainPage={true}
      />
      <ScrollToTopBtn />
    </main>
  );
}

export default Project;
