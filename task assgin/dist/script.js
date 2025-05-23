"use strict";
class User {
    constructor(name, isAdmin, userId) {
        this.name = name;
        this.isAdmin = isAdmin;
        this.userId = userId;
    }
}
class Task {
    constructor(typeOfTask, taskPriority, dateToCompletion, startDate, taskId) {
        this.typeOfTask = typeOfTask;
        this.taskPriority = taskPriority;
        this.dateToCompletion = dateToCompletion;
        this.startDate = startDate;
        this.taskId = taskId;
    }
}
let users = [];
let tasks = [];
const form = document.querySelector('form');
const userTable = document.querySelector('.mainUsers tbody');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('adminLogin');
    const isAdminInput = document.getElementById('checkAdmin');
    const userIdInput = document.getElementById('idNum');
    const name = nameInput.value.trim();
    const isAdmin = isAdminInput.value.trim().toLowerCase() === 'true';
    const userId = parseInt(userIdInput.value);
    const user = new User(name, isAdmin, userId);
    users.push(user);
    addUser(user);
    form.reset();
});
function addUser(user) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.isAdmin ? 'Admin' : 'User'}</td>
        <td>${user.userId}</td>
        <td><button class="deleteBtn">Delete</button></td>
        <td><button class= "editBtn">Edit</button></td>
    `;
    const deleteBtn = row.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => {
        users = users.filter(u => u.userId !== user.userId);
        row.remove();
    });
    userTable.appendChild(row);
}
