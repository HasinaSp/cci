import type { ReactNode } from "react";

type FeatureCardProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
  className?: string;
};

export function FeatureCardLittle({
  icon = null,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <div
      className={`w-64 rounded-2xl bg-white p-3 shadow-lg ${className? ' ' + className : ''}`}
    >
    <div className="inline-flex flex-1 justify-center gap-2">
        {icon && <div className="">{icon}</div>}
        <span className="flex flex-col gap-2 justify-end m-1"></span>
      <h3 className="font-semibold text-center text-neutral-900">{title}</h3>
            {description && (
        <p className="mt-2 text-sm flex text-center text-neutral-600">{description}</p>
      )}
    </div>
    </div>
  );
}
