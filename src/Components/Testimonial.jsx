import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

function Testimonial({ data }) {
  const paginationRef = useRef(null);

  const fadeScaleVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <main className="flex w-full flex-col items-center self-stretch bg-[#2B2B2B] gap-4 lg:gap-6 lg:pt-20 lg:pb-40 md:py-10 pt-5 pb-8 px-0">
      <h2 className="text-2xl md:text-3xl font-bold text-[#FCFCFC] text-center self-stretch">
        Testimonial
      </h2>

      {/* Mobile Testimonial Slider */}
      <div className="md:hidden w-full items-center self-stretch gap-4 px-5">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          speed={1020}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="w-full flex flex-col items-start [&_.swiper-pagination]:mt-0 [&_.swiper-pagination]:relative rounded-lg gap-3 bg-[#2B2B2B] py-2 px-5 border-[0.2px] border-white"
        >
          {data.map((card, idx) => (
            <SwiperSlide key={idx}>
              <motion.article
                variants={fadeScaleVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="flex flex-col items-start self-stretch py-6 px-2"
              >
                <p className="text-[#FCFCFC] text-sm font-medium self-stretch">
                  {card.desc}
                </p>
                <div className="flex flex-col items-start self-stretch pt-3">
                  <p className="text-center text-sm font-bold text-[#FCFCFC]">
                    {card.name}
                  </p>
                  <h3 className="whitespace-normal self-stretch font-medium text-[#9D979A] text-sm leading-normal">
                    {card.title}
                  </h3>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={paginationRef}
          className="custom-pagination flex justify-center mt-8 "
        />
      </div>

      {/* Desktop Grid Testimonial */}
      <section className="hidden lg:grid grid-cols-3 items-center self-stretch gap-10 py-10 px-14 ">
        {data.map((card, idx) => (
          <article
            key={idx}
            className="flex flex-col items-start gap-3 py-6 px-5 shadow-[inset_0_0_0_0.4px_rgba(150,150,150,0.6)] rounded-lg min-h-[250px]"
          >
            <p className="text-[#FCFCFC] text-base">{card.desc}</p>
            <div className="flex flex-col items-start">
              <p className="text-xs font-semibold self-stretch text-[#FCFCFC]">
                {card.name}
              </p>
              <p className="whitespace-normal self-stretch font-medium text-[#9D979A] text-xs leading-normal">
                {card.title}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Testimonial;
