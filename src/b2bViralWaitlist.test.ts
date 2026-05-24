import { describe, expect, it } from "vitest";

import { artifacts, leaderboardLab, payload, referralLane, summary } from "./services/waitlistService";

describe("b2b-viral-waitlist", () => {
  it("summary exposes referral and waitlist posture", () => {
    const result = summary();

    expect(result.cohortCount).toBeGreaterThanOrEqual(4);
    expect(result.eventCount).toBeGreaterThanOrEqual(4);
    expect(result.recommendation).toContain("referral");
  });

  it("referral lane and leaderboard stay launch-specific", () => {
    expect(referralLane().some((item) => item.channel.toLowerCase().includes("founder"))).toBe(true);
    expect(leaderboardLab().some((item) => item.company.toLowerCase().includes("atlas"))).toBe(true);
    expect(artifacts().some((artifact) => artifact.path.includes("waitlist"))).toBe(true);
  });

  it("payload bundles the full waitlist operating surface", () => {
    const result = payload();

    expect(result.dashboard.cohortCount).toBe(result.referralLane.length);
    expect(result.leaderboardLab.length).toBeGreaterThan(0);
    expect(result.artifacts.length).toBeGreaterThan(0);
    expect(result.verification.length).toBe(3);
  });
});
