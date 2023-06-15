import { BallCanvas } from './canvas';
import { technologies } from '../constants';
import { SectionWrapper } from './SectionWrapper';

const Tech = () => {
  return (
    <section className='-mt-20 flex flex-row flex-wrap justify-center gap-10 pb-16'>
      {technologies.map((x) => (
        <div className='h-28 w-28' key={x.name}>
          <BallCanvas icon={x.icon} />
        </div>
      ))}
    </section>
  );
};

export default SectionWrapper(Tech, 'tech');
