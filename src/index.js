"use strict";
// build task management system
//2 classes user and task class
//how to connect the two classes
//user class has the user deatils(name, role, id)
//task (creating, updating, delete, retrive)
// admin has a role of assigning task to the users, unassign and the information
// for th system to run role if the role is admin then display the create,update, delete, retrieve data options (both users and the tasks)
//now it gives two options user details or tasks details(if its user option creating, deleting, updating,retrieve)
//if its task(option creating, deleting, updating,retrieve) then assign 
//when the assign method is called all users are displayed in the terminal
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var User = /** @class */ (function () {
    function User(name, isAdmin, userID) {
        this.name = name;
        this.isAdmin = isAdmin;
        this.userID = userID;
    }
    //create a function that will check the role of the user if the user is an isadmin then proceed to the function that includes CRUD opreation
    User.prototype.checkAdmin = function () {
        if (this.isAdmin === true) {
            console.log("Welcome to Admin dashboard Mr.".concat(this.name));
            console.log("You can choose between  the two number to either deal with user class or the task class");
            askUser();
        }
    };
    return User;
}());
// function StepNext(params:type) {
// }
// function to get input from the user 
function askUser() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Choose between number 1.Manipulating user data, 2.manipulating task data? ', function (number) {
        // console.log(`Hello, ${name}`);
        if (parseInt(number) === 1) {
            // function to add user
            console.log("Manipulate user data");
        }
        else if (parseInt(number) === 2) {
            // funtion to manipulate the task
            console.log("Manipulate the tasks");
        }
        else {
            console.log("you can only choose btn this two options");
        }
        rl.close();
    });
}
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());
var admin = new User("Mark", true, 40918101);
console.log(admin.checkAdmin());
