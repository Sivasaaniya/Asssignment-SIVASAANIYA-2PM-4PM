Student.prototype.getGrade = function () {
    if (this.marks >= 90) return "A";
    else if (this.marks >= 75) return "B";
    else if (this.marks >= 60) return "C";
    else return "F";
};
console.log("saaniya Grade:", s3.getGrade());