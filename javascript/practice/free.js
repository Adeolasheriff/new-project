/*
let score = 0;
var total = 2;
var answer = ['a','b']

function Result( ){
 var form = document.forms['quiz'];

var q1 = form.elements['q1'].value;
 var q2 = form.elements['q2'].value;


 for(i=1;i<=total;i++){
   if(eval('q'+i)==null || eval('q'+i) == ''){
       alert('please answer question'  + " " +i)
        return false
    }
}



for( i = 1;i<=total;i++){
   if(eval('q'+i)==answer[i-1]){
        score++
     }
}


var result  = document.getElementById('result');
result.innerHTML = ` you scored ${score} out of total of ${total}`;
alert(`you scored ${score } of total   ${total}`)
return false
}


let mon = parseInt(prompt('enter'))
let mond = parseInt(prompt('enter'))


document.getElementById('num').innerHTML = mon
document.getElementById('num1').innerHTML = mond
let result = document.getElementById('sum')

function add(){
result.innerHTML = `add: ${mon + mond}`
}

function sub(){
    result.innerHTML = `sub: ${mon - mond}`
    }

    function mul(){
        result.innerHTML = `mul: ${mon * mond}`
        }

        function div(){
            result.innerHTML = `add: ${mon / mond}`
            }
            

     let person = ['ade']
     let car = ['benz']
     let join = person.concat(car)
     let add = [...person,...car,89]
     console.log(add)

    const perso = {
name:'adeola'
    }
    const cat = {
        model:'spyro'
    }
    const jo = {...perso,...cat,na: 'ade'}
    console.log(jo)

    function resul(w,e){
        let result = 5 * 5 *  (w*e)
        console.log(result)
        return result

    }
    resul(3,1)

    let mariam = function(t,y){
    let Result = t * y
    console.log(Result)
    return Result
    }
    mariam(2,2)

    let mori = num => num * num 
    console.log(mori(2))

     
    

    const person = (e,t) => 4 + 4
    console.log(person())

    const me = num => num + num
    console.log(me(4))

    const po = (t,o) => 7 *7
    console.log(po())

    const p = num => num * num
    console.log(p(7))



// const colors = ['red','blue']
// const me = colors.map((colors)=> `the colors include ${colors}`)
// console.log(me)


// const person = [
//   'perosn','trtrttrtrt','perosn','blessings'
// ]
// const m = person.filter((person)=> person != 'perosn')
// console.log(m)


const colors = ['blue','red','pink']
const ite = colors.map((colors)=> `the colors is ${colors}`)
console.log(ite)

const person = [ 'ade','ola','mori','ade']
const it = person.filter((person)=> person != "ade")
console.log(it)

*/


