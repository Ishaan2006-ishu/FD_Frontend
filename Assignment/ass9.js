
function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;  
      if (success) {
        resolve(["Post One", "Post Two", "Post Three"]);
      } else {
        reject("Failed to load posts");
      }

    }, 2000);
  });
}


async function loadPosts() {
  const status = document.getElementById("status");
  const list   = document.getElementById("postList");

  list.innerHTML = "";                          
  status.innerText = "Loading posts…";         

  try {
    let posts = await getPosts();               
    status.innerText = "";                      

    posts.forEach(p => {
      let li = document.createElement("li");
      li.innerText = p;
      list.appendChild(li);
    });

  } catch (error) {
    status.innerText = error + " (Retrying in 2 seconds...)";

    
    setTimeout(loadPosts, 2000);
  }
}

document.getElementById("loadBtn").addEventListener("click", loadPosts);
