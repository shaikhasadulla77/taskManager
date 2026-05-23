const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");
const upload = require("../config/multerConfig"); 

// upload.any() lagane se frontend ka koi bhi file name chal jayega
router.post("/", upload.any(), taskController.createTask);
router.get("/", taskController.getAllTasks);
router.put("/:id", upload.any(), taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
router.get("/:id/file", taskController.downloadFile);

module.exports = router;