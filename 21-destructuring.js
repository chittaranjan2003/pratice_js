

const person = {
  fullName: "Chitta ranjan swain",
  city: "Mumbai",
  email: "Swainchitta26@gmail.com",
  gender: "Male",
  qualification: "MCA",
  age: 21,
  isMarried: false,
  //graduation:"BCA"
};

let age2=person.age;
console.log(age2);
// let {fullName,city,email,gender,age,isMarried}=person;  //object destructuring
 //console.log(fullName,  city,email,  gender,  age,  isMarried);

 //object default property value set
 let {fullName,city,email,gender,age,isMarried,graduation="BAC CS"}=person;//if incase note add property value add but if property is exist it is not run 
 console.log(fullName,  city,email,  gender,  age,  isMarried,graduation); 
 //console.log(person);
 


 //array destructuring and set new value and index in array  but maine array not change.
 let array=[10,20,60];
 const [n1,n2,n3,n4=1]=array;
console.log(n1,n2,n3,n4);
//console.log(array);


 


