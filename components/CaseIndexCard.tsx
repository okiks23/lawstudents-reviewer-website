import { CaseRecord } from "@/lib/cases";

export default function CaseIndexCard({
  record,
  active,
  onSelect,
}: {
  record: CaseRecord;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`w-full text-left border p-4 transition-colors ${
        active
          ? "border-stamp bg-paperDark"
          : "border-line bg-paper hover:border-kraftDark"
      }`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="docket text-[11px] text-ink/60">
          {record.grNumber} · {record.date}
        </p>
        <p className="docket text-[10px] uppercase tracking-wide text-stamp">
          {record.subject}
        </p>
      </div>
      <h3 className="mt-1.5 text-lg font-semibold text-ink leading-snug">
        {record.title}
      </h3>
      <p className="mt-1 text-sm text-charcoal/85 leading-relaxed">
        {record.hook}
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {record.tags.map((tag) => (
          <span
            key={tag}
            className="docket text-[10px] uppercase tracking-wide text-charcoal/70 border border-line px-1.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}