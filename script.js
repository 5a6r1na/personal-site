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
  // Track order: [C3-clone][C1][C2][C3][C1-clone][C2-clone]
  // Start at index 1 so C1+C2 are visible
  let currentIndex = 1;
  let isTransitioning = false;
  const TOTAL = 3;

  function getSlotWidth() {
    const card = projectsTrack.querySelector('.card');
    // gap is 1px between cards
    return card.offsetWidth + 1;
  }

  function moveTo(index, animate) {
    projectsTrack.style.transition = animate
      ? 'transform 0.45s cubic-bezier(0.25, 0.1, 0.25, 1)'
      : 'none';
    projectsTrack.style.transform = 'translateX(-' + (index * getSlotWidth()) + 'px)';
    currentIndex = index;
  }

  // Set initial position without animation
  moveTo(1, false);

  document.getElementById('projectNext').addEventListener('click', function () {
    if (isTransitioning) return;
    isTransitioning = true;
    var next = currentIndex + 1;
    moveTo(next, true);
    // If we've gone past real cards into clones, snap back
    if (next >= TOTAL + 1) {
      setTimeout(function () {
        moveTo(1, false);
        isTransitioning = false;
      }, 450);
    } else {
      setTimeout(function () { isTransitioning = false; }, 450);
    }
  });

  document.getElementById('projectPrev').addEventListener('click', function () {
    if (isTransitioning) return;
    isTransitioning = true;
    var prev = currentIndex - 1;
    moveTo(prev, true);
    // If we've gone to the clone before real cards, snap to end
    if (prev <= 0) {
      setTimeout(function () {
        moveTo(TOTAL, false);
        isTransitioning = false;
      }, 450);
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
