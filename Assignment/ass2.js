let textBox = document.getElementById("textBox");
let count = document.getElementById("count");

let maxLength = 100;

textBox.addEventListener("input", () => {
    let remaining = maxLength - textBox.value.length;

    count.innerText = "Characters left: " + remaining;

    
    if (remaining > 60) {
        count.style.color = "green";  
    }
    else if (remaining > 20) {
        count.style.color = "orange";  
    }
    else {
        count.style.color = "red";     
    }
});
