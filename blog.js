// This file is included for any potential JavaScript functionality
// For this static blog page, we don't need much JavaScript
// but you could add features like filtering by category, search, etc.

document.addEventListener('DOMContentLoaded', function() {
    // You could add functionality here if needed
    console.log('Blog page loaded successfully');
    
    // Example: Add click event listeners to blog cards
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        card.addEventListener('click', function() {
            // For now, just log which card was clicked
            // In a real implementation, you might navigate to the full blog post
            console.log('Blog post clicked:', this.querySelector('h2').textContent);
        });
    });
});