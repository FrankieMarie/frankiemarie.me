import { github, linkedin } from "src/assets";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <nav className="z-20 mx-auto flex w-full max-w-screen-content items-center bg-transparent px-8 py-5 transition-all">
      <div className="flex w-full max-w-screen-content items-center justify-between">
        <Logo />
        <section className="flex gap-4">
          <div className="flex gap-4">
            <a href="https://github.com/FrankieMarie" target="_blank">
              <img className="w-5" src={github} />
            </a>
            <a
              href="https://www.linkedin.com/in/frankiedenell/"
              target="_blank"
            >
              <img className="w-5" src={linkedin} />
            </a>
          </div>
        </section>
      </div>
    </nav>
  );
};
