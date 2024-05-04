interface Props {
  src: string;
  fallback: string;
  alt?: string;
  className?: string;
}

export const Image = ({ src, fallback, alt, className }: Props) => {
  return (
    <picture className={className}>
      <source srcSet={src} type="image/webp" />
      <source srcSet={fallback} type="image/jpeg" />
      <img className="h-full w-full object-cover" src={fallback} alt={alt} />
    </picture>
  );
};
