let text = document.querySelector("#task");
let ul = document.querySelector(".include");
let btna = document.querySelector(".add");
let btnr = document.querySelector(".remove");


window.onload = function () {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => addTaskToUI(task));
};



function saveTasks() {
    let tasks = [];
    document.querySelectorAll(".include li").forEach(li => {
        tasks.push(li.querySelector(".taskText").innerText);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



function addTaskToUI(taskValue) {
    let li = document.createElement("li");

    
    let span = document.createElement("span");
    span.className = "taskText";
    span.innerText = taskValue;

    
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.style.marginLeft = "10px";

    editBtn.addEventListener("click", () => {
        let newText = prompt("Edit your task:", span.innerText);
        if (newText !== null && newText.trim() !== "") {
            span.innerText = newText;
            saveTasks();
        }
    });

    
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.style.marginLeft = "10px";

    delBtn.addEventListener("click", () => {
        li.remove();
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    ul.appendChild(li);
    saveTasks();
}



btna.addEventListener("click", () => {
    let taskValue = text.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    addTaskToUI(taskValue);
    text.value = "";
});



btnr.addEventListener("click", () => {
    if (ul.lastElementChild) {
        ul.lastElementChild.remove();
        saveTasks();
    }
});
