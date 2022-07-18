/** @format */

const harmburger = document.querySelector(".harmburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

harmburger.addEventListener("click", (e) => {
	navMenu.classList.toggle("slide");
	harmburger.classList.toggle("slide");
});

navLink.forEach((n) =>
	n.addEventListener("click", () => {
		harmburger.classList.remove("slide");
		navMenu.classList.remove("slide");
	})
);
