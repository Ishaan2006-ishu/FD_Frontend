let form = document.getElementById("regForm");

let nameField = document.getElementById("name");
let emailField = document.getElementById("email");
let passField = document.getElementById("password");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passError = document.getElementById("passError");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;


    if (nameField.value.trim() === "") {
        nameError.textContent = "Name is required";
        nameField.classList.add("invalid");
        nameField.classList.remove("valid");
        valid = false;
    } else {
        nameError.textContent = "";
        nameField.classList.add("valid");
        nameField.classList.remove("invalid");
    }


    if (emailField.value.trim() === "") {
        emailError.textContent = "Email is required";
        emailField.classList.add("invalid");
        emailField.classList.remove("valid");
        valid = false;
    } else if (!emailField.value.includes("@")) {
        emailError.textContent = "Email must contain '@'";
        emailField.classList.add("invalid");
        emailField.classList.remove("valid");
        valid = false;
    } else {
        emailError.textContent = "";
        emailField.classList.add("valid");
        emailField.classList.remove("invalid");
    }

    if (passField.value.trim() === "") {
        passError.textContent = "Password is required";
        passField.classList.add("invalid");
        passField.classList.remove("valid");
        valid = false;
    } else if (passField.value.length < 8) {
        passError.textContent = "Password must be at least 8 characters";
        passField.classList.add("invalid");                 
        passField.classList.remove("valid");
        valid = false;
    } else {
        passError.textContent = "";
        passField.classList.add("valid");
        passField.classList.remove("invalid");
    }


    if (valid) {
        alert("Registration Successful!");
        form.reset();

 
        nameField.classList.remove("valid");
        emailField.classList.remove("valid");
        passField.classList.remove("valid");
    }
});
