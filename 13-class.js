//class is Blueprint or Design or Template

class Student {
  //Data member
  //constructor
  constructor(fullName, city, age, isMarried) {
    this.fullName = fullName;
    this.city = city;
    this.age = age;
    this.isMarried = isMarried;
  }
  //member function or method
  details() {
    console.log(`Student Name :${this.fullName} `);
    console.log(`Student City Name: ${this.city}`);
    console.log(`Student age is : ${this.age}`);
    console.log(`Student Married Details : ${this.isMarried}`);
  }
}
const stdElon = new Student("Elon Musk", "LA", 21, true);
stdElon.details();

