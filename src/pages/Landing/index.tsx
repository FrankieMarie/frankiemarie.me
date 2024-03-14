import { Footer } from "../../components/Footer";
import { StarsCanvas } from "../../components/Canvas";
import { Hero } from "./Hero";
import { Overview } from "./Overview";
import { Projects } from "./Projects";
import { Navbar } from "src/components";

export const Landing = () => {
  return (
    <div className="relative font-dank">
      <Navbar />
      <div className="flex h-screen flex-auto flex-col">
        <Hero />
        <StarsCanvas />
      </div>
      <div className="bg-background bg-opacity-50">
        <Overview />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};
