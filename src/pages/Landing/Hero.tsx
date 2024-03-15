import hero from "../../assets/images/0_0.webp";
import { PATHS } from "src/routes";
import { CarrotDown } from "src/components/SVGs/CarrotDown";
import { Image } from "src/components/Image";

interface Props {
  scrolled: boolean;
}

export const Hero = ({ scrolled }: Props) => {
  return (
    <>
      <section className="mb-4 flex h-full w-full flex-col justify-between">
        <div className="mx-auto flex w-full max-w-screen-content flex-col gap-5 px-6 pt-32 sm:px-8 md:pt-48">
          <h1 className="text-32 font-black text-white xs:text-[40px] sm:text-[60px] lg:text-[80px] ">
            Hi, I'm{" "}
            <span className="animate-text bg-gradient-to-r from-tertiary via-secondary to-primary bg-clip-text font-bold text-transparent">
              Frankie
            </span>
          </h1>
          <p className="font-sourceCode m-0 max-w-xl text-[16px] font-medium text-white xs:text-[20px] sm:text-[26px] lg:text-[30px]">
            I develop user interfaces and web applications.
          </p>
        </div>
        {!scrolled && (
          <a href={PATHS.overview}>
            <CarrotDown />
          </a>
        )}
      </section>
      <Image
        className="absolute left-0 top-0 -z-10 h-screen w-full object-cover opacity-50"
        webp={hero}
        fallback={hero}
        alt="Breaking Through the Firmament"
      />
    </>
  );
};
