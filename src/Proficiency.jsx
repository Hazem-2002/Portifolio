import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CircleProgress from "./CircleProgress";
import AnimatedSection from "./AnimatedSection";

const Proficiency = () => {
  return (
    <AnimatedSection>
      <div className="flex flex-col gap-20 items-center">
        <h2 className="relative text-2xl md:text-3xl font-bold">
          <span className="text-white/90">Technical </span>
          <span className="text-[#6B8E23]">Proficiency</span>
          <span className="absolute w-[35%] h-1 bg-[#6B8E23] -bottom-3 left-1/2 -translate-x-1/2"></span>
        </h2>

        <div className="w-[90%] sm:w-[80%] md:w-[65%] mx-auto">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={0}
            loop={true}
            style={{
              padding: "0 20px",
            }}
            breakpoints={{
              0: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            <SwiperSlide>
              <CircleProgress percentage={92} label="HTML5" />
            </SwiperSlide>

            <SwiperSlide>
              <CircleProgress percentage={88} label="CSS3" />
            </SwiperSlide>

            <SwiperSlide>
              <CircleProgress percentage={85} label="JavaScript" />
            </SwiperSlide>

            <SwiperSlide>
              <CircleProgress percentage={80} label="React" />
            </SwiperSlide>

            <SwiperSlide>
              <CircleProgress percentage={90} label="Bootstrap" />
            </SwiperSlide>

            <SwiperSlide>
              <CircleProgress percentage={90} label="Tailwind CSS" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Proficiency;
