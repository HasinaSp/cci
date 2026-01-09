export function ResourceSidebar() {
  return (
    <aside className="sticky top-24 space-y-6">
      <div className="rounded-xl border p-6">
        <h3 className="mb-4 text-sm font-semibold">
          Reading guide
        </h3>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>Key insights from the CircleMED project</li>
          <li>Main barriers identified</li>
          <li>Three citizen profiles</li>
          <li>Climate awareness</li>
        </ul>
      </div>

      <button className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white">
        Download full report (PDF)
      </button>
    </aside>
  );
}
