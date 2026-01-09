import Link from "next/link";

export default function AssessmentCTA() {
  return (
    <Link
      href="/assessment/start"
      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-50"
    >
      Start My Assessment
    </Link>
  );
}
