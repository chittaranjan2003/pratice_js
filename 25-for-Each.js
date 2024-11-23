


let array=[10,20,40,30,10,60];
array.forEach((currentValue,index,arr)=>{
   // console.log(currentValue,index,arr);
    

});

console.log(`===============for Each() with Mandatory arguments============`);

array.forEach((value)=>{
   // console.log(value);
});


console.log(`==============find even numbers============`);
const arrayNumber=[10,23,40,78,90,70];
arrayNumber.forEach((element)=>{
    if(element%2==0)
    {
        //console.log(element);
    }
});

console.log("==========Traversing over set==========");
let mySet=new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(50);
//console.log(mySet);
mySet.forEach((element)=>{
    console.log(element);
    
});

console.log("=================Traversing over map collection==============");

const myMap=new Map();
myMap.set(11,"jenny");
myMap.set(22,"Elon");
myMap.set(33,"Stw");
myMap.set(44,"Bil");
myMap.set(22,"Sundar");
myMap.set(55,"Stew");

myMap.forEach((value,key)=>{
    console.log(`${key}=> ${value}`);
    
});



