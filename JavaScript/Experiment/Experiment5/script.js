// console.log('ishaan');
// const username=prompt("enter user name");

// alert(`hello ${username} `)

// let age = Number(prompt("Enter your age:"));

// (age > 18) 
//   ? document.write("You are mature") 
//   : document.write("You are not mature");


// let c1=document.querySelectorAll(".square1");
// let c2=document.querySelectorAll(".square2");





// for(let  i=0;i<64;i++){
//     if(i%2==0){
//       c1[i].style.backgroundColor="black";
//       c2[i].style.backgroundColor="white";
//     }
//     else {
//       c1[i].style.backgroundColor="white";
//       c2[i].style.backgroundColor="black";
//     }
//   }


const chess = document.querySelector('.chessboard');
const oddRow = `<div class= "square light"></div><div class="square dark"></div>`.repeat(4);
const evenRow = `<div class="square dark"></div><div class="square light"></div>`.repeat(4);
const completeHtml = `${oddRow}${evenRow}`.repeat(4);
chess.innerHTML = completeHtml;