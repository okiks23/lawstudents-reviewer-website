"use client";

import { useEffect, useState } from "react";
import { CaseRecord } from "@/lib/cases";

export default function Feynman({ record }: { record: CaseRecord }) {
  const key = `ratio:feynman:${record.id}`;
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored) setText(stored);
    } catch {
      // localStorage unavailable — the box still works, it just won't persist
    }
  }, [key]);

  function save() {
    try {
      window.localStorage.setItem(key, text);
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    } catch {
      // ignore
    }
  }

  return (
    <div className="bg-paperDark/70 border border-line p-4">
      <p className="docket text-[11px] uppercase tracking-wide text-stamp">
        Explain the doctrine, plainly
      </p>
      <p className="mt-1 text-sm text-charcoal/80">
        No legalese. Write it the way you'd explain it to a classmate who
        missed the reading.
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
        placeholder="In this case, the Court basically said..."
        className="mt-3 w-full bg-paper border border-line p-3 text-[15px] leading-relaxed
                   text-ink placeholder:text-charcoal/40 focus:outline-none focus:border-stamp"
      />
      <div className="mt-2 flex items-center gap-3">
        <button
          onClick={save}
          className="docket text-[11px] uppercase tracking-wide bg-ink text-paper px-3 py-1.5 hover:bg-ink/90"
        >
          Save note
        </button>
        {saved && <span className="text-xs text-charcoal/70">Saved on this device.</span>}
      </div>
    </div>
  );
}