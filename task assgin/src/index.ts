import * as readline from 'readline';

const allowInput = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// const userTable = document.querySelector(".mainUsers tbody") as HTMLBodyElement

let users: User[] = [];
let tasks : Task[] = [];
// let taskAssigned : TaskAssignment[] = [];

class User{
    name: string;
    isAdmin:true | false; //literals says that theis is onlyn two option 
    userId:number;
    constructor(name:string, isAdmin:boolean, userId:number){
        this.name = name;
        this.isAdmin = isAdmin;
        this.userId = userId
    }
    mainActivities(){
        allowInput.question('Choose as option: 1 access user data 2.Access task data : ', (number)=>{
            if(parseInt(number)===1){
                this.manipulateUser();
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
        allowInput.question('choose the options available : ', (number)=>{
            if(parseInt(number)===1){
                console.log("create a user");
                //create a function to create a user
                allowInput.question("Enter use details", (userInput)=>{
                    const [name, userId, isAdmin] = userInput.split(',') //splits input into parts
                    const user = new User(name, isAdmin === "true", parseInt(userId))
                    users.push(user);
                    console.log(user);
                    
                    allowInput.close();

                }) 
            }
            else if (parseInt(number)===2){
                console.log("update user");
            }
            else if (parseInt(number)===3){
                console.log("get users");
                function getAllUsers(tasks: Task[]): Task[]{
                    return tasks
                }
                console.log(getAllUsers(tasks));
                
            }
            else if (parseInt(number)===4){
                console.log("delete a user");
                // delete users 
                function DeleteElement(tasks : any[], value? : any[]) {
                    const index = tasks.indexOf(value);
                    if (index !== -1) {
                      tasks.splice(index, 1);
                    }
                }
                  
                DeleteElement(users);
                console.log(users);
                  
                  
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
    taskPriority: 'high'| 'low' | 'medium';
    taskId: number;
    dateToCompletion: Date;
    startDate:Date;

    constructor(typeOfTask:string, taskPriority: 'high'| 'low' | 'medium', dateToCompletion:Date, startDate:Date, taskId:number){
        this.typeOfTask = typeOfTask;
        this.taskPriority = taskPriority;                           
        this.dateToCompletion = dateToCompletion;
        this.startDate = startDate;
        this.taskId = taskId
    }
    manipulateTasks(){
        console.log('options: 1. create, 2. update, 3. retrieve, 4. delete');
        allowInput.question('choose the options available : ', (number)=>{
            if(parseInt(number)===1){
                console.log("create a Tasks",
                allowInput.question("Enter task details", (userInput)=>{
                    const [typeOfTask,taskPriority, dateToCompletion, startDate, taskId] = userInput.split(',') //splits input into parts
                    const task = new Task(typeOfTask, taskPriority as 'high' | 'low' | 'medium', new Date(dateToCompletion), new Date(startDate), parseInt(taskId))
                    tasks.push(task);
                    console.log(task);
                    
                    allowInput.close();

                }) 
            
            )
                
            }
            else if (parseInt(number)===2){
                console.log("update Tasks");
                // function to edit elements created in an array 

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


allowInput.question("Enter admin details (name,isAdmin,userId): ", (adminInput) => {
    const [name, isAdmin, userId] = adminInput.split(',');
    const admin = new User(name, isAdmin === "true", parseInt(userId));
    admin.mainActivities();
});
