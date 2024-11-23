const person={
    fullName:"Jenny Gates",
    city:"LA"
}

//if change object cannot be change object reference   Uncaught TypeError TypeError: Assignment to constant variable.

/*person={
    fullName:"munu",
    city:"cuttack"
}
console.log(person);*/

/*const arr=[10,20,30,40];
//Not allow as array reference variable is constant .!
arr=[40,50,60];*/

//object freezing
const student={
    fullName:"Jenny Gates",
    city:"LA"
}
Object.freeze(student);
console.log(student);
student.fullName="Ram";
console.log(student);

//Array freezing 
const arr1=[10,20,30];
/*console.log(arr1);
Object.freeze(arr1);
arr1.push(1);
console.log(arr1);*/
