let studentChitta = {
    fullName: "Chitta ranjan swain",
    city: "Mumbai",
    email: "Swainchitta26@gmail.com",
    gender: "Male",
    qualification: "MCA",
    age: 21,
    isMarried: false,
}
console.log(studentChitta);
const keys=Object.keys(studentChitta);
console.log(keys);

const values=Object.values(studentChitta);
console.log(values);

//traversing object 
for (const key in studentChitta) {
    if (Object.prototype.hasOwnProperty.call(studentChitta, key)) {
        const element = studentChitta[key];
        console.log(key,element);
        
    }
}

//in operator
console.log("age" in studentChitta);
console.log("hobbies" in studentChitta);



