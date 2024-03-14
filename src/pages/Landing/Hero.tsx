import { Image } from "../../components/Image";
import hero from "../../assets/images/0_0.webp";

export const Hero = () => {
  return (
    <section className="mb-8 w-full">
      <div className="mx-auto flex h-full max-w-screen-content flex-col items-start gap-5 px-6 pt-24 sm:px-8 md:pt-48">
        <h1 className="leading-32 text-32 font-black text-white xs:text-[40px] xs:leading-[40px] sm:text-[60px] sm:leading-[60px] lg:text-[80px] lg:leading-[80px]">
          Hi, I'm{" "}
          <span className="animate-text bg-gradient-to-r from-tertiary via-secondary to-primary bg-clip-text font-bold text-transparent">
            Frankie
          </span>
        </h1>
        <p className="font-sourceCode m-0 max-w-xl text-[16px] font-medium text-white xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]">
          I develop user interfaces and web applications.
        </p>
      </div>
      <Image
        className="absolute left-0 top-0 -z-10 h-screen w-full object-cover opacity-50"
        webp={hero}
        fallback={hero}
        alt="Breaking Through the Firmament"
      />
    </section>
  );
};
