class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    display() {
        console.log("Name:", this.name, "Marks:", this.marks);
    }
}

let s1 = new Student("Arun", 80);
let s2 = new Student("Meena", 90);
let s3 = new Student("Siva", 85);

s1.display();
s2.display();
s3.display();