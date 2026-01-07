export default function WhyCircular() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-md font-medium text-blue-500">
            The Case for Change
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Why switch to a circular 
            economy?
          </h2>

          <p className="mt-6 text-slate-600">
            Faced with resource depletion, climate change, and biodiversity loss, the linear “produce, consume, dispose” model is no longer viable.
            The circular economy offers a sustainable alternative: it reduces waste, optimizes resources, and strengthens organizational resilience.
          </p>
          
          <p className="mt-6 text-slate-600">
            Adopting this model means :
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Innovating with sustainable solutions",
              "Reducing costs and resource-related risks",
              "Meeting your regulatory and voluntary commitments",
              "Contributing to the ecological transition and the fight against climate change",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white text-sm">
                  ✓
                </span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-slate-600">👉 Assess your circular maturity with the self-diagnostic tool and access
            resources to transform your organization starting today!</p>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* Large image */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/rycle_circular.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* Small images */}
          <div className="absolute -right-6 top-1/3 hidden w-44 flex-col gap-6 md:flex">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src="/hands_circle.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src="/litle_tree.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}