function multiply(n1, ...n2) {
  // let res=n1*n2;

  console.log(n1, n2);
  //console.log(res);
}
multiply(4, 5, 6);
multiply(9, 10);
multiply(90);
multiply(2, 4, 1, 10);

function divide(n1, n2=1) { //function with default parameter
  console.log(n1 / n2);
}
divide(20, 10);
divide(5); //NaN the output because invalid operation..  

/*const person = {
  firstName: "Akshay",
  age: "25",
  grad: "BE",
};
let firstName = person.firstName;
let age = person.age;
console.log(firstName, age);*/

const person2 = {
  FullName: "Akshay Yadav",
  age2: 45,
  isMarried: true,
};
let { FullName, age2 } = person2;
console.log(FullName,age2);

