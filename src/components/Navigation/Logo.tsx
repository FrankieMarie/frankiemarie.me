import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
      <p className="flex cursor-pointer items-baseline text-[20px] font-normal text-white">
        <span className="animate-text bg-gradient-to-r from-tertiary via-secondary to-primary bg-clip-text font-bold text-transparent">
          FM&nbsp;
        </span>
        <span className="hidden font-bold sm:block">| Web Dev</span>
      </p>
    </Link>
  );
};
