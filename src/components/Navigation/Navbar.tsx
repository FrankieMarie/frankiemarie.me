import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
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
      <div className='mx-auto flex w-full max-w-[2000px] items-center justify-between'>
        <Logo />
        <Menu active={active} setActive={setActive} />
        <MobileMenu
          active={active}
          setActive={setActive}
          toggle={toggle}
          setToggle={setToggle}
        />
      </div>
    </nav>
  );
};
