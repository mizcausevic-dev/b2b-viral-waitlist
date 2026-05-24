export type ReferralCohort = {
  id: string;
  channel: string;
  audience: string;
  health: "healthy" | "watch" | "critical";
  inviteCount: number;
  acceptedCount: number;
  referralRatePct: number;
  boostRule: string;
  notes: string;
};

export type LeaderboardEntry = {
  company: string;
  segment: string;
  referrals: number;
  activatedInvites: number;
  score: number;
  health: "healthy" | "watch" | "critical";
  incentive: string;
  nextAction: string;
};

export type WaitlistArtifact = {
  path: string;
  kind: string;
  description: string;
  tags: string[];
};

export const referralCohorts: ReferralCohort[] = [
  {
    id: "WT-01",
    channel: "Founder outbound",
    audience: "Design partners and warm operator accounts",
    health: "healthy",
    inviteCount: 84,
    acceptedCount: 39,
    referralRatePct: 46,
    boostRule: "Double credits when a referred account books a pilot call.",
    notes: "Highest-intent lane. Keep messaging personal and capacity-constrained."
  },
  {
    id: "WT-02",
    channel: "Partner co-marketing",
    audience: "Agency and implementation partners",
    health: "healthy",
    inviteCount: 112,
    acceptedCount: 51,
    referralRatePct: 41,
    boostRule: "Priority demo slots for top three monthly referrers.",
    notes: "Strong when paired with joint launch assets and clear ICP filters."
  },
  {
    id: "WT-03",
    channel: "Product-led referral",
    audience: "Users already inside the beta environment",
    health: "watch",
    inviteCount: 63,
    acceptedCount: 18,
    referralRatePct: 29,
    boostRule: "Unlock advanced templates after two activated referrals.",
    notes: "Good compounding lane, but only when onboarding friction stays low."
  },
  {
    id: "WT-04",
    channel: "Cold social launch",
    audience: "Broader startup and SaaS audience",
    health: "watch",
    inviteCount: 240,
    acceptedCount: 34,
    referralRatePct: 14,
    boostRule: "Leaderboard visibility only, no premium incentives yet.",
    notes: "Biggest top-of-funnel surface, but lower qualification and weaker activation."
  }
];

export const leaderboardEntries: LeaderboardEntry[] = [
  {
    company: "Atlas Revenue Ops",
    segment: "Agency",
    referrals: 18,
    activatedInvites: 11,
    score: 96,
    health: "healthy",
    incentive: "Private onboarding workshop",
    nextAction: "Keep them warm for launch-day customer proof."
  },
  {
    company: "Northline Systems",
    segment: "SaaS operator",
    referrals: 14,
    activatedInvites: 8,
    score: 90,
    health: "healthy",
    incentive: "Fast-track admin seats",
    nextAction: "Prompt for one more partner intro before public release."
  },
  {
    company: "Signal Harbor",
    segment: "Consulting",
    referrals: 9,
    activatedInvites: 4,
    score: 74,
    health: "watch",
    incentive: "Priority feature voting",
    nextAction: "Needs a clearer referral CTA and a better onboarding landing page."
  },
  {
    company: "Mercury Bench",
    segment: "Community",
    referrals: 7,
    activatedInvites: 2,
    score: 58,
    health: "watch",
    incentive: "Leaderboard visibility",
    nextAction: "Do not scale this lane until accepted invites convert at a higher rate."
  }
];

export const waitlistArtifacts: WaitlistArtifact[] = [
  {
    path: "waitlist/referral-rules.md",
    kind: "Ruleset",
    description: "Referral credit rules and launch gating for invite campaigns.",
    tags: ["Referral", "Launch ops", "Growth"]
  },
  {
    path: "waitlist/leaderboard-scoring.md",
    kind: "Scoring guide",
    description: "How scores are calculated from accepted invites and activated accounts.",
    tags: ["Leaderboard", "Scoring", "RevOps"]
  },
  {
    path: "docs/incentive-notes.md",
    kind: "Operator notes",
    description: "Guidance for incentive design, abuse prevention, and cohort pacing.",
    tags: ["Incentives", "Integrity", "Ops"]
  }
];

export const fileSamples: Record<string, string> = {
  "waitlist/referral-rules.md": `# Referral Rules

- Every accepted invite adds one credit.
- Activated invites add two more credits.
- Pilot-booked referrals trigger a double-credit boost.
- Disqualify self-referrals and recycled domains.`,
  "waitlist/leaderboard-scoring.md": `# Leaderboard Scoring

Score formula:
- accepted invite weight
- activated account weight
- segment fit multiplier
- abuse penalty

Never let raw volume outrank activation quality.`,
  "docs/incentive-notes.md": `# Incentive Notes

- Incentives should reward activated demand, not vanity referrals.
- Cap prizes when onboarding capacity is constrained.
- Review suspicious referral clusters before promoting a winner.`
};
