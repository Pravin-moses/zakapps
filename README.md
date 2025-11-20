# ABOKICHI E-Commerce Website

A fully functional e-commerce website for ABOKICHI - Japanese miso and specialty food products.

## 🎯 Project Overview

This is a complete e-commerce website built with vanilla HTML, CSS, and JavaScript, featuring:
- Responsive homepage with hero section and product showcases
- Dynamic product listing page with advanced filtering and sorting
- Individual product detail pages with image carousels
- Shopping cart functionality with localStorage persistence
- Order confirmation page with auto-redirect
- Clean, organized code structure

## 📁 Project Structure

```
Zakapps/
├── index.html              # Homepage (root level)
├── README.md               # Project documentation
│
├── html/                   # All other HTML pages
│   ├── products.html       # Product listing page
│   ├── product-info.html   # OKAZU Lovers Set details
│   ├── product-info-chili.html   # Chili Miso product details
│   ├── product-info-soup.html    # Instant Soup details
│   ├── product-info-matcha.html  # Matcha product details
│   └── order-success.html        # Order confirmation page
│
├── css/                    # Stylesheets (modular CSS)
│   ├── header.css          # Navigation and top bar styles
│   ├── footer.css          # Footer styles
│   ├── home.css            # Homepage specific styles
│   ├── products.css        # Product listing and filters
│   ├── product-info.css    # Product detail page styles
│   ├── order-success.css   # Order confirmation styles
│   └── video.css           # Video section styles
│
├── js/                     # JavaScript files
│   ├── cart.js             # Shopping cart functionality
│   ├── filter.js           # Product filtering and sorting
│   └── video.js            # Video player controls
│
└── assets/                 # Images and media files
    ├── hero/               # Homepage hero images
    ├── best sellers/       # Product images
    ├── products/           # Product page banners
    ├── story&recipe/       # Story section images
    ├── sponsers/           # Sponsor logos
    ├── video/              # Video files
    ├── footer-payment-logo/  # Payment method icons
    └── given_icons/        # Custom SVG/PNG icons
```

## ✨ Key Features

### Homepage (index.html)
- Hero section with call-to-action
- Features bar (Vegan, Keto-friendly, Non-GMO, etc.)
- Story and Recipes section
- Best Sellers showcase (4 products)
- Video section with play controls
- Sponsors section
- Newsletter subscription
- Responsive navigation

### Product Listing Page (products.html)
- **Filter System:**
  - Categories (6 options)
  - Type (Single Pack, Multi Set)
  - Flavours (Chili, Original, Matcha)
  - Rating (5★, 4★, 3★ & Up)
  - Multiple selections supported
  - Real-time product count update

- **Sort Options:**
  - Alphabetically A-Z / Z-A
  - Price Low to High / High to Low

- 12 product cards with complete data
- Grid/List view toggle
- Filter panel toggle

### Product Detail Pages
- Image carousel with thumbnails
- Product pricing and ratings
- Tabbed content (Description, Reviews, Videos, Comments)
- Add to Cart / Buy Now functionality
- Wishlist feature
- Social sharing (Facebook, Twitter, Pinterest)
- Related product recommendations

### Shopping Cart
- Badge counter in header
- localStorage persistence
- Auto-increment on "Add to Cart"

### Order Success Page
- Confirmation message
- Auto-redirect to homepage (5 seconds)
- Manual "Back to Home" button

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Animations
- **JavaScript (Vanilla)** - No frameworks or libraries
- **Font Awesome 6.0.0** - Icons (gradually being replaced with custom SVG/PNG)
- **localStorage API** - Cart persistence

## 🎨 Design Features

- Custom color scheme: 
  - Primary Green: `#1a3a2e`
  - Orange (stars/accents): `#ff9933`
  - Light Gray: `#f5f5f5`
  
- Typography:
  - Body: Arial
  - Headings: Source Sans Pro
  - Special elements: Raleway

- Responsive layout (Desktop optimized)
- Smooth transitions and hover effects
- Custom SVG icons for brand consistency

## 🚀 How to Run

1. Open `index.html` in a web browser
2. Navigate through the site using the navigation menu
3. All pages are linked and functional
4. No server or build process required

## 📝 Code Organization Highlights

### Modular CSS
Each page has its own CSS file, with shared styles (header, footer) separated into reusable modules.

### Clean JavaScript
- Separate files for different functionalities
- Event delegation used where appropriate
- localStorage for state management
- Pure vanilla JS - no dependencies

### Semantic HTML
- Proper use of semantic tags (nav, section, article, etc.)
- Accessibility-friendly structure
- Clean, readable markup

## 🔧 Filter & Sort Implementation

The filter system supports:
- **Multi-criteria filtering** - Apply multiple filters simultaneously
- **AND logic within filter types** - All selected options in same category must match
- **OR logic across filter types** - Match any category + any type + any flavor
- **Rating filter** - "& Up" functionality (shows products with selected rating or higher)
- **Real-time updates** - Instant filtering without page reload
- **Product counter** - Shows number of visible products

Sort functionality:
- Client-side sorting with no page refresh
- Maintains current filter state while sorting
- Efficient DOM manipulation

## 📦 Data Attributes

Product cards use data attributes for filtering:
- `data-category` - Product category
- `data-type` - Single pack or multi-set
- `data-flavor` - Product flavor variant
- `data-price` - Price for sorting
- `data-name` - Product name for sorting
- `data-rating` - Star rating (1-5)

## 🌐 Navigation Structure

```
Home (index.html)
├── Shop → Products Page (html/products.html)
│   ├── Product 1 → Product Info (html/product-info.html)
│   ├── Product 2 → Product Info Chili (html/product-info-chili.html)
│   ├── Product 3 → Product Info Soup (html/product-info-soup.html)
│   └── Product 4 → Product Info Matcha (html/product-info-matcha.html)
│       └── Buy Now → Order Success (html/order-success.html)
│           └── Auto-redirect to Home (5 seconds)
├── Our Story (Coming Soon)
├── Recipes (Coming Soon)
└── Contact (Coming Soon)
```

## 📱 Features to Note

- **Cart Persistence**: Cart count saved in localStorage
- **Auto-redirect**: Order success page redirects after 5 seconds
- **Image Carousel**: Arrow navigation + thumbnail selection
- **Tabbed Content**: Description, Reviews, Videos, Comments
- **Filter Toggle**: Show/hide filter panel
- **View Options**: Grid/List view toggle (UI ready)

## 🎯 Best Practices Followed

✅ Semantic HTML5
✅ Modular CSS architecture
✅ Vanilla JavaScript (no framework overhead)
✅ localStorage for state management
✅ Clean, organized folder structure
✅ Consistent naming conventions
✅ Reusable components (header, footer)
✅ Performance optimized (minimal dependencies)
✅ Accessibility considerations
✅ Cross-browser compatible

## 📄 License

This project is for educational/portfolio purposes.

---

**Built with ❤️ using plain HTML, CSS, and JavaScript**
