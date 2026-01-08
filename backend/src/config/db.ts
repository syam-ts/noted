import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI as string; 
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      tlsAllowInvalidCertificates: true,
    });
  } catch (err: any) {
    console.error("Database connection failed:", err.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
