import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { SectionWrapper } from './SectionWrapper';
import { textVariant } from 'src/utils/motion';

const Tech = () => {
  return (
    <div className='px-8 pb-40 pt-24 sm:px-16'>
      <motion.div variants={textVariant()}>
        <p className='pink-orange-text-gradient text-[14px] font-semibold uppercase tracking-wider sm:text-[18px]'>
          Technologies
        </p>
        <h2 className='text-[30px] font-black text-white sm:text-[60px]'>
          Tools Used.
        </h2>
      </motion.div>

      <div className='mt-8 flex flex-row flex-wrap justify-center gap-10 sm:justify-start'>
        {technologies.map((x) => (
          <div className='h-28 w-28 text-center' key={x.name}>
            <h3 className='pink-orange-text-gradient text-[14px] font-semibold uppercase tracking-wider'>
              {x.name}
            </h3>
            <BallCanvas icon={x.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
