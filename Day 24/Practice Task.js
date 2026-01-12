// Task 1
//An error in JavaScript is a problem that occurs when the program is running or being interpreted, which stops or affects the normal execution of the program.

// Task 2

//Syntax Error – Mistakes in code structure
//Example: if (a == 5 {

//Runtime Error – Errors that occur while the program is running
//Example: dividing by zero, accessing undefined variable

//Logical Error – Program runs but gives wrong output
//Example: using + instead of * in a formula

// Reference Error – Using a variable that is not defined

// Type Error – Wrong data type used

// Range Error – Value out of range

// Task 3

//Runtime Error	Logical Error
// Occurs while program is running	Occurs due to wrong logic
//Program stops	Program runs but gives wrong result
// Easy to detect	Hard to detect

// Task 4


try {
   let x = 10 / y;  
}
catch(error) {
   console.log("Error occurred");
}
finally {
   console.log("This always runs");
}

// Task 5


let age = 15;

if (age < 18) {
   throw "Age must be 18 or above";
}