function homeworkJenny(callback){
    console.log("She hard dinner..");
    console.log("She started her home work...");
    console.log("After some time. she has completed homework ");
    console.log("Jenny posted her homework in whatsApp group...");
    callback();
    
}
function copyHomework(){
    console.log("When jenny call back ..");
    console.log("he Will come and started copying home work ... ");
    console.log("Complete homework");
    console.log("Posted  output in WhatsAPP group.");
}
homeworkJenny(copyHomework)

console.log("========================");


//set time out
function greet(){
    console.log("Hey  good morning");
}

setTimeout(greet,7000);

/* setTimeout(function greet(){
console.log("hey good morning");

},7000);*/


console.log('========= Callback Hell =============');

setTimeout(function(){

    console.log("Hello.. ");

    setTimeout(function(){

        console.log("Good Evening...");

        setTimeout(function(){

            console.log("Good night...");

 

        }, 9000);

    }, 7000);

}, 5000);