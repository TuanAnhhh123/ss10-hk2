class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo(): void {
        console.log("Name:", this.name);
        console.log("Company:", this.company);
        console.log("Phone:", this.phone);
    }
}

const employee = new Employee("Tuấn Anh", "ABC Company", "123-456-7890");


employee.printInfo();
