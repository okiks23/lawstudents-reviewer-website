import { CaseRecord } from "@/lib/cases";

const steps: { key: keyof CaseRecord["irac"]; label: string }[] = [
  { key: "issue", label: "Issue" },
  { key: "rule", label: "Rule" },
  { key: "application", label: "Application" },
  { key: "conclusion", label: "Conclusion" },
];

export default function Irac({ record }: { record: CaseRecord }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {steps.map((step, i) => (
        <div
          key={step.key}
          className="bg-paperDark/70 border border-line p-4"
        >
          <p className="docket text-[11px] uppercase tracking-wide text-stamp">
            {i + 1}. {step.label}
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-charcoal">
            {record.irac[step.key]}
          </p>
        </div>
      ))}
    </div>
  );
}