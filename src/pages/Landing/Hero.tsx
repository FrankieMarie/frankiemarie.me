import hero from "../../assets/kayak.jpg";
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
        <div className="mx-auto flex h-3/4 w-full max-w-screen-content flex-col justify-center px-6 text-right sm:px-8">
          <h1 className="bg-gradient-to-r from-white via-tertiary to-secondary bg-clip-text text-28 font-bold text-transparent xs:text-[40px] sm:text-[60px] lg:text-[68px] ">
            Hi, I'm <span className="">Frankie</span>
          </h1>
          <div className="flex justify-end">
            <p className="m-0 max-w-md text-right font-dank text-16 font-medium text-tertiary  xs:text-22 sm:text-24 lg:text-28">
              I develop user interfaces and web applications.
            </p>
          </div>
        </div>
        {!scrolled && (
          <a href={PATHS.overview}>
            <CarrotDown />
          </a>
        )}
      </section>
      <Image
        className="absolute left-0 right-0 top-0 -z-10 mx-auto h-screen w-full max-w-[2560px] object-cover text-center opacity-45"
        webp={hero}
        fallback={hero}
        alt="Breaking Through the Firmament"
      />
    </>
  );
};
