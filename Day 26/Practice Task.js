// Task 1
let globalVar = "I am global";

function outer() {
    let outerVar = "I am outer";

    function inner() {
        let innerVar = "I am inner";
        console.log(globalVar); 
        console.log(outerVar); 
        console.log(innerVar);  
    }

    inner();
}
outer();

// Task 2
function makeCounter() {
    let count = 0; 

    return function () { 
        count++;
        console.log("Count:", count);
    };
}

let counter = makeCounter();
counter();
counter(); 
counter(); 

// Task 3
function greet(name) {
    console.log("Hello, " + name + "!");
}

setTimeout(function() {
    greet("Siva");
}, 2000); 

// Task 4
let promiseExample = new Promise(function(resolve, reject) {
    let success = true; 
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

promiseExample
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

// Task 5
async function asyncExample() {
    try {
        let result = await promiseExample; 
        console.log("Async/Await Result:", result);
    } catch (err) {
        console.log("Async/Await Error:", err);
    }
}

asyncExample();
