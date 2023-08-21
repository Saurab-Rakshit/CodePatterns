// Tutorial link :https://www.youtube.com/watch?v=rpWNNjV5D6A


// This is a kind of fucntion which can be pause & run at anytime.

/* 
function* simpleGenerator(){
    yield "FirstStep";
    yield "SecondStep";
    yield "ThirdStep";
    yield "FourthStep";  

    console.log("simpleFunction");
}

let sG = simpleGenerator();

console.log(sG.next().value);
console.log(sG.next().value);
console.log(sG.next().value);
console.log(sG.next().value);
console.log(sG.next().value); 
*/


function* sampleGenerator(){
    let i=100;

    while(true){
        i++
        yield i
    }

}
const sG = sampleGenerator();

function getNewId(){
    // console.log("newID");
    // console.log(sG.next());
    document.getElementById("newId").innerText = sG.next().value;

}



