import { Logo } from "./Logo";
import { Github } from "../SVGs/Github";
import { LinkedIn } from "../SVGs/LinkedIn";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 mx-auto flex w-full max-w-screen-content items-center bg-transparent px-8 py-5 transition-all">
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
