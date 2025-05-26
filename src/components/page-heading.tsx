import GradientBox from "./gradient-box";

interface PageHeadingProps {
  title: string;
  titleClassName?: string;
  subtitle: string;
  subtitleClassName?: string;
}

export default function PageHeading({
  title,
  titleClassName = "",
  subtitle,
  subtitleClassName = "",
}: PageHeadingProps) {
  return (
    <div className="text-center space-y-10 mb-10">
      <div className="space-y-4">
        <h1 className={titleClassName}>{title}</h1>
        <h2 className={`font-light ${subtitleClassName}`}>{subtitle}</h2>
      </div>
      <GradientBox className="w-full h-32" />
    </div>
  );
}
