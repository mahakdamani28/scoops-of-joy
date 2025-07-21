AOS.init({
    duration:1000,
    once:true
});

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
}

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount(); // fix: this must be defined first!
    showToast(`${name} added to cart!`)
}
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

function buyNow(name, price) {
    const item = { name, price };
    localStorage.setItem("buyItem", JSON.stringify(item));
    window.location.href = "checkout.html";
}

document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
});