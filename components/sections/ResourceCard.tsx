import Image from "next/image";

type ResourceCardProps = {
  image: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
};

export function ResourceCard({
  image,
  category,
  title,
  date,
  readTime,
}: ResourceCardProps) {
  return (
    <article className="group">
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt={title}
          width={420}
          height={260}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* CATEGORY */}
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 backdrop-blur">
          {category}
        </span>
      </div>

      {/* CONTENT */}
      <h3 className="mt-4 text-base font-semibold text-neutral-900 leading-snug">
        {title}
      </h3>

      <div className="mt-3 flex items-center gap-4 text-xs text-neutral-500">
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
    </article>
  );
}
