
let cn = document.querySelector("#name-input");
let cr = document.querySelector("#role-input");
let cb = document.querySelector("#bio-input");
let cs = document.querySelector("#skill-input");
let add_btn=document.querySelector("#add-skill");
let rem_btn=document.querySelector("#remove-skill-btn");
let blue=document.querySelector(".theme-btnb");
let body=document.querySelector("body");

let pn=document.querySelector("#name");
let pr=document.querySelector("#role");
let pb=document.querySelector("#bio");
let sub=document.querySelector("#submit");
let ol=document.querySelector(".skill");
let s_i=document.querySelector("#skill-input");

console.log(ol);

sub.addEventListener("click",()=>{
  pn.innerHTML=cn.value;
  pr.innerHTML=cr.value;
  pb.innerHTML=cb.value;
  s_i.classList.remove("visi");


})

// cn.addEventListener("input", ()=>{
//     pn.innerHTML=cn.value;
// }
  
// );

// cr.addEventListener("input",()=>{
//     pr.innerHTML=cr.value;
// })

// cb.addEventListener("input",()=>{
//     pb.innerHTML=cb.value;
// })


add_btn.addEventListener("click", () => {

  let li = document.createElement("li");
  ol.appendChild(li); 
  s_i.classList.add("visi");
  li.innerText = cs.value;
  cs.value="";


});
rem_btn.addEventListener("click", () => {

  if(ol.lastElementChild){
    ol.removeChild(ol.lastElementChild);
  }


});
// blue.addEventListener("click", () => {
//   body.style.backgroundColor="blue";

  


// });




// | Element type                        | Property to get text |
// | ----------------------------------- | -------------------- |
// | `<p>`, `<h1>`, `<div>`              | `.innerText`         |
// | `<input>`, `<textarea>`, `<select>` | `.value`             |
