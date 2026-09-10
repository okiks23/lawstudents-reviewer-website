export interface QA {
  question: string;
  answer: string;
}

export interface CaseRecord {
  id: string;
  title: string;
  grNumber: string;
  date: string;
  subject: string;
  tags: string[];
  hook: string;
  facts: string;
  issue: string;
  ruling: string;
  doctrine: string;
  // IRAC is intentionally distinct from the case-brief fields above:
  // "rule" and "application" separate the controlling law from how it
  // was applied, which a brief's "ruling" field collapses together.
  irac: {
    issue: string;
    rule: string;
    application: string;
    conclusion: string;
  };
  concepts: string[];
  qa: QA[];
  sourceUrl: string;
}

export const cases: CaseRecord[] = [
  {
    id: "ynot-v-iac",
    title: "Ynot v. Intermediate Appellate Court",
    grNumber: "G.R. No. L-74457",
    date: "March 20, 1987",
    subject: "Constitutional Law",
    tags: ["Due Process", "Police Power"],
    hook: "Six confiscated carabaos and an executive order that skipped the hearing.",
    facts:
      "Restituto Ynot was transporting six carabaos by boat from Masbate to Iloilo when police confiscated the animals for violating Executive Order No. 626-A, which banned the interprovincial movement of carabaos and carabeef outright, with confiscation and disposal handled entirely by executive officials.",
    issue:
      "Whether EO 626-A's scheme of outright confiscation and executive disposal, without any notice or hearing, violates the constitutional guarantee of due process.",
    ruling:
      "The Supreme Court struck down EO 626-A. A regulation may serve a legitimate purpose, but the means chosen here bypassed any opportunity to be heard before property was seized and given away, which due process does not allow.",
    doctrine:
      "Police power is valid only when both its purpose and its means are lawful. A legitimate regulatory goal does not excuse deciding guilt and disposing of private property without a hearing.",
    irac: {
      issue:
        "Does summary confiscation and executive disposal of private property under EO 626-A satisfy due process?",
      rule:
        "The due process clause requires that any deprivation of life, liberty, or property be preceded by notice and an opportunity to be heard, and that the means used to pursue a police-power objective be reasonably necessary and not unduly oppressive.",
      application:
        "EO 626-A let enforcement officers confiscate carabaos on the spot and hand them to beneficiaries of the officers' own choosing, with no court proceeding at any stage. Owners never got a chance to contest the seizure before losing their property outright.",
      conclusion:
        "The order fails the means test of police power and violates due process; it was declared unconstitutional.",
    },
    concepts: ["Due Process", "Police Power", "Equal Protection", "Delegation of Power"],
    qa: [
      {
        question: "What constitutional guarantee did the Court find EO 626-A violated?",
        answer:
          "Due process — the order allowed outright confiscation without any notice or hearing.",
      },
      {
        question: "What two-part test does the Court apply to a police power measure?",
        answer:
          "A lawful subject (a legitimate public interest) and a lawful means (reasonably necessary, not unduly oppressive).",
      },
      {
        question: "Why was the disposal scheme for the confiscated carabaos also struck down?",
        answer:
          "It let executive officers give away private property to beneficiaries of their own choosing, with no court involved at any point.",
      },
    ],
    sourceUrl: "http://www.lawphil.net/judjuris/juri1987/mar1987/gr_l-74457_1987.html",
  },
  {
    id: "tanada-v-tuvera",
    title: "Tañada v. Tuvera",
    grNumber: "G.R. No. L-63915",
    date: "April 24, 1985",
    subject: "Statutory Construction",
    tags: ["Publication of Laws", "Due Process"],
    hook: "A law can't bind anyone until they've had a chance to find out it exists.",
    facts:
      "Petitioners sought a writ of mandamus to compel Malacañang officials to publish in the Official Gazette a large number of presidential decrees, letters of instruction, and other issuances that had never been published.",
    issue:
      "Whether publication in the Official Gazette is required before a law of general application can take effect, even one that declares itself effective immediately.",
    ruling:
      "The Supreme Court held publication mandatory for every law of general application. The 'unless otherwise provided' clause in Article 2 of the Civil Code lets a law fix its own effectivity date, but it cannot dispense with publication itself.",
    doctrine:
      "Publication is a condition for a law's effectivity, not merely a formality that lawmakers can waive. The public cannot be bound by, or expected to obey, a rule it was never given the chance to know.",
    irac: {
      issue:
        "Can a presidential issuance take legal effect without ever being published, simply because it says it takes effect immediately?",
      rule:
        "Article 2 of the Civil Code requires publication for laws to take effect; due process and the constitutional right to information on matters of public concern reinforce this requirement.",
      application:
        "The clause 'unless it is otherwise provided' only allows a law to set a different effectivity date than the default fifteen days after publication — it does not say publication can be skipped altogether.",
      conclusion:
        "All the unpublished issuances lacked binding force until published; the officials were ordered to publish them.",
    },
    concepts: ["Publication Requirement", "Due Process", "Statutory Construction", "Official Gazette"],
    qa: [
      {
        question: "What does Article 2 of the Civil Code actually let a law's drafters vary?",
        answer: "Only the date the law takes effect — not whether it must be published at all.",
      },
      {
        question: "What constitutional right underlies the publication requirement?",
        answer:
          "Due process, together with the people's right to information on matters of public concern.",
      },
      {
        question: "Does a decree that says 'effective immediately' get to skip publication?",
        answer:
          "No — immediate effectivity still presupposes prior publication; the clause shortens the waiting period, it doesn't remove the requirement.",
      },
    ],
    sourceUrl: "https://lawphil.net/judjuris/juri1985/apr1985/gr_l-63915_1985.html",
  },
  {
    id: "oposa-v-factoran",
    title: "Oposa v. Factoran",
    grNumber: "G.R. No. 101083",
    date: "July 30, 1993",
    subject: "Constitutional Law",
    tags: ["Locus Standi", "Environmental Law"],
    hook: "Minors sued to protect a forest their generation hadn't even inherited yet.",
    facts:
      "A group of minors, represented by their parents and joined by the Philippine Ecological Network, sued the DENR Secretary to cancel existing timber license agreements, arguing that continued large-scale logging violated their constitutional right to a balanced and healthful ecology. The trial court dismissed the case as raising a political question and lacking a cause of action.",
    issue:
      "Whether the petitioner-minors had legal standing to sue on behalf of their own generation and generations yet unborn, and whether their complaint stated a valid cause of action.",
    ruling:
      "The Supreme Court set aside the dismissal. It recognized the minors' standing under the concept of intergenerational responsibility and held that the right to a balanced and healthful ecology need not be spelled out in the Bill of Rights to be enforceable.",
    doctrine:
      "The right to a balanced and healthful ecology carries a correlative duty not to impair the environment for those who come after. Because that duty runs across generations, a minor may sue on behalf of their own generation and generations yet unborn.",
    irac: {
      issue:
        "Do minors have standing to sue for environmental protection on behalf of future generations, and can the case proceed absent a specific textual right in the Bill of Rights?",
      rule:
        "Standing requires a real, personal stake in the outcome; some rights are considered so fundamental that they need not be expressly enumerated to be judicially enforceable.",
      application:
        "The minors' stake was grounded not in a personal or present injury alone but in intergenerational responsibility for the environment — a stake the Court found sufficiently concrete and continuing to support standing.",
      conclusion:
        "The petitioners had standing, the complaint stated a cause of action, and the case was remanded so the timber license holders could be properly impleaded and heard.",
    },
    concepts: ["Locus Standi", "Intergenerational Responsibility", "Environmental Law", "Justiciability"],
    qa: [
      {
        question: "On what novel legal concept did the Court base the minors' standing to sue?",
        answer:
          "Intergenerational responsibility — their right to sue for their own generation and generations yet unborn.",
      },
      {
        question:
          "Did the right to a balanced ecology need to be expressly listed in the Bill of Rights to be enforceable?",
        answer:
          "No — the Court treated it as a right so basic it need not be written down to exist and be enforceable.",
      },
      {
        question: "What ultimately happened to the timber license holders?",
        answer:
          "They weren't stripped of their licenses outright — the case was remanded so they could be impleaded and given a chance to be heard.",
      },
    ],
    sourceUrl: "https://www.lawphil.net/judjuris/juri1993/jul1993/gr_101083_1993.html",
  },
  {
    id: "people-v-genosa",
    title: "People v. Genosa",
    grNumber: "G.R. No. 135981",
    date: "January 15, 2004",
    subject: "Criminal Law",
    tags: ["Parricide", "Self-Defense", "Battered Woman Syndrome"],
    hook: "A novel psychological defense meets the strict elements of self-defense.",
    facts:
      "Marivic Genosa, who had endured years of documented domestic abuse from her husband Ben, killed him and was convicted of parricide by the trial court, which imposed the death penalty. On automatic review, she raised battered woman syndrome as a form of self-defense.",
    issue:
      "Whether battered woman syndrome, as established by the evidence, satisfies the requirements of self-defense — complete or incomplete — to a charge of parricide.",
    ruling:
      "The Supreme Court affirmed the conviction but reduced the penalty. Battered woman syndrome did not establish self-defense because unlawful aggression from the husband had already ceased at the moment of the killing, but the Court treated it as a mitigating circumstance reflecting diminished willpower.",
    doctrine:
      "Self-defense, complete or incomplete, requires unlawful aggression at the time of the act. Battered woman syndrome may explain a defendant's psychological state and mitigate liability, but it cannot substitute for that missing element.",
    irac: {
      issue:
        "Can battered woman syndrome establish unlawful aggression at the moment of the killing, so as to support a claim of self-defense?",
      rule:
        "Self-defense under the Revised Penal Code requires unlawful aggression, reasonable necessity of the means employed, and lack of sufficient provocation; absent unlawful aggression, self-defense fails entirely, complete or incomplete.",
      application:
        "The evidence showed the husband's aggression had already stopped by the time the fatal shot was fired, so the first and indispensable element of self-defense was missing, regardless of the abuse that preceded it.",
      conclusion:
        "Self-defense was not established, but the syndrome was appreciated as a mitigating circumstance, reducing the sentence.",
    },
    concepts: ["Self-Defense", "Unlawful Aggression", "Mitigating Circumstances", "Parricide"],
    qa: [
      {
        question: "Why did battered woman syndrome fail as a complete self-defense claim here?",
        answer:
          "Because unlawful aggression from the husband had already ceased at the exact moment Marivic fired the fatal shot.",
      },
      {
        question: "What was battered woman syndrome treated as instead?",
        answer:
          "A mitigating circumstance reflecting diminished willpower, alongside passion and obfuscation.",
      },
      {
        question: "What is the one element of self-defense this case turns on?",
        answer: "Unlawful aggression — without it, self-defense fails, complete or incomplete.",
      },
    ],
    sourceUrl: "https://lawphil.net/judjuris/juri2004/jan2004/gr_135981_2004.html",
  },
];

export function searchCases(query: string): CaseRecord[] {
  const q = query.trim().toLowerCase();
  if (!q) return cases;
  return cases.filter((c) => {
    const haystack = [
      c.title,
      c.grNumber,
      c.subject,
      c.hook,
      ...c.tags,
      ...c.concepts,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}