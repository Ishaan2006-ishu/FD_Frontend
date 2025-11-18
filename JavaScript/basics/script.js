// let a=10;
// console.log(a);

// console.log(b);
// var b=10;

// let age=14;
// if(age>=13 && age<=19){
//     console.log('teenager');
    
// }
// else{
//     console.log('no');
    
// }


// // || if find(return first true)  else return last false
// // && if find (return first false) else return last true

// for (let i = 0; i < 5; i++) {
//     let str="";
//     for (let j = 5 - i; j > 0; j--) {
//         str+="*";
//         //process.stdout.write('*'); // prints without newline
//     }

//     console.log(str); // prints newline after each row
// }



function cal(a,b,c){
    if(c=="+"){
        return a+b;

    }
    if(c=="-"){
        return a-b;

    }
    if(c=="*"){
        return a*b;

    }
    if(c=="/"){
        return a/b;

    }
}

let sol=cal(4,2,"/");
console.log(sol);


function cal(operator, ...numbers) {
    

    

    for (let i = 1; i < numbers.length; i++) {
        if (operator === "+") {
            result += numbers[i];
        } else if (operator === "-") {
            result -= numbers[i];
        } else if (operator === "*") {
            result *= numbers[i];
        } else if (operator === "/") {
            result /= numbers[i];
        } else {
            return
        }
    }

    return result;
}

console.log(cal("+", 2, 4, 6));   




