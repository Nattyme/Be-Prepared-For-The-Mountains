const navBtn = document.querySelector(".nav-button");
const navMobile = document.querySelector(".mobile-nav");
const body = document.body;

// Клик по кнопке
navBtn.addEventListener("click", function (event) {
  event.stopImmediatePropagation();
  toggleMobileNav();
});

//Клик по окну , за пределами навигации
window.addEventListener("click", function () {
  if (body.classList.contains("no-scroll")) {
    toggleMobileNav();
  }
});

// Останавливаем клик внутри открытой мобильной навигации
navMobile.addEventListener("click", function (event) {
  event.stopPropagation();
});

function toggleMobileNav() {
  body.classList.toggle("no-scroll");
  navBtn.classList.toggle("nav-button-close");
  navMobile.classList.toggle("mobile-nav-active");
}
