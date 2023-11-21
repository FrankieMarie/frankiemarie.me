import { useEffect, useState } from 'react';
import { github, linkedin } from 'src/assets';
import { Logo } from './Logo';

export const Navbar = () => {
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
      className={`z-20 mx-auto flex w-full max-w-screen-content items-center transition-all sm:px-16 ${
        scrolled
          ? 'bg-background px-6 py-2 shadow-md'
          : 'bg-transparent px-6 py-5'
      }`}
    >
      <div className='flex w-full max-w-screen-content items-center justify-between'>
        <Logo />
        <section className='flex gap-4'>
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
