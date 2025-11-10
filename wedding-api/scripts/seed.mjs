import "dotenv/config";
import mongoose from "mongoose";
import { Household } from "../models/Household.js";
import { Guest } from "../models/Guest.js";

async function main() {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/wedding_site";
  await mongoose.connect(uri);
  console.log("✅ Connected to MongoDB");

  // ---- DEV ONLY: clear existing data so the seed is deterministic ----
  await Promise.all([Guest.deleteMany({}), Household.deleteMany({})]);
  console.log("🧹 Cleared Households & Guests");

  // ---- Sample Households ----
  const households = await Household.insertMany([
    {
      householdName: "The Smith Family",
      inviteCode: "SMITH2026",
      lastName: "Smith",
      zip: "10001",
      allowPlusOne: true,
      email: "smith@example.com",
    },
    {
      householdName: "The Joneses",
      inviteCode: "JONES26",
      lastName: "Jones",
      zip: "07030",
      allowPlusOne: false,
      email: "jones@example.com",
    },
  ]);

  const smith = households.find(h => h.inviteCode === "SMITH2026");
  const jones = households.find(h => h.inviteCode === "JONES26");

  // ---- Sample Guests ----
  await Guest.insertMany([
    { householdId: smith._id, firstName: "John", lastName: "Smith", isChild: false },
    { householdId: smith._id, firstName: "Jane", lastName: "Smith", isChild: false },
    { householdId: jones._id, firstName: "Alex", lastName: "Jones", isChild: false },
  ]);

  console.log("🌱 Seeded 2 households, 3 guests");
  await mongoose.disconnect();
  console.log("🔌 Disconnected. Done.");
}

main().catch(err => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
