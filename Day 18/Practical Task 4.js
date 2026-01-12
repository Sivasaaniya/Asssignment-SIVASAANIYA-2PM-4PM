let marks = 85;
let grade, remark;

if (marks >= 90) {
    grade = "A";
    remark = "Excellent";
} else if (marks >= 75) {
    grade = "B";
    remark = "Very Good";
} else if (marks >= 60) {
    grade = "C";
    remark = "Good";
} else if (marks >= 40) {
    grade = "D";
    remark = "Pass";
} else {
    grade = "F";
    remark = "Fail";
}
console.log("Marks:", marks);
console.log("Grade:", grade);
console.log("Remark:", remark);