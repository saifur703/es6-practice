class Student {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
}
const student1 = new Student('Saifur', 'Rahman', 24);
const student2 = new Student('Mamun', 'Akash', 18);
console.log(student1, student2);
