const multer = require("multer");

// File ko disk ke bajaye RAM (buffer) me save karne ke liye
const storage = multer.memoryStorage();

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // Max 10MB file allow karega
  }
});

module.exports = upload;