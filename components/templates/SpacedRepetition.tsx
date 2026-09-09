"use client";

import { useEffect, useState } from "react";
import { CaseRecord } from "@/lib/cases";

const OPTIONS = [
  { label: "Tomorrow", days: 1 },
  { label: "In 3 days", days: 3 },
  { label: "In 1 week", days: 7 },
  { label: "In 3 weeks", days: 21 },
];

export default function SpacedRepetition({ record }: { record: CaseRecord }) {
  const key = `ratio:review-date:${record.id}`;
  const [reviewDate, setReviewDate] = useState<string | null>(null);

  useEffect(() => {
    try {
      setReviewDate(window.localStorage.getItem(key));
    } catch {
      // ignore
    }
  }, [key]);

  function schedule(days: number) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const formatted = date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });
    try {
      window.localStorage.setItem(key, formatted);
    } catch {
      // ignore
    }
    setReviewDate(formatted);
  }

  return (
    <div className="bg-paperDark/70 border border-line p-4">
      <p className="docket text-[11px] uppercase tracking-wide text-stamp">
        How well do you know this one?
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {OPTIONS.map((opt) => (
          <button
            key={opt.label}
            onClick={() => schedule(opt.days)}
            className="docket text-[11px] uppercase tracking-wide border border-line px-3 py-1.5
                       hover:border-stamp hover:text-stamp"
          >
            {opt.label}
          </button>
        ))}
      </div>
      {reviewDate && (
        <p className="mt-3 text-sm text-charcoal/80">
          Next review set for <span className="text-ink font-medium">{reviewDate}</span>, saved on this device.
        </p>
      )}
    </div>
  );
}