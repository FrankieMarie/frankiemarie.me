import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { SectionWrapper } from './SectionWrapper';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((x) => (
        <div className='h-28 w-28' key={x.name}>
          <BallCanvas icon={x.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
