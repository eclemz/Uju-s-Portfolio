import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

function Marquee() {
  const logos = [
    "./Figma.svg",
    "./Canva.svg",
    "./Miro.svg",
    "./frametools.svg",
    "./Behance.svg",
    "./Google.svg",
    "./Figma.svg",
    "./Canva.svg",
    "./Miro.svg",
    "./frametools.svg",
    "./Behance.svg",
    "./Google.svg",
    "./Figma.svg",
    "./Canva.svg",
    "./Miro.svg",
    "./frametools.svg",
    "./Behance.svg",
    "./Google.svg",
  ];

  return (
    <div className="w-full flex flex-col lg:py-5 lg:px-14 md:py-5 md:px-8 py-6 px-4 gap-4 items-center relative overflow-hidden">
      <h2 className="text-center lg:text-[1.75rem] md:text-xl text-lg lg:font-normal font-bold self-stretch text-[#FCFCFC]">
        Tools I Use
      </h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full"
      >
        {logos.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={src}
              alt={`logo-${index}`}
              className="lg:h-16 lg:w-16 w-10 h-10 object-contain "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Marquee;
