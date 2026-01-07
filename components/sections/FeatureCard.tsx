type FeatureCardProps = {
  title: string;
  description?: string;
  cta?: string;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  cta,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={`w-64 rounded-2xl bg-white p-5 shadow-lg ${className}`}
    >
      <h3 className="font-semibold text-neutral-900">{title}</h3>
      {description && (
        <p className="mt-2 text-sm text-neutral-600">{description}</p>
      )}
      {cta && (
        <button className="mt-4 rounded-full bg-primary px-4 py-2 text-xs font-medium text-white">
          {cta}
        </button>
      )}
    </div>
  );
}
