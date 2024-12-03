
// Sample products for the store
const products = [
    { id: 1, name: "Laptop", price: 1200, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Headphones", price: 200, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Keyboard", price: 150, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Monitor", price: 300, image: "https://via.placeholder.com/150" },
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById("productList");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} has been added to your cart.`);
    }
}

// Initialize product display
window.onload = displayProducts;
