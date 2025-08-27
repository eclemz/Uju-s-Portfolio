import React from "react";
import { Buttons2 } from "./Buttons";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const pageTransition = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
};

function ProjectCard({ data, onCardClick, isMainPage = false }) {
  function handleKeyDown(e, card) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCardClick(card);
    }
  }

  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={`flex flex-col ${isMainPage ? "lg:flex-col" : "lg:flex-row"} 
         justify-center lg:justify-between items-start lg:items-center 
         self-stretch gap-4 lg:gap-6 py-3 lg:py-10 px-5 lg:px-14`}
    >
      {data.map((card, index) => (
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          key={index}
          className={`flex flex-col w-full  shadow-[inset_0_0_0_0.6px_rgba(150,150,150,0.6)]
             rounded-lg 
              ${isMainPage ? "lg:flex-row p-5 gap-6" : ""} 
             flex-1 items-start self-stretch md:self-auto 
             lg:shrink-0 
            bg-[#100108] border-[#FCFCFC]`}
        >
          <picture
            className={`flex items-start self-stretch 
               ${
                 isMainPage ? "lg:w-1/2 lg:rounded-l-lg lg:rounded-tr-none" : ""
               }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className={`w-full h-56 object-cover rounded-t-lg self-stretch 
                 ${
                   isMainPage
                     ? "lg:h-full lg:rounded-l-lg lg:rounded-tr-none"
                     : ""
                 }`}
            />
          </picture>

          <div
            className={`flex items-start lg:items-center self-stretch gap-2 py-2 px-3 
               ${isMainPage ? "lg:w-1/2" : ""}`}
          >
            <div className="flex flex-1 flex-col justify-center items-start py-2 gap-4">
              <div className="flex flex-col items-start self-stretch gap-2">
                <div className="flex flex-col items-start self-stretch gap-2 lg:-gap-1">
                  <h3 className="text-base lg:text-xl font-bold text-[#FCFCFC] pb-[0.125rem] border-b-2 border-[#FCFCFC]">
                    {card.title}
                  </h3>
                </div>
                <p className="self-stretch lg:text-base text-sm lg:font-normal font-medium text-[#E7E6E6] whitespace-normal">
                  {card.description}
                </p>
              </div>

              <ul className="flex items-start self-stretch gap-2 flex-wrap">
                <li className="flex justify-center items-center text-xs py-[0.43231rem] gap-1 px-[0.57638rem] rounded-[0.25rem] whitespace-nowrap text-[#969696] border-[0.025rem] border-[#969696]">
                  Google Suites
                </li>
                <li className="flex justify-center items-center text-xs py-[0.43231rem] gap-1 px-[0.57638rem] rounded-[0.25rem] text-[#969696] border-[0.025rem] border-[#969696]">
                  Figma
                </li>
                <li className="flex justify-center items-center text-xs py-[0.43231rem] gap-1 px-[0.57638rem] rounded-[0.25rem] text-[#969696] border-[0.025rem] border-[#969696]">
                  Miro
                </li>
              </ul>
              <Buttons2
                className="md:self-start self-stretch"
                onClick={() => onCardClick(card)}
                onKeyDown={(e) => handleKeyDown(e, card)}
              >
                View Project
              </Buttons2>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.section>
  );
}

export default ProjectCard;
