document.addEventListener("DOMContentLoaded", function () {
  // burger toggle button
  const burger = document.querySelector('.burger input[type="checkbox"]'); // Efficient combined selector
  const navbar = document.getElementById("navbar");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("active"); // Use CSS class for visibility control
    burger.setAttribute("aria-expanded", !burger.checked); // Update aria-expanded for screen readers
  });

  // cross toggle button
  const cross = document.querySelector('.cross input[type="checkbox"]'); // Efficient combined selector

  cross.addEventListener("click", () => {
    navbar.classList.toggle("active"); // Use CSS class for visibility control
    cross.setAttribute("aria-expanded", !cross.checked); // Update aria-expanded for screen readers
  });
});
