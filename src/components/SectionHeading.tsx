interface Props {
  text: string;
  subText?: string;
  className?: string;
}

export const SectionHeading = ({ text, subText, className }: Props) => {
  return (
    <div className={className}>
      <h1 className="text-center text-32 font-bold">
        /
        <span className="bg-gradient-to-r from-tertiary via-primary to-secondary bg-clip-text font-bold text-transparent">
          {text}
        </span>
        <span className="text-secondary">.</span>
      </h1>
      {subText && (
        <p className="text-center text-18 text-tertiary">{subText}</p>
      )}
    </div>
  );
};
