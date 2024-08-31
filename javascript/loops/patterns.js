let pattern = "";
for(let i = 1; i<=5; i++){
    for(let num =1;num<=i;num++){
        pattern+= num + " ";
    }
    pattern+= "\n"
}
console.log(pattern)


let star = "";
for(let i= 1; i<=5; i++){
    for(let n = 1; n<=i;n++){
        star+= "*" +" "
    }
    star += "\n"
}
console.log(star)




let patter = "";
for(let b  =1; b<=5;b++){
    for(let r =1; r<=7 - b; r++){
        patter+= "*" +" ";
    }
    patter+= "\n"
}
console.log(patter)


let patte = "";
let variable = 1;
for(let e =1; e<=6;e++){
    for(let b = 1;b<=e; b++){
        patte+= variable+ "" +" "
        variable++;
    }
    patte+= "\n"
}
console.log(patte)