import React from "react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  return (
    <div className="w-[80%] mx-auto">
      <AnimatedSection>
        <div className="flex flex-col gap-12 items-center mb-12">
          <h2 className="relative text-2xl md:text-5xl font-bold leading-none">
            <span className="text-white/80">Let's </span>
            <span className="text-[#6B8E23]">Work Together</span>
            <span className="absolute w-[35%] h-1 bg-[#6B8E23] -bottom-5 left-1/2 -translate-x-1/2"></span>
          </h2>
          <p className="text-gray-400/80 text-base md:text-lg text-center">
            Have a project in mind? I'd love to hear about it.
            <br />
            Drop me a message and let's create something amazing.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <AnimatedSection>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-200 mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#3B5445]/15 text-slate-100 placeholder-[#9FB5A8]/70 focus:outline-none focus:ring-2 focus:ring-[#7A8F5A]/20 focus:shadow-[0_0_4px_#7A8F5A] transition-all duration-300"
                placeholder="John Doe"
                type="text"
                name="name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-200 mb-2"
              >
                Your Email
              </label>
              <input
                id="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#3B5445]/15 text-slate-100 placeholder-[#9FB5A8]/70 focus:outline-none focus:ring-2 focus:ring-[#7A8F5A]/20 focus:shadow-[0_0_4px_#7A8F5A] transition-all duration-300"
                placeholder="john@example.com"
                type="email"
                name="email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-200 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className="w-full px-4 py-3 rounded-xl bg-[#3B5445]/15 text-slate-100 placeholder-[#9FB5A8]/70 focus:outline-none focus:ring-2 focus:ring-[#7A8F5A]/20 focus:shadow-[0_0_4px_#7A8F5A] transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 bg-linear-to-r from-[#4E6B5D] to-[#2F4F3E] hover:from-[#5F7F6F] hover:to-[#3B5445] text-white/90 shadow-[#4E6B5D]/30 hover:shadow-[#4E6B5D]/50 cursor-pointer"
              tabIndex="0"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
              </svg>
              <span>Send Message</span>
            </button>
          </form>
        </AnimatedSection>

        <AnimatedSection>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/Hazem-2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#3B5445]/8 border border-[#3B5445]/20 hover:border-[#3B5445]/50 hover:translate-x-[10px] will-change-transform transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#3B5445]/15 flex items-center justify-center text-slate-300 group-hover:bg-[#3B5445]/30 transition-colors">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 496 512"
                      className="text-2xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </div>

                  <div>
                    <p className="font-medium text-slate-200 group-hover:text-[#6B8E23] transition-colors">
                      GitHub
                    </p>

                    <p className="text-sm text-gray-400/80">
                      github.com/Hazem-2002
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/-hazemmahmoud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#3B5445]/8 border border-[#3B5445]/20 hover:border-[#3B5445]/50 hover:translate-x-[10px] will-change-transform transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#3B5445]/15 flex items-center justify-center text-slate-300 group-hover:bg-[#3B5445]/30 transition-colors">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-2xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </div>

                  <div>
                    <p className="font-medium text-slate-200 group-hover:text-[#6B8E23] transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-sm text-gray-400/80">
                      linkedin.com/in/-hazemmahmoud
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:hazem.mahmoud.dev@gmail.com"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#3B5445]/8 border border-[#3B5445]/20 hover:border-[#3B5445]/50 hover:translate-x-[10px] will-change-transform transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#3B5445]/15 flex items-center justify-center text-slate-300 group-hover:bg-[#3B5445]/30 transition-colors">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-2xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                    </svg>
                  </div>

                  <div>
                    <p className="font-medium text-slate-200 group-hover:text-[#6B8E23] transition-colors">
                      Email
                    </p>
                    <p className="text-sm text-gray-400/80">
                      hazem.mahmoud.dev@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#3B5445]/25 to-[#3B5445]/15 border border-[#3B5445]/30">
              <h4 className="text-lg font-semibold text-slate-100 mb-3">
                Quick Response
              </h4>
              <p className="text-sm text-gray-400/80 leading-relaxed">
                I typically respond within 24 hours. For urgent inquiries, feel
                free to reach out via email directly.
              </p>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#3B5445]/8 border border-[#3B5445]/20">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute z-1 inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                <span className="relative z-10 inline-flex rounded-full h-3 w-3 bg-emerald-700"></span>
              </div>
              <span className="text-sm text-slate-300">
                Available for freelance projects
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
