function ToDoApp() {
    this.tasks  = [];
}

ToDoApp.prototype.addTask = function(task) {
    if(task != null && typeof(task) === 'object') {
        // >> Here, both an object and an array are of the same type, which is 'object'. To handle them 
        //    separately, we need to distinguish between the two using Array.isArray(task) --> (True or False).
        // >> And yes, we cannot directly use task.toString() on an array or object because the instructions 
        //    specify that we must add each element of the array separately.
        if(Array.isArray(task)) {
            task.forEach(el => {
                this.tasks.push(el);
            });
        } else {
            this.tasks.push(task.text);
        }
    }
     else {
        this.tasks.push(task);
    }
}

ToDoApp.prototype.displayTasks = function() {
    this.tasks.forEach(function(task, index) {
        console.log(`${index} : ${task}`);
    })
}

var myToDo = new ToDoApp();

myToDo.addTask({text : "Buy Gross"});
myToDo.addTask("Learn JS");
myToDo.addTask(["Play Cricket", "Running"]);
myToDo.displayTasks();

_____________________________________________________________________________________________
// function ToDoApp() {
//     this.tasks  = [];
// }

// ToDoApp.prototype.addTask = function(task) {
//     if(task != null && typeof(task) === 'object') {
//         this.tasks.push(task.toString());
//     } else {
//         this.task.push(task);
//     }
// }

// ToDoApp.prototype.displayTasks = function() {
//     this.tasks.forEach(function(task, index) {
//         console.log(`${index} : ${task}`);
//     })
// }

// var myToDo = new ToDoApp();

// myToDo.addTask({text : "Buy Gross"});
// myToDo.addTask("Learn JS");
// myToDo.addTask(["Play Cricket", "Running"]);
// myToDo.displayTasks();