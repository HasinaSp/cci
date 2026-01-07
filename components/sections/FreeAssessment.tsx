import Image from "next/image";

export default function FreeAssessment() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">

        {/* TEXT */}
        <div className="relative mx-auto w-full max-w-md">
            <span className="inline-block rounded-full bg-blue-400 px-4 py-2 text-xl font-medium text-primary">
                Free Access for All
            </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-neutral-900">
            Why is the self-assessment available for free?
          </h2>

          <p className="mt-6 text-neutral-600 leading-relaxed">
            Developed as part of a European project, the self-assessment is offered free of charge
            to enable as many organizations as possible to evaluate their circular maturity.
            This open accessibility ensures broad, barrier-free dissemination of transition practices.
          </p>

          <button className="mt-8 rounded-full border border-primary px-8 py-4 text-sm font-semibold text-primary shadow-md bg-gray-900">
            Explore the Free Assessment
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative w-80 h-80">
            {/* image arrière */}
        <Image
            src="/padlock.png"
            alt=""
            width={480}
            height={480}
            className="absolute inset-0 z-0 w-full h-full object-contain"
        />

        {/* image avant */}
        <Image
            src="/portal.png"
            alt=""
            width={480}
            height={480}
            className="absolute inset-0 z-10 w-full h-full object-contain translate-x-6 translate-y-6"
        />
        </div>
      </div>
    </section>
  );
}
