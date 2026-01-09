export default function OptionButton({
  label,
  value,
  active,
  onClick,
}: {
  label: string;
  value: string;
  active: boolean;
  onClick: (value: string) => void;
}) {
  return (
    <button
      onClick={() => onClick(value)}
      className={`flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition
        ${
          active
            ? "border-white bg-white/10"
            : "border-white/30 hover:border-white"
        }`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded border border-white/40">
        {value}
      </span>
      {label}
    </button>
  );
}
