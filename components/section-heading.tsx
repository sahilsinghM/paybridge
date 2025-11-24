interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-3 text-center">
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="subtext max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}
