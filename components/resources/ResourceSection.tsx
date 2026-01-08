import Image from "next/image";
import { ResourceCard } from "../cards/ResourceCard";

export default function ResourceSection() {
  return (
    <section className="relative bg-white py-12">
      <div className="mx-auto max-w-7xl px-8">

        {/* HEADER */}
        <div className="relative flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-slate-900">
          {/* Search & Sort */}
          <div className="flex items-center w-full md:w-auto">
            <div className="relative w-full md:w-3xl">
              <Image
                src="/resources/search.png"
                alt="Search by keyword..."
                width={20}
                height={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search by keyword..."
                aria-label="Search by keyword"
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>

          <div className="flex gap-12">
            {/* Newest accordion */}
            <details className="relative">
              <summary className="flex items-center gap-2 cursor-pointer py-3 px-4 border border-gray-300 rounded-full list-none">
                Newest
              </summary>
              <div className="mt-2 p-3 border border-gray-200 rounded-md bg-white">
                <ul className="text-sm text-gray-700">
                  <li className="py-1">Newest first</li>
                  <li className="py-1">Oldest first</li>
                </ul>
              </div>
            </details>

            {/* Categories accordion */}
            <details className="relative">
              <summary className="flex items-center gap-2 cursor-pointer py-3 px-4 border border-gray-300 rounded-full list-none">
                Categories
              </summary>
              <div className="mt-2 p-3 border border-gray-200 rounded-md bg-white">
                <ul className="text-sm text-gray-700">
                  <li className="py-1">Circular Economy</li>
                  <li className="py-1">Local Initiatives</li>
                  <li className="py-1">Innovation</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
        <div className="flex flex-row gap-1 font-bold mt-8 ml-4">
            <div className="text-[#0095D5]">633</div>
            <p className="text-[#4C4046]">results</p>
        </div>
        {/* CARDS */}
        <div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
          <ResourceCard
            href="/resources/future-lab-var"
            image="/resources/resource-1.png"
            category="Circular Economy"
            title="Companies in Sarajevo exploring and discussing the key Rs of the Circular Economy"
            content="On 12 November, CircleMED partner SERDA gathered representatives and owners of start-u..."
            date="24 November 2025"
            readTime="2-minute read"
          />

          <ResourceCard
          href="/resources/future-lab-var"
            image="/resources/resource-2.png"
            category="Local Initiatives"
            title="Future Lab Turin: launching local initiatives to engage citizens in circular economy dialogue"
            content="CircleMED Is about to launch its Future Labs: local animation initiatives, enhancing societal..."
            date="24 November 2025"
            readTime="2-minute read"
          />

          <ResourceCard
          href="/resources/future-lab-var"
            image="/resources/resource-3.png"
            category="Innovation"
            title="Future Lab: discussing the future of sustainable swimming pools in the Var region"
            content="CircleMED partner CCI du Var organised last 9 October 2025 its first Future Lab, dedicated..."
            date="24 November 2025"
            readTime="2-minute read"
          />
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <ResourceCard
            href="/resources/future-lab-var"
            image="/resources/resource-4.png"
            category="Circular Economy"
            title="Companies in Sarajevo exploring and discussing the key Rs of the Circular Economy"
            content="On 12 November, CircleMED partner SERDA gathered representatives and owners of start-u..."
            date="24 November 2025"
            readTime="2-minute read"
          />

          <ResourceCard
            href="/resources/future-lab-var"
            image="/resources/resource-5.png"
            category="Local Initiatives"
            title="Future Lab Turin: launching local initiatives to engage citizens in circular economy dialogue"
            content="CircleMED Is about to launch its Future Labs: local animation initiatives, enhancing societal..."
            date="24 November 2025"
            readTime="2-minute read"
          />

          <ResourceCard
            href="/resources/future-lab-var"
            image="/resources/resource-6.png"
            category="Innovation"
            title="Future Lab: discussing the future of sustainable swimming pools in the Var region"
            content="CircleMED partner CCI du Var organised last 9 October 2025 its first Future Lab, dedicated..."
            date="24 November 2025"
            readTime="2-minute read"
          />
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <ResourceCard
            href="/resources/future-lab-var"
            image="/resources/resource-7.png"
            category="Circular Economy"
            title="Companies in Sarajevo exploring and discussing the key Rs of the Circular Economy"
            content="On 12 November, CircleMED partner SERDA gathered representatives and owners of start-u..."
            date="24 November 2025"
            readTime="2-minute read"
          />

          <ResourceCard
            href="/resources/future-lab-var"
            image="/resources/resource-8.png"
            category="Local Initiatives"
            title="Future Lab Turin: launching local initiatives to engage citizens in circular economy dialogue"
            content="CircleMED Is about to launch its Future Labs: local animation initiatives, enhancing societal..."
            date="24 November 2025"
            readTime="2-minute read"
          />

          <ResourceCard
            href="/resources/future-lab-var"
            image="/resources/resource-9.png"
            category="Innovation"
            title="Future Lab: discussing the future of sustainable swimming pools in the Var region"
            content="CircleMED partner CCI du Var organised last 9 October 2025 its first Future Lab, dedicated..."
            date="24 November 2025"
            readTime="2-minute read"
          />
         </div>
        </div>
        {/* Pagination */}
        <nav className="mt-12 flex items-center justify-between md:justify-center" aria-label="Pagination">
          <div className="flex items-center justify-center gap-2">
            <button aria-label="Previous page" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
              <span className="sr-only">Previous</span>
              ‹
            </button>

            <div className="inline-flex items-center gap-2">
              <button className="w-10 h-10 rounded-full bg-[#0095D5] text-white font-medium">1</button>
              <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">2</button>
              <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">3</button>
              <span className="px-2 text-gray-500">…</span>
              <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">10</button>
            </div>

            <button aria-label="Next page" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100">
              <span className="sr-only">Next</span>
              ›
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
}
