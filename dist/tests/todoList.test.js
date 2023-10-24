import TodoList from '../todoList';
describe('TodoList', () => {
    let todoList;
    beforeEach(() => {
        todoList = new TodoList();
    });
    it('should add a task', () => {
        const task = {
            title: 'Buy groceries',
            description: 'Milk, eggs, bread',
        };
        todoList.addTask(task);
        expect(todoList.tasks.length).toBe(1);
        expect(todoList.tasks[0].title).toBe('Buy groceries');
        expect(todoList.tasks[0].description).toBe('Milk, eggs, bread');
    });
    it('should mark a task as completed', () => {
        const task = {
            title: 'Buy groceries',
        };
        todoList.addTask(task);
        const taskId = todoList.tasks[0].id;
        todoList.markTaskAsCompleted(taskId);
        const markedTask = todoList.tasks.find((t) => t.id === taskId);
        expect(markedTask === null || markedTask === void 0 ? void 0 : markedTask.completed).toBe(true);
    });
    it('should remove a task', () => {
        const task = {
            title: 'Buy groceries',
        };
        todoList.addTask(task);
        const taskId = todoList.tasks[0].id;
        todoList.removeTask(taskId);
        const removedTask = todoList.tasks.find((t) => t.id === taskId);
        expect(removedTask).toBeUndefined();
    });
    it('should list tasks', () => {
        const task1 = {
            title: 'Buy groceries',
        };
        const task2 = {
            title: 'Walk the dog',
        };
        todoList.addTask(task1);
        todoList.addTask(task2);
        // Mock console.log to capture output
        const consoleLogSpy = jest.spyOn(console, 'log');
        consoleLogSpy.mockImplementation(() => { });
        todoList.listTasks();
        // Expect that the tasks were logged
        expect(consoleLogSpy).toHaveBeenCalledWith('Tasks:');
        expect(consoleLogSpy).toHaveBeenCalledWith('ID: 1');
        expect(consoleLogSpy).toHaveBeenCalledWith('Title: Buy groceries');
        expect(consoleLogSpy).toHaveBeenCalledWith('ID: 2');
        expect(consoleLogSpy).toHaveBeenCalledWith('Title: Walk the dog');
        consoleLogSpy.mockRestore(); // Restore the original console.log
    });
});
