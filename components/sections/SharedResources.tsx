import Image from "next/image";

export default function SharedRessources() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
        {/* IMAGE */}
        <div >
          <Image
            src="/laptop.png"
            alt="Circular maturity assessment illustration"
            width={480}
            height={480}
            className="w-full rounded-t-full"
            priority
          />
        </div>
        {/* TEXT */}
        <div className="relative mx-auto w-full max-w-md">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 px-10 py-3 text-md text-slate-900 font-medium border-2 border-blue-400 border-spacing-1.5 mb-3">
                                <Image
                                  src="/stars.png"
                                  alt=""
                                  width={24}
                                  height={24}
                                  className="inline-block justify-start mx-1"
                                />
            Strengthen your Circular Ecosystem
          </span>
            <h1 className="text-4xl font-bold text-gray-800">
                Turn shared Resources into real value
            </h1>
          <h2 className="mt-6 text-md md:text-md font-bold text-neutral-900">
            Rely on other stakeholders to support your transition: <br />
            the circular economy is also about inter-company synergies.
          </h2>

          <p className="mt-6 text-neutral-600 leading-relaxed">
            CircleXchange lets you publish or browse listings with a single click to
            exchange resources, create local synergies, and make your activity more
            circular. 
            
            The tool also allows you to monitor your synergies—such as the volume of
            exchanged waste or avoided greenhouse gas emissions. Share these figures
            with your partners, funders, and clients, and turn them into a real
            management and business development asset.
          </p>

          <button className="inline-flex items-center justify-center rounded-full
                       bg-slate-900 px-8 py-3 text-sm font-semibold
                       text-white transition
                       hover:bg-slate-800 focus:outline-none
                       focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
            Discover Synergy Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
