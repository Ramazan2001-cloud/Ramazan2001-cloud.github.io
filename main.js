const burger_button = document.querySelector(".burger__menu"),
  burger_menu = document.querySelector(".burger-menu");
burger_button.addEventListener("click", () => {
  burger_menu.classList.toggle("expanded");
});
