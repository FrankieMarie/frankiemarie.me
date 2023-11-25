import { Link } from 'react-router-dom';
import { Camera } from './Camera';
import { PATHS } from 'src/routes';

export const Footer = () => {
  return (
    <section className='absolute bottom-0 grid w-full grid-cols-2 items-center bg-secondary p-3 font-semibold md:grid-cols-3'>
      <div className='hidden md:block' />
      <div className='text-left text-xs text-background sm:text-sm md:text-center'>
        <span>&copy; frankiemarie.me | 2023</span>
      </div>
      <nav className='flex justify-end'>
        <Link to={PATHS.library}>
          <Camera />
        </Link>
      </nav>
    </section>
  );
};
