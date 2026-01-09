export default function BigCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#476cfd] via-[#32b3eb] to-white" />

      {/* Soft light overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
          Let CirclePlatform guide <br /> your transition toward a more <br />circular future.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base text-slate-800/90">
          CircleHub guides you through each step. Begin your
           <br /> assessment and accelerate your circular transition.
        </p>

        <div className="mt-10">
          <button
            className="inline-flex items-center justify-center rounded-full
                       bg-slate-900 px-8 py-3 text-sm font-semibold
                       text-white transition
                       hover:bg-slate-800 focus:outline-none
                       focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            Start My Assessment
          </button>
        </div>
      </div>
    </section>
  );
}
