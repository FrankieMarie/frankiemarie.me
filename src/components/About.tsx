import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from './SectionWrapper';

export const About = SectionWrapper(() => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='pink-orange-text-gradient text-[14px] uppercase tracking-wider sm:text-[18px]'>
          Introduction
        </p>
        <h2 className='text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]'>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('up', '', 0.1, 1)}
        className='mt-4 max-w-3xl text-base leading-[30px] text-white'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
    </>
  );
}, 'about');
