//1. Object literal
let person = {
  fullName: "Elon Musk",
  city: "LA",
  isMarried: true,
  age: 34,
};
console.log(typeof person);
console.log(person);
console.log(`Reading value form the object`);
console.log("1.Dot Notation");
const fullName = person.fullName;
console.log(fullName);
console.log(`city is: ${person.city}`);

console.log("===2.square notation []");
const age = person["age"];
console.log(`Person age is :${age}`);

//adding properties into object

person.graduation = "MCA";

console.log(person);

//delate properties into object
delete person.isMarried;
console.log(person);

//update properties into object
person.age = 45;
console.log(person);

//empty object  and add properties and value
let employee = {};
employee.fullName = "Chitta ranjan Swain";
employee.age = 21;
employee.collage = "Niis";
console.log(employee);

//object inside method

let student = {
  fullName: "Chitta ranjan swain",
  city: "Mumbai",
  email: "Swainchitta26@gmail.com",
  gender: "Male",
  qualification: "MCA",
  age: 21,
  isMarried: false,
  hobbies: ["mobile Gaming", "Reading", "Traveling"],
  details: function () {
    console.log(`Student ${this.fullName} Details is:`);
    console.log(`student city:${this.city}`);
    console.log(`student married:${this.isMarried}`);
    console.log(`student gender:${this.gender}`);
    console.log(`student email:${this.email}`);
    console.log(`student qualification:${this.qualification}`);
    console.log(`student age:${this.age}`);
    console.log(`student city:${this.hobbies}`);
  },
};

student.details();

//nested object

let studentChitta = {
  fullName: "Chitta ranjan swain",
  city: "Mumbai",
  email: "Swainchitta26@gmail.com",
  gender: "Male",
  qualification: "MCA",
  age: 21,
  isMarried: false,
  hobbies: ["mobile Gaming", "Reading", "Traveling"],
  marks: {
    physic: 90,
    math: 67,
    programming: 89,
    socialScience: 78,
  }
};

console.log(studentChitta.marks.programming);
console.log(studentChitta.marks.math);
console.log(studentChitta.hobbies);


studentChitta.hobbies.push("Watching Movies");
const arrayHobbies=studentChitta.hobbies;

//array traves
for (const element of arrayHobbies) {
    console.log(element);

}





