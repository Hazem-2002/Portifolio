import React from "react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <div className="flex flex-col gap-14 items-center w-[80%] mx-auto">
      <AnimatedSection>
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-white/90">About </span>
            <span className="text-[#6B8E23]">Me</span>
          </h2>
          <p className="text-gray-400/80 text-base md:text-lg text-center">
            Front-End Developer focused on modern web interfaces
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div
          className="p-8 rounded-3xl"
          style={{ boxShadow: "0 0 4px #6B8E23" }}
        >
          {/* About */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="size-20 md:size-24 rounded-xl bg-[#6B8E23]/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user text-[#6B8E23] size-10 md:size-12"
                aria-hidden="true"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>

            <div className="flex flex-col gap-2">
              {/* Title */}
              <h2 className="text-lg md:text-3xl font-semibold mb-3 text-white text-center md:text-start">
                <span>Hello, I'm </span>
                <span className="hidden md:inline text-[#6B8E23]">
                  Hazem Mahmoud.
                </span>
                <p className="inline md:hidden text-[#6B8E23] leading-relaxed">
                  <br />
                  <span>Hazem Mahmoud</span>
                </p>
              </h2>

              {/* Summary */}
              <p className="text-gray-400 leading-relaxed text-center md:text-start">
                I'm a{" "}
                <span className="text-[#6B8E23]">Front-End Developer</span>{" "}
                specialized in building responsive and user-friendly interfaces
                using React.js and Tailwind CSS.
                <br />I work on transforming ideas into clean, modern, and
                scalable web experiences with attention to performance and UI
                details.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Personal Info */}

      <div className="flex flex-col w-full items-center gap-10">
        <h2 className="text-xl md:text-2xl font-semibold text-white/90">
          Personal Info
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 w-[100%] md:w-full">
          {/* Name */}
          <AnimatedSection>
            <div className="flex flex-col items-center gap-3 p-4 md:p-6 shadow shadow-[0_0_3px_#99A1A0] hover:shadow-[0_0_10px_#6B8E23] transition duration-250 rounded-xl">
              <div className="bg-[#6B8E23]/10 text-[#6B8E23] p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user size-5.5 md:size-7.5"
                  aria-hidden="true"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              <h2 className="text-sm sm:text-base font-normal text-gray-400 leading-none">
                Name
              </h2>

              <h2 className="text-base sm:text-lg text-white/90 font-semibold leading-none">
                Hazem Mahmoud
              </h2>
            </div>
          </AnimatedSection>

          {/* Email */}
          <AnimatedSection>
            <div className="flex flex-col items-center gap-3 p-4 md:p-6 shadow shadow-[0_0_3px_#99A1A0] hover:shadow-[0_0_10px_#6B8E23] transition duration-250 rounded-xl">
              <div className="bg-[#6B8E23]/10 text-[#6B8E23] p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail size-5.5 md:size-7.5"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
              </div>

              <h2 className="text-sm sm:text-base font-normal text-gray-400 leading-none">
                Email
              </h2>

              <h2 className="text-base sm:text-lg text-white/90 font-semibold leading-none">
                hazem.mahmoud.dev@gmail.com
              </h2>
            </div>
          </AnimatedSection>

          {/* Location */}
          <AnimatedSection>
            <div className="flex flex-col items-center gap-3 p-4 md:p-6 shadow shadow-[0_0_3px_#99A1A0] hover:shadow-[0_0_10px_#6B8E23] transition duration-250 rounded-xl">
              <div className="bg-[#6B8E23]/10 text-[#6B8E23] p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin size-5.5 md:size-7.5"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>

              <h2 className="text-sm sm:text-base font-normal text-gray-400 leading-none">
                Location
              </h2>

              <h2 className="text-base sm:text-lg text-white/90 font-semibold leading-none">
                Egypt/Mansoura
              </h2>
            </div>
          </AnimatedSection>

          {/* Status */}
          <AnimatedSection>
            <div className="flex flex-col items-center gap-3 p-4 md:p-6 shadow shadow-[0_0_3px_#99A1A0] hover:shadow-[0_0_10px_#6B8E23] transition duration-250 rounded-xl">
              <div className="bg-[#6B8E23]/10 text-[#6B8E23] p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big size-5.5 md:size-7.5"
                  aria-hidden="true"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
              </div>

              <h2 className="text-sm sm:text-base font-normal text-gray-400 leading-none">
                Status
              </h2>

              <h2 className="text-base sm:text-lg text-white/90 font-semibold leading-none">
                Open to opportunities
              </h2>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default About;
