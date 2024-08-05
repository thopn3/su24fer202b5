// Object
const student = {
    firstName: "Duong",
    lastName: "Hoang Tuan",
    age: 20
};

// Array in JS <=> collection: Java, C# -> ArrayList, List, Dictionary
const score = [10, 9, 8.5];

console.log(`Fullname: ${student.firstName} ${student.lastName} - Age: ${student.age}`);
// Phân ra đối tượng
const {firstName:fName, lastName:lName, age:a} = student;
console.log(`Fullname: ${fName} ${lName} - Age: ${a}`);

// Phân rã mảng
const [e1, e2] = score;
console.log("Element 2: " + e2);

// Ví dụ: truyền đối tượng cho function -> Áp dụng cho việc truyền dữ liệu cho Component trong React
function PrintAStudent({firstName, lastName, age}){
    console.log(`Fullname: ${firstName} ${lastName} - Age: ${age}`);
}

PrintAStudent(student);

