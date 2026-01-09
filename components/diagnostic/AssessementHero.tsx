import Image from "next/image";


export default function AssessmentHero() {
  return (
    <section className="relative overflow-hidden bg-[url('/diagnostic/background.png')] bg-cover bg-center bottom-0">
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rotate-12 rounded-3xl bg-white/5" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center text-white">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm backdrop-blur border-[0.5px] border-gray-100/50">
        <Image
            src="/diagnostic/stars.png"
            alt=""
            width={16}
            height={16}
            className="inline-block mr-2"
        />
           Begin your journey
        </span>

        <h1 className="mt-8 text-4xl font-extrabold leading-tight md:text-5xl">
          Ready to assess your
          <br />
          circularity level?
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-white/80">
          Answer a short set of questions to understand where your organization
          stands. You can complete the diagnostic at your own pace – your
          progress is saved automatically.
        </p>
      </div>
    </section>
  );
}
