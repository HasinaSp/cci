import { FeatureCard } from "./FeatureCard";
import Image from "next/image";
import { FeatureCardLittle } from "./FeatureCardLittle";


export default function Features() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
          The features that make your 
          <br />circular transition easier
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
          CircleHub provides a set of simple, effective tools to help you analyze your practices,<br />
          understand your results, and deploy concrete actions.
        </p>
      </div>
        <img
        src="/feuille.png"
        alt=""
        className="pointer-events-none absolute right-[64px] top-40 w-80"
      />
    <div className="relative flex h-[520px] w-full items-center justify-center">
        <img
            src="/circle-2.png"
            alt=""
            className="absolute z-0 h-[580px] w-[580px] opacity-80"
        />

        <img
            src="/circle.png"
            alt=""
            className="absolute z-10 h-[420px] w-[420px] opacity-90"
        />
        <div
            className="absolute h-[420px] w-[420px] rounded-full blur-sm"
            style={{
                background: "radial-gradient(circle, #8AB9FF 0%, rgba(138,185,255,0.3) 60%, transparent 100%)",
            }}
        />
        <div className="relative z-40 h-[460px] w-[260px] overflow-hidden rounded-3xl shadow-xl">
            <img
            src="/young_shoot.png"
            alt="Play the video"
            className="h-full w-full object-cover"
            />
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-bold text-white">
            Play the video
            </span>
        </div>
        {/* LEFT */}
        <FeatureCard
          icon={<Image src="/pc.png" alt="" width={40} height={40} />}
          title="A clear assessment"
          description="A questionnaire that helps you explore the core dimensions of the circular economy."
          cta="Start My Assessment"
          className="absolute z-30 left-64 top-36"
        />

        <FeatureCardLittle
          title="100+"
          icon={<Image src="/global-search.png" alt="" width={40} height={40} />}
          description="Resource you can rely on"
          className="absolute z-30 left-64 bottom-20"
        />
        <img src="/arrow-2.png" 
        alt="" 
        className="pointer-events-none absolute left-96 bottom-0 w-24"
        />
        {/* RIGHT */}
        <img src="/arrow.png" 
        alt="" 
        className="pointer-events-none absolute right-96 top-4 w-24"
        />
        <FeatureCardLittle
          icon={<Image src="/messages.png" alt="" width={40} height={40} />}
          title="Consistently reliable results"
          className="absolute right-64 top-20 z-20"
          />

        <FeatureCard
          icon={<Image src="/add-doc.png" alt="" width={40} height={40} />}
          title="A ready-to-use action plan"
          description="CircleHub turns your results into a practical, operational roadmap."
          cta="Access your account"
          className="absolute right-64 bottom-40 z-20"
         />
    </div>
    </section>
  );
}
