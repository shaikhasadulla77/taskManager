const taskService = require("../services/task.service");

exports.createTask = async (req, res) => {
  try {
    // Array me se pehli file nikalne ke liye
    const file = req.files && req.files.length > 0 ? req.files[0] : null;
    
    const task = await taskService.createTask(req.body, file);
    return res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    return res.status(400).json({ error: error.message });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const file = req.files && req.files.length > 0 ? req.files[0] : null;
    
    const task = await taskService.updateTask(req.params.id, req.body, file);
    if (!task) return res.status(404).json({ error: "Task nahi mila" });
    return res.status(200).json(task);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Baaki ke delete aur download waale functions ko waise hi rehne do
exports.deleteTask = async (req, res) => {
  try {
    const task = await taskService.deleteTask(req.params.id);
    if (!task) return res.status(404).json({ error: "Task nahi mila" });
    return res.status(200).json({ message: "Task remove ho gaya" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.downloadFile = async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (!task || !task.linkedFile || !task.linkedFile.data) {
      return res.status(404).json({ error: "Is task me koi file nahi hai" });
    }
    res.set("Content-Type", task.linkedFile.contentType);
    res.set("Content-Disposition", `inline; filename="${task.linkedFile.fileName}"`);
    return res.send(task.linkedFile.data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};