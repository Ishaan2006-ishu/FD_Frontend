let textBox = document.getElementById("textBox");
let count = document.getElementById("count");

let maxLength = 100;

textBox.addEventListener("input", ()=> {
    let remaining = maxLength - textBox.value.length;

    count.textContent = "Characters left: " + remaining;
});
