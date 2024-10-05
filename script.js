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
