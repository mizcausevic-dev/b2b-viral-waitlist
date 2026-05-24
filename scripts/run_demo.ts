import { leaderboardLab, payload, summary } from "../src/services/waitlistService";

console.log("b2b-viral-waitlist demo");
console.log(JSON.stringify(summary(), null, 2));
console.log(JSON.stringify(leaderboardLab(), null, 2));
console.log(JSON.stringify(payload().artifacts, null, 2));
