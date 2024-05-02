import { Link } from "react-router-dom";
import { PATHS } from "src/routes";

export const ComingSoon = () => {
  return (
    <div>
      <nav className="m-4">
        <Link
          className="font-dank text-primary transition-all hover:text-secondary"
          to={PATHS.default}
        >
          Back to home
        </Link>
      </nav>
      <h1 className="mt-24 text-[64px]">
        <span className="mx-auto block w-full bg-gradient-to-r from-tertiary via-primary to-secondary bg-clip-text text-center font-bold text-transparent">
          Coming Soon.
        </span>
      </h1>
    </div>
  );
};
