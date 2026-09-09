import TechniqueTab from "@/components/TechniqueTab";
import { techniques } from "@/lib/techniques";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <header className="mb-14 max-w-2xl">
        <p className="docket text-xs uppercase tracking-wide text-stamp">
          Jurisprudence Review
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight text-ink">
          Study the case first by deciding how you'll study it.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-charcoal">
          Pick a technique below. It shapes how each case is laid out once
          you search for it — as an IRAC breakdown, a case brief, a Socratic
          drill, or something else. Every case links back to its full text
          on{" "}
          <a
            href="https://lawphil.net"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-line hover:decoration-stamp"
          >
            lawphil.net
          </a>
          , so what you read here is a study layer, not a substitute for the
          decision itself.
        </p>
      </header>

      <section aria-label="Study techniques" className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8">
        {techniques.map((t, i) => (
          <TechniqueTab key={t.id} technique={t} index={i} />
        ))}
      </section>

      <footer className="mt-20 border-t hairline pt-6 text-sm text-charcoal/70">
        <p>
          Sources are Philippine Supreme Court decisions, verified against
          lawphil.net at the time this dataset was written. Always confirm
          against the original text before citing.
        </p>
      </footer>
    </main>
  );
}