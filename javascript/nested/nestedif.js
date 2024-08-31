let rain = "full";
let sun = "shine";
let cloth = "dry";
let shirt = "ironed"




if (sun == "shine"){
    console.log("i will wash my cloth");
    if (cloth == "dry"){
        console.log("i will iron it")
    }
    else if(rain == "fall"){
        console.log("i will not wash my cloth")
    }
 
    if(shirt == "ironed"){
       console.log("i will go for class")
    } else {
       console.log("i wont go the class")
    }
  
  }  else if (rain == "fall"){
    console.log("i will not wash my cloth")
  } else{
    console.log("do nothing")
  }


  
  const nums = []
  nums[0] = 2
  nums[1]= 3
  nums[2]=4
  nums[3]=5
  nums[4]=6

  console.log(nums.sort())
  console.log(nums.reverse())


 let person = {
  name:"mariam",
  lastname:"odunayo",
  age:23,
  occupation: "insha Allah",
  status: 'married woman'
 }

 console.log(`my name is ${person.name} and i am ${person.age} and my job is ${person.occupation} and im currently ${person.status}`)


let animal = {};
animal.firstname = "adeola";
animal.lastname = "sheriff";
animal.occupation = "full stack dev";

 console.log(`my name is ${animal.lastname} and ${animal.firstname}`)



 let stars = "";
 for(let i =1;i<=5;i++){
  for(let n =1;n<=i;n++){
    stars+= "mariam"+" "
  }
  stars+= "\n"
 }
 console.log(stars)


