// db.js or connectDB.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "prescripto", // Name of your MongoDB database
    });
    console.log("✅ Database Connected");
  } catch (error) {
    console.error("❌ Database connection error:", error);
    process.exit(1);
  }
};

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.
