import { Bars3Icon } from "@heroicons/react/24/outline";
import { Logo } from "./Logo";
import { useLocation } from "react-router-dom";
import { PATHS } from "src/routes";
import { Popover, PopoverTrigger, PopoverContent } from "../Popover";
import { Github } from "../SVGs/Github";
import { LinkedIn } from "../SVGs/LinkedIn";

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
        <Popover>
          <PopoverTrigger>
            <Bars3Icon className="w-8 text-primary hover:text-secondary" />
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-4 text-center">
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
              <hr className="block h-[1px] border-t border-tertiary p-0" />
              <div className="flex cursor-pointer justify-center gap-4">
                <Github />
                <LinkedIn />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};
