# b2b-viral-waitlist

Referral-driven waitlist control plane for B2B launches: invite cohorts, activation-aware scoring, leaderboard posture, and launch gating rules that keep growth quality ahead of vanity volume.

## What it shows

- referral-lane modeling for founder, partner, product-led, and social invite cohorts
- leaderboard lab for activation-weighted referral scoring
- concrete waitlist artifacts and incentive rules
- operator verification for referral integrity and launch readiness

## Routes

- `/`
- `/referral-lane`
- `/leaderboard-lab`
- `/verification`
- `/docs`

## API

- `/api/dashboard/summary`
- `/api/referral-lane`
- `/api/leaderboard-lab`
- `/api/waitlist-artifacts`
- `/api/verification`
- `/api/sample`

## Screenshots

![Overview](./screenshots/01-overview-proof.png)
![Referral lane](./screenshots/02-referral-lane-proof.png)
![Leaderboard lab](./screenshots/03-leaderboard-lab-proof.png)

## Local development

```powershell
cd b2b-viral-waitlist
npm install
npm run dev
```

Then open:

- `http://127.0.0.1:5478/`
- `http://127.0.0.1:5478/referral-lane`
- `http://127.0.0.1:5478/leaderboard-lab`
- `http://127.0.0.1:5478/verification`
- `http://127.0.0.1:5478/docs`

## Validation

```powershell
npm run verify
npm run render:assets
```

## Documentation

- [docs/architecture.md](./docs/architecture.md)
- [docs/ORIGIN.md](./docs/ORIGIN.md)
