import mongoose from "mongoose";

const HouseholdSchema = new mongoose.Schema(
  {
    householdName: { type: String, required: true },          // e.g. "The Smith Family"
    inviteCode:   { type: String, required: true, unique: true, index: true }, // e.g. "SMITH2026"
    lastName:     { type: String, required: true, index: true },               // search fallback
    zip:          { type: String, required: true, index: true },               // search fallback
    allowPlusOne: { type: Boolean, default: false },
    email:        { type: String }, // contact email (optional)
  },
  { timestamps: true }
);

// Normalize a couple fields to help searching
HouseholdSchema.pre("save", function (next) {
  if (this.inviteCode) this.inviteCode = this.inviteCode.trim();
  if (this.lastName)   this.lastName   = this.lastName.trim();
  if (this.zip)        this.zip        = this.zip.trim();
  next();
});

export const Household = mongoose.model("Household", HouseholdSchema);
