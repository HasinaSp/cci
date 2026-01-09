import Image from "next/image";

export default function AdvancedMeta() {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-white/80">
      <span className="flex items-center gap-2">
        <Image src="/diagnostic/clock -blanc.png" alt="" width={16} height={16} />
        Estimated duration: ~ 60 minutes
      </span>

      <span className="flex items-center gap-2">
        <Image src="/diagnostic/question.png" alt="" width={16} height={16} />
        26 questions
      </span>
    </div>
  );
}
