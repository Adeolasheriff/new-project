if (new Date().getHours() ){
    document.getElementById("demo").innerHTML = "today is monday"

}
console.log(new Date().getDay());

// let score =80;
// let passmark = 50;

// if (score > passmark){
//     console.log("you are a good student")
// }  else {
//     console.log("wrong")
// }




// let studentscore = parseInt(prompt("enter your score"));
// if (studentscore >=70){
//     console.log("your score is A")
// } else if (studentscore >=60){
//     console.log("your score is B")
// } else if (studentscore >=50){
//     console.log("your score is c")
// } else if (studentscore <= passmark){
//     console.log("come back next year")
// }



let score = 80;
let passmark = 50;
 
 if (score <= passmark)
 {
    console.log("perfect")
 } else {
    console.log("failed")
 }

  
 let studentscore = parseInt(prompt("enter your score"));
 if (studentscore >= 70){
    console.log("you passes")
 } else if (studentscore >=60){
    console.log("you scored b")
 } else if (studentscore >=50){
    console.log("you scored c")
 } else if (studentscore <= passmark) {
    console.log("come back next year")
 }




