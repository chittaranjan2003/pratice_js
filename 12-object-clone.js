let person = {
  fullName: "Ram",
  age: 20,
};
console.log(person);
//object clone

/*person={
    city:'aaa',
    age:20
}
console.log(person);*/

//shallow clone  ---one object can target multiple reference but one reference only one object

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

//dep clone
let jenny = {
  fullName: "Jenny Gates",
  city: "aa",
};
const cloneJenny = Object.assign({}, jenny);
console.log(jenny);
console.log(cloneJenny);
cloneJenny.fullName = "Ram";
console.log(jenny);

console.log(cloneJenny);

//dep clone using ...spread operator 
const newClone={...jenny};
newClone.fullName="Ram";
console.log(newClone);


//merge object

const emp={
    fullName:"jenny",
    city:"Deli"

}

const emp_address={
    pin:754153,
    age:21
}
const newObject= Object.assign({},emp,emp_address);
console.log(newObject);
// in ...spread operator

const new_object={...emp,...emp_address};
console.log(new_object);

//cladd
