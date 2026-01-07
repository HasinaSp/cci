import Image from "next/image";

export default function CircularMaturity() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
        {/* IMAGE */}
        <div >
          <Image
            src="/circular_maturity.png"
            alt="Circular maturity assessment illustration"
            width={480}
            height={480}
            className="w-full rounded-full"
            priority
          />
        </div>
        {/* TEXT */}
        <div className="relative mx-auto w-full max-w-md">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 px-10 py-3 text-md text-slate-900 font-medium border-2 border-blue-400 border-spacing-1.5 mb-3">
                      <Image
                        src="/oeil.png"
                        alt=""
                        width={24}
                        height={24}
                        className="inline-block justify-start mx-1"
                      />
                      Assess your Circular Maturity
          </span>
            <h1 className="text-4xl font-bold text-gray-800">
                Test your circular maturity and access tools to transform your organization
            </h1>

          <h2 className="mt-6 text-xl md:text-xl font-bold text-neutral-900">
            A tool to understand and measure your progress toward the circular economy
          </h2>

          <p className="mt-6 text-neutral-600 leading-relaxed">
            Based on ISO 59000 standards, the self-assessment provides a reliable and structured
            evaluation of your circular maturity. Identify your strengths, pinpoint areas for
            improvement, and guide your organization through a coherent transition aligned with
            international standards.
          </p>

          <button className="mt-8 rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white shadow-md transition hover:bg-primary/90">
            Start Your Assessment
          </button>
        </div>
      </div>
    </section>
  );
}
