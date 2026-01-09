"use client";

import { useState } from "react";
import { questions } from "./questions";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProcessBar";
import PinnedLogos from "../PinnedLogos";

export default function AssessmentWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const current = questions[step];

  return (
    <div className="flex min-h-screen bg-[#004392] text-white">
      
      {/* LEFT IMAGE */}
      <div className="relative hidden w-1/2 lg:block p-8">
        <div className="relative h-[720px] overflow-hidden rounded-3xl">
          
          {/* IMAGE */}
          <img
            key={current.image}
            src={current.image}
            alt=""
            className="h-full w-full object-cover animate-fadeIn"
          />

          {/* LOGOS PINNÉS */}
          <div className="absolute top-6 left-6 z-20">
            <PinnedLogos />
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex w-full flex-col px-8 py-10 lg:w-1/2">
        
        <ProgressBar current={step + 1} total={questions.length} />

        <QuestionCard
          question={current}
          selected={answers[current.id]}
          onSelect={(value) =>
            setAnswers({ ...answers, [current.id]: value })
          }
        />

        {/* FOOTER ACTIONS */}
        <div className="mt-auto flex items-center justify-between pt-8">
        
        {/* LEFT TEXT */}
        <p className="max-w-sm text-sm text-white/70">
            No time right now? Simply save it and continue your assessment later.
        </p>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
            
            {/* SAVE BUTTON */}
            <button
            className="flex items-center gap-2 rounded-lg bg-[#0B2F63] px-4 py-2 text-sm font-medium text-white shadow hover:bg-[#0F3B7A]"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                />
            </svg>
            Save My Assessment
            </button>

            {/* PREV */}
            <button
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B2F63] text-white hover:bg-[#0F3B7A] disabled:opacity-30"
            >
            ↑
            </button>

            {/* NEXT */}
            <button
            disabled={!answers[current.id]}
            onClick={() => setStep(step + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B2F63] text-white hover:bg-[#0F3B7A] disabled:opacity-30"
            >
            ↓
            </button>
        </div>
        </div>
      </div>
    </div>
  );
}
