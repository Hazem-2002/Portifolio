import React from "react";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import weatherImg from "./assets/weather-app.png";
import NexoraImg from "./assets/Tailwind-Landing-Page.png";
import TodoListImg from "./assets/Todo-List-App.png";
import AccessoriesStoreImg from "./assets/E-commerce-JavaScript.png";
import MobileStoreImg from "./assets/E-commerce-Mobile-Store.png";
import TastyBitesRestaurantImg from "./assets/Tasty-Bites-Restaurant.png";
import FashionClothingStoreImg from "./assets/clothing-store-app.png";
import DigitalMarketingImg from "./assets/digital-marketing-app.png";

const ProjectsData = [
  {
    title: "Weather App",
    type: "React.js",
    desc: "A responsive weather app providing real-time data, forecasts, detailed metrics, and astronomical insights, built with Redux Toolkit, optimized performance, and a clean, reusable UI.",
    technologies: [
      "React.js",
      "JavaScript",
      "Material UI",
      "Tailwind CSS",
      "Weather API",
    ],
    liveDemo: "https://hazem-2002.github.io/Weather-App/",
    code: "https://github.com/Hazem-2002/Weather-App",
    imageSource: weatherImg,
  },
  {
    title: "Nexora",
    type: "Landing Pages",
    desc: "A responsive landing page built with HTML5 and Tailwind CSS, featuring a modern UI, clean layout, fast performance, and cross-browser compatibility across all devices.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS"],
    liveDemo: "https://hazem-2002.github.io/Tailwind-Responsive-Landing-Page/",
    code: "https://github.com/Hazem-2002/Tailwind-Responsive-Landing-Page",
    imageSource: NexoraImg,
  },
  {
    title: "Todo List",
    type: "React.js",
    desc: "A responsive task management app with CRUD features, including adding, editing, deleting, and completing tasks, plus filtering by status, real-time UI updates, notifications, and LocalStorage persistence.",
    technologies: ["React.js", "Material UI", "CSS3"],
    liveDemo: "https://hazem-2002.github.io/Todo-List-App/",
    code: "https://github.com/Hazem-2002/Todo-List-App",
    imageSource: TodoListImg,
  },
  {
    title: "Accessories Store",
    type: "Vanilla JS",
    desc: "A dynamic e-commerce web app with authentication, product browsing, and interactive cart & favorites system, featuring real-time UI updates and persistent state using LocalStorage.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://hazem-2002.github.io/E-Commerce-Accessories/",
    code: "https://github.com/Hazem-2002/E-Commerce-Accessories",
    imageSource: AccessoriesStoreImg,
  },
  {
    title: "Mobile Store",
    type: "Vanilla JS",
    desc: "A modern e-commerce mobile store featuring product listing, add-to-cart functionality, cart management, item removal, and dynamic total cost calculation for a smooth and intuitive user experience.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://hazem-2002.github.io/Mobile-Store/",
    code: "https://github.com/Hazem-2002/Mobile-Store",
    imageSource: MobileStoreImg,
  },
  {
    title: "Tasty Bites Restaurant",
    type: "Landing Pages",
    desc: "A responsive restaurant landing page built with HTML5, CSS3, and Bootstrap 5, featuring a clean modern UI, structured sections, and interactive components for a smooth user experience across all devices.",
    technologies: ["HTML5", "CSS3", "Bootstrap"],
    liveDemo: "https://hazem-2002.github.io/Tasty-Bites-Restaurant/",
    code: "https://github.com/Hazem-2002/Tasty-Bites-Restaurant",
    imageSource: TastyBitesRestaurantImg,
  },
  {
    title: "Fashion Clothing Store",
    type: "Landing Pages",
    desc: "A responsive clothing store website built with HTML5 and CSS3, featuring a clean and structured layout, organized product sections, modern UI design, and a smooth desktop-focused experience.",
    technologies: ["HTML5", "CSS3"],
    liveDemo: "https://hazem-2002.github.io/Static-Clothing-Store/",
    code: "https://github.com/Hazem-2002/Static-Clothing-Store",
    imageSource: FashionClothingStoreImg,
  },
  {
    title: "Digital Marketing",
    type: "Landing Pages",
    desc: "A simple static website built using HTML and CSS, featuring a clean digital marketing company layout with services, portfolio, and contact sections, simple hover effects, and a basic desktop-focused design.",
    technologies: ["HTML", "CSS"],
    liveDemo: "https://hazem-2002.github.io/digital-marketing-website/",
    code: "https://github.com/Hazem-2002/digital-marketing-website",
    imageSource: DigitalMarketingImg,
  },
];

const Projects = () => {
  const [projectsType, setProjectsType] = useState("All");
  return (
    <div className="w-[80%] lg:w-[90%] mx-auto">
      {/* Title */}
      <AnimatedSection>
        <div className="flex flex-col gap-14 items-center mb-12">
          <h2 className="relative text-4xl md:text-6xl font-bold leading-none">
            <span className="text-white/90">My </span>
            <span className="text-[#6B8E23]">Projects</span>
            <span className="absolute w-[35%] h-1 bg-[#6B8E23] -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2"></span>
          </h2>
          <p className="text-white/60 text-base md:text-lg text-center">
            A collection of my work showcasing modern, responsive web
            applications
            <br />
            built with a focus on clean UI, performance, and user experience.
          </p>
        </div>
      </AnimatedSection>

      {/* Filter Buttons */}
      <AnimatedSection>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${projectsType === "All" ? "bg-[#6B8E23]/80 text-white/70 shadow-[0_0_4px_#6B8E23]" : "bg-[#18231C] hover:bg-[#25372C] text-[#6B8E23] shadow-[0_0_3px_#6B8E23]"}`}
            onClick={() => {
              if (projectsType !== "All") {
                setProjectsType("All");
              }
            }}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${projectsType === "Landing Pages" ? "bg-[#6B8E23]/80 text-white/70 shadow-[0_0_4px_#6B8E23]" : "bg-[#18231C] hover:bg-[#25372C] text-[#6B8E23] shadow-[0_0_3px_#6B8E23]"}`}
            onClick={() => {
              if (projectsType !== "Landing Pages") {
                setProjectsType("Landing Pages");
              }
            }}
          >
            Landing Pages
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${projectsType === "Vanilla JS" ? "bg-[#6B8E23]/80 text-white/70 shadow-[0_0_4px_#6B8E23]" : "bg-[#18231C] hover:bg-[#25372C] text-[#6B8E23] shadow-[0_0_3px_#6B8E23]"}`}
            onClick={() => {
              if (projectsType !== "Vanilla JS") {
                setProjectsType("Vanilla JS");
              }
            }}
          >
            Vanilla JS
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${projectsType === "React.js" ? "bg-[#6B8E23]/80 text-white/70 shadow-[0_0_4px_#6B8E23]" : "bg-[#18231C] hover:bg-[#25372C] text-[#6B8E23] shadow-[0_0_3px_#6B8E23]"}`}
            onClick={() => {
              if (projectsType !== "React.js") {
                setProjectsType("React.js");
              }
            }}
          >
            React.js
          </button>
        </div>
      </AnimatedSection>

      {/* Filter Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto ">
        {ProjectsData.filter((project) => {
          if (projectsType === "All") return true;
          return project.type === projectsType;
        }).map((project, index) => (
          <AnimatedSection key={project.title + index}>
            <div className="relative flex flex-col h-full rounded-2xl group cursor-pointer overflow-hidden transition-all duration-500 bg-[#16251D]/50 border border-[#7A8F5A]/15 backdrop-blur-xl hover:shadow-[0_0_8px_#7A8F5A]">
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 will-change-transform"
                  style={{ backgroundImage: `url(${project.imageSource})` }}
                ></div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/80 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 text-white text-sm font-semibold rounded-full bg-gradient-to-r from-[#6B8E23] to-[#7A8F5A] transition-colors duration-300 hover:from-[#5a7a1d] hover:to-[#68794c] shadow-sm shadow-[#7A8F5A]"
                    tabIndex="0"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    Live Demo
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#0F1A14] hover:bg-[#0F1A14]/60 text-white text-sm font-semibold rounded-full border border-[#7A8F5A]/30 transition"
                    tabIndex="0"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Code
                  </a>
                </div>

                <div className="absolute top-3 left-3 z-10">
                  <span className="text-xs text-[#6B8E23] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#0F1A14] shadow-[0_0_4px_#7A8F5A]">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#6B8E23] transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex justify-center items-center flex-wrap gap-2.5 mt-auto grow">
                  {project.technologies.map((technology) => (
                    <span
                      key={project.title + technology + index}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#6B8E23]/10 text-white/80 font-semibold shadow-[0_0_3px_#6B8E23]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Projects;
