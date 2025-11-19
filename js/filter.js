// Filter and Sort Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterBtn = document.getElementById('filterBtn');
    const filterPanel = document.getElementById('filterPanel');
    const sortDropdown = document.getElementById('sortDropdown');
    const productCards = document.querySelectorAll('.product-card');
    const productCount = document.getElementById('productCount');
    
    let activeFilters = {
        category: [],
        type: [],
        flavor: []
    };

    // Toggle filter panel
    filterBtn.addEventListener('click', function() {
        filterPanel.classList.toggle('active');
        filterBtn.classList.toggle('active');
    });

    // Filter functionality
    const filterCheckboxes = document.querySelectorAll('input[data-filter]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const filterType = this.getAttribute('data-filter');
            const filterValue = this.value;
            
            if (this.checked) {
                if (!activeFilters[filterType].includes(filterValue)) {
                    activeFilters[filterType].push(filterValue);
                }
            } else {
                activeFilters[filterType] = activeFilters[filterType].filter(v => v !== filterValue);
            }
            
            applyFilters();
        });
    });

    // Apply filters to products
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
            
            // Show or hide the card
            if (shouldShow) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update product count
        productCount.textContent = visibleCount;
    }

    // Sort functionality
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
