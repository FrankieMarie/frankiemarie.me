import { ReactNode, useState } from "react";
import { motion, AnimatePresence, Point } from "framer-motion";
import { wrap } from "popmotion";
import { DIRECTION, Direction, constraints, slideVariants } from "./defaults";
import { Next, Prev } from "./Buttons";

interface Props {
  slides: ReactNode[];
  selectedPage: number;
}

export const Carousel = ({ slides, selectedPage }: Props) => {
  const [[page, direction], setPage] = useState([selectedPage, 0]);
  const slideIndex = wrap(0, slides.length, page);
  const swipeThreshold = 10000;

  const paginate = (newDirection: Direction) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleDragEnd = (offset: Point, velocity: Point) => {
    const swipe = Math.abs(offset.x) * velocity.x;

    if (swipe < -swipeThreshold) {
      paginate(DIRECTION.forward);
    } else if (swipe > swipeThreshold) {
      paginate(DIRECTION.back);
    }
  };

  const handleDotClick = (index: number) => {
    const newDirection =
      index > slideIndex ? DIRECTION.forward : DIRECTION.back;
    paginate(newDirection);
  };

  return (
    <div className="relative flex w-full items-center justify-center">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={page}
          className="aboslute top-0 w-full"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="visible"
          exit="exit"
          drag="x"
          dragConstraints={constraints}
          onDragEnd={(_, { offset, velocity }) =>
            handleDragEnd(offset, velocity)
          }
        >
          {slides[slideIndex]}
        </motion.div>
      </AnimatePresence>
      <Next onClick={paginate} />
      <Prev onClick={paginate} />
    </div>
  );
};
