import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
// Removido: Statistics
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Timeline />
        {/* Removido: <Statistics /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}