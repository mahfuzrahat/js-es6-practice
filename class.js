class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Ideal School and College";
    }
}

const student1 = new student(22, "Shuvo");
const student2 = new student(25, "Taskin");
const student3 = new student(29, "Bappi");
console.log(student1.name, student2.name);
// console.log(student3);