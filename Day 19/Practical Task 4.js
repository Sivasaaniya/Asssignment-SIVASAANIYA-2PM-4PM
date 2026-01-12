let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
    console.log("Number:", num);
});

let squares = numbers.map(function (num) {
    return num * num;
});
console.log("Squares:", squares);
function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
processArray(numbers, function (value) {
    console.log("Processed:", value * 2);
});