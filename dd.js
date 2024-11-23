   let person = {
     fullName: "Ram",
     age: 20,
     };
   let student = person;
   student.fullName = "jenny";
   console.log(student);
   console.log(person);

   let person2 = {
    fullName: "munu",
     age: 21,
  };
  student = person2;
console.log(student); //ddd
console.log(person);


//person point out kara ga



// let jenny = {
//   fullName: "Jenny Gates",
//   city: "aa",
// };
// const cloneJenny = Object.assign({}, jenny);
// console.log(jenny);
// console.log(cloneJenny);
// cloneJenny.fullName = "Ram";
// console.log(jenny);
// console.log(cloneJenny);

