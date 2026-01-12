class Shape {
    constructor() {
        this.type = "Shape";
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}
let c1 = new Circle(7);
console.log("Circle Area:", c1.area().toFixed(2));