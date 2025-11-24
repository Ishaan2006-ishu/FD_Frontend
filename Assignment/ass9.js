// 1. Promise that resolves after 2 seconds
function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;  // change to false to test rejection

      if (success) {
        resolve(["Post One", "Post Two", "Post Three"]);
      } else {
        reject("Failed to load posts");
      }

    }, 2000);
  });
}

// 2. Async function to load posts
async function loadPosts() {
  const status = document.getElementById("status");
  const list   = document.getElementById("postList");

  list.innerHTML = "";                          // clear previous
  status.innerText = "Loading posts…";          // show loading message

  try {
    let posts = await getPosts();               // wait for promise
    status.innerText = "";                      // remove loading message

    posts.forEach(p => {
      let li = document.createElement("li");
      li.innerText = p;
      list.appendChild(li);
    });

  } catch (error) {
    status.innerText = error + " (Retrying in 2 seconds...)";

    // Bonus: Retry mechanism
    setTimeout(loadPosts, 2000);
  }
}

document.getElementById("loadBtn").addEventListener("click", loadPosts);
