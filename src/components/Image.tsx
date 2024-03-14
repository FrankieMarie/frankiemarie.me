interface Props {
  webp: string;
  fallback: string;
  alt?: string;
  className?: string;
}

export const Image = ({ webp, fallback, alt, className }: Props) => {
  return (
    <picture className={className}>
      <source srcSet={webp} type="image/webp" />
      <source srcSet={fallback} type="image/jpeg" />
      <img className="h-full w-full object-cover" src={fallback} alt={alt} />
    </picture>
  );
};
