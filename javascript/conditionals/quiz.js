"use strict"
var score = 0;
var total = 9 ;
var answer = ['b','a','d','b','d','b','d','b', 'a'];

function Result(){
    var form = document.forms['quizform']

    var q1 = form.elements ['q1'].value;
    var q2 = form.elements['q2'].value;
    var q3 = form.elements['q3'].value;
    var q4 = form.elements['q4'].value;
    var q5= form.elements['q5'].value;
    var q6 = form.elements['q6'].value;
    var q7 = form.elements['q7'].value;
    var q8 = form.elements['q8'].value;
    var q9 = form.elements['q9'].value;


for(let i = 1; i<=total;i++){
    if(eval('q'+i)==null || eval('q'+i)== "" ){
        alert('please answer question ' +i)
        return false
    }
}
   

for(let i =1; i<=total; i++){
    if(eval('q'+i)==answer[i-1]){
       score++
    }
}

    var result = document.getElementById("result");
    result.innerHTML = 'you scored '+score+' out of total of '   +total;
    alert('you scored '+score+' out of total of ' +total);
    return false;


}


       