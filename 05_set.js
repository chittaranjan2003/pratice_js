let mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(50);

console.log(mySet);
console.log(`Set length is: ${mySet.size}`);
mySet.add(40); //duplicate value

mySet.delete(20); //delate element
for (const element of mySet) {
  console.log(element);
}

//duplicate element delate in array
let array = [10, 20, 40, 20, 10, 60];
const set1 = new Set();
for (const element of array) {
  set1.add(element);
}
/*console.log(set1);
let arrayUnique=[];
for (const element of set1) {
    arrayUnique.push(element);
    
}
console.log(arrayUnique);*/

//duplicate elements using spread opera    

let arrayUnique2 = [...new Set(array)];
console.log(arrayUnique2);
