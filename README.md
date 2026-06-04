# b2b-viral-waitlist

Board-ready Kinetic Gain surface for referral-driven B2B waitlists, cohort pacing, activation-aware scoring, and launch gating rules that keep growth quality ahead of vanity volume.

- Live: [http://waitlist.kineticgain.com/](http://waitlist.kineticgain.com/)
- Repo: [https://github.com/mizcausevic-dev/b2b-viral-waitlist](https://github.com/mizcausevic-dev/b2b-viral-waitlist)

## Why this matters

Leaders need one waitlist surface that shows which referral lanes are compounding qualified demand, which incentives are distorting launch quality, and where activation pressure should move before the next go-to-market push.

## What it includes

- TypeScript control plane for referral-driven B2B waitlists, leaderboard scoring, invite cohorts, and activation-aware growth loops
- synthetic launch cohorts across founder, partner, product-led, and social invite lanes
- reusable outputs for referral pacing, leaderboard posture, launch artifacts, and board-facing growth narratives
- prerendered static site, JSON payloads, screenshots, and docs

## Routes

- `/`
- `/referral-lane`
- `/leaderboard-lab`
- `/verification`
- `/docs`

## Local run

```powershell
cd b2b-viral-waitlist
npm install
npm run verify
npm run prerender
npm run render:assets
```

## CLI

```powershell
npm run demo
npm run smoke
```

## Docs

- [docs/architecture.md](./docs/architecture.md)
- [docs/incentive-notes.md](./docs/incentive-notes.md)
- [docs/ORIGIN.md](./docs/ORIGIN.md)

## Screenshots

![Overview](./screenshots/01-overview-proof.png)
![Referral lane](./screenshots/02-referral-lane-proof.png)
![Leaderboard lab](./screenshots/03-leaderboard-lab-proof.png)
