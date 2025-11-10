import mongoose from "mongoose";

let isConnected = false;

export async function connectMongo() {
  if (isConnected) return;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("❌ MONGODB_URI not found in .env");

  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    throw err;
  }
}
