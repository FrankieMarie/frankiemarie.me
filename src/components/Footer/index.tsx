import { Link } from "react-router-dom";
import { Camera } from "./Camera";
import { PATHS } from "src/routes";

export const Footer = () => {
  return (
    <section className="mx-8 mb-8 grid grid-cols-2 items-center py-8 md:grid-cols-3">
      <div className="hidden md:block" />
      <div className="text-left text-xs font-bold text-primary sm:text-sm md:text-center">
        <span>&copy; frankiemarie.me | 2023</span>
      </div>
      <nav className="flex justify-end">
        <Link to={PATHS.library}>
          <Camera />
        </Link>
      </nav>
    </section>
  );
};
