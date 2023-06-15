import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from './SectionWrapper';

export const About = SectionWrapper(() => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className='orange-text-gradient text-[14px] uppercase tracking-wider sm:text-[18px]'>
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
        I'm an experienced software developer with expertise in TypeScript and
        JavaScript, and frameworks such as React, Node.js, and Three.js. I'm a
        quick and perpetual learner, and collaborate closely with clients and
        co-workers to create efficient, scalable, and user-friendly solutions.
      </motion.p>
      <motion.p
        variants={fadeIn('up', '', 0.1, 1)}
        className='mt-4 max-w-3xl text-base leading-[30px] text-white'
      >
        Outside of software, I enjoy outdoor activities like kayaking, fishing,
        four-wheeling and exploring, spending time with my many animals, and
        working on artistic projects such as drawing, painting, and crafting.
      </motion.p>
    </section>
  );
}, 'about');
