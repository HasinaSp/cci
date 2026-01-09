"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import PinnedLogos from "@/components/assessement/PinnedLogos";

export default function RegisterPage() {
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
              Join CirclePlatform
              <br />
              and transform
              <br />
              your organization
            </h1>

            <p className="mt-4 text-sm text-slate-200">
              Join the platform dedicated to assessing and improving your
              circular practices. In just a few minutes, access a complete
              diagnostic, visual results, and a personalized action plan.
            </p>
          </div>

          {/* REGISTER CARD */}
          <div className="w-full max-w-xl md:h-[620px] absolute right-40 bottom-0">
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              {/* Header */}
              <div className="mb-6">
                <p className="text-xs text-gray-900">LET’S GET YOU STARTED</p>
                <h1 className="text-xl font-semibold text-gray-900">
                  Create an Account
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Johnson Doe"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-slate-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Password*
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-slate-900 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Work email*
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="johnsondoe@nomail.com"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-slate-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Confirm password*
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-slate-900 focus:outline-none"
                    />
                  </div>
                </div>

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
                  Get Started
                </button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center gap-4">
                <div className="h-px w-full bg-gray-200" />
                <span className="text-sm text-gray-400">Or</span>
                <div className="h-px w-full bg-gray-200" />
              </div>

              {/* Social login */}
              <div className="grid grid-cols-3 gap-3">
                <button className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-gray-100 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-200">
                  <img src="/icons/google.png" alt="Google" className="h-5 w-5" />
                </button>

                <button className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-gray-100 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-200">
                  <img
                    src="/icons/linkedin.jpg"
                    alt="LinkedIn"
                    className="h-5 w-5"
                  />
                </button>

                <button className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-gray-100 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-200">
                  <img src="/icons/apple.png" alt="Apple" className="h-5 w-5" />
                </button>
              </div>

              {/* Footer */}
              <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-slate-900 underline">
                  Log in here
                </Link>
              </p>

              <div className="mt-4 flex items-center justify-center gap-6 text-xs text-gray-500">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  I accept the <span className="underline">Terms of Use</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  I have read the{" "}
                  <span className="underline">Privacy Policy</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
