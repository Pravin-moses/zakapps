// Cart functionality
let cartCount = 0;

// Initialize cart from localStorage
function initCart() {
    const savedCount = localStorage.getItem('cartCount');
    if (savedCount) {
        cartCount = parseInt(savedCount);
        updateCartDisplay();
    }
}

// Add item to cart
function addToCart() {
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    updateCartDisplay();
    
    // Show a brief animation or feedback
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.classList.add('cart-bounce');
        setTimeout(() => {
            cartIcon.classList.remove('cart-bounce');
        }, 300);
    }
}

// Update cart count display
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

// Initialize cart when page loads
document.addEventListener('DOMContentLoaded', function() {
    initCart();
    
    // Add event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-cart, .add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            addToCart();
        });
    });
});
