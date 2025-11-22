let text = document.querySelector("#task");
let ul = document.querySelector(".include");
let btna = document.querySelector(".add");
let btnr = document.querySelector(".remove");


btna.addEventListener("click", () => {
    let taskValue = text.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = taskValue;

    ul.appendChild(li);
    // ul.classList.remove("visi");

    text.value = "";
});


btnr.addEventListener("click", () => {
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }


    // if (!ul.lastElementChild) {
    //     ul.classList.add("visi");
    // }
});
