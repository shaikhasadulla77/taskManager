// 🚀 CHANGE: Pehli line ko simple kar diya taaki Render par crash na ho
require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/task.routes'); 

const app = express();

// Connect to MongoDB Database
connectDB();

// Global Middlewares
app.use(cors());
app.use(express.json()); 

// 🌐 Ek Welcome Route add kiya hai (Browser me test karne ke liye)
app.get("/", (req, res) => {
  res.status(200).json({ message: "Task Manager Backend is Live!" });
});

// Route mounting point 
app.use('/api/tasks', taskRoutes); 

const PORT = process.env.PORT || 10000; 

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running successfully on port ${PORT}`);
});