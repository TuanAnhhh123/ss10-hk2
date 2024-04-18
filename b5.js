"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log("Department ID:", this.id);
        console.log("Department Name:", this.name);
    }
}
const department = new Department(1, "HR Department", ["A", "B", "C"]);
department.describe();
