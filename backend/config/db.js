const mongoose = require("mongoose");

const connectDB = async () => {
  const DB_URI = `mongodb+srv://tusharpathneja99:EHUpWaphyZ6OBUHd@skillswapcluster.th1uwvj.mongodb.net/?retryWrites=true&w=majority&appName=skillSwapCluster`;

  try {
    await mongoose.connect(DB_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
  }
};

module.exports = connectDB;
