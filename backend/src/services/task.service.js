const Task = require("../models/task.model");

class TaskService {
  async createTask(taskData, file) {
    const data = { ...taskData };
    if (file) {
      data.linkedFile = {
        data: file.buffer,
        contentType: file.mimetype,
        fileName: file.originalname
      };
    }
    return await Task.create(data);
  }

  async getAllTasks() {
    // Project out the heavy raw buffer data when rendering the initial grid list array
    return await Task.find({}, "-linkedFile.data");
  }

  async getTaskById(id) {
    return await Task.findById(id);
  }

  async updateTask(id, updateData, file) {
    let data = { ...updateData };
    if (file) {
      data.linkedFile = {
        data: file.buffer,
        contentType: file.mimetype,
        fileName: file.originalname
      };
    }
    return await Task.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }

  async deleteTask(id) {
    return await Task.findByIdAndDelete(id);
  }
}

module.exports = new TaskService();