document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const counterCurrent = document.getElementById('counter-current');
  const counterTotal = document.getElementById('counter-total');
  const progressBar = document.querySelector('.progress-bar');
  
  let currentSlideIndex = 0;
  const totalSlides = slides.length;
  
  // Set total slide count in UI
  if (counterTotal) {
    counterTotal.textContent = totalSlides;
  }
  
  /**
   * Updates visibility of slides, progress bar, and slide counters.
   */
  function updateSlides() {
    slides.forEach((slide, index) => {
      if (index === currentSlideIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
    
    // Update numeric counter text (1-based index)
    if (counterCurrent) {
      counterCurrent.textContent = currentSlideIndex + 1;
    }
    
    // Update top progress bar
    if (progressBar) {
      const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }
  }
  
  /**
   * Navigate to the next slide if available.
   */
  function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
      currentSlideIndex++;
      updateSlides();
    }
  }
  
  /**
   * Navigate to the previous slide if available.
   */
  function prevSlide() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      updateSlides();
    }
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (event) => {
    // ArrowRight or Space -> Next
    if (event.key === 'ArrowRight' || event.key === ' ') {
      // Prevent default spacebar page scrolling
      if (event.key === ' ') {
        event.preventDefault();
      }
      nextSlide();
    }
    
    // ArrowLeft -> Previous
    if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  });
  
  // Initialize presentation state
  updateSlides();
});
