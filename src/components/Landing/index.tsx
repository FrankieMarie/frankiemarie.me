import { Footer } from '../Footer';
import { StarsCanvas } from '../canvas';
import { About } from './About';
import { Hero } from './Hero';
import Tech from './Tech';

export const Landing = () => {
  return (
    <div className='relative'>
      <Hero />
      <div className='mx-auto max-w-screen-content bg-background bg-opacity-50'>
        <About />
        <Tech />
      </div>
      <StarsCanvas />
      <Footer />
    </div>
  );
};
