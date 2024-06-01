import { Task } from "./Task";

export class User {
    firstName;
    lastName; 
    age = 1; 
    tasks = [];
    
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

     setAge(newAge) {
        if (Number.isFinite(newAge) && newAge > 0) {
            this.age = newAge;
        }
    }

    addTasks(tasks) {
       tasks.forEach(element => {
        if (element instanceof Task) {
            this.tasks.push(element);
        }
       });
    }

    getTasksCount() {
        return this.tasks.length;
    }
}