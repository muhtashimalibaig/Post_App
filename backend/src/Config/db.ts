import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const connectDb = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("MongoDB URI is not defined in the .env file.");
    }
    await mongoose.connect(mongoURI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
export default connectDb;
