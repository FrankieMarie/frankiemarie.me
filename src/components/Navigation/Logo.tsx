import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to='/' onClick={() => window.scrollTo(0, 0)}>
      <p className='flex cursor-pointer items-baseline text-[20px] font-normal text-white'>
        <span className='pink-orange-text-gradient font-sourceCode font-bold'>
          FM &nbsp;
        </span>
        <span className='hidden font-sourceCode sm:block'>| Web Dev</span>
      </p>
    </Link>
  );
};
