// function getJoke() {
//   const apiURL = "https://official-joke-api.appspot.com/random_joke";

//   fetch(apiURL)
//     .then(r => {
//       return r.json();
//     })

//     .then(j => {
//       document.getElementById("setup").innerText = j.setup;
//       document.getElementById("punchline").innerText = j.punchline;

//       document.getElementById("nextJokeBtn").style.display="block";
//     })
    

//     .catch(error => {
//       document.getElementById("setup").innerText = "Oops! Something went wrong.";
//       document.getElementById("punchline").innerText = "";
//       console.error("Error fetching joke:", error);
//     });
// }
// //  async function fetchJoke(){
// //     const url="https://official-joke-api.appspot.com/random_joke";
    
// //     let response= await fetch(url);
// //     console.log(response);
    
// //     let jokes= await response.json();
// //     console.log(jokes);
    
// //     return jokes;

// // }
// // async function getJoke(){
// //     let jokes=await fetchJoke();
// //     document.getElementById("setup").innerText = jokes.setup;
// //     document.getElementById("punchline").innerText = jokes.punchline;



// // }

// document.getElementById("nextJokeBtn").addEventListener("click", getJoke);

// // load first joke when page opens
// getJoke();


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
