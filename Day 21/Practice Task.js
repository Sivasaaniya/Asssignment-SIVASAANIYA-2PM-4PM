// Task 1
let colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

// Task 2
console.log("First Color:", colors[0]);
console.log("Last Color:", colors[colors.length - 1]);

// Task 3
colors.push("Orange");     
console.log(colors);

colors.pop();             
console.log(colors);

colors.unshift("Pink");    
console.log(colors);

colors.shift();            
console.log(colors);

let numbers = [10, 25, 60, 80, 45];

numbers.forEach(function (num) {
    console.log(num);
});

// Task 4
let squares = numbers.map(function (num) {
    return num * num;
});
console.log("Squares:", squares);

// Task 5
let greaterThan50 = numbers.filter(function (num) {
    return num > 50;
});
console.log("Numbers > 50:", greaterThan50);
