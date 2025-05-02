document.addEventListener('DOMContentLoaded', function() {
    // Navigation dropdown functionality
    const navItems = document.querySelectorAll('.main-nav li');
    
    navItems.forEach(item => {
        if (item.querySelector('.fa-chevron-down')) {
            item.addEventListener('click', function(e) {
                // In a real implementation, this would toggle a dropdown menu
                console.log('Dropdown clicked:', this.textContent.trim());
            });
        }
    });
    
    // Category links functionality
    const categoryLinks = document.querySelectorAll('.category-links a');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            categoryLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            console.log('Category selected:', this.textContent);
        });
    });
    
    // Business category hover effects
    const categories = document.querySelectorAll('.category');
    
    categories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.querySelector('.category-icon').style.backgroundColor = '#e8f4fe';
            this.querySelector('.category-icon i').style.color = '#2196F3';
        });
        
        category.addEventListener('mouseleave', function() {
            this.querySelector('.category-icon').style.backgroundColor = '#f9f9f9';
            this.querySelector('.category-icon i').style.color = '#555';
        });
    });
    
    // Search button functionality
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', function() {
        // In a real implementation, this would open a search overlay or redirect to search page
        console.log('Search button clicked');
    });
    
    // Sign In button functionality
    const signInBtn = document.querySelector('.signin-btn');
    
    signInBtn.addEventListener('click', function() {
        // In a real implementation, this would open a login modal or redirect to login page
        console.log('Sign In button clicked');
    });
});