import Image from "next/image";
import Link from "next/link";

type ActionCardProps = {
  image: string;
  title: string;
  description: string;
  details: string;
  ctaLabel: string;
  icon: string;
  href: string;
};

export default function ActionCard({
  image,
  title,
  description,
  details,
  ctaLabel,
  icon,
  href,
}: ActionCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md">
      
      {/* Image */}
      <div className="relative h-52 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 py-6 text-center">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mb-4 text-sm text-gray-700">
          {description}
        </p>

        <p className="mb-6 text-sm text-gray-500">
          {details}
        </p>

        {/* CTA */}
        <Link
          href={href}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
        >
          <Image src={icon} alt={`${ctaLabel} icon`} width={16} height={16} className="object-cover" />
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}