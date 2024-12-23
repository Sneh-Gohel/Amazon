const slider = document.querySelector('.product-container');
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');

function updateButtonVisibility() {
   const isScrollable = slider.scrollWidth > slider.clientWidth;

   scrollLeft.style.display = isScrollable ? 'block' : 'none';
   scrollRight.style.display = isScrollable ? 'block' : 'none';
}

// Call this function initially and whenever the content changes
updateButtonVisibility();

scrollLeft.addEventListener('click', () => {
   slider.scrollBy({ left: -150, behavior: 'smooth' }); // Scroll left
   updateButtonVisibility(); // Update button visibility
});

scrollRight.addEventListener('click', () => {
   slider.scrollBy({ left: 150, behavior: 'smooth' }); // Scroll right
   updateButtonVisibility(); // Update button visibility
});

// Optionally call this function when new products are added or removed
