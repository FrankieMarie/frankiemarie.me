import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
      <p className="flex cursor-pointer items-baseline text-[20px] font-normal text-white">
        <span className="text-14 font-bold text-primary transition-all hover:text-secondary sm:text-16 md:text-18">
          FM
        </span>
        <span className="px-2 text-tertiary">|</span>
        <span className="text-14 font-bold text-tertiary sm:text-16 md:text-18">
          Web Dev
        </span>
      </p>
    </Link>
  );
};
