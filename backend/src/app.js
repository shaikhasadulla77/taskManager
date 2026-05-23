require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/task.routes'); // Un-commented & aligned file name

const app = express();

// Connect to MongoDB Database
connectDB();

// Global Middlewares
app.use(cors());
app.use(express.json()); 

// Route mounting point 
app.use('/api/tasks', taskRoutes); // Un-commented endpoint bridge

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => console.log(`Server listening reliably on Port ${PORT}`));