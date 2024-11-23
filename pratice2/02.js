//palindrome string


//let checkStr;

/*let checkStr = (str1) => {
    let reverseStr;
  reverseStr = str1.split("").reverse().join("");
  console.log(`Reverse The String is : ${reverseStr}`);

  if (reverseStr == str1) {
    console.log(`palindrome string: ${reverseStr}`);
  } else {
    console.log(`Not a palindrome string :${str1}`);
  }
};

checkStr("madam");
*/

let result;

let anagram=(str1,str2)=>{
   let str1Length=str1.length;   
   let str2Length=str2.length;
   return str1Length =! str2Length;

   str1.forEach(element1 => {

    str2.forEach(element2 => {
        if (element1==element2) {
            result=element2;
        }

    });
    
   });


}

let string=["l","l","d","d","a","b","b"];
let res=string.sort();
console.log(res);




