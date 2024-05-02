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
        scrolled ? "backdrop-blur-sm" : "bg-transparent"
      } `}
    >
      <div className="mx-auto flex w-full max-w-screen-content items-center justify-between">
        <Logo />
        <div className="flex items-center gap-8">
          <a
            className={`text-14 font-bold transition-all hover:text-secondary ${
              active === PATHS.overview ? "text-secondary" : "text-primary"
            }`}
            href={PATHS.overview}
          >
            Overview
          </a>
          <a
            className={`text-14 font-bold transition-all hover:text-secondary ${
              active === PATHS.projects ? "text-secondary" : "text-primary"
            }`}
            href={PATHS.projects}
          >
            Projects
          </a>
          <a
            className={`text-14 font-bold transition-all hover:text-secondary ${
              active === PATHS.contact ? "text-secondary" : "text-primary"
            }`}
            href={PATHS.contact}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
