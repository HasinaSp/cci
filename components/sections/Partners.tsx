import Image from "next/image";

const partners = [
  { src: "/partner_1.png", alt: "Interreg" },
  { src: "/partner_2.png", alt: "European Union" },
  { src: "/partner_3.png", alt: "CERTH" },
  { src: "/partner_4.png", alt: "Partner" },
  { src: "/partner_5.png", alt: "CTA 20" },
  { src: "/partner_6.png", alt: "CCI Var" },
  { src: "/partner_7.png", alt: "Partner" },
  { src: "/partner_8.png", alt: "Partner" },
];

export default function Partners() {
  return (
    <section
      aria-labelledby="partners-title"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2
          id="partners-title"
          className="text-center text-2xl font-semibold text-slate-900"
        >
          Our{" "}
          <span className="font-bold text-[#0095D5]">
            partners
          </span>{" "}
          committed alongside us
        </h2>

        {/* Carousel */}
        <div className="relative mt-12 overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
            <div className="flex w-max animate-partners-scroll gap-8 mb-4">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="group flex h-20 min-w-[160px] items-center justify-center
                           rounded-xl bg-slate-100 px-6
                           transition-all duration-300
                           hover:bg-white hover:shadow-md hover:-translate-y-1"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={60}
                  className="object-contain opacity-80 transition group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="flex w-max animate-partners-scroll-reverse gap-8 mt-4">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="group flex h-20 min-w-[160px] items-center justify-center
                           rounded-xl bg-slate-100 px-6
                           transition-all duration-300
                           hover:bg-white hover:shadow-md hover:-translate-y-1"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={60}
                  className="object-contain opacity-80 transition group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
