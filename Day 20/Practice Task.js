//Task 1
let book = {
    title: "JavaScript Basics",
    author: "John Doe",
    pages: 250,

// Task 2
    describe: function () {
        console.log(
            "Title: " + this.title +
            ", Author: " + this.author +
            ", Pages: " + this.pages
        );
    }
};
book.describe();

// Task 3
let { title, author } = book;
console.log("Title:", title);
console.log("Author:", author);

// Task 4
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    displayInfo() {
        console.log("Name:", this.name, "Salary:", this.salary);
    }
}

let emp1 = new Employee("Siva", 30000);
emp1.displayInfo();

// Task 5
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary); 
        this.department = department;
    }

    showManagerInfo() {
        console.log(
            "Name:", this.name,
            "Salary:", this.salary,
            "Department:", this.department
        );
    }
}

let mgr1 = new Manager("Rahul", 50000, "HR");
mgr1.showManagerInfo();
