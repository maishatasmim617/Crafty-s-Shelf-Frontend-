let navbar = document.querySelector('.header .flex .navbar');
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#user-btn').onclick = () => {
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () => {
   profile.classList.remove('active');
   navbar.classList.remove('active');
}

// ===============================
// ✨ New Wishlist & Cart Counter Code
// ===============================

// Test data (only for demo/testing – you can remove this block later)
if (!localStorage.getItem('cartItems')) {
   localStorage.setItem('cartItems', JSON.stringify(['product1', 'product2']));
}
if (!localStorage.getItem('wishlistItems')) {
   localStorage.setItem('wishlistItems', JSON.stringify(['productA']));
}

// Function to update the header cart and wishlist counts
function updateHeaderCounts() {
   let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
   let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

   const cartCount = document.querySelector('#cart-count');
   const wishlistCount = document.querySelector('#wishlist-count');

   if (cartCount) cartCount.textContent = `(${cartItems.length})`;
   if (wishlistCount) wishlistCount.textContent = `(${wishlistItems.length})`;
}

// Run this function on page load
updateHeaderCounts();

// Optional: Call these functions when adding items from buttons
function addToCart(productId) {
   let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
   cart.push(productId);
   localStorage.setItem('cartItems', JSON.stringify(cart));
   updateHeaderCounts();
}

function addToWishlist(productId) {
   let wishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
   wishlist.push(productId);
   localStorage.setItem('wishlistItems', JSON.stringify(wishlist));
   updateHeaderCounts();
}

// Load header.html
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    // Now the header is loaded, you can safely select and attach event listeners

    let navbar = document.querySelector('.header .flex .navbar');
    let profile = document.querySelector('.header .flex .profile');

    document.querySelector('#menu-btn').onclick = () => {
       navbar.classList.toggle('active');
       profile.classList.remove('active');
    }

    document.querySelector('#user-btn').onclick = () => {
       profile.classList.toggle('active');
       navbar.classList.remove('active');
    }

    window.onscroll = () => {
       profile.classList.remove('active');
       navbar.classList.remove('active');
    }

    // Update cart and wishlist counters inside header after it's loaded
    updateHeaderCounts();
  });

// Load footer.html
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });

// Functions related to cart/wishlist counters can stay outside
function updateHeaderCounts() {
   let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
   let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

   const cartCount = document.querySelector('#cart-count');
   const wishlistCount = document.querySelector('#wishlist-count');

   if (cartCount) cartCount.textContent = `(${cartItems.length})`;
   if (wishlistCount) wishlistCount.textContent = `(${wishlistItems.length})`;
}

// Example test data setup (optional)
if (!localStorage.getItem('cartItems')) {
   localStorage.setItem('cartItems', JSON.stringify(['product1', 'product2']));
}
if (!localStorage.getItem('wishlistItems')) {
   localStorage.setItem('wishlistItems', JSON.stringify(['productA']));
}
