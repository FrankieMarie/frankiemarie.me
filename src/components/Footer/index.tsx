import { PATHS } from "src/routes";
import { CarrotUp } from "../SVGs/CarrotUp";
import { Github } from "../SVGs/Github";
import { LinkedIn } from "../SVGs/LinkedIn";

export const Footer = () => {
  return (
    <footer className="mt-24">
      <a href={PATHS.conatiner}>
        <CarrotUp />
      </a>

      <div className="bg-gradient-to-r from-tertiary via-secondary to-primary pt-1">
        <section className="grid w-full grid-cols-2 items-center bg-background p-8">
          <div className="animate-text bg-gradient-to-r from-tertiary via-secondary to-primary bg-clip-text text-left text-xs font-bold text-transparent sm:text-sm">
            <span>frankiemarie.me &copy; twentytwentyfour</span>
          </div>

          <div className="flex justify-end gap-4">
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
    </footer>
  );
};
