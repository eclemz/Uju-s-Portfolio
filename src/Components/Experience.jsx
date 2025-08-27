import React from "react";

function Experience({ data }) {
  const renderBoldText = (input) => {
    if (input == null) return null;

    if (Array.isArray(input)) {
      return input.map((item, idx) => (
        <div key={idx} className="whitespace-pre-line">
          {renderBoldText(item)}
        </div>
      ));
    }
    if (typeof input !== "string") {
      return input;
    }
    const parts = input.split("**");
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-semibold">
          {part}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };
  return (
    <section className="flex flex-col items-center self-stretch p-5 lg:py-20 lg:px-14 gap-6 lg:gap-20 bg-[#FCFCFC] dark:bg-[#2B2B2B]">
      <h2 className="text-center text-2xl lg:text-[2rem] font-bold self-stretch text-[#FFFFFF]">
        Experience
      </h2>
      {data.map((card, idx) => (
        <article
          key={idx}
          className="flex flex-col items-start self-stretch gap-4"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-start w-full gap-2">
            <picture className="lg:h-[6.25rem] lg:w-[6.25rem]">
              <img
                src={`${card.icon}`}
                alt=""
                className="lg:h-[6.25rem] lg:w-[6.25rem] h- w-16 "
              />
            </picture>
            <div className="flex flex-col justify-center items-start gap-1">
              <h3 className="text-base lg:text-2xl self-stretch font-bold text-[#100108] dark:text-[#FFF]">
                {card.title}
              </h3>
              <p className="text-sm lg:text-base font-semibold text-[#0A0105] dark:text-[#FFF]">
                {card.company}
              </p>
              <span className="text-sm lg:text-base text-[#100108] dark:text-[#FFF]">
                {card.date}
              </span>
            </div>
          </div>
          <span className="text-sm font-medium text-[#100108] dark:text-[#FFF] whitespace-pre-line">
            {renderBoldText(card.desc)}
          </span>
        </article>
      ))}

      <section className="flex flex-col items-center self-stretch gap-4">
        <h2 className="text-2xl self-stretch font-bold text-center text-[#FFFFFF]">
          Education
        </h2>
        <div className="flex flex-col items-start self-stretch gap-4">
          <div className="flex flex-row gap-2 items-start">
            <picture className="flex items-center bg-white py-1 rounded-sm">
              <img src="./uniR.svg" alt="" className="h-12 w-12" />
            </picture>
            <div className="flex flex-col justify-center self-end items-start gap-1">
              <p className="text-sm lg:text-lg font-bold text-[#100108] dark:text-[#FFF]">
                Project Management (MSc)
              </p>
              <p className="text-xs lg:text-sm font-medium self-stretch text-[#100108] dark:text-[#FFF]">
                University of Roehampton, London
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-start">
            <picture className="flex items-center bg-white p-1 rounded-sm">
              <img src="./unnlogo.png" alt="" className="h-12 w-10" />
            </picture>
            <div className="flex flex-col justify-center self-end items-start gap-1">
              <p className="text-sm lg:text-lg font-bold text-[#100108] dark:text-[#FFF]">
                Bachelor of Arts (B.A), THEATRE ARTS
              </p>
              <p className="text-xs lg:text-sm font-medium self-stretch text-[#100108] dark:text-[#FFF]">
                University of Nigeria, Nsukka
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Experience;
