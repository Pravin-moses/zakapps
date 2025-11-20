# Developer Guide

## Quick Start

1. Open `index.html` in your browser to view the homepage
2. No build process or dependencies required
3. All features work with vanilla JavaScript

## File Structure

### HTML Files
- `index.html` - Main landing page (root level)
- `html/products.html` - Product listing with filters
- `html/product-info*.html` - Individual product detail pages (4 variants)
- `html/order-success.html` - Order confirmation page

### CSS Files (Modular Architecture)
- `css/header.css` - Navigation, top bar, cart badge
- `css/footer.css` - Footer and social links
- `css/home.css` - Homepage specific styles
- `css/products.css` - Product listing, filters, grid
- `css/product-info.css` - Product detail pages, carousel, tabs
- `css/order-success.css` - Order confirmation page
- `css/video.css` - Video player styling

### JavaScript Files
- `js/cart.js` - Shopping cart with localStorage
- `js/filter.js` - Product filtering and sorting
- `js/video.js` - Video player controls

## Key Features Implementation

### Shopping Cart (`js/cart.js`)
```javascript
// Initialize cart on page load
initCart();

// Add item to cart
addToCart();

// Update display
updateCartDisplay();
```

**Storage**: Uses `localStorage.setItem('cartCount', count)`

### Product Filtering (`js/filter.js`)
```javascript
// Filter object structure
activeFilters = {
    category: [],  // Product categories
    type: [],      // Single pack or multi-set
    flavor: [],    // Product flavors
    rating: []     // Star ratings
}
```

**How it works**:
1. Checkbox changes update `activeFilters` object
2. `applyFilters()` iterates through all product cards
3. Shows/hides based on data attributes
4. Updates product count

### Product Sorting
- Alphabetical (A-Z, Z-A)
- Price (Low-High, High-Low)
- Client-side DOM manipulation
- No page reload required

### Video Player (`js/video.js`)
- Play/Pause toggle
- Auto-stop after 12 seconds
- Overlay show/hide
- Thumbnail display

## Data Attributes

### Product Cards
```html
<div class="product-card"
     data-category="chili-okazu"
     data-type="multi-set"
     data-flavor="chili"
     data-price="135.00"
     data-name="Product Name"
     data-rating="5">
```

**Used for**:
- Filtering by category, type, flavor, rating
- Sorting by name and price
- Dynamic product display

## Adding New Products

1. **HTML** - Add product card in `products.html`:
```html
<div class="product-card" 
     onclick="window.location.href='product-info-new.html'"
     data-category="your-category"
     data-type="single-pack"
     data-flavor="your-flavor"
     data-price="29.99"
     data-name="Product Name"
     data-rating="5">
    <!-- Product content -->
</div>
```

2. **Create product detail page** - Duplicate `product-info.html`
3. **Update content** - Images, text, prices, reviews
4. **Update product count** - Change initial count in products.html

## CSS Customization

### Colors
```css
--primary-green: #1a3a2e;
--accent-orange: #ff9933;
--light-gray: #f5f5f5;
--dark-text: #333;
```

### Typography
```css
--body-font: Arial, sans-serif;
--heading-font: "Source Sans Pro", sans-serif;
--special-font: "Raleway", sans-serif;
```

## Common Tasks

### Update Cart Count Initial Value
```javascript
// In cart.js
let cartCount = 0; // Change this value
```

### Change Filter Options
1. Edit `html/products.html` - Add/remove checkboxes
2. Ensure `data-filter` attribute matches filter type
3. Add corresponding data attributes to product cards

### Modify Sort Options
```javascript
// In filter.js, sortDropdown event listener
case 'your-sort-option':
    // Add custom sort logic
    break;
```

### Change Auto-redirect Time
```javascript
// In order-success.html
let seconds = 5; // Change this value
```

## Browser Compatibility

- **Chrome** ✅ Fully supported
- **Firefox** ✅ Fully supported
- **Safari** ✅ Fully supported
- **Edge** ✅ Fully supported
- **IE11** ⚠️ May require polyfills

## Performance Tips

1. **Images**: Optimize all images before upload
2. **localStorage**: Clear old data periodically
3. **DOM queries**: Minimize inside loops
4. **Event delegation**: Used where appropriate

## Debugging

### Check Cart Count
```javascript
console.log(localStorage.getItem('cartCount'));
```

### Check Active Filters
```javascript
// In browser console on products page
console.log(activeFilters);
```

### Check Visible Products
```javascript
document.querySelectorAll('.product-card[style*="display: flex"]').length
```

## Code Style Guide

### JavaScript
- Use `const` and `let` (no `var`)
- Descriptive variable names
- JSDoc comments for functions
- 4-space indentation

### HTML
- Semantic tags preferred
- Descriptive class names
- 4-space indentation
- Comments for major sections

### CSS
- BEM-like naming convention
- Mobile-first approach
- Group related properties
- 4-space indentation

## Testing Checklist

- [ ] Homepage loads correctly
- [ ] Navigation links work
- [ ] Product cards clickable
- [ ] Filters show/hide products correctly
- [ ] Sort changes product order
- [ ] Cart count increments
- [ ] Cart persists on refresh
- [ ] Product detail pages load
- [ ] Image carousel works
- [ ] Tabs switch content
- [ ] Buy now redirects
- [ ] Order success auto-redirects
- [ ] All images load
- [ ] Video plays/pauses

## Future Enhancements

- Backend integration (API endpoints)
- User authentication
- Real payment processing
- Product search functionality
- Reviews submission
- Wishlist functionality
- Mobile responsive design
- Image zoom on hover
- Product comparison
- Related products algorithm

## Support

For issues or questions:
1. Check browser console for errors
2. Verify all file paths are correct
3. Ensure localStorage is enabled
4. Clear browser cache if needed

---

**Last Updated**: November 2025
