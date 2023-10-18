"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const readline_1 = __importDefault(require("readline"));
const todoList_1 = require("./todoList");
const todoList = new todoList_1.TodoList();
// Create a readline interface for user input.
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Function to display the menu.
function showMenu() {
    console.log('Select a command:');
    console.log('1. Add a new task');
    console.log('2. Mark a task as completed');
    console.log('3. Remove a task');
    console.log('4. List tasks');
    console.log('0. Exit');
}
// Function to get user choice.
function getUserChoice() {
    return new Promise((resolve) => {
        rl.question('Enter the number of your choice: ', (choice) => {
            resolve(choice.trim()); // Trim any leading/trailing whitespace
        });
    });
}
// Main menu function.
function startMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        let choice = '';
        while (choice !== '0') {
            showMenu();
            choice = yield getUserChoice();
            switch (choice) {
                case '1':
                    // Handle the "Add a new task" command
                    rl.question('Enter the title of the task: ', (title) => {
                        rl.question('Enter the description (optional): ', (description) => {
                            // Call your function to add a new task here
                            todoList.addTask({ title, description });
                            console.log('Task added successfully.');
                            startMenu();
                        });
                    });
                    break;
                case '2':
                    // Handle the "Mark a task as completed" command
                    rl.question('Enter the ID of the task to mark as completed: ', (id) => {
                        // Call your function to mark a task as completed here
                        todoList.markTaskAsCompleted(parseInt(id, 10));
                        console.log('Task marked as completed.');
                        startMenu();
                    });
                    break;
                case '3':
                    // Handle the "Remove a task" command
                    rl.question('Enter the ID of the task to remove: ', (id) => {
                        // Call your function to remove a task here
                        todoList.removeTask(parseInt(id, 10));
                        console.log('Task removed.');
                        startMenu();
                    });
                    break;
                case '4':
                    // Handle the "List tasks" command
                    // You can provide an option to list all tasks or only pending tasks here
                    todoList.listTasks();
                    startMenu();
                    break;
                case '0':
                    console.log('Exiting...');
                    break;
                default:
                    console.log('Invalid choice. Please select a valid option.');
                    break;
            }
        }
        rl.close();
    });
}
// Start the menu.
startMenu();
// Define your yargs commands and options here.
// ...
yargs_1.default.parse();
