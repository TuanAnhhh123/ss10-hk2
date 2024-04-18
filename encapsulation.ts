/*
    cách tạo class
 */
class Student{
    // khai báo các thuộc tính
    private name:string
    // mặc định nếu ko điền thì sẽ là public
    // bên ngoài class Student có thể truy cập đc
    constructor(name:string){
        this.name=name
    }
    //nơi khai báo các phương thức
    // thầy có phương thức lấy tên người đó
    //get thì có return và ko có tham số
    get getName(){
        return this.name
    }
    // thầy có phương thức đi thay đổi tên người đó
    //có tham số nhận vào và ko cần return
    set setName(newName:string){
        this.name=newName;
    }
}
// instance nghĩa là đi tạo đối tượng từ class
let std1=new Student("minh thu");
let std2=new Student("hoa");
std1.setName="minh hà";
std1.getName;
console.log(std1.getName);

// console.log(555555,std1.getName());

// std1.setName("lan anh");
// console.log(111111,std1.getName());
// console.log("std2",std1);

/**
    access modifier - phạm vi truy cập
    3 phạm vi:
        1.public bên ngoài có thể truy cập đc
        2.private chỉ được truy cập ở bên trong class
                -thế muốn lấy và thay đổi thì làm thế nào?
                mình phải tạo ra các phương thức để lấy giá trị và cập nhật giá trị
            
        3.protected chỉ đc truy cập bên trong class và subclass(class con-kế thừa)
 */
