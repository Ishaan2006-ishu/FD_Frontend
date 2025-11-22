let products = [
    { name: "Laptop", category: "electronics" },
    { name: "Smartphone", category: "electronics" },
    { name: "Headphones", category: "electronics" },
    { name: "T-Shirt", category: "clothing" },
    { name: "Jeans", category: "clothing" },
    { name: "Jacket", category: "clothing" },
    { name: "Novel - Adventure", category: "books" },
    { name: "Novel - Mystery", category: "books" },
    { name: "Keyboard", category: "electronics" },
    { name: "Hoodie", category: "clothing" }
];

let s_b=document.querySelector(".s_b");
let search=document.querySelector("#find");

let list = document.getElementById("productList");



products.forEach(p => {
    let li = document.createElement("li");
    li.textContent = p.name + " (" + p.category + ")";
    list.appendChild(li);
});



document.getElementById("allBtn").addEventListener("click", () => {
    list.innerHTML = "";
    products.forEach(p => {
        let li = document.createElement("li");
        li.textContent = p.name + " (" + p.category + ")";
        list.appendChild(li);
    });
});


document.getElementById("elecBtn").addEventListener("click", () => {
    list.innerHTML = "";
    products.forEach(p => {
        if (p.category === "electronics") {
            let li = document.createElement("li");
            li.textContent = p.name + " (" + p.category + ")";
            list.appendChild(li);
        }
    });
});



document.getElementById("clothBtn").addEventListener("click", () => {
    list.innerHTML = "";
    products.forEach(p => {
        if (p.category === "clothing") {
            let li = document.createElement("li");
            li.textContent = p.name + " (" + p.category + ")";
            list.appendChild(li);
        }
    });

});

search.addEventListener("click",()=>{
    list.innerHTML="";
    let flag=0;
    products.forEach(p=>{
        if(s_b.value === p.name){
            let li=document.createElement("li");
            li.innerText=p.name + "(" + p.category + ")";
            list.appendChild(li);
            flag=1;
        }


    });
    if (flag===0){
        let li=document.createElement("li");
        li.innerText="Not Exsist";
        list.appendChild(li);

    }
    
});

