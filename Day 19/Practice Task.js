// Task 1
function greet() {
    console.log("Good Morning");
}
greet();

// Task 2
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// Task 3
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 15));

// Task 4
setTimeout(function () {
    console.log("This is a callback function");
}, 2000);

// Task 5
(function () {
    console.log("Started");
})();
