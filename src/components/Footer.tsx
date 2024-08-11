import { Github } from '../assets/SVGs/Github';
import { LinkedIn } from '../assets/SVGs/LinkedIn';

export const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="mx-auto flex w-full max-w-screen-nav items-center justify-between p-8">
        <div className="flex gap-2 text-14">
          <div className="flex items-baseline">
            <span className="font-bold text-gold">FM</span>
            <span className="font-normal">Web Dev</span>
          </div>
          <span>&copy;</span> <span>twentytwentyfour</span>
        </div>

        <div className="flex justify-end gap-8">
          <a href="https://github.com/FrankieMarie" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/frankiedenell/" target="_blank">
            <LinkedIn />
          </a>
        </div>
      </div>
    </footer>
  );
};
