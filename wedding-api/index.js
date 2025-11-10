import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectMongo } from "./db/mongo.js";
import { rsvpRouter } from "./routes/rsvp.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// 🔹 Add BOTH health routes so either path works
app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("/api/health", (_req, res) => res.json({ ok: true }));

// Mount API routes
app.use("/api", rsvpRouter);

async function start() {
  try {
    await connectMongo();
    const PORT = process.env.PORT || 5050;
    app.listen(PORT, () => {
      console.log(`🚀 API on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Startup failed:", err);
    process.exit(1);
  }
}
start();
