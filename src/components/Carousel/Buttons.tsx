import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { DIRECTION, Direction } from "./defaults";

interface Props {
  onClick: (direction: Direction) => void;
}

export const Next = ({ onClick }: Props) => {
  return (
    <div
      className="absolute right-0 z-20 hover:text-primary"
      onClick={(e) => {
        e.stopPropagation();
        onClick(DIRECTION.forward);
      }}
    >
      <ChevronRightIcon className="h-6 w-6 cursor-pointer text-secondary" />
    </div>
  );
};

export const Prev = ({ onClick }: Props) => {
  return (
    <div
      className="absolute left-0 z-50 hover:text-primary"
      onClick={(e) => {
        e.stopPropagation();
        onClick(DIRECTION.back);
      }}
    >
      <ChevronLeftIcon className="h-6 w-6 cursor-pointer text-secondary" />
    </div>
  );
};
