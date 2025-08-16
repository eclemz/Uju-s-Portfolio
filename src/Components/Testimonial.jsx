import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Testimonial({ data }) {
  const paginationRef = useRef(null);

  return (
    <main className="flex w-full flex-col items-center self-stretch dark:bg-[#2B2B2B] bg-[#FCFCFC] gap-4 lg:gap-6 lg:pt-20 lg:pb-40 md:py-10 pt-5 pb-8 px-0">
      <h2 className="text-2xl md:text-3xl font-bold text-[#100108] dark:text-[#FCFCFC] text-center self-stretch">
        Testimonial
      </h2>

      {/* Mobile Testimonial Slider */}
      <div className="md:hidden w-full items-center self-stretch gap-4 py-3 px-5">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, el: paginationRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.pagination.el = paginationRef.current;
          }}
          className="w-full flex flex-col items-start shadow-[inset_0_0_0_0.4px_rgba(150,150,150,0.6)] rounded-lg gap-3 bg-[#FCFCFC] dark:bg-[#2B2B2B] py-2 px-5"
        >
          {data.map((card, idx) => (
            <SwiperSlide key={idx}>
              <article className="flex flex-col items-start self-stretch py-6 px-2">
                <p className="text-[#100108] dark:text-[#FFF] text-sm font-medium self-stretch">
                  {card.desc}
                </p>
                <div className="flex flex-col items-start self-stretch pt-3">
                  <p className="text-center text-sm font-bold text-[#100108] dark:text-[#FCFCFC]">
                    {card.name}
                  </p>
                  <h3 className="whitespace-normal self-stretch font-medium text-[#0A0105] dark:text-[#9D979A] text-sm leading-normal">
                    {card.title}
                  </h3>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={paginationRef}
          className="custom-pagination flex justify-center mt-8"
        />
      </div>

      {/* Desktop Grid Testimonial */}
      <section className="hidden lg:flex items-center self-stretch gap-10 py-10 px-14">
        {data.map((card, idx) => (
          <article
            key={idx}
            className="flex flex-col items-start gap-3 py-6 px-5 shadow-[inset_0_0_0_0.4px_rgba(150,150,150,0.6)] rounded-lg"
          >
            <p className="text-[#100108] dark:text-[#FFF] text-base">
              {card.desc}
            </p>
            <div className="flex flex-col items-start">
              <p className="text-xs font-semibold self-stretch text-[#100108] dark:text-[#FCFCFC]">
                {card.name}
              </p>
              <p className="whitespace-normal self-stretch font-medium text-[#0A0105] dark:text-[#9D979A] text-xs leading-normal">
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
