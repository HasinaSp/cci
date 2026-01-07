import Image from "next/image";

type ResourceCardProps = {
  image: string;
  category: string;
  title: string;
  date: string;
  content: string;
  readTime: string;
};

export function ResourceCard({
  image,
  category,
  title,
  date,
  content,
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
        <span className="absolute bottom-1 left-4 z-10 rounded-full bg-blue-300 px-3 py-1 text-xs font-medium text-slate-900 backdrop-blur">
          {category}
        </span>
      </div>

      {/* CONTENT */}
      <h3 className="mt-4 text-base font-semibold text-neutral-900 leading-snug">
        {title}
      </h3>

      <p className="mt-2 text-sm text-neutral-600">
        {content}
      </p>
      <div className="mt-3 flex items-center gap-4 text-xs text-neutral-500">
        <Image src="/calendar.png" alt="Calendar icon" width={20} height={20}></Image>
        <span>{date}</span>
        <span>•</span>
        <Image src="/clock.png" alt="Clock icon" width={20} height={20}></Image>
        <span>{readTime}</span>
      </div>
    </article>
  );
}
