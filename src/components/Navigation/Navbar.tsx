import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { github, linkedin } from '../../assets';

export const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
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
        <section className='flex gap-4'>
          <Menu active={active} setActive={setActive} />
          <div className='flex gap-4'>
            <a href='https://github.com/FrankieMarie' target='_blank'>
              <img className='w-5' src={github} />
            </a>
            <a
              href='https://www.linkedin.com/in/frankiedenell/'
              target='_blank'
            >
              <img className='w-5' src={linkedin} />
            </a>
          </div>
        </section>
      </div>
    </nav>
  );
};
