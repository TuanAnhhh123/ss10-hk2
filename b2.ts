class Student {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}

let students: Student[] = [];

const student1 = new Student(1, 20, "student1@gmail.com");
const student2 = new Student(2, 22, "student2@gmail.com");
const student3 = new Student(3, 21, "student3@gmail.com");

students.push(student1, student2, student3);

console.log("Danh sách sinh viên:");
students.forEach((student, index) => {
    console.log(`Sinh viên ${index + 1}:`);
    console.log("ID:", student.id);
    console.log("Age:", student.age);
    console.log("Email:", student.email);
    console.log("-------------------");
});

