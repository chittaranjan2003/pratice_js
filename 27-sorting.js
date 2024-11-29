


//sorting in ascending order .
const arrayNumbers=["jenny","Bill","Stew","Elon"];
console.log(arrayNumbers);
arrayNumbers.sort();
console.log(arrayNumbers);



//sorting in Descending order .
arrayNumbers.reverse();
console.log(arrayNumbers);


//sorting in ascending order  Numbers.
const array=[100,2,7,55,9,8];
console.log("Before sorting");
console.log(array);
console.log("after sorting");
//array.sort(array);
//sort() with custom sorting logic.
array.sort((n1,n2)=>{
    return n1>n2 ? 1:-1;
    //return n1>n2 ? -1:1;
      //This is array sorting in number 
});
console.log(array);
//this is array sort




