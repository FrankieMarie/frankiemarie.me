import { libraryImages } from "src/assets";
import { Navbar } from "src/components";
import { Footer } from "src/components/Footer";

export const Library = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto grid max-w-screen-content grid-cols-1 gap-8 px-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {libraryImages.map((x) => (
          <img className="h-[400px] w-full object-cover" src={x.img} />
        ))}
      </div>
    </div>
  );
};
