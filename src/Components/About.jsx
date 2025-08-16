import React from "react";
import Marquee from "./Marquee";

function About() {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-start lg:items-center justify-center self-stretch gap-6 p-5 lg:py-20 lg:px-14">
        <picture className="flex w-full flex-1">
          <img
            src="./uju.svg"
            alt="Ujunwa's Picture"
            className="h-[16.346rem] lg:h-[33.6875rem] w-full rounded-lg self-stretch object-cover object-center"
          />
        </picture>
        <div className="flex lg:flex-1 flex-col items-start self-stretch justify-center gap-6">
          <h2 className="text-2xl lg:text-[2rem] font-bold text-[#FFFFFF] self-stretch ">
            About Me
          </h2>
          <p className="self-stretch text-sm lg:text-base lg:font-normal font-medium text-[#FFFFFF] whitespace-pre-wrap">
            Hi! I’m Ujunwa, a UI/UX designer with a fresh perspective and solid
            foundation in project management. My journey into design began with
            a desire to combine structure and creativity to create digital
            experiences that truly work for people.
            <br /> <br />
            With an MSc in Project Management, I understand how to balance user
            needs with strategic goals. My approach is rooted in empathy,
            clarity, and functionality.
            <br /> <br />I am passionate about solving problems through design,
            and I’m constantly learning, exploring, and building experiences
            that feel natural and intuitive.
          </p>
        </div>
      </section>
      <Marquee />
    </>
  );
}

export default About;
