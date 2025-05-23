"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const allowInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const userTable = document.querySelector(".mainUsers tbody");
let users = [];
let tasks = [];
// let taskAssigned : TaskAssignment[] = [];
class User {
    constructor(name, isAdmin, userId) {
        this.name = name;
        this.isAdmin = isAdmin;
        this.userId = userId;
    }
    mainActivities() {
        allowInput.question('Choose as option: 1 access user data 2.Access task data : ', (number) => {
            if (parseInt(number) === 1) {
                this.manipulateUser();
            }
            else if (parseInt(number)) {
                // task.manupilateTasks();
            }
            else {
                console.log('Wrong option!! choose option 1 or 2');
                this.mainActivities();
            }
            allowInput.close();
        });
    }
    // function to perform CRUD operation
    manipulateUser() {
        console.log('options: 1. create, 2. update, 3. retrieve, 4. delete');
        allowInput.question('choose the options available : ', (number) => {
            if (parseInt(number) === 1) {
                console.log("create a user");
                //create a function to create a user
                allowInput.question("Enter use details", (userInput) => {
                    const [name, userId, isAdmin] = userInput.split(','); //splits input into parts
                    const user = new User(name, isAdmin === "true", parseInt(userId));
                    users.push(user);
                    console.log(user);
                    allowInput.close();
                });
            }
            else if (parseInt(number) === 2) {
                console.log("update user");
            }
            else if (parseInt(number) === 3) {
                console.log("get users");
                function getAllUsers(tasks) {
                    return tasks;
                }
                console.log(getAllUsers(tasks));
            }
            else if (parseInt(number) === 4) {
                console.log("delete a user");
                // delete users 
                function DeleteElement(tasks, value) {
                    const index = tasks.indexOf(value);
                    if (index !== -1) {
                        tasks.splice(index, 1);
                    }
                }
                DeleteElement(tasks);
                console.log(tasks);
            }
            else {
                console.log("choose between the options");
                this.manipulateUser();
            }
            allowInput.close();
        });
        tasks.forEach((task) => {
            const row = document.createElement('tr');
            const taskType = document.createElement('td');
            taskType.textContent = task.typeOfTask;
            const priorityTask = document.createElement('td');
            priorityTask.textContent = task.taskPriority;
            const dateCompleted = document.createElement('td');
            dateCompleted.textContent = task.dateToCompletion.toDateString();
            const startDateTask = document.createElement('td');
            startDateTask.textContent = task.startDate.toDateString();
            const taskID = document.createElement('td');
            taskID.textContent = task.taskId.toString();
            row.appendChild(taskType);
            row.appendChild(priorityTask);
            row.appendChild(dateCompleted);
            row.appendChild(startDateTask);
            row.appendChild(taskID);
            userTable.appendChild(row);
        });
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
    manipulateTasks() {
        console.log('options: 1. create, 2. update, 3. retrieve, 4. delete');
        allowInput.question('choose the options available : ', (number) => {
            if (parseInt(number) === 1) {
                console.log("create a Tasks", allowInput.question("Enter task details", (userInput) => {
                    const [typeOfTask, taskPriority, dateToCompletion, startDate, taskId] = userInput.split(','); //splits input into parts
                    const task = new Task(typeOfTask, taskPriority, new Date(dateToCompletion), new Date(startDate), parseInt(taskId));
                    tasks.push(task);
                    console.log(task);
                    allowInput.close();
                }));
            }
            else if (parseInt(number) === 2) {
                console.log("update Tasks");
                // function to edit elements created in an array 
            }
            else if (parseInt(number) === 3) {
                console.log("get Tasks");
            }
            else if (parseInt(number) === 4) {
                console.log("delete a Tasks");
            }
            else {
                console.log("Option does not exit !! choose between the options");
                this.manipulateTasks();
            }
            allowInput.close();
        });
    }
}
allowInput.question("Enter admin details (name,isAdmin,userId): ", (adminInput) => {
    const [name, isAdmin, userId] = adminInput.split(',');
    const admin = new User(name, isAdmin === "true", parseInt(userId));
    admin.mainActivities();
});
