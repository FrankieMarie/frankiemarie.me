import { images } from 'src/assets/images/library';
import { Image } from '../Image';

export default function Library() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {images.map((x) => (
        <div>
          <Image webp={x} fallback={x} />
        </div>
      ))}
    </div>
  );
}
