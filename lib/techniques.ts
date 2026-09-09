export type TemplateKind =
  | "case-brief"
  | "irac"
  | "mind-map"
  | "socratic"
  | "active-recall"
  | "feynman"
  | "pomodoro"
  | "spaced-repetition";

export interface Technique {
  id: TemplateKind;
  name: string;
  tagline: string;
  description: string;
}

export const techniques: Technique[] = [
  {
    id: "case-brief",
    name: "Case Briefing",
    tagline: "Facts, issue, ruling, doctrine",
    description:
      "The standard law-school brief. Strips a decision down to what happened, what was asked, what the Court decided, and the rule that came out of it.",
  },
  {
    id: "irac",
    name: "IRAC Method",
    tagline: "Issue, Rule, Application, Conclusion",
    description:
      "Walks the case through the four-part structure examiners expect: the legal issue, the controlling rule, how the Court applied it, and the conclusion reached.",
  },
  {
    id: "mind-map",
    name: "Mind Mapping",
    tagline: "Trace a doctrine across concepts",
    description:
      "Puts the case's central doctrine at the center and branches out to the legal concepts it touches, so you can see how it connects to the rest of the subject.",
  },
  {
    id: "socratic",
    name: "Socratic Q&A",
    tagline: "Answer before you check",
    description:
      "A set of questions a professor might actually ask about the case. Answer in your head first, then reveal the model answer.",
  },
  {
    id: "active-recall",
    name: "Active Recall",
    tagline: "Flip cards, no peeking",
    description:
      "The same core questions as flashcards. The point isn't reading the answer, it's testing whether you can produce it cold.",
  },
  {
    id: "feynman",
    name: "Feynman Technique",
    tagline: "Explain it like a first-year would",
    description:
      "Write the doctrine out in your own plain words, no legalese. If you can't, that's the part you don't actually understand yet.",
  },
  {
    id: "pomodoro",
    name: "Pomodoro Sessions",
    tagline: "25 minutes on, 5 minutes off",
    description:
      "A focus timer that sits next to the case brief, for grinding through dense reading in timed sprints instead of one long unfocused sit.",
  },
  {
    id: "spaced-repetition",
    name: "Spaced Repetition",
    tagline: "Review before you forget",
    description:
      "Schedule when you'll come back to this case based on how well you know it right now, instead of rereading everything on a fixed cycle.",
  },
];

export function getTechnique(id: string | null): Technique {
  return techniques.find((t) => t.id === id) ?? techniques[0];
}