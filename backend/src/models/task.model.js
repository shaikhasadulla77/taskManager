const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["TODO", "IN_PROGRESS", "DONE"],
      default: "TODO",
    },
    deadline: {
      type: Date, // Validates incoming date strings seamlessly
    },
    linkedFile: {
      data: Buffer,         // Stores raw file data as binary
      contentType: String,  // e.g., 'application/pdf'
      fileName: String,     // Original filename string
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);