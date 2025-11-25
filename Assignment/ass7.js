

function getJoke() {
  const apiURL = "https://official-joke-api.appspot.com/random_joke";

  const btn = document.getElementById("nextJokeBtn");


  btn.style.display = "none";

  fetch(apiURL)
    .then(r => r.json())

    .then(j => {
      document.getElementById("setup").innerText = j.setup;
      document.getElementById("punchline").innerText = j.punchline;

 
      btn.style.display = "block";
    })

    .catch(error => {
      document.getElementById("setup").innerText = "Oops! Something went wrong.";
      document.getElementById("punchline").innerText = "";
      console.error("Error fetching joke:", error);


      btn.style.display = "block";
    });
}

document.getElementById("nextJokeBtn").addEventListener("click", getJoke);

getJoke();
