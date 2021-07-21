const cogs = document.querySelector(".cogs");
const background = document.querySelector("main");
const nav = document.querySelector("nav");
const firstLi = document.querySelector(".first-li");

cogs.addEventListener("click", () => {
	nav.classList.toggle("nav-container-toggle");
	background.classList.toggle("main-container-toggle");
	firstLi.classList.toggle("first-toggle");
});
