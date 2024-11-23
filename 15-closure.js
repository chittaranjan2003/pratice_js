let globalVariable=400;
function outer(){
    let outerVariable=100;
    function inner(){
        let innerVariable=200;
        console.log(innerVariable);
        console.log(outerVariable);
        console.log(globalVariable);
    }
    return inner;
}

let res=outer();
res();