let ages = [12, 18, 25, 15, 30, 17, 40];
let adults = ages.filter(function (age) {
    return age >= 18;
});
console.log("Adults:", adults);
