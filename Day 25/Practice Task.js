// Task 1
function validateNumberInput(value) {
    try {
        if (value === "" || value === null) throw "Input cannot be empty!";
        if (isNaN(value)) throw "Input is not a number!";
        console.log("Valid number:", value);
    } catch (err) {
        console.log("Number Validation Error:", err);
    }
}

validateNumberInput(25);    
validateNumberInput("abc"); 
validateNumberInput("");    

// Task 2
function validateForm(name, email) {
    try {
        if (!name || !email) throw "All form fields are required!";
        console.log("Form is valid:", name, email);
    } catch (err) {
        console.log("Form Error:", err);
    }
}

validateForm("Siva", "siva@gmail.com"); 
validateForm("", "siva@gmail.com");   

// Task 3
function divideNumbers(a, b) {
    try {
        if (b === 0) throw "Division by zero is not allowed!";
        console.log("Division Result:", a / b);
    } catch (err) {
        console.log("Calculator Error:", err);
    }
}

divideNumbers(100, 5); 
divideNumbers(10, 0);  

//Task 4
function login(username, password) {
    try {
        if (!username || !password) throw "Username and password are required!";
        if (username !== "admin" || password !== "1234") throw "Invalid credentials!";
        console.log("Login Successful");
    } catch (err) {
        console.log("Login Error:", err);
    }
}

login("admin", "1234"); 
login("", "1234");      
login("user", "1234");  

// Task 5
function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log("Total:", calculateTotal(100, 3)); // 300
console.log("Total:", calculateTotal(50, 4));  // 200
