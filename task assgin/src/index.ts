import * as readline from 'readline';

const allowInput = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let users: User[] = [];
let tasks : Task[] = [];

class User{
    name: string;
    isAdmin:boolean;
    userId:number;
    constructor(name:string, isAdmin:boolean, userId:number){
        this.name = name;
        this.isAdmin = isAdmin;
        this.userId = userId
    }
    mainActivities(){
        allowInput.question('Choose as option: 1 access user data 2.Access task data', (number)=>{
            if(parseInt(number)===1){
                admin.manipulateUser();
            }
            else if(parseInt(number)){
                // task.manupilateTasks();
            }
            else{
                console.log('Wrong option!! choose option 1 or 2');
                this.mainActivities();
            }
            allowInput.close();
        })
    }
    // function to perform CRUD operation
    manipulateUser(){
        console.log('options: 1. create, 2. update, 3. retrieve, 4. delete');
        allowInput.question('choose the options available', (number)=>{
            if(parseInt(number)===1){
                console.log("create a user");
                
            }
            else if (parseInt(number)===2){
                console.log("update user");
            }
            else if (parseInt(number)===3){
                console.log("get users");
            }
            else if (parseInt(number)===4){
                console.log("delete a user");
            }
            else{
                console.log("choose between the options");
                this.manipulateUser();
            }
            allowInput.close()
        });
        
    }

}

class Task{
    typeOfTask:string;
    taskPriority: string;
    dateToCompletion: Date;
    startDate:Date;

    constructor(typeOfTask:string, taskPriority:string, dateToCompletion:Date, startDate:Date){
        this.typeOfTask = typeOfTask;
        this.taskPriority = taskPriority;                           
        this.dateToCompletion = dateToCompletion;
        this.startDate = startDate
    }
    manipulateTasks(){
        console.log('options: 1. create, 2. update, 3. retrieve, 4. delete');
        allowInput.question('choose the options available', (number)=>{
            if(parseInt(number)===1){
                console.log("create a Tasks");
                
            }
            else if (parseInt(number)===2){
                console.log("update Tasks");
            }
            else if (parseInt(number)===3){
                console.log("get Tasks");
            }
            else if (parseInt(number)===4){
                console.log("delete a Tasks");
            }
            else{
                console.log("Option does not exit !! choose between the options");
                this.manipulateTasks();
            }
            allowInput.close();
        });
        
    }
}

const admin = new User("Mark", true, 123456789);
console.log(admin.mainActivities())
// cons task = new Task()
