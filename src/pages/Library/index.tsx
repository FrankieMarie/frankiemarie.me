import { useEffect, useState } from "react";
import { libraryImages } from "src/assets";
import { Navbar } from "src/components";
import { Carousel } from "src/components/Carousel";
import { Modal } from "src/components/Modal";

export const Library = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (!showModal && selected != null) setShowModal(true);
  }, [selected]);

  const handleImageClick = (index: number) => setSelected(index);

  const handleClose = () => {
    setSelected(null);
    setShowModal(false);
  };

  const images = (size: string) =>
    libraryImages.map((x, i) => (
      <img
        key={x.img}
        className={`${size} object-cover`}
        src={x.img}
        onClick={() => handleImageClick(i)}
      />
    ));

  return (
    <div className="bg-background">
      <Navbar />
      <div className="mx-auto grid max-w-screen-content grid-cols-1 gap-8 px-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images("h-[400px] w-full")}
      </div>
      <Modal showModal={showModal} onClose={handleClose}>
        <Carousel
          slides={images("h-auto mx-auto")}
          selectedPage={selected as number}
        />
      </Modal>
    </div>
  );
};
