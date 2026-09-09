"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cases, CaseRecord, searchCases } from "@/lib/cases";
import { getTechnique, techniques, TemplateKind } from "@/lib/techniques";
import CaseIndexCard from "@/components/CaseIndexCard";
import CaseBrief from "@/components/templates/CaseBrief";
import Irac from "@/components/templates/Irac";
import MindMap from "@/components/templates/MindMap";
import QA from "@/components/templates/QA";
import Feynman from "@/components/templates/Feynman";
import Pomodoro from "@/components/templates/Pomodoro";
import SpacedRepetition from "@/components/templates/SpacedRepetition";

function TemplatePanel({
  technique,
  record,
}: {
  technique: TemplateKind;
  record: CaseRecord;
}) {
  switch (technique) {
    case "irac":
      return <Irac record={record} />;
    case "mind-map":
      return <MindMap record={record} />;
    case "socratic":
      return <QA record={record} mode="socratic" />;
    case "active-recall":
      return <QA record={record} mode="flashcard" />;
    case "feynman":
      return (
        <div className="space-y-5">
          <CaseBrief record={record} />
          <Feynman record={record} />
        </div>
      );
    case "pomodoro":
      return (
        <div className="space-y-5">
          <Pomodoro />
          <CaseBrief record={record} />
        </div>
      );
    case "spaced-repetition":
      return (
        <div className="space-y-5">
          <SpacedRepetition record={record} />
          <CaseBrief record={record} />
        </div>
      );
    case "case-brief":
    default:
      return <CaseBrief record={record} />;
  }
}

export default function ReviewClient({
  initialTechnique,
}: {
  initialTechnique: string | null;
}) {
  const [techniqueId, setTechniqueId] = useState<TemplateKind>(
    getTechnique(initialTechnique).id
  );
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string>(cases[0].id);

  const results = useMemo(() => searchCases(query), [query]);
  const selected = cases.find((c) => c.id === selectedId) ?? results[0];
  const technique = getTechnique(techniqueId);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <Link href="/" className="text-lg font-semibold text-ink">
          Ratio
        </Link>
        <label className="flex items-center gap-2">
          <span className="docket text-[11px] uppercase tracking-wide text-charcoal/70">
            Technique
          </span>
          <select
            value={techniqueId}
            onChange={(e) => setTechniqueId(e.target.value as TemplateKind)}
            className="docket text-sm bg-paperDark border border-line px-2 py-1.5 text-ink"
          >
            {techniques.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mb-8">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a case, topic, or G.R. number..."
          className="w-full bg-paper border-b-2 border-ink px-1 py-2 text-lg
                     placeholder:text-charcoal/40 focus:outline-none"
        />
      </div>

      <div className="grid lg:grid-cols-[380px_1fr] gap-8">
        <div className="space-y-3">
          <p className="docket text-[11px] uppercase tracking-wide text-charcoal/60">
            {results.length} case{results.length === 1 ? "" : "s"}
          </p>
          {results.map((c) => (
            <CaseIndexCard
              key={c.id}
              record={c}
              active={c.id === selected?.id}
              onSelect={() => setSelectedId(c.id)}
            />
          ))}
          {results.length === 0 && (
            <p className="text-sm text-charcoal/70">
              No cases match that search yet — this sample set covers four
              landmark decisions. Add more in <code>lib/cases.ts</code>.
            </p>
          )}
        </div>

        <div>
          {selected ? (
            <div>
              <div className="mb-5 flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="docket text-[11px] text-ink/60">
                    {selected.grNumber} · {selected.date}
                  </p>
                  <h2 className="text-2xl font-semibold text-ink leading-snug">
                    {selected.title}
                  </h2>
                  <p className="docket text-[11px] uppercase tracking-wide text-stamp mt-1">
                    {technique.name}
                  </p>
                </div>
                <a
                  href={selected.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="docket text-[11px] uppercase tracking-wide underline decoration-line hover:decoration-stamp shrink-0"
                >
                  Read full decision on LawPhil
                </a>
              </div>
              <TemplatePanel technique={technique.id} record={selected} />
            </div>
          ) : (
            <p className="text-charcoal/70">Select a case to begin.</p>
          )}
        </div>
      </div>
    </main>
  );
}