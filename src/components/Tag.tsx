interface Props {
  text: string;
}

export const Tag = ({ text }: Props) => {
  return (
    <div className="flex h-6 items-center rounded-full bg-primary px-2">
      <span className="h-4 text-center text-12 font-bold text-background">
        {text}
      </span>
    </div>
  );
};
