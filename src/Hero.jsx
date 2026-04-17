import React from "react";
import myPhoto from "./assets/myPhoto1.png";
import { TypeAnimation } from "react-type-animation";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <AnimatedSection>
      <div className="min-h-screen flex flex-col md:flex-row gap-12 justify-between overflow-hidden p-6 pt-18 pb-8 md:p-12 md:pt-24">
        <div className="flex flex-col grow gap-4 justify-evenly order-2 md:order-1 shrink-2">
          <div
            className="hidden md:flex items-center gap-2 w-fit px-4 py-2 rounded-full"
            style={{ boxShadow: "0 0 4px #6B8E23" }}
          >
            <div className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#6B8E23] opacity-75 animate-ping"></span>
              <span className="relative inline-flex size-2.5 rounded-full bg-[#6B8E23]"></span>
            </div>
            <span className="text-[#6B8E23] font-semibold">
              Available For Work
            </span>
          </div>

          <h1 className="text-2xl md:text-6xl font-bold text-white text-center md:text-start">
            Hi, I'm <span className="text-[#7A8F5A]">Hazem </span>
            <span className="text-[#6B8E23]">Mahmoud</span>
          </h1>

          <p className="text-lg md:text-2xl text-center md:text-start text-white/95 font-semibold">
            <TypeAnimation
              sequence={[
                "Frontend Web Developer",
                1000,
                "",
                500,
                "React.js Specialist",
                1000,
                "",
                500,
                "Building Modern Web Apps",
                1000,
                "",
                500,
              ]}
              speed={200}
              repeat={Infinity}
            />
          </p>

          <p className="max-w-2xl text-[#8b949e] text-base md:text-xl text-center md:text-start">
            I focus on building clean UI, responsive layouts, and real-world
            dashboards.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-4 py-1.5 md:px-6 md:py-3 flex justify-center items-center rounded-full bg-gradient-to-r from-[#6B8E23] to-[#7A8F5A] text-white font-semibold hover:from-[#5a7a1d] hover:to-[#68794c] transition duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-4 py-1.5 md:px-6 md:py-3 flex justify-center items-center rounded-full text-[#6B8E23] font-semibold hover:bg-[#6B8E23]/10 transition duration-300"
              style={{ boxShadow: "0 0 3px #6B8E23" }}
            >
              Contact Me
            </a>
          </div>

          <p className="text-[#8b949e] text-center md:text-start">
            I'm working with:
          </p>
          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            <div
              className="flex gap-2 items-center rounded-full text-gray-400 hover:bg-gray-50/5 font-semibold w-fit px-3 py-2 transition-all cursor-default"
              style={{ boxShadow: "0 0 4px #8b949e" }}
            >
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-cyan-400"
                  aria-label="React logo"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
                </svg>
              </span>
              <p className="text-sm">React</p>
            </div>

            <div
              className="flex gap-2 items-center rounded-full text-gray-400 font-semibold w-fit px-3 py-2 hover:bg-gray-50/5 transition-all cursor-default"
              style={{ boxShadow: "0 0 4px #8b949e" }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  className="text-yellow-300"
                  aria-label="React logo"
                  height="18"
                  width="18"
                >
                  <path d="M0 32l0 448 448 0 0-448-448 0zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5l0-143.1 42.1 0 0 143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                </svg>
              </span>
              <p className="text-sm">JavaScript</p>
            </div>

            <div
              className="flex gap-2 items-center rounded-full text-gray-400 font-semibold w-fit px-3 py-2 hover:bg-gray-50/5 transition-all cursor-default"
              style={{ boxShadow: "0 0 4px #8b949e" }}
            >
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="text-sky-400"
                  aria-label="React logo"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                </svg>
              </span>
              <p className="text-sm">Tailwind CSS</p>
            </div>

            <div
              className="flex gap-2 items-center rounded-full text-gray-400 font-semibold w-fit px-3 py-2 hover:bg-gray-50/5 transition-all cursor-default"
              style={{ boxShadow: "0 0 4px #8b949e" }}
            >
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 496 512"
                  className="text-gray-400"
                  aria-label="React logo"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </span>
              <p className="text-sm">GitHub</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 justify-center items-center order-1 md:order-2 shrink-1">
          <div
            className="flex md:hidden items-center gap-2 w-fit px-4 py-2 rounded-full"
            style={{ boxShadow: "0 0 4px #6B8E23" }}
          >
            <div className="relative flex size-2 md:size-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#6B8E23] opacity-75 animate-ping"></span>
              <span className="relative inline-flex size-2 md:size-2.5 rounded-full bg-[#6B8E23]"></span>
            </div>
            <span className="text-xs md:text-base text-[#6B8E23] font-semibold">
              Available For Work
            </span>
          </div>

          <div className="w-fit h-full flex flex-col justify-center order-1 md:order-2 relative z-0">
            <div className="rounded-3xl border-gray-500 border-4 mx-auto md:mx-0 overflow-hidden h-full">
              <div className=" h-full w-full px-4">
                <img
                  alt="Hazem Mahmoud"
                  className="w-64 h-64 md:w-[340px] md:h-full object-cover transition-transform duration-700 hover:scale-110 will-change-transform"
                  src={myPhoto}
                />
              </div>
              <div className="absolute -top-6 -right-6 rounded-3xl -z-10 w-24 h-24 md:w-44 md:h-44 bg-[#7A8F5A]/60 backdrop-blur-md"></div>
              <div className="absolute -bottom-6 -left-6 rounded-3xl -z-10 w-24 h-24 md:w-44 md:h-44 bg-[#7A8F5A]/60 backdrop-blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;
