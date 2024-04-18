"use strict";
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
    }
    calculateArea() {
        return Math.PI * this._radius ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this._radius;
    }
}
const circle = new Circle(5);
console.log("Radius:", circle.radius);
console.log("Perimeter:", circle.calculatePerimeter());
console.log("Area:", circle.calculateArea());
circle.radius = 7;
console.log("\nAfter updating radius:");
console.log("Radius:", circle.radius);
console.log("Perimeter:", circle.calculatePerimeter());
console.log("Area:", circle.calculateArea());
