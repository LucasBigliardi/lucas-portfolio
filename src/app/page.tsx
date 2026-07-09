import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import FeaturedProject from "@/components/FeaturedProject";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Statistics from "@/components/Statistics";
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
        <FeaturedProject />
        <Timeline />
        <Skills />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
