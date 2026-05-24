# B2B Viral Waitlist Architecture

`b2b-viral-waitlist` models launch waitlist growth as B2B revenue plumbing rather than a consumer giveaway mechanic. It combines referral cohorts, activation-weighted scoring, artifact samples, and verification checks into one operator surface.

## Core surfaces

- `src/app.ts`
  - Express application serving HTML routes and JSON payloads.
- `src/data/sampleWaitlist.ts`
  - Invite cohorts, leaderboard entries, artifact metadata, and sample rule text.
- `src/services/waitlistService.ts`
  - Summary metrics and API projections over the modeled waitlist data.
- `src/services/render.ts`
  - Operator UI and route-specific HTML views.

## Design goal

The repo is designed to show that B2B waitlists need:

- invite-lane quality controls
- activation-aware referral scoring
- explicit incentive rules
- leaderboard integrity checks

That keeps launch growth commercially useful instead of noisy.
