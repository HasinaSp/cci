export default function WhyCircular() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-[35%_65%]">
        {/* LEFT – TEXT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 px-10 py-3 text-md text-blue-500 font-medium">
            The Case for Change
          </span>

          <h2 className="mt-6 text-2xl font-bold text-slate-900 md:text-3xl">
            Why switch to a circular economy?
          </h2>

          <p className="mt-6 text-sm text-slate-600">
            Faced with resource depletion, climate change, and biodiversity loss, the linear “produce, consume, dispose” model is no longer viable.
            The circular economy offers a sustainable alternative: it reduces waste, optimizes resources, and strengthens organizational resilience.
          </p>
          
          <p className="mt-6 text-sm text-slate-600">
            Adopting this model means:
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            {[
              "Innovating with sustainable solutions",
              "Reducing costs and resource-related risks",
              "Meeting your regulatory and voluntary commitments",
              "Contributing to the ecological transition and the fight against climate change",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-200 text-white text-sm">
                  ✓
                </span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-slate-600">
            👉 Assess your circular maturity with the self-diagnostic tool and access resources to transform your organization starting today!
          </p>
        </div>

        {/* RIGHT – IMAGES */}
        <div className="grid grid-cols-2 gap-6">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center gap-6">
            {/* Large image */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/rycle_circular.png"
                alt=""
                className="w-full object-cover"
              />
            </div>

            {/* Smaller image */}
            <div className="flex justify-end">
              <div className="max-w-[80%] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/hands_circle.png"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex items-center justify-center">
            <div className="overflow-hidden rounded-2xl shadow-lg h-[80%] w-full max-w-md">
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