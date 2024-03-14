import { Footer } from "../../components/Footer";
import { StarsCanvas } from "../../components/Canvas";
import { Hero } from "./Hero";
import { Navbar } from "src/components";

export const Landing = () => {
  return (
    <div className="font-dank">
      <div className="relative flex h-screen flex-auto flex-col">
        <Hero />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
};
