import ScrollAnimation from './ScrollAnimation';
import VideoBackground from './VideoBackground';
import Heading from './Heading';

const Hero = () => {
  return (
    <section className='relative mx-auto h-screen w-full'>
      <Heading />
      <VideoBackground />
      <ScrollAnimation />
    </section>
  );
};

export default Hero;
