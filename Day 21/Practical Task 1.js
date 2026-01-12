let nums = [10, 20, 30, 40];
let total = nums.reduce(function (sum, num) {
    return sum + num;
}, 0);
console.log("Total:", total);