import Link from "next/link";
import { Technique } from "@/lib/techniques";

const rotations = ["-0.6deg", "0.5deg", "-0.4deg", "0.6deg", "-0.5deg", "0.4deg", "-0.6deg", "0.5deg"];

export default function TechniqueTab({
  technique,
  index,
}: {
  technique: Technique;
  index: number;
}) {
  return (
    <Link
      href={`/review?technique=${technique.id}`}
      style={{ transform: `rotate(${rotations[index % rotations.length]})` }}
      className="folder-tab group relative block bg-kraft/80 hover:bg-kraft
                 border border-kraftDark/60 px-5 pt-6 pb-4
                 transition-transform duration-150 ease-out
                 hover:-translate-y-1 hover:rotate-0 focus-visible:-translate-y-1"
    >
      <h3 className="text-lg font-semibold leading-snug text-ink">
        {technique.name}
      </h3>
      <p className="docket mt-1 text-[11px] uppercase tracking-wide text-ink/60">
        {technique.tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/90 line-clamp-3">
        {technique.description}
      </p>
    </Link>
  );
}