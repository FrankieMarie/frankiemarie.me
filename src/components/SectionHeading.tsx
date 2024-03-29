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
        <span className="animate-text bg-gradient-to-r from-tertiary via-secondary to-primary bg-clip-text text-center text-transparent">
          {text}
        </span>
        <span className="text-primary">.</span>
      </h1>
      {subText && (
        <p className="text-center text-18 text-tertiary">{subText}</p>
      )}
    </div>
  );
};
