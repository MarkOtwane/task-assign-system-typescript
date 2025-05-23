class User {
    name: string;
    isAdmin: boolean;
    userId: number;

    constructor(name: string, isAdmin: boolean, userId: number) {
        this.name = name;
        this.isAdmin = isAdmin;
        this.userId = userId;
    }
}

class Task {
    typeOfTask: string;
    taskPriority: 'high' | 'low' | 'medium';
    taskId: number;
    dateToCompletion: Date;
    startDate: Date;

    constructor(
        typeOfTask: string,
        taskPriority: 'high' | 'low' | 'medium',
        taskId: number,
        dateToCompletion: Date,
        startDate: Date
    ) {
        this.typeOfTask = typeOfTask;
        this.taskPriority = taskPriority;
        this.taskId = taskId;
        this.dateToCompletion = dateToCompletion;
        this.startDate = startDate;
    }
}

class TaskAssignment {
    userId: number;
    taskId: number;

    constructor(userId: number, taskId: number) {
        this.userId = userId;
        this.taskId = taskId;
    }
}

let users: User[] = [];
let tasks: Task[] = [];
let taskAssignments: TaskAssignment[] = [];

const userTable = document.querySelector(".mainUsers tbody")!;
const taskTable = document.querySelector(".tasksData tbody")!;
const assignmentTable = document.querySelector(".taskAssign tbody")!;

// DOM Helpers
function getUsers() {
    userTable.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.isAdmin}</td>
            <td>${user.userId}</td>
            <td><button onclick="deleteUser(${user.userId})">Delete</button></td>
        `;
        userTable.appendChild(row);
    });
}

function createTasks() {
    taskTable.innerHTML = '';
    tasks.forEach(task => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.typeOfTask}</td>
            <td>${task.taskPriority}</td>
            <td>${task.taskId}</td>
            <td>${task.dateToCompletion.toDateString()}</td>
            <td>${task.startDate.toDateString()}</td>
            <td><button onclick="deleteTask(${task.taskId})">Delete</button></td>
        `;
        taskTable.appendChild(row);
    });
}

function assignTasksToUsers() {
    assignmentTable.innerHTML = '';
    taskAssignments.forEach(assignment => {
        const user = users.find(u => u.userId === assignment.userId);
        const task = tasks.find(t => t.taskId === assignment.taskId);
        if (user && task) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.userId}</td>
                <td>${task.typeOfTask}</td>
                <td>${task.taskPriority}</td>
                <td>${task.dateToCompletion.toDateString()}</td>
            `;
            assignmentTable.appendChild(row);
        }
    });
}

// dele with buttons
(document.getElementById("createUser") as HTMLButtonElement).addEventListener("click", (e) => {
    e.preventDefault();
    const name = (document.getElementById("adminLogin") as HTMLInputElement).value;
    const isAdmin = (document.getElementById("checkAdmin") as HTMLInputElement).value === "true";
    const userId = parseInt((document.getElementById("idNum") as HTMLInputElement).value);
    const newUser = new User(name, isAdmin, userId);
    users.push(newUser);
    getUsers();
});

(document.getElementById("createTaks") as HTMLButtonElement).addEventListener("click", (e) => {
    e.preventDefault();
    const type = (document.getElementById("taskType") as HTMLInputElement).value;
    const priority = (document.getElementById("taskPriority") as HTMLInputElement).value as 'high' | 'low' | 'medium';
    const id = parseInt((document.getElementById("taskID") as HTMLInputElement).value);
    const complete = new Date((document.getElementById("CompleteTask") as HTMLInputElement).value);
    const start = new Date((document.getElementById("StartTask") as HTMLInputElement).value);
    const task = new Task(type, priority, id, complete, start);
    tasks.push(task);
    createTasks();
});

(document.getElementById("assignTask") as HTMLButtonElement).addEventListener("click", (e) => {
    e.preventDefault();
    const userId = parseInt((document.getElementById("UserID") as HTMLInputElement).value);
    const taskId = parseInt((document.querySelector("form:nth-of-type(3) #taskID") as HTMLInputElement).value);
    const assign = new TaskAssignment(userId, taskId);
    taskAssignments.push(assign);
    assignTasksToUsers();
});

// function  to delkete users 
(window as any).deleteUser = (userId: number) => {
    users = users.filter(u => u.userId !== userId);
    getUsers();
};

(window as any).deleteTask = (taskId: number) => {
    tasks = tasks.filter(t => t.taskId !== taskId);
    createTasks();
};
