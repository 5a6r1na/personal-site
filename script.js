// Show the button when user scrolls down 20px from the top of the document
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// Scroll smoothly to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Projects carousel
const projectsTrack = document.getElementById('projectsTrack');
if (projectsTrack) {
  const carousel = projectsTrack.closest('.projects-carousel');
  let currentIndex = 1;
  let isTransitioning = false;
  const TOTAL = 3;
  const GAP = 1;

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function cardsVisible() {
    return isMobile() ? 1 : 2;
  }

  function setCardWidths() {
    var n = cardsVisible();
    var carouselWidth = carousel.offsetWidth;
    var cardWidth = Math.floor((carouselWidth - GAP * (n - 1)) / n);
    projectsTrack.querySelectorAll('.card').forEach(function(card) {
      card.style.width = cardWidth + 'px';
    });
  }

  function getSlotWidth() {
    var card = projectsTrack.querySelector('.card');
    return card.offsetWidth + GAP;
  }

  function moveTo(index, animate) {
    projectsTrack.style.transition = animate
      ? 'transform 0.45s cubic-bezier(0.25, 0.1, 0.25, 1)'
      : 'none';
    projectsTrack.style.transform = 'translateX(-' + (index * getSlotWidth()) + 'px)';
    currentIndex = index;
  }

  function init() {
    setCardWidths();
    moveTo(1, false);
  }

  init();
  window.addEventListener('resize', function() {
    setCardWidths();
    moveTo(currentIndex, false);
  });

  document.getElementById('projectNext').addEventListener('click', function () {
    if (isTransitioning) return;
    isTransitioning = true;
    var next = currentIndex + 1;
    moveTo(next, true);
    if (next >= TOTAL + 1) {
      setTimeout(function () { moveTo(1, false); isTransitioning = false; }, 450);
    } else {
      setTimeout(function () { isTransitioning = false; }, 450);
    }
  });

  document.getElementById('projectPrev').addEventListener('click', function () {
    if (isTransitioning) return;
    isTransitioning = true;
    var prev = currentIndex - 1;
    moveTo(prev, true);
    if (prev <= 0) {
      setTimeout(function () { moveTo(TOTAL, false); isTransitioning = false; }, 450);
    } else {
      setTimeout(function () { isTransitioning = false; }, 450);
    }
  });
}

// Toggle functionality for design section
const toggleDesign = document.getElementById("toggleDesign");
if (toggleDesign) {
  toggleDesign.addEventListener("change", function () {
    const condensedContent = document.querySelector(
      ".condensed-content-design"
    );
    const originalContent = document.querySelector(".original-content-design");
    if (this.checked) {
      condensedContent.style.display = "none";
      originalContent.style.display = "block";
    } else {
      condensedContent.style.display = "block";
      originalContent.style.display = "none";
    }
  });
}

// Toggle functionality for future section
const toggleFuture = document.getElementById("toggleFuture");
if (toggleFuture) {
  toggleFuture.addEventListener("change", function () {
    const condensedContent = document.querySelector(
      ".condensed-content-future"
    );
    const originalContent = document.querySelector(".original-content-future");
    if (this.checked) {
      condensedContent.style.display = "none";
      originalContent.style.display = "block";
    } else {
      condensedContent.style.display = "block";
      originalContent.style.display = "none";
    }
  });
}
