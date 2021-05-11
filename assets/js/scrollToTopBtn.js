// Force the page start from top when refreshed.
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
let pivotY = -1;
let defaultPosition, defaultTop, defaultBtm;
function scrollFunc() {
  let yDistanceFromViewPort = scrollToTopBtn.getBoundingClientRect().bottom;
  let currY = window.scrollY;

  if (yDistanceFromViewPort <= window.innerHeight - 50 && pivotY === -1) {
    pivotY = currY;
    defaultPosition = scrollToTopBtn.style.position;
    defaultTop = scrollToTopBtn.style.top;
    defaultBtm = scrollToTopBtn.style.bottom;
    scrollToTopBtn.style.position = "fixed";
    scrollToTopBtn.style.top = "unset";
    scrollToTopBtn.style.bottom = "50px";
  }
  if (pivotY > currY && pivotY !== -1) {
    pivotY = -1;
    scrollToTopBtn.style.position = defaultPosition;
    scrollToTopBtn.style.top = defaultTop;
    scrollToTopBtn.style.bottom = defaultTopBtm;
  }
}
window.addEventListener("scroll", scrollFunc);

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
