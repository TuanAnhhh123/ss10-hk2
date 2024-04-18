class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }


    get radius(): number {
        return this._radius;
    }

    set radius(radius: number) {
        this._radius = radius;
    }


    calculateArea(): number {
        return Math.PI * this._radius ** 2;
    }


    calculatePerimeter(): number {
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
