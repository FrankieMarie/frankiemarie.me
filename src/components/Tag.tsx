interface Props {
  text: string;
}

export const Tag = ({ text }: Props) => {
  return (
    <div className="rounded-full bg-primary px-3 pb-1 pt-2 text-12 font-bold uppercase leading-3 text-background">
      {text}
    </div>
  );
};
