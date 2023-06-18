const Heading = () => {
  return (
    <div className='absolute inset-0 left-0 top-0 h-screen bg-black bg-opacity-40 px-6 py-24 sm:px-16 sm:py-40'>
      <div className='mx-auto mt-6 flex max-w-[2000px] flex-col items-start gap-5 '>
        <h1 className='text-[32px] font-black leading-[32px] text-white xs:text-[40px] xs:leading-[40px] sm:text-[60px] sm:leading-[60px] lg:text-[80px] lg:leading-[80px]'>
          Hi, I'm <span className='pink-orange-text-gradient'>Frankie</span>
        </h1>
        <p className='m-0 max-w-xl font-sourceCode text-[16px] font-medium text-white xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]'>
          I'm a software engineer from Upper Michigan. I develop user interfaces
          and web applications.
        </p>
      </div>
    </div>
  );
};

export default Heading;
