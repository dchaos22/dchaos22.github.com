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


/** Map Selection Information for Branches **/

// Attach click listeners to all branch cards
document.querySelectorAll(".branch-card").forEach(card => {
  card.addEventListener("click", function () {
    const mapId = this.getAttribute("data-map");
    showMap(mapId);
  });
});

function showMap(mapId) {
  // Hide all maps
  const maps = document.querySelectorAll(".map-frame");
  maps.forEach(map => map.classList.add("d-none"));

  // Show the selected map
  const selectedMap = document.getElementById(mapId);
  if (selectedMap) {
    selectedMap.classList.remove("d-none");

    // Optional fade-in effect
    selectedMap.style.opacity = 0;
    setTimeout(() => {
      selectedMap.style.transition = "opacity 0.5s";
      selectedMap.style.opacity = 1;
    }, 50);
  }
}


/** Map Selection Information for ATMS **/


function showMap(mapId, event) {
  if (event) event.preventDefault();

  // Hide all maps
  const maps = document.querySelectorAll(".map-frame");
  maps.forEach(map => map.classList.add("d-none"));

  // Show the selected map
  const selectedMap = document.getElementById(mapId);
  if (selectedMap) {
    selectedMap.classList.remove("d-none");
  }
}

// Show Makati by default when page loads
document.addEventListener("DOMContentLoaded", () => {
  showMap("map1");
});

/** Card Box Color will stay **/
document.querySelectorAll('.branch-card').forEach(card => {
  card.addEventListener('click', function() {
    // Remove active from all cards
    document.querySelectorAll('.branch-card').forEach(c => c.classList.remove('active'));
    // Add active to the clicked card
    this.classList.add('active');
  });
});



