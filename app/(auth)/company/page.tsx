"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import PinnedLogos from "@/components/assessement/PinnedLogos";

export default function CompanyPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [organization, setOrganization] = useState("");
  const [organizationType, setOrganizationType] = useState("");
  const [industry, setIndustry] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !organization ||
      !organizationType ||
      !industry
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(null);
    router.push("/dashboard");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background (desktop only) */}
      <div className="hidden md:block absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/auth/inscription-bg.jpg')" }}
        />
        <div className="absolute bg-white z-20">
          <PinnedLogos />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="flex w-full max-w-6xl items-center justify-between gap-20">
          {/* LEFT TEXT */}
          <div className="hidden md:block max-w-lg text-white">
            <h1 className="text-5xl font-semibold leading-tight">
              Almost there!
            </h1>

            <p className="mt-4 text-sm text-slate-200">
              Please complete the fields related to your company <br />before proceeding to the next step.
            </p>
          </div>

          {/* REGISTER CARD */}
          <div className="w-full max-w-xl rounded-t-2xl shadow-xl bg-white md:h-[500px] absolute right-40 bottom-0">
            <div className="p-8 ">
              {/* Header */}
              <div className="mb-6">
                <p className="text-xs text-gray-900">ALMOST THERE</p>
                <h1 className="text-xl font-semibold text-gray-900">
                  Enter your company details to continue
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Organization */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Organization name*
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Alpha Company"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Organization type*
                    </label>
                    <select
                      value={organizationType}
                      onChange={(e) => setOrganizationType(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:border-slate-900 focus:outline-none"
                    >
                      <option value="">Select an option</option>
                      <option value="company">Company</option>
                      <option value="ngo">NGO</option>
                      <option value="public">Public organization</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Industry sector*
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:border-slate-900 focus:outline-none"
                    >
                      <option value="">Choose your sector</option>
                      <option value="tech">Technology</option>
                      <option value="industry">Industry</option>
                      <option value="agriculture">Agriculture</option>
                    </select>
                  </div>
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <button
                  type="submit"
                  className="w-full rounded-full bg-slate-900 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Let me in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
