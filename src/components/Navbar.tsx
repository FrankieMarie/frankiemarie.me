import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { close, menu } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-20 flex w-full items-center  transition-all sm:px-16 ${
        scrolled ? 'bg-background px-6 py-2' : 'bg-transparent px-6 py-5'
      }`}
    >
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between'>
        <Link to='/'>
          <p className='flex cursor-pointer items-baseline text-[20px] font-normal text-white'>
            <span
              className={`font-sourceCode font-semibold transition-all ${
                scrolled ? 'pink-orange-text-gradient' : 'text-white'
              }`}
            >
              FM &nbsp;
            </span>
            <span className='hidden font-sourceCode sm:block'>| Web Dev</span>
          </p>
        </Link>

        <ul className='hidden list-none flex-row gap-10 sm:flex'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-[16px] font-medium text-white hover:text-white`}
              onClick={() => setActive(nav.title)}
            >
              <a className='font-sourceCode' href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

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
      </div>
    </nav>
  );
};

export default Navbar;
