let text=document.querySelector("#task");
let ul=document.querySelector(".include");
let  btna=document.querySelector(".add");
let  btnr=document.querySelector(".remove");






btna.addEventListener("click",()=>{
    let li = document.createElement("li");
    ul.appendChild(li);
    // text.addEventListener("input", () => {

        ul.classList.remove("visi");
    
        li.innerText = text.value; 
        text.value="";
        
        
//});


})

btnr.addEventListener("click", () => {

  if (ul.lastElementChild) {   // check if there is at least one li
    ul.removeChild(ul.lastElementChild);
  }
});





