import { navLinks } from '../../constants';

interface Props {
  active: string;
  setActive: (x: string) => void;
}

export const Menu = ({ setActive }: Props) => {
  return (
    <ul className='flex list-none flex-row gap-10'>
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`cursor-pointer text-[16px] font-medium text-white`}
          onClick={() => setActive(nav.title)}
        >
          <a
            className='relative font-sourceCode before:absolute before:bottom-[-4px] before:left-0 before:block before:h-[3px] before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition before:duration-300 before:ease-in-out before:content-[""] before:hover:scale-x-100'
            href={`#${nav.id}`}
          >
            {nav.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
