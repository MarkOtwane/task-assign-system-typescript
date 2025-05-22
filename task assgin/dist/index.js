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
let users = [];
let tasks = [];
class User {
    constructor(name, isAdmin, userId) {
        this.name = name;
        this.isAdmin = isAdmin;
        this.userId = userId;
    }
    mainActivities() {
        allowInput.question('Choose as option: 1 access user data 2.Access task data', (number) => {
            if (parseInt(number) === 1) {
                admin.manipulateUser();
            }
            else if (parseInt(number)) {
                // task.manupilateTasks();
            }
            else {
                console.log('Wrong option!! choose option 1 or 2');
                this.mainActivities();
            }
        });
    }
    // function to perform CRUD operation
    manipulateUser() {
        console.log('options: 1. create, 2. update, 3. retrieve, 4. delete');
        allowInput.question('choose the options available', (number) => {
            if (parseInt(number) === 1) {
                console.log("create a user");
            }
            else if (parseInt(number) === 2) {
                console.log("update user");
            }
            else if (parseInt(number) === 3) {
                console.log("get users");
            }
            else if (parseInt(number) === 4) {
                console.log("delete a user");
            }
            else {
                console.log("choose between the options");
                this.manipulateUser();
            }
        });
    }
}
class Task {
    constructor(typeOfTask, taskPriority, dateToCompletion, startDate) {
        this.typeOfTask = typeOfTask;
        this.taskPriority = taskPriority;
        this.dateToCompletion = dateToCompletion;
        this.startDate = startDate;
    }
    manipulateTasks() {
        console.log('options: 1. create, 2. update, 3. retrieve, 4. delete');
        allowInput.question('choose the options available', (number) => {
            if (parseInt(number) === 1) {
                console.log("create a Tasks");
            }
            else if (parseInt(number) === 2) {
                console.log("update Tasks");
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
        });
    }
}
const admin = new User("Mark", true, 123456789);
console.log(admin.mainActivities());
// cons task = new Task()
