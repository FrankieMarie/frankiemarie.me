const Heading = () => {
  return (
    <div className='absolute inset-0 left-0 top-0 h-screen bg-black bg-opacity-40 px-6 py-24 sm:px-16 sm:py-40'>
      <div className='mx-auto flex max-w-[2000px] flex-row items-start gap-5 '>
        <div className='mt-5 flex flex-col items-center justify-center'>
          <div className='h-5 w-5 rounded-full bg-red' />
          <div className='orange-gradient h-40 w-1 sm:h-80' />
        </div>

        <div>
          <h1 className='mt-2 text-[32px] font-black text-white xs:text-[40px] sm:text-[60px] lg:text-[80px] lg:leading-[98px]'>
            Hi, I'm <span className='orange-text-gradient'>Frankie</span>
          </h1>
          <p className='m-0 mt-2 max-w-xl font-sourceCode text-[16px] font-medium text-white xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]'>
            I'm a software engineer from Upper Michigan. I develop user
            interfaces and web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
