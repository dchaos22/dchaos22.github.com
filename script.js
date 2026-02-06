/** Next image transition **/
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slider img');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  // Show first slide
  showSlide(currentIndex);

  // Next button click
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  }

  // Auto-slide every 3 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 4000);
});

/** Animation FloatIn **/
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // run once per section
        }
      });
    }, { threshold: 0.2 }); // 20% visible triggers animation

    sections.forEach(section => {
      observer.observe(section);
    });
  });


