import { Logo } from "./Logo";
import { Github } from "../SVGs/Github";
import { LinkedIn } from "../SVGs/LinkedIn";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`sticky top-0 z-20 mx-auto flex w-full max-w-screen-content items-center px-8 py-5 transition-all ${
        scrolled ? "bg-background bg-opacity-90" : "bg-transparent"
      } `}
    >
      <div className="flex w-full max-w-screen-content items-center justify-between">
        <Logo />
        <section className="flex gap-4">
          <div className="flex gap-4">
            <a href="https://github.com/FrankieMarie" target="_blank">
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/frankiedenell/"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </div>
        </section>
      </div>
    </nav>
  );
};
