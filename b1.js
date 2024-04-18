"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
const vehicle1 = new Vehicle("Car ", 2020, "Company X ");
const vehicle2 = new Vehicle("Bike ", 2018, "Company Y ");
console.log("Vehicle 1:");
console.log("Name:", vehicle1.name);
console.log("Year:", vehicle1.year);
console.log("Company:", vehicle1.company);
console.log("\nVehicle 2:");
console.log("Name:", vehicle2.name);
console.log("Year:", vehicle2.year);
console.log("Company:", vehicle2.company);
