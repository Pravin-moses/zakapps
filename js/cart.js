/**
 * Shopping Cart Functionality
 * Manages cart count with localStorage persistence
 */

let cartCount = 0;

/**
 * Initialize cart from localStorage
 * Restores cart count on page load
 */
function initCart() {
    const savedCount = localStorage.getItem('cartCount');
    if (savedCount) {
        cartCount = parseInt(savedCount);
        updateCartDisplay();
    }
}

/**
 * Add item to cart
 * Increments cart count, saves to localStorage, and updates UI
 */
function addToCart() {
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    updateCartDisplay();
    
    // Show bounce animation for visual feedback
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.classList.add('cart-bounce');
        setTimeout(() => {
            cartIcon.classList.remove('cart-bounce');
        }, 300);
    }
}

/**
 * Update cart count display in header
 * Creates badge element if it doesn't exist
 */
function updateCartDisplay() {
    let cartBadge = document.querySelector('.cart-badge');
    const cartIcon = document.querySelector('.fa-shopping-bag');
    
    if (!cartBadge && cartIcon) {
        // Create badge if it doesn't exist
        cartBadge = document.createElement('span');
        cartBadge.className = 'cart-badge';
        cartIcon.parentElement.style.position = 'relative';
        cartIcon.parentElement.appendChild(cartBadge);
    }
    
    if (cartBadge) {
        cartBadge.textContent = cartCount;
        cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';
    }
}

/**
 * Initialize cart when page loads
 * Sets up event listeners for Add to Cart buttons
 */
document.addEventListener('DOMContentLoaded', function() {
    initCart();
    
    // Attach click handlers to all Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-cart, .add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            addToCart();
        });
    });
});
