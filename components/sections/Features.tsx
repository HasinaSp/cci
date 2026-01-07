export default function Features() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Decorative dots */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute right-10 bottom-20 h-32 w-32 rounded-full bg-sky-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Heading */}
        <span className="inline-block rounded-full bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
          Features
        </span>

        <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
          The features that make your circular transition easier
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-slate-600">
          Measure, analyze, and improve your circular performance with tools
          designed to support sustainable transformation.
        </p>

        {/* Visual block */}
        <div className="relative mt-20 flex items-center justify-center">
          {/* Left card */}
          <div className="absolute left-0 hidden max-w-xs rounded-2xl bg-white p-6 text-left shadow-lg md:block">
            <h3 className="font-semibold text-slate-900">
              Circular assessment
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Assess your organization’s circular maturity through structured
              indicators.
            </p>
          </div>

          {/* Central image */}
          <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/young_shoot.png"
              alt=""
              className="h-[420px] w-[320px] object-cover md:h-[520px] md:w-[380px]"
            />
          </div>

          {/* Right card */}
          <div className="absolute right-0 hidden max-w-xs rounded-2xl bg-white p-6 text-left shadow-lg md:block">
            <h3 className="font-semibold text-slate-900">
              Actionable insights
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Access tailored recommendations to improve your circular impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
