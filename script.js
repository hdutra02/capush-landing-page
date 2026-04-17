document.addEventListener('DOMContentLoaded', () => {
  // Navigation scrolling logic could be added here
  
  // FAQ Accordion logic
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');
      
      // Close other items
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.closest('.faq-item').classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // Testimonial Scroll Logic
  const curatorsGrid = document.getElementById('curators-grid');
  const arrowBtns = document.querySelectorAll('.testimonial-arrows .arrow-btn');
  
  if (curatorsGrid && arrowBtns.length === 2) {
    const prevBtn = arrowBtns[0];
    const nextBtn = arrowBtns[1];
    const scrollAmount = 400;
    
    prevBtn.addEventListener('click', () => {
      curatorsGrid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
      curatorsGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
});
