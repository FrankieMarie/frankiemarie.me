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

      <div className="bg-gradient-to-r from-tertiary via-primary to-secondary pt-1">
        <section className="bg-background px-8">
          <div className="mx-auto flex w-full max-w-screen-content items-center justify-between py-6">
            <div className="text-xs font-bold text-tertiary sm:text-sm">
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
          </div>
        </section>
      </div>
    </footer>
  );
};
