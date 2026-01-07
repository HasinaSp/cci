import Image from "next/image";
import { ResourceCard } from "./ResourceCard";

export default function Resources() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">

        {/* HEADER */}
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 px-10 py-3 text-md text-slate-900 font-medium border-2 border-blue-400 border-spacing-1.5 mb-3">
                      <Image
                        src="/layer.png"
                        alt=""
                        width={24}
                        height={24}
                        className="inline-block justify-start mx-1"
                      />
                      Resource center
          </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-neutral-900">
              Explore our Resource Center
            </h2>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center justify-center rounded-full
                       bg-slate-900 px-8 py-3 text-sm font-semibold
                       text-white transition
                       hover:bg-slate-800 focus:outline-none
                       focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
              Visit the Resource Center
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full border text-gray-400 border-gray-300 bg-gray-100/5">
              ←
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border text-gray-400 border-gray-300 bg-gray-100/5">
              →
            </button>
          </div>

          {/* DECOR */}
          <Image
            src="/feuille_2.png"
            alt=""
            width={200}
            height={200}
            className="pointer-events-none absolute right-96 top-0 hidden md:block"
          />
        </div>

        {/* CARDS */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <ResourceCard
            image="/sarajevo_companies.png"
            category="Circular Economy"
            title="Companies in Sarajevo exploring and discussing the key Rs of the Circular Economy"
            content="On 12 November, CircleMED partner SERDA gathered representatives and owners of start-u..."
            date="24 November 2025"
            readTime="2-minute read"
          />

          <ResourceCard
            image="/lab_turin.png"
            category="Local Initiatives"
            title="Future Lab Turin: launching local initiatives to engage citizens in circular economy dialogue"
            content="CircleMED Is about to launch its Future Labs: local animation initiatives, enhancing societal..."
            date="24 November 2025"
            readTime="2-minute read"
          />

          <ResourceCard
            image="/futur_lab.png"
            category="Innovation"
            title="Future Lab: discussing the future of sustainable swimming pools in the Var region"
            content="CircleMED partner CCI du Var organised last 9 October 2025 its first Future Lab, dedicated..."
            date="24 November 2025"
            readTime="2-minute read"
          />
        </div>
      </div>
    </section>
  );
}
