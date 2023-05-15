const Heading = () => {
  return (
    <div className='absolute inset-0 left-0 top-0 mx-auto flex h-screen flex-row items-start gap-5 bg-black bg-opacity-40 px-6 py-24 sm:px-16 sm:py-40'>
      <div className='mt-5 flex flex-col items-center justify-center'>
        <div className='h-5 w-5 rounded-full bg-primary' />
        <div className='pink-orange-gradient h-40 w-1 sm:h-80' />
      </div>

      <div>
        <h1 className='mt-2 text-[40px] font-black text-white xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[98px]'>
          Hi, I'm <span className='pink-orange-text-gradient'>Frankie</span>
        </h1>
        <p className='mt-2 max-w-xl font-sourceCode text-[16px] font-medium text-white xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]'>
          I'm a web developer from Upper Michigan. I develop 3D visuals, user
          interfaces, and web apps.
        </p>
      </div>
    </div>
  );
};

export default Heading;
