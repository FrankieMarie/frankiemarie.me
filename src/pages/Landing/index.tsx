import { Footer } from "src/components/Footer";
import { Navbar } from "src/components";
import { Hero } from "./Hero";
import { StarsCanvas } from "src/components/Canvas";
import { Overview } from "./Overview";
import { Projects } from "./Projects";
import { useScroll } from "src/hooks/useScroll";
import { Contact } from "./Contact";

export const Landing = () => {
  const { scrolled, activeHash } = useScroll();

  return (
    <div id="container" className="relative font-dank">
      <Navbar scrolled={scrolled} active={activeHash} />
      <div className="flex h-[calc(100vh-54px)] flex-auto flex-col">
        <Hero scrolled={scrolled} />
        <StarsCanvas />
      </div>
      <div className="bg-background bg-opacity-50">
        <Overview />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
