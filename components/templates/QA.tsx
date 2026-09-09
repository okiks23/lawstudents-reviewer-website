"use client";

import { useState } from "react";
import { CaseRecord } from "@/lib/cases";

export default function QA({
  record,
  mode,
}: {
  record: CaseRecord;
  mode: "socratic" | "flashcard";
}) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  function toggle(i: number) {
    setRevealed((r) => ({ ...r, [i]: !r[i] }));
  }

  if (mode === "flashcard") {
    return (
      <div className="grid sm:grid-cols-2 gap-4">
        {record.qa.map((item, i) => {
          const open = !!revealed[i];
          return (
            <button
              key={i}
              onClick={() => toggle(i)}
              className="text-left bg-paperDark/70 border border-line p-4 min-h-[130px]
                         hover:border-stamp/60 transition-colors"
            >
              <p className="docket text-[10px] uppercase tracking-wide text-ink/50 mb-2">
                {open ? "Answer" : "Question · tap to flip"}
              </p>
              <p className="text-[15px] leading-relaxed text-charcoal">
                {open ? item.answer : item.question}
              </p>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {record.qa.map((item, i) => {
        const open = !!revealed[i];
        return (
          <div key={i} className="border-l-2 border-line pl-4">
            <p className="text-[15px] leading-relaxed text-charcoal">
              {item.question}
            </p>
            {open ? (
              <p className="mt-2 text-[14px] leading-relaxed text-ink bg-paperDark/70 p-3">
                {item.answer}
              </p>
            ) : (
              <button
                onClick={() => toggle(i)}
                className="mt-2 docket text-[11px] uppercase tracking-wide text-stamp underline"
              >
                Reveal answer
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}