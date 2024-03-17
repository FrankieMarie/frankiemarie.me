interface Props {
  text: string;
}

export const Tag = ({ text }: Props) => {
  return (
    <div className="h-5 rounded-full bg-primary px-3 text-center text-12 font-bold leading-5">
      <p className="inline-block align-middle leading-normal text-background">
        {text}
      </p>
    </div>
  );
};
