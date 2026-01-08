import ActionCardGrid from "@/components/cards/ActionCardGrid";

export default function ContributeSection() {
  return (
    <section className="bg-[#F2F3F6] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <h2 className="text-3xl font-bold text-gray-900">
            Help Spread the Circular <br /> Economy Movement
          </h2>

          <p className="text-gray-600">
            Contribute to the promotion of the circular economy across the
            entire European territory by publishing your own content.
          </p>
        </div>

        {/* Cards */}
        <ActionCardGrid />

      </div>
    </section>
  );
}
