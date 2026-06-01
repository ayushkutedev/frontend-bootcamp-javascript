const student = {
    name: "Ayush",
    age: 24,
    course: "Frontend",
}
console.log(student.name);
console.log(student);
student.city = "SanFransicio";
console.log(student);
delete student.course;
console.log(student);