import http from "node:http";
import { AddressInfo } from "node:net";

import app from "../src/app";

const routes = [
  "/",
  "/referral-lane",
  "/leaderboard-lab",
  "/verification",
  "/docs",
  "/api/dashboard/summary",
  "/api/referral-lane",
  "/api/leaderboard-lab",
  "/api/waitlist-artifacts",
  "/api/verification",
  "/api/sample"
];

async function request(port: number, path: string) {
  return new Promise<{ status: number; body: string }>((resolve, reject) => {
    const req = http.request(
      {
        hostname: "127.0.0.1",
        port,
        path,
        method: "GET"
      },
      (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => resolve({ status: res.statusCode ?? 0, body }));
      }
    );

    req.on("error", reject);
    req.end();
  });
}

async function main() {
  const server = app.listen(0, "127.0.0.1");
  await new Promise<void>((resolve) => server.once("listening", () => resolve()));
  const { port } = server.address() as AddressInfo;

  try {
    for (const path of routes) {
      const { status, body } = await request(port, path);
      if (status !== 200) {
        throw new Error(`Smoke check failed for ${path} with status ${status}`);
      }

      if (!path.startsWith("/api/")) {
        for (const marker of ["Product depth", "What these repos have in common", "Portfolio", "GitHub", "Kinetic Gain"]) {
          if (!body.includes(marker)) {
            throw new Error(`Smoke check failed for ${path}; missing marker: ${marker}`);
          }
        }
      }
    }
    console.log("smoke ok");
  } finally {
    server.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
