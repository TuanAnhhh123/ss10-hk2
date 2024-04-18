class Vehicle {
    public name: string;
    protected readonly year: number;
    private company: string;
    private readonly id: string;

    constructor(name: string, year: number, company: string, id: string) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }

    printInfo(): void {
        console.log("Name:", this.name);
        console.log("Year:", this.year);
        console.log("Company:", this.company);
        console.log("ID:", this.id);
    }
}

const vehicle = new Vehicle("Car", 2022, "Company X", "XYZ123");

vehicle.printInfo();
