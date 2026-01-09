type Props = {
  category: string;
  date: string;
  type: string;
  updatedAt: string;
};

export function ResourceMeta({
  category,
  date,
  type,
  updatedAt,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 text-sm">
      <span className="rounded-full bg-green-100 px-3 py-1 text-green-800">
        {category}
      </span>
      <span className="rounded-full bg-slate-100 px-3 py-1">
        {date}
      </span>
      <span className="rounded-full bg-slate-100 px-3 py-1">
        {type}
      </span>
      <span className="rounded-full bg-slate-100 px-3 py-1">
        Last update: {updatedAt}
      </span>
    </div>
  );
}
