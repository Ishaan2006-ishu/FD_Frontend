let data;  // global variable

// Fetch products
async function fetchProducts() {
  const url = "https://fakestoreapi.com/products";

  try {
    let res = await fetch(url);
    data = await res.json();   // <-- FIXED (removed 'let')

    displayProducts(data);
  } 
  catch (err) {
    document.getElementById("productGrid").innerHTML = "Error loading products.";
    console.error(err);
  }
}

// Display products in grid
function displayProducts(products) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = ""; // clear previous

  products.forEach(item => {
    const box = document.createElement("div");
    box.className = "productBox";

    box.innerHTML = `
      <h4>${item.title}</h4>
      <p>Price: $${item.price}</p>
    `;

    grid.appendChild(box);
  });
}

// Filter products as user types
search=document.getElementById("search");
search.addEventListener("input", function () {
  const text = search.value.toLowerCase();

  const filtered = data.filter(p =>
    p.title.toLowerCase().includes(text)
  );
  
  

  displayProducts(filtered);
});

// Load products when page opens
fetchProducts();
