import express from "express";

import {
  artifacts,
  leaderboardLab,
  payload,
  referralLane,
  summary,
  verification
} from "./services/waitlistService";
import {
  renderDocs,
  renderLeaderboardLab,
  renderOverview,
  renderReferralLane,
  renderVerification
} from "./services/render";

const app = express();
const port = Number(process.env.PORT ?? 5478);

app.get("/", (_req, res) => res.type("html").send(renderOverview()));
app.get("/referral-lane", (_req, res) => res.type("html").send(renderReferralLane()));
app.get("/leaderboard-lab", (_req, res) => res.type("html").send(renderLeaderboardLab()));
app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
app.get("/api/referral-lane", (_req, res) => res.json(referralLane()));
app.get("/api/leaderboard-lab", (_req, res) => res.json(leaderboardLab()));
app.get("/api/waitlist-artifacts", (_req, res) => res.json(artifacts()));
app.get("/api/verification", (_req, res) => res.json(verification()));
app.get("/api/sample", (_req, res) => res.json(payload()));

if (require.main === module) {
  app.listen(port, "127.0.0.1", () => {
    console.log(`B2B Viral Waitlist listening on http://127.0.0.1:${port}`);
  });
}

export default app;
