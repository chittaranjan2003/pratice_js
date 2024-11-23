//FE with no argument and no return value  .
/*let show=function(){
    console.log(`....show...`);
    
}
show();*/



//arrow function with no argument  and no value .

let show2 = () => {
  console.log("....show..");
};
show2();



//arrow function with argument  and no value .
let square = (num) => {
  console.log(`Square of &{num} is ${num * num}`);
};
square(4);





//arrow function with argument  and return value .

let sum = (n1, n2, n3) => {
  let result = n1 + n2 + n3;
  return result;
};

let res=sum(5 ,5 ,5);
console.log(res);

