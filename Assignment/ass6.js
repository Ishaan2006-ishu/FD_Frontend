async function fetchUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  document.getElementById("loading").style.display = "block";

  const response = await fetch(url);
  
  
  const users = await response.json();
  
   document.getElementById("loading").style.display = "none";
  

  return users;
  
  
}

function displayUsers(users) {
  const tableBody = document.querySelector("#userTable tbody");
  tableBody.innerHTML = "";

  users.forEach(user => {
    const row = `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

async function loadData() {
  const users = await fetchUsers();
  displayUsers(users);
}

document.getElementById("refreshBtn").addEventListener("click", loadData);

loadData(); // load when page opens
