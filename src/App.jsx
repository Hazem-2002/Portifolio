import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Proficiency from "./Proficiency";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <section
          id="home"
          className="min-h-screen w-full bg-gradient-to-r from-[#0F1A14] via-[#16251D] to-[#0F1A14]"
        >
          <Hero />
        </section>

        <section id="about" className="py-20 bg-[#0F1A14]">
          <About />
        </section>

        <section
          id="skills"
          className="bg-gradient-to-r from-[#0F1A14] via-[#16251D] to-[#0F1A14] py-20"
        >
          <Skills />
        </section>

        <section
          id="skills"
          className="py-20 bg-gradient-to-r from-[#0F1712] via-[#18231C] to-[#0F1712]"
        >
          <Proficiency />
        </section>

        <section id="projects" className="min-h-screen py-20 bg-[#0F1A14]">
          <Projects />
        </section>

        <section
          id="contact"
          className="py-20 bg-gradient-to-r from-[#0F1712] via-[#18231C] to-[#0F1712]"
        >
          <Contact />
        </section>
      </main>

      <footer class="py-10 bg-gradient-to-r from-[#101A14] via-[#18241D] to-[#101A14] border-t border-[#1F2D25]">
        <Footer />
      </footer>
    </>
  );
}

export default App;
