import Image from "next/image";
import Link from "next/link";

type ResourceCardProps = {
  href: string;
  image: string;
  category: string;
  title: string;
  date: string;
  content: string;
  readTime: string;
};

export function ResourceCard({
  href,
  image,
  category,
  title,
  date,
  content,
  readTime,
}: ResourceCardProps) {
  return (
    <Link
      href={href}
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-3xl"
    >
      <article className="flex h-full flex-col cursor-pointer">
        
        {/* IMAGE */}
        <div className="relative overflow-visible">
          <Image
            src={image}
            alt={title}
            width={420}
            height={260}
            className="h-64 w-full rounded-3xl object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* CATEGORY */}
          <span className="absolute left-8 bottom-0 z-10 translate-y-1/2 rounded-full bg-[#C4E9F9] px-4 py-2 text-xs font-medium text-slate-900 backdrop-blur">
            {category}
          </span>
        </div>

        {/* CONTENT */}
        <div className="mt-4 flex flex-1 flex-col">
          <h3 className="text-base font-semibold text-neutral-900 leading-snug group-hover:text-blue-700">
            {title}
          </h3>

          <p className="mt-2 flex-1 min-h-[3.25rem] text-sm text-neutral-600">
            {content}
          </p>

          {/* FOOTER */}
          <div className="mt-4 flex items-center gap-3 text-xs text-neutral-500">
            <span className="inline-flex items-center gap-2">
              <Image
                src="/calendar.png"
                alt="Calendar icon"
                width={16}
                height={16}
              />
              <span>{date}</span>
            </span>

            <span className="text-neutral-300">•</span>

            <span className="inline-flex items-center gap-2">
              <Image
                src="/clock.png"
                alt="Clock icon"
                width={16}
                height={16}
              />
              <span>{readTime}</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
