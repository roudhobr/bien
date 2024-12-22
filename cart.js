let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", event => {
            const productName = event.target.getAttribute("data-product");
            addToCart(productName);
        });
    });
});

function addToCart(product) {
    cart.push(product);
    alert(`${product} berhasil ditambahkan ke keranjang!`);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.getElementById("cart");
    if (!cartElement) return;

    cartElement.innerHTML = "";
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        cartElement.appendChild(listItem);
    });
}
