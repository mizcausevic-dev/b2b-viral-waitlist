import { fileSamples, leaderboardEntries, referralCohorts, waitlistArtifacts } from "../data/sampleWaitlist";

export function summary() {
  const totalAccepted = referralCohorts.reduce((sum, item) => sum + item.acceptedCount, 0);
  const averageReferralRate = Math.round(
    referralCohorts.reduce((sum, item) => sum + item.referralRatePct, 0) / referralCohorts.length
  );
  const healthyCohorts = referralCohorts.filter((item) => item.health === "healthy").length;
  const topScore = Math.max(...leaderboardEntries.map((item) => item.score));

  return {
    cohortCount: referralCohorts.length,
    totalAccepted,
    averageReferralRate,
    healthyCohorts,
    eventCount: leaderboardEntries.length,
    artifactCount: waitlistArtifacts.length,
    topScore,
    recommendation:
      "Keep the founder and partner referral lanes tight, because the waitlist compounds fastest when referral volume stays qualified and activation-led."
  };
}

export function referralLane() {
  return referralCohorts;
}

export function leaderboardLab() {
  return leaderboardEntries;
}

export function artifacts() {
  return waitlistArtifacts.map((artifact) => ({
    ...artifact,
    sample: fileSamples[artifact.path]
  }));
}

export function verification() {
  return [
    "The repo treats B2B waitlist growth as revenue plumbing with referral quality and activation posture, not just signup count theater.",
    "Referral lanes make it obvious which channels are compounding demand and which ones are just inflating top-of-funnel volume.",
    "Leaderboard logic stays tied to activated demand so incentives do not reward low-intent or abusive invite behavior."
  ];
}

export function payload() {
  return {
    dashboard: summary(),
    referralLane: referralLane(),
    leaderboardLab: leaderboardLab(),
    artifacts: artifacts(),
    verification: verification()
  };
}
