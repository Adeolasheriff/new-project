
'script'

let num1 = parseInt(prompt("enter your score"));
let num2 = parseInt(prompt("enter your other score asap"));


document.getElementById("num1-el").innerHTML = num1;
document.getElementById("num2-el").innerHTML = num2;

let result = document.getElementById("sum-el");

function add() {
 result.innerHTML = `answer is ${num1 + num2}`
}

function sub(){
    result.innerHTML = `answer is ${num1 - num2}`
}

function mul(){
    result.innerHTML = ` answer is ${num1 * num2}`
}
function div (){
    result.innerHTML = `answer is ${num1/num2}`
}

