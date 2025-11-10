import express from "express";
import { Household } from "../models/Household.js";
import { Guest } from "../models/Guest.js";
import { Rsvp } from "../models/Rsvp.js";
import dotenv from "dotenv";

dotenv.config();

export const rsvpRouter = express.Router();

// helper to escape regex special chars
function esc(str = "") {
  return String(str).trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * TEMP TEST ROUTE
 * GET /api/test
 * Just to confirm router is mounted
 */
rsvpRouter.get("/test", (req, res) => {
  res.json({ msg: "RSVP router is working!" });
});

/**
 * POST /api/lookup
 * Body: { eventCode, firstName, lastName }
 * Returns the household + guests on success
 */
rsvpRouter.post("/lookup", async (req, res) => {
  try {
    const { eventCode, firstName, lastName } = req.body || {};

    // 1. Validate body
    if (!eventCode || !firstName || !lastName) {
      return res
        .status(400)
        .json({ error: "Missing eventCode, firstName, or lastName." });
    }

    // 2. Check event code
    if (eventCode.trim().toUpperCase() !== process.env.EVENT_CODE) {
      return res.status(401).json({ error: "Invalid event code." });
    }

    // 3. Find guest (case-insensitive)
    const guest = await Guest.findOne({
      firstName: { $regex: `^${esc(firstName)}$`, $options: "i" },
      lastName: { $regex: `^${esc(lastName)}$`, $options: "i" },
    })
      .populate("householdId") // bring in the household
      .lean();

    if (!guest) {
      return res.status(404).json({
        error: "We couldn’t find your invitation. Please check your info.",
      });
    }

    // 4. Pull all guests in the same household
    const household = guest.householdId;
    const guests = await Guest.find({ householdId: household._id })
      .sort({ firstName: 1 })
      .lean();

    // 5. Build payload
    const payload = {
      householdId: String(household._id),
      householdName: household.householdName,
      allowPlusOne: !!household.allowPlusOne,
      email: household.email || null,
      guests: guests.map((g) => ({
        guestId: String(g._id),
        firstName: g.firstName,
        lastName: g.lastName,
        isChild: !!g.isChild,
        meal: null,
        dietary: "",
      })),
    };

    return res.json(payload);
  } catch (err) {
    console.error("lookup error:", err);
    return res.status(500).json({ error: "Unexpected error. Please try again." });
  }
});

/**
 * POST /api/rsvp
 * Saves RSVP responses for a household
 */
rsvpRouter.post("/rsvp", async (req, res) => {
  try {
    const { householdId, responses, plusOne, notes } = req.body;

    if (!householdId || !Array.isArray(responses)) {
      return res
        .status(400)
        .json({ error: "Missing householdId or responses[]" });
    }

    const rsvp = await Rsvp.findOneAndUpdate(
      { householdId },
      {
        responses,
        plusOne: plusOne || {},
        notes: notes || "",
        submittedAt: new Date(),
        updatedAt: new Date(),
      },
      { upsert: true, new: true }
    );

    return res.json({ status: "ok", rsvpId: rsvp._id });
  } catch (err) {
    console.error("RSVP save error:", err);
    return res.status(500).json({ error: "Failed to save RSVP" });
  }
});
