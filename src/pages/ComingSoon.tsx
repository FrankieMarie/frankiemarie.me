import { Link } from "react-router-dom";
import { PATHS } from "src/routes";

export const ComingSoon = () => {
  return (
    <div>
      <nav className="m-4">
        <Link
          className="font-dank text-tertiary transition-all hover:text-primary"
          to={PATHS.default}
        >
          Back to home
        </Link>
      </nav>
      <h1 className="mt-24 text-[64px]">
        <span className="animate-text mx-auto block w-full bg-gradient-to-r from-tertiary via-secondary to-primary bg-clip-text text-center text-transparent">
          Coming Soon.
        </span>
      </h1>
    </div>
  );
};
