document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector(".nav");
  const authButtons = document.querySelector(".auth-buttons");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      nav.classList.toggle("active");
      authButtons.classList.toggle("active");
    });
  }

  const yearShowElement = document.getElementById("current-year");

  if (yearShowElement) {
    yearShowElement.textContent = `${
      new Date().getFullYear() - 1 + "-" + new Date().getFullYear()
    }`;
  }
});
