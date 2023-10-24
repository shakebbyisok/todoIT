import TodoList from './dist/todoList.js';

// Instantiate the TodoList class
const TodoListInstance = new TodoList();

// DOM Elements
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodoButton');
const todoListUI = document.getElementById('todoListUI');
const descriptionInput = document.getElementById('descriptionInput');

addTodoButton.addEventListener('click', () => {
    const title = todoInput.value.trim();
    const description = descriptionInput.value.trim();

    if (title) {
        TodoListInstance.addTask({ title: title, description: description });
        renderTodos();
        todoInput.value = ''; // Clear input field after adding
        descriptionInput.value = ''; // Clear description input after adding
    }
});

function renderTodos() {
    todoListUI.innerHTML = ''; // Clear current todos in UI
    const tasks = TodoListInstance.getTasks();

    tasks.forEach(task => {
        const li = document.createElement('li');

        // Checkbox for task completion
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            TodoListInstance.markTaskAsCompleted(task.id);
            renderTodos(); // Re-render to reflect the changes
        });
        li.appendChild(checkbox);

        // Task title
        const titleSpan = document.createElement('span');
        titleSpan.textContent = task.title;
        li.appendChild(titleSpan);

        // Task description
        if (task.description) {
            const descriptionSpan = document.createElement('span');
            descriptionSpan.textContent = ` - ${task.description}`;
            li.appendChild(descriptionSpan);
        }

        // Optionally: Add a delete button for each task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent marking as completed when deleting
            TodoListInstance.removeTask(task.id);
            renderTodos(); // Re-render to reflect the changes
        });
        li.appendChild(deleteBtn);

        todoListUI.appendChild(li);
    });
}


function renderTasks() {
    const tasksContainer = document.getElementById('tasksContainer');
    const tasks = todoList.getTasks();

    tasksContainer.innerHTML = ''; // clear any previous tasks

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task'); // Add a class for styling, if desired

        // Title
        const titleElement = document.createElement('h2');
        titleElement.textContent = task.title;
        taskElement.appendChild(titleElement);

        // Description (optional)
        if (task.description) {
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = task.description;
            taskElement.appendChild(descriptionElement);
        }

        // Completed status
        const completedElement = document.createElement('p');
        completedElement.textContent = `Completed: ${task.completed ? 'Yes' : 'No'}`;
        taskElement.appendChild(completedElement);

        // Append the task to the tasks container
        tasksContainer.appendChild(taskElement);
    });
}


// Initial render
renderTodos();
