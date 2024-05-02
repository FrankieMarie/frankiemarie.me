import { Tag } from "./Tag";

interface Props {
  title: string;
  text: string;
  tags: string[];
  onClick: () => void;
}

export const ProjectCard = ({ title, text, tags, onClick }: Props) => {
  return (
    <div className="relative flex flex-col items-center justify-start rounded-xl border border-transparent bg-darkGrey bg-opacity-30 p-4 transition-all hover:border-primary">
      <button type="button" onClick={onClick}>
        <h2 className="mb-2 bg-gradient-to-r from-white via-primary to-secondary bg-clip-text font-bold text-transparent">
          {title}
        </h2>
        <p className="mb-12 text-center">{text}</p>
        <div className="absolute bottom-4 left-4 flex w-[calc(100%-2rem)] flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <Tag key={`${title}-${tag}`} text={tag} />
          ))}
        </div>
      </button>
    </div>
  );
};
