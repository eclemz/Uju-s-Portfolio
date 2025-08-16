import React from "react";
import { Buttons } from "./Buttons";

function Hero() {
  return (
    <section className="hero flex flex-col items-start justify-end self-stretch gap-8 py-36 px-5 lg:px-14 mt-20 lg:mt-32">
      <div className="flex flex-col items-start self-stretch lg:w-[45%] gap-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold self-stretch text-black dark:text-[#FFF] leading-normal">
          A UI/UX Designer with Project Management Edge
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-[#FFF]">
          Hi there! I’m Ujunwa, and I bring ideas to life through thoughtful,
          Data-backed <b> User-centered Design. </b> I design <b> Intuitive </b>{" "}
          and
          <b> Seamless Experiences that solve real user problems. </b>
        </p>
      </div>
      <Buttons className="md:self-start self-stretch font-bold">
        Get in touch
      </Buttons>
    </section>
  );
}

export default Hero;
