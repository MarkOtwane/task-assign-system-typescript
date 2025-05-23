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
    taskPriority: 'high' | 'medium' | 'low';
    taskId: number;
    dateToCompletion: Date;
    startDate: Date;

    constructor(typeOfTask: string, taskPriority: 'high' | 'medium' | 'low', dateToCompletion: Date, startDate: Date, taskId: number) {
        this.typeOfTask = typeOfTask;
        this.taskPriority = taskPriority;
        this.dateToCompletion = dateToCompletion;
        this.startDate = startDate;
        this.taskId = taskId;
    }
}

let users: User[] = [];
let tasks: Task[] = [];

const form = document.querySelector('form')!;
const userTable = document.querySelector('.mainUsers tbody') as HTMLTableSectionElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('adminLogin') as HTMLInputElement;
    const isAdminInput = document.getElementById('checkAdmin') as HTMLInputElement;
    const userIdInput = document.getElementById('idNum') as HTMLInputElement;

    const name = nameInput.value.trim();
    const isAdmin = isAdminInput.value.trim().toLowerCase() === 'true';
    const userId = parseInt(userIdInput.value);

    const user = new User(name, isAdmin, userId);
    users.push(user);

    addUser(user);
    form.reset();
});

function addUser(user: User): void {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.isAdmin ? 'Admin' : 'User'}</td>
        <td>${user.userId}</td>
        <td><button class="deleteBtn">Delete</button></td>
        <td><button class= "editBtn">Edit</button></td>
    `;

    const deleteBtn = row.querySelector('.deleteBtn') as HTMLButtonElement;
    deleteBtn.addEventListener('click', () => {
        users = users.filter(u => u.userId !== user.userId);
        row.remove(); 
    });

    userTable.appendChild(row);
}
