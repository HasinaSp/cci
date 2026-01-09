export default function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div className="mb-8">
      <div className="h-1 w-full rounded bg-white/20">
        <div
          className="h-1 rounded bg-white transition-all"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    <div className="flex flex-1 gap-1 mb-2 text-sm font-semibold text-blue-200 opacity-80">
        {current} <p className="text-white">of</p> {total}
      </div>
    </div>
  );
}
