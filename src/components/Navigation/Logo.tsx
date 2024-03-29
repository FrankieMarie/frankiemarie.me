import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
      <p className="flex cursor-pointer items-baseline text-[20px] font-normal text-white">
        <span className="animate-text bg-gradient-to-r from-tertiary via-secondary to-primary bg-clip-text text-14 font-bold text-transparent sm:text-16 md:text-18">
          FM
        </span>
        <span className="px-2">|</span>
        <span className="text-14 font-bold sm:text-16 md:text-18">Web Dev</span>
      </p>
    </Link>
  );
};
