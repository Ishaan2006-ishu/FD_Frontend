// Get the empty div
const app = document.getElementById("app");

// Create calculator wrapper
const calculator = document.createElement("div");
calculator.id = "calculator";
app.appendChild(calculator);

// Create display
const display = document.createElement("input");
display.id = "display";
display.disabled = true;
calculator.appendChild(display);

// Create button container
const btnContainer = document.createElement("div");
btnContainer.className = "buttons";
calculator.appendChild(btnContainer);

// All buttons we want to create
const btnValues = [
  "7","8","9","/",
  "4","5","6","*",
  "1","2","3","-",
  "0",".","=","+",
  "C","⌫"
];

// Create buttons using JS
btnValues.forEach(val => {
  const btn = document.createElement("button");
  btn.textContent = val;

  // Style clear & backspace
  if(val === "C") btn.className = "clear";
  if(val === "⌫") btn.className = "backspace";
  if(val!="C" && val!="⌫"){
    btn.className="buttons";
  }
  

  btnContainer.appendChild(btn);

  // Add event listeners
//   btn.addEventListener("click", () => handleButton(val));
});

btns=document.querySelectorAll(buttons);

btns.forEach(btn => {
            btn.addEventListener("click", () => {
                
                
                display.value += button.textContent;
            });
        });

    
        equalsBtn.addEventListener("click", () => {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        });

        
        clearBtn.addEventListener("click", () => {
            display.value = "";
        });

        
        backBtn.addEventListener("click", () => {
            display.value = display.value.slice(0, -1);
        });






// Handle all button logic
// function handleButton(value) {

//   // CLEAR
//   if (value === "C") {
//     display.value = "";
//     return;
//   }

//   // BACKSPACE
//   if (value === "⌫") {
//     display.value = display.value.slice(0, -1);
//     return;
//   }

//   // EQUAL
//   if (value === "=") {
//     try {
//       display.value = eval(display.value);
//     } catch {
//       display.value = "error";
//     }
//     return;
//   }

//   // For numbers and operators
//   display.value += value;
// }
