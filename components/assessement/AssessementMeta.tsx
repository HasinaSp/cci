import Image from "next/image";

export default function AssessmentMeta() {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-white/80">
      <span className="flex items-center gap-2">
        <Image src="/icons/clock.svg" alt="" width={16} height={16} />
        Estimated duration: ~15 minutes
      </span>

      <span className="flex items-center gap-2">
        <Image src="/icons/help.svg" alt="" width={16} height={16} />
        33 questions
      </span>
    </div>
  );
}
