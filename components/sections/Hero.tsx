import HeroCircles from "./HeroCircles";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center text-center">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/bg-acceuil.png')] bg-cover bg-center" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-white">
        {/* Badge */}
        <span className="mb-6 text-emerald-950 inline-block rounded-full bg-gradient-to-r from-white via-[#f7f8f8] to-[#47fda2] px-4 py-2 border-3 border-white text-sm backdrop-blur">
                    <Image
                      src="/stars.png"
                      alt=""
                      width={16}
                      height={16}
                      className="inline-block mr-2"
                    />
          Assess your circularity
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Accelerate your transition <br /> to a circular economy
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-white/90">
          Discover a simple, structured tool to assess your circularity level and <br /> receive a personalized action plan.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <button className="rounded-full bg-[#0095D5] px-6 py-2 text-base hover:bg-blue-600 transition">
            Start My Assessment
          </button>
        </div>
      </div>
      <HeroCircles />
    </section>
  );
}
