import { CaseRecord } from "@/lib/cases";

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-line pl-4">
      <p className="docket text-[11px] uppercase tracking-wide text-stamp">
        {label}
      </p>
      <p className="mt-1 text-[15px] leading-relaxed text-charcoal">
        {children}
      </p>
    </div>
  );
}

export default function CaseBrief({ record }: { record: CaseRecord }) {
  return (
    <div className="space-y-5">
      <Block label="Facts">{record.facts}</Block>
      <Block label="Issue">{record.issue}</Block>
      <Block label="Ruling">{record.ruling}</Block>
      <Block label="Doctrine">{record.doctrine}</Block>
    </div>
  );
}