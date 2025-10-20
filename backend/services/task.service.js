const Task = require("../models/task.model");

class TaskService {
    find = async () => {
        const task = await TaskService.find({});
        return task;
    };

    create = async (body) => {
        const task = new Task(body);
        const savedTask = await task.save();
        return savedTask;
    };

    update = async (id, body) => {
        const updateTask = await Task.findByIdAndUpdate(id, body,{new : true,});
        return updateTask;
    };

    delete = async (id) => {
        const deletedTask = await Task.findByIdAndDelete(id);
        return deletedTask;
    };
}

module.exports = TaskService;