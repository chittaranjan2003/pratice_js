const studentData = `{

    "fullName":"Elon",
    "age":45,
    "city":"LA",
    "isMarried":true,
    "skills":["HTML","CSS","JS","ML AI","DS"],
    "marks":{
        "phy":90,
        "Eng":60,
        "MATH":99
    },
    "Weight":null
}`;
console.log("==============json String to object conversion==============");
console.log(typeof studentData);
const studentDataInObject = JSON.parse(studentData);
console.log(typeof studentDataInObject);
console.log(studentDataInObject.skills);
console.log(studentDataInObject.fullName);

console.log(`===== Object to JSON String conversion =======`);

let studentJenny = {
  fullName: "Jenny",

  email: "jenny@gmail.com",

  qualification: "BE CSC",

  isMarried: true,

  age: 55,

  hobbies: ["Traveling", "Programming", "Reading"],

  marks: {
    physics: 90,

    maths: 67,

    programming: 89,

    socialScience: 78,
  },
};
const studentJennyJson = JSON.stringify(studentJenny);
console.log(studentJennyJson);
console.log(typeof studentJennyJson);
