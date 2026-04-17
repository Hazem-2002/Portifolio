import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full bg-gradient-to-r from-[#0F1A14] via-[#16251D] to-[#0F1A14]">
        <Hero />
      </main>
      <section className="py-20 bg-[#0F1A14]">
        <About />
      </section>
    </>
  );
}

export default App;
