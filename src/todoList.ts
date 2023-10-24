export interface Task {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
  }
  
  class TodoList {
    public tasks: Task[] = [];
    public currentId: number = 1;
    
    getTasks(): Task[] {
        return this.tasks;
    }
  
    // Add a new task to the list
    addTask(task: Omit<Task, 'id' | 'completed'>): void {
      const newTask: Task = {
        id: this.currentId++,
        completed: false,
        ...task,
      };
      this.tasks.push(newTask);
    }
  
    // Mark a task as completed by ID
    markTaskAsCompleted(taskId: number): void {
      const task = this.tasks.find((t) => t.id === taskId);
      if (task) {
        task.completed = true;
      }
    }
  
    // Remove a task by ID
    removeTask(taskId: number): void {
      const index = this.tasks.findIndex((t) => t.id === taskId);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    }
  
    // List tasks (optionally list completed tasks as well)
    listTasks(showCompleted: boolean = false): void {
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
  export default TodoList
  