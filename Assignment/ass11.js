
function step1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 1 done"), 1000);
  });
}

function step2() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 2 done"), 1000);
  });
}

function step3() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 3 done"), 1000);
  });
}


function showStep(text, highlight = false) {
  const li = document.createElement("li");
  li.innerHTML = highlight ? `<b>${text}</b>` : text;
  document.getElementById("stepList").appendChild(li);
}


async function runSteps() {
  document.getElementById("stepList").innerHTML = "";

  showStep("Running Step 1...", true);
  const s1 = await step1();
  showStep(s1);

  showStep("Running Step 2...", true);
  const s2 = await step2();
  showStep(s2);

  showStep("Running Step 3...", true);
  const s3 = await step3();
  showStep(s3);
}

document.getElementById("startBtn").addEventListener("click", runSteps);
