

let isNotePrepared=false;
const promiseNote = new Promise(function(resolve, reject){

    if(isNotePrepared){
        resolve("Guys...Here is notes");
    }
    else{
        reject("I am not able to share today's notes");
    }
    
});
promiseNote.then(function(success){
    console.log("=======then=========");

    console.log(success);
    console.log("Than you sir .. For sharing the notes...");
}).catch(function(failure){
    console.log("=======catch=========");

    console.log(failure);
    console.log("No problem sir ...");
    console.log("Bahut Khadoos hai ye Teacher ...");

}).finally(function(){
    console.log("=======finally=========");
    console.log("I must have my own notes");
    console.log("My notes is prepared..");
    
});