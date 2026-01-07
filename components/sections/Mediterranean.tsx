import Image from "next/image";

export default function Mediterranean() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT – Image composition */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Image 1 */}
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/mediterranean_1.png"
                alt="Mediterranean landscape"
                width={420}
                height={560}
                className="object-cover"
                priority
              />
            </div>

            {/* Image 2 (overlay) */}
            <div className="absolute left-48 top-24 z-20 hidden overflow-hidden rounded-3xl shadow-2xl md:block">
              <Image
                src="/mediterranean_2.png"
                alt="Mediterranean coast"
                width={420}
                height={520}
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT – Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700">
              ⚡ Mediterranean Circularity
            </div>

            {/* Title */}
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900">
              Accelerating{" "}
              <span className="text-sky-600">Circularity</span>{" "}
              Across the{" "}
              <span className="text-sky-600">
                Mediterranean
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              CircleMED aims to transform the Mediterranean region into
              a network of territories committed to the circular economy.
              By involving citizens, businesses, public authorities,
              and researchers, the project promotes the adoption of
              sustainable production and consumption models while
              testing innovative solutions ready to be scaled up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
