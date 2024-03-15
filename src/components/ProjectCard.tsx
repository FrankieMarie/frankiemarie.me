import { Tag } from "./Tag";

interface Props {
  title: string;
  text: string;
  url: string;
  tags: string[];
}

export const ProjectCard = ({ title, text, url, tags }: Props) => {
  return (
    <div className="relative flex flex-col items-center justify-start rounded-xl bg-darkGrey bg-opacity-30 p-4 shadow-[rgba(255,211,211,_0.25)_0px_4px_16px] transition-all hover:shadow-[0_4px_16px_rgba(255,255,255,_0.55)]">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h2 className="animate-text mb-2 bg-gradient-to-r from-tertiary via-secondary to-primary bg-clip-text text-center font-bold text-transparent">
          {title}
        </h2>
        <p className="mb-16 text-center">{text}</p>
        <div className="absolute bottom-4 left-4 flex w-[calc(100%-2rem)] flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <Tag key={`${title}-${tag}`} text={tag} />
          ))}
        </div>
      </a>
    </div>
  );
};
