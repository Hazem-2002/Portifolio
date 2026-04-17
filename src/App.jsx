import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AnimatedSection from "./AnimatedSection";

function App() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Navbar />
      <main className="min-h-screen w-full bg-gradient-to-r from-[#0F1A14] via-[#16251D] to-[#0F1A14]">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
      </main>
    </div>
  );
}

export default App;
