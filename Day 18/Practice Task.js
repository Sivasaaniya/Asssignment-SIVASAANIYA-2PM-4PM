// Task 1
let num = 5;
if (num > 0) {
    console.log("positive number");
} else {
    console.log("not a positive number");
}

// Task 2
let marks = 72;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Task 3
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 4
let i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

//Task 5
let student = {
    name: "saaniya",
    age: 21,
    course: "BCA"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}