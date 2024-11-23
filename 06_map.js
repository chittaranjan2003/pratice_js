const myMap = new Map();
myMap.set(11, "Ram");
myMap.set(22, "Jenny");
myMap.set(25, "Elon");
myMap.set(33, "Stew");
myMap.set(45, "Bill");
myMap.set(45, "Munu"); //duplicate value
myMap.set(12, "Munu"); //duplicate value
console.log(myMap);
console.log(`value of the key 12 is :${myMap.get(12)}`);
console.log(`Delete the element is :${myMap.delete(45)} `);
console.log(myMap);
console.log(`The value exists or not :${myMap.has(45)}`);//check value exists.
