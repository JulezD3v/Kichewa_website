document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all "VIEW MORE" buttons
    const viewMoreButtons = document.querySelectorAll('.view-more, .view-more-arrow');
    
    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the category from the parent element's class
            const card = this.closest('.product-card');
            let category = '';
            
            if (card) {
                if (card.classList.contains('workwear')) category = 'Workwear';
                else if (card.classList.contains('shoes')) category = 'Shoes';
                else if (card.classList.contains('lingerie')) category = 'Lingerie';
                else if (card.classList.contains('sofa')) category = 'Sofa';
                else if (card.classList.contains('curtain')) category = 'Curtain';
                else if (card.classList.contains('mattress')) category = 'Mattress';
            } else {
                category = 'All Products';
            }
            
            // In a real implementation, this would navigate to a category page
            // For now, just show an alert
            alert(`Viewing more ${category} accessories`);
            
            // You could also use window.location to navigate:
            // window.location.href = `/${category.toLowerCase()}.html`;
        });
    });
    
    // Optional: Add hover effects for product cards
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.transform = 'translateY(0)';
        });
    });
});