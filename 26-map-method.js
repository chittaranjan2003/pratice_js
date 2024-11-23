


const array=[3,6,2,1,9,4];

const arraySquare=array.map((element)=>{
    return element*element;
});
console.log(array);
console.log(arraySquare);


//filter() method to get Even Number .
let arrayNumber=[3,6,2,1,9,4];
 const arr = arrayNumber.filter((element)=>{
    return element%2==0;
});
console.log(arr);




//reduce() method 
console.log(`========== reduce() ================= `);
const arrayNumber2 = [3, 6, 2, 1, 9, 4]; 
const sum = arrayNumber2.reduce( (runningTotal, element) => {
    return runningTotal + element;

}, 0);

console.log(sum);


//flat() method.
 let arrayFlat=[3, 6, [2, 1,[77,88]], 9, 4]; 
 const newArrayFlat=arrayFlat.flat();
 //const newArrayFlat=arrayFlat.flat(2);
 console.log(newArrayFlat);
 
console.log("======Array with empty slots.========");

 let arrayFlat2=[3, 6, , ,99,, 4]; 
console.log(arrayFlat2);
const arrayFlat2New=arrayFlat2.flat();
console.log(arrayFlat2New);

