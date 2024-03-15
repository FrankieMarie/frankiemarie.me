import { Logo } from "./Logo";
import { useLocation } from "react-router-dom";
import { PATHS } from "src/routes";

interface Props {
  scrolled: boolean;
  active: string;
}

export const Navbar = ({ scrolled, active }: Props) => {
  return (
    <nav
      className={`sticky top-0 z-20 mx-auto flex w-full items-center px-4 py-3 transition-all sm:px-8 ${
        scrolled ? "bg-background bg-opacity-90" : "bg-transparent"
      } `}
    >
      <div className="mx-auto flex w-full max-w-screen-content items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <a
            className={`text-14 font-bold transition-all hover:text-primary sm:text-16 ${
              active === PATHS.overview ? "text-primary" : "text-tertiary"
            }`}
            href={PATHS.overview}
          >
            Overview
          </a>
          <a
            className={`text-14 font-bold transition-all hover:text-primary sm:text-16 ${
              active === PATHS.projects ? "text-primary" : "text-tertiary"
            }`}
            href={PATHS.projects}
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};
