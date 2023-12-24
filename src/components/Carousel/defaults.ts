export type Direction = 1 | -1;

export const DIRECTION = {
  back: -1,
  forward: 1
} as const;

export const constraints = { left: 0, right: 0 };

export const slideVariants = {
  enter: (direction: Direction) => ({
    x: direction === DIRECTION.forward ? 500 : -500,
    opacity: 0,
    transition: {
      duration: 0
    }
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: (direction: Direction) => ({
    x: direction === DIRECTION.back ? 500 : -500,
    opacity: 0,
    transition: {
      duration: 0
    }
  })
};

export const dotVariants = {
  initial: {
    y: 0
  },
  animate: {
    y: -1,
    scale: 1.3,
    transition: { type: 'spring', stiffness: 1000, damping: '10' }
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.25 }
  }
};
