import hero from 'src/assets/images/background.webp';
import ScrollAnimation from './ScrollAnimation';
import { Image } from './Image';
import { Navbar } from './Navigation';

export const Hero = () => {
  return (
    <section className='relative mx-auto h-screen max-w-screen-content overflow-hidden min-[1920px]:shadow-hero'>
      <Navbar />
      <div className='flex max-w-screen-content flex-col items-start gap-5 px-6 pt-24 sm:px-16 md:pt-48'>
        <h1 className='text-[32px] font-black leading-[32px] text-white xs:text-[40px] xs:leading-[40px] sm:text-[60px] sm:leading-[60px] lg:text-[80px] lg:leading-[80px]'>
          Hi, I'm <span className='pink-orange-text-gradient'>Frankie</span>
        </h1>
        <p className='m-0 max-w-xl font-sourceCode text-[16px] font-medium text-white xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]'>
          I develop user interfaces and web applications.
        </p>
      </div>
      <ScrollAnimation />
      <Image
        className='absolute left-0 top-0 -z-10 h-screen w-full object-cover opacity-50 min-[1920px]:shadow-hero'
        webp={hero}
        fallback={hero}
        alt='Breaking Through the Firmament'
      />
    </section>
  );
};
