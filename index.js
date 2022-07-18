const harmburger = document.querySelector(".harmburger");
const navMenu = document.querySelector(".nav-menu");

harmburger.addEventListener("click", (e) => {
  navMenu.classList.toggle("slide");
  harmburger.classList.toggle("slide");
});
