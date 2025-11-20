/**
 * Product Filter and Sort Functionality
 * Handles multi-criteria filtering and sorting for product listing page
 */
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const filterBtn = document.getElementById('filterBtn');
    const filterPanel = document.getElementById('filterPanel');
    const sortDropdown = document.getElementById('sortDropdown');
    const productCards = document.querySelectorAll('.product-card');
    const productCount = document.getElementById('productCount');
    
    // Active filters object to track selected filters
    let activeFilters = {
        category: [],
        type: [],
        flavor: [],
        rating: []
    };

    /**
     * Toggle filter panel visibility
     */
    filterBtn.addEventListener('click', function() {
        filterPanel.classList.toggle('active');
        filterBtn.classList.toggle('active');
    });

    /**
     * Filter checkbox change handler
     * Updates activeFilters object and applies filters
     */
    const filterCheckboxes = document.querySelectorAll('input[data-filter]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const filterType = this.getAttribute('data-filter');
            const filterValue = this.value;
            
            if (this.checked) {
                // Add filter if not already in array
                if (!activeFilters[filterType].includes(filterValue)) {
                    activeFilters[filterType].push(filterValue);
                }
            } else {
                // Remove filter from array
                activeFilters[filterType] = activeFilters[filterType].filter(v => v !== filterValue);
            }
            
            applyFilters();
        });
    });

    /**
     * Apply all active filters to product cards
     * Shows/hides products based on filter criteria
     * Updates visible product count
     */
    function applyFilters() {
        let visibleCount = 0;
        
        productCards.forEach(card => {
            let shouldShow = true;
            
            // Check category filter
            if (activeFilters.category.length > 0) {
                const cardCategory = card.getAttribute('data-category');
                if (!activeFilters.category.includes(cardCategory)) {
                    shouldShow = false;
                }
            }
            
            // Check type filter
            if (activeFilters.type.length > 0) {
                const cardType = card.getAttribute('data-type');
                if (!activeFilters.type.includes(cardType)) {
                    shouldShow = false;
                }
            }
            
            // Check flavor filter
            if (activeFilters.flavor.length > 0) {
                const cardFlavor = card.getAttribute('data-flavor');
                if (!activeFilters.flavor.includes(cardFlavor)) {
                    shouldShow = false;
                }
            }
            
            // Check rating filter (show if rating is >= any selected minimum rating)
            if (activeFilters.rating.length > 0) {
                const cardRating = parseInt(card.getAttribute('data-rating'));
                // Get the lowest selected rating (if 5 and 3 are selected, use 3 as minimum)
                const minSelectedRating = Math.min(...activeFilters.rating.map(r => parseInt(r)));
                // Show product if its rating is >= the lowest selected rating
                if (cardRating < minSelectedRating) {
                    shouldShow = false;
                }
            }
            
            // Show or hide the card
            if (shouldShow) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update visible product count
        productCount.textContent = visibleCount;
    }

    /**
     * Sort dropdown change handler
     * Sorts products by name (alphabetically) or price
     */
    sortDropdown.addEventListener('change', function() {
        const sortValue = this.value;
        const productsGrid = document.querySelector('.products-grid');
        const cardsArray = Array.from(productCards);
        
        cardsArray.sort((a, b) => {
            switch(sortValue) {
                case 'alpha-az':
                    const nameA = a.getAttribute('data-name').toLowerCase();
                    const nameB = b.getAttribute('data-name').toLowerCase();
                    return nameA.localeCompare(nameB);
                    
                case 'alpha-za':
                    const nameA2 = a.getAttribute('data-name').toLowerCase();
                    const nameB2 = b.getAttribute('data-name').toLowerCase();
                    return nameB2.localeCompare(nameA2);
                    
                case 'price-low':
                    const priceA = parseFloat(a.getAttribute('data-price'));
                    const priceB = parseFloat(b.getAttribute('data-price'));
                    return priceA - priceB;
                    
                case 'price-high':
                    const priceA2 = parseFloat(a.getAttribute('data-price'));
                    const priceB2 = parseFloat(b.getAttribute('data-price'));
                    return priceB2 - priceA2;
                    
                default:
                    return 0;
            }
        });
        
        // Re-append sorted cards
        cardsArray.forEach(card => {
            productsGrid.appendChild(card);
        });
    });
});
