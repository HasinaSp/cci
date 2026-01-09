"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import PinnedLogos from "@/components/assessement/PinnedLogos";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError(null);
    router.push("/dashboard");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background (desktop only) */}
      <div className="hidden md:block absolute inset-0">
        {/* Image de fond */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/auth/login-bg.png')" }}
        />
          <div className="absolute bg-white z-20">
            <PinnedLogos />
          </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="flex w-full max-w-5xl items-center justify-between gap-20">
          {/* LEFT TEXT (outside login card) */}
          <div className="hidden md:block max-w-lg text-white">
            <h1 className="text-5xl font-semibold leading-tight">
              Resume your circularity journey
              <br />
              in an instant.
            </h1>

            <p className="mt-4 text-sm text-slate-200">
              Access your diagnostics, results and action plans with ease.
              <br />
              Log in to continue building your circular transition.
            </p>
          </div>

          {/* LOGIN CARD */}
          <div className="w-full max-w-md md:h-[600px] absolute right-40 bottom-0">
            <div className="rounded-t-2xl bg-white p-8">
              {/* Header */}
              <div className="mb-6">
                <p className="text-xs text-gray-900">WELCOME BACK</p>
                <h1 className="text-xl font-semibold text-gray-900">
                  Access your personal space
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="johnsondoe@gmail.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-slate-900 focus:outline-none"
                  />
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600">
                    <input type="checkbox" className="rounded" />
                    Remember me
                  </label>
                  <span className="cursor-not-allowed text-gray-400">
                    Forgot Password?
                  </span>
                </div>

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
                <div className="space-y-3">
                <button className="flex w-full items-center justify-start px-4 gap-24 rounded-full border border-gray-300 bg-gray-100 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-200">
                    <img src="/icons/google.png" alt="Google" className="h-5 w-5" />
                    Log in with Google
                </button>

                <button className="flex w-full items-center justify-start px-4 gap-24 rounded-full border border-gray-300 bg-gray-100 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-200">
                    <img src="/icons/linkedin.jpg" alt="LinkedIn" className="h-5 w-5" />
                    Log in with LinkedIn
                </button>

                <button className="flex w-full items-center justify-start px-4 gap-24 rounded-full border border-gray-300 bg-gray-100 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-200">
                    <img src="/icons/apple.png" alt="Apple" className="h-5 w-5" />
                    Log in with Apple
                </button>
                </div>

              {/* Footer */}
              <p className="mt-6 text-center text-sm text-gray-600">
                New here?{" "}
                <Link href="/register" className="text-slate-900 underline">
                  Sign up to get started
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
