import Image from "next/image";

export default function PinnedLogos() {
  return (
    <div className="flex items-center shadow-lg">
      <Image
        src="/diagnostic/circleMed.png"
        alt="CircleMED"
        width={328}
        height={40}
      />
    </div>
  );
}
