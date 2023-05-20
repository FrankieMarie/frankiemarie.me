import { navLinks } from '../../constants';
import { close, menu } from '../../assets';

interface Props {
  toggle: boolean;
  setToggle: (x: boolean) => void;
  active: string;
  setActive: (x: string) => void;
}

export const MobileMenu = ({ toggle, setToggle, setActive }: Props) => {
  return (
    <div className='flex flex-1 items-center justify-end sm:hidden'>
      <img
        src={toggle ? close : menu}
        alt='menu'
        className='h-[28px] w-[28px] object-contain'
        onClick={() => setToggle(!toggle)}
      />

      <div
        className={`${
          !toggle ? 'hidden' : 'flex'
        } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
      >
        <ul className='flex flex-1 list-none flex-col items-start justify-end gap-4'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className='cursor-pointer font-poppins text-[16px] font-medium '
              onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
