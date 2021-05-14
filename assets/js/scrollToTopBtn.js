const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const profile = document.getElementsByClassName("profile")[0];

function fixedBtn(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    scrollToTopBtn.classList.remove("invisible");
  } else {
    scrollToTopBtn.classList.add("invisible");
  }
}

const btnObserver = new IntersectionObserver(fixedBtn, {
  root: null,
  threshold: 0,
});

btnObserver.observe(profile);

// Source: https://getflywheel.com/layout/sticky-back-to-top-button-tutorial/
const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 2);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopBtn.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
};
