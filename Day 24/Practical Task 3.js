function divide(a, b) {
    try {
        if (b === 0) {
            throw "Cannot divide by zero";
        }
        console.log("Result:", a / b);
    } catch (err) {
        console.log("Calculator Error:", err);
    }
}
divide(10, 2);
divide(10, 0);
