const hamburgerOpen = document.getElementById("mobile-bars");
const hamburgerClose = document.getElementById("mobile-close");
const navigationLink = document.getElementById("navigation-links");

hamburgerOpen.addEventListener("click", () => {
  navigationLink.classList.remove("hidden");
  hamburgerOpen.classList.add("hidden");
  hamburgerClose.classList.remove("hidden");
  hamburgerClose.classList.remove("hidden");
});
hamburgerClose.addEventListener("click", () => {
  navigationLink.classList.add("hidden");
  hamburgerClose.classList.add("hidden");
  hamburgerOpen.classList.remove("hidden");
});
