import Image from "next/image";
import Link from "next/link";
import AssessmentMeta from "./AssessementMeta";
import AssessmentCTA from "./AssessementCTA";

export default function AssessmentHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl text-white">
        <Image
            src="/diagnostic/basic-fleche.png"
            alt=""
            fill
            priority
            className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-950/90" />
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">  
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT */}
          <div>
            {/* Logos */}
            <div className="mb-6 flex items-center gap-4">
              <Image src="/diagnostic/logo.png" alt="CircleMED" width={320} height={64} />
            </div>

            {/* Badge */}
            <span className="mb-6 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              Basic Level
            </span>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Ready to assess <br />
              your circularity level?
            </h1>

            {/* Description */}
            <p className="mb-6 max-w-xl text-white/80">
              Answer a short set of questions to understand where your
              organization stands.
              <br /><br />
              You can complete the diagnostic at your own pace, your progress
              is saved automatically.
            </p>

            {/* Meta */}
            <AssessmentMeta />

            {/* CTA */}
            <AssessmentCTA />
          </div>

            {/* RIGHT */}
            <div className="relative hidden lg:block">
            <div className="relative ml-auto aspect-square w-[92%] translate-x-8 translate-y-8 overflow-hidden rounded-[32px] shadow-2xl">
                <Image
                src="/diagnostic/basic-card.png"
                alt="Circular economy"
                fill
                priority
                className="object-cover"
                />
            </div>
            </div>

        </div>
      </div>
    </section>
  );
}
