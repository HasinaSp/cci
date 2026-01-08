import Image from "next/image";


export default function FuturLabHero() {
  return (
    <section className="relative bg-gradient-to-b from-[#004392] to-[#00142C] text-white">
      <div className="flex flex-row mx-auto max-w-7xl px-4 py-20">
        <div className="flex flex-col justify-start self-center max-w-7xl px-6">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-blue-200">
                            <Image
                              src="/resources/Home.png"
                              alt=""
                              width={20}
                              height={20}
                              className="inline-block justify-start mx-1 opacity-80"
                            /> / <span className="text-white ml-2">Resource Center</span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Resource Center
          </h1>

          {/* Description */}
          <p className="max-w-7xl font-semibold text-sm text-blue-200  leading-relaxed">
            Don’t stay alone in your transformation. Circle Navigator relies on a
            community of stakeholders committed <br /> to the circular economy: visit
            our resource center and benefit from the feedback, insights, and
            experiences of other organizations.
          </p>
        </div>

        {/* Button */}
        <div className="absolute mt-12 self-center right-0">
          <button className="inline-flex items-center gap-2 rounded-l-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-400">
            <Image
              src="/resources/edit.png"
              alt=""
              width={20}
              height={20}
              className="inline-block justify-start mx-1 opacity-120"
            />
            Contribute
          </button>
        </div>

      </div>
    </section>
  )
}
