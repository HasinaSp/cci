"use client";

import { useState } from "react";

export default function OTPForm() {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  return (
    <div className="w-full max-w-md px-8">

      <p className="mb-2 text-xs font-semibold uppercase text-neutral-400">
        Authentication required
      </p>

      <h2 className="mb-2 text-2xl font-bold text-neutral-900">
        OTP Verification
      </h2>

      <p className="mb-6 text-sm text-neutral-500">
        Please enter the 6-digit one-time password (OTP) we just sent you.
      </p>

      {/* OTP INPUTS */}
      <div className="mb-4 flex gap-3">
        {code.map((digit, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, i)}
            className="h-12 w-12 rounded-xl border border-neutral-200 text-center text-lg font-semibold text-neutral-900 focus:border-blue-600 focus:outline-none"
          />
        ))}
      </div>

      <p className="mb-6 text-xs text-neutral-400">
        Code expires in 30 minutes.
      </p>

      {/* BUTTON */}
      <button className="mb-4 w-full rounded-full bg-neutral-900 py-3 text-sm font-semibold text-white hover:bg-neutral-800">
        Verify Code
      </button>

      <button className="w-full text-sm text-neutral-500 hover:underline">
        Resend code (30s)
      </button>
    </div>
  );
}
