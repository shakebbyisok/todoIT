"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
class TodoList {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }
    getTasks() {
        return this.tasks;
    }
    // Add a new task to the list
    addTask(task) {
        const newTask = Object.assign({ id: this.currentId++, completed: false }, task);
        this.tasks.push(newTask);
    }
    // Mark a task as completed by ID
    markTaskAsCompleted(taskId) {
        const task = this.tasks.find((t) => t.id === taskId);
        if (task) {
            task.completed = true;
        }
    }
    // Remove a task by ID
    removeTask(taskId) {
        const index = this.tasks.findIndex((t) => t.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }
    // List tasks (optionally list completed tasks as well)
    listTasks(showCompleted = false) {
        console.log('Tasks:');
        this.tasks.forEach((task) => {
            if (!task.completed || showCompleted) {
                console.log(`ID: ${task.id}`);
                console.log(`Title: ${task.title}`);
                if (task.description) {
                    console.log(`Description: ${task.description}`);
                }
                console.log(`Completed: ${task.completed}`);
                console.log('---');
            }
        });
    }
}
exports.TodoList = TodoList;
