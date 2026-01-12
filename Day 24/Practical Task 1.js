function checkNumber(value) {
    try {
        if (isNaN(value)) {
            throw "Not a number!";
        }
        console.log("Valid number:", value);
    } catch (err) {
        console.log("Error:", err);
    }
}
checkNumber(10);
checkNumber("abc");