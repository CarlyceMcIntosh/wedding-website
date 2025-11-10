import mongoose from "mongoose";

const GuestSchema = new mongoose.Schema(
  {
    householdId: { type: mongoose.Schema.Types.ObjectId, ref: "Household", required: true, index: true },
    firstName:   { type: String, required: true },
    lastName:    { type: String, required: true },
    isChild:     { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Guest = mongoose.model("Guest", GuestSchema);
