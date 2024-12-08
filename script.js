// JavaScript para el sitio TechTools

// Seleccionar elementos del DOM
const loginBtn = document.getElementById("login-btn");
const loginModal = document.getElementById("login-modal");
const cartIcon = document.getElementById("cart-toggle");
const cartModal = document.getElementById("cart-modal");
const closeButtons = document.querySelectorAll(".close-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearCartBtn = document.getElementById("clear-cart-btn");
const checkoutBtn = document.getElementById("checkout-btn");
const commentForm = document.getElementById("comment-form");
const commentsContainer = document.getElementById("comments-container");

// Variables globales
let cart = [];

// Mostrar modal de inicio de sesión
loginBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
});

// Mostrar modal del carrito
cartIcon.addEventListener("click", () => {
    cartModal.style.display = "block";
});

// Cerrar modales
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        loginModal.style.display = "none";
        cartModal.style.display = "none";
    });
});

// Cerrar modales al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target === loginModal) loginModal.style.display = "none";
    if (e.target === cartModal) cartModal.style.display = "none";
});

// Agregar un producto al carrito
function addToCart(product) {
    cart.push(product);
    updateCart();
}

// Actualizar el carrito y su contenido
function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
            <button class="btn-remove" data-index="${index}">Eliminar</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;

    // Botones para eliminar productos
    const removeButtons = document.querySelectorAll(".btn-remove");
    removeButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            updateCart();
        });
    });
}

// Vaciar el carrito
clearCartBtn.addEventListener("click", () => {
    cart = [];
    updateCart();
});

// Finalizar compra
checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
    } else {
        alert("¡Gracias por tu compra!");
        cart = [];
        updateCart();
    }
});

// Gestionar comentarios
commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("comment-name").value.trim();
    const text = document.getElementById("comment-text").value.trim();

    if (name && text) {
        const comment = document.createElement("div");
        comment.classList.add("comment");
        comment.innerHTML = `
            <h4>${name}</h4>
            <p>${text}</p>
        `;
        commentsContainer.appendChild(comment);
        commentForm.reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

// Ejemplo de agregar productos dinámicamente
const productContainer = document.getElementById("product-container");

// Lista de productos ampliada
const products = [
    { name: "Taladro Inteligente", price: 199.99, img: "Taladro Inteligente.jpg" },
    { name: "Llave Ajustable", price: 49.99, img: "Llave Ajustable.jpg" },
    { name: "Destornillador Digital", price: 29.99, img: "Destornillador Digital.jpg" },
    { name: "Sierra Circular", price: 129.99, img: "Sierra Circular.jpg" },
    { name: "Multímetro Avanzado", price: 79.99, img: "Multímetro Avanzado.jpg" },
    { name: "Juego de Brocas", price: 39.99, img: "Juego de Brocas.jpg" },
    { name: "Martillo Antivibración", price: 24.99, img: "Martillo Antivibración.jpg" },
    { name: "Cinta Métrica Láser", price: 89.99, img: "Cinta Métrica Láser.jpg" },
    { name: "Nivel Digital", price: 59.99, img: "Nivel Digital.jpg" },
    { name: "Soldadora Inverter", price: 299.99, img: "Soldadora Inverter.jpg" },
    { name: "Compresor de Aire", price: 349.99, img: "Compresor de Aire.jpg" },
    { name: "Pulidora Angular", price: 159.99, img: "Pulidora Angular.jpg" },
    { name: "Pistola de Calor", price: 99.99, img: "Pistola de Calor.jpg" },
    { name: "Cortadora de Azulejos", price: 219.99, img: "Cortadora de Azulejos.jpg" },
    { name: "Aspiradora Industrial", price: 399.99, img: "Aspiradora Industrial.jpg" }
];

// Mostrar productos en la página
products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="btn-add-cart">Añadir al Carrito</button>
    `;
    productContainer.appendChild(productCard);

    // Agregar funcionalidad al botón de "Añadir al Carrito"
    const addCartBtn = productCard.querySelector(".btn-add-cart");
    addCartBtn.addEventListener("click", () => addToCart(product));
});
