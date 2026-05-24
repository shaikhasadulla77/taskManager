const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // 🚀 Backup Bypass: Agar undefined milega, toh direct string use karega
    const dbURI = process.env.MONGO_URI || "mongodb+srv://shaikhasadulla77_db_user:HnfgA5qnGoqRXlKQ@cluster0.vfur3wl.mongodb.net/task-manager?retryWrites=true&w=majority";

    const conn = await mongoose.connect(dbURI);
    console.log("MongoDB Connected Successfully...");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;