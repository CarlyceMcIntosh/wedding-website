import mongoose from "mongoose";

const RsvpSchema = new mongoose.Schema(
  {
    householdId: { type: mongoose.Schema.Types.ObjectId, ref: "Household", required: true, index: true },
    responses: { type: Array, default: [] },
    plusOne: { type: Object, default: {} },
    notes: { type: String, default: "" },
    submittedAt: { type: Date },
    updatedAt: { type: Date }
  },
  { timestamps: true }
);

export const Rsvp = mongoose.model("Rsvp", RsvpSchema);
