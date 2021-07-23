const cogs = document.querySelector(".cogs");
const background = document.querySelector("main");
const nav = document.querySelector("nav");
const firstLi = document.querySelector(".first-li");
const diceBtn = document.querySelector(".fa-dice");
const headsetBtn = document.querySelector(".fa-headset");
const ghostBtn = document.querySelector(".fa-ghost");
const gamepadBtn = document.querySelector(".fa-gamepad");
const cogsBtn = document.querySelector(".fa-cog");

cogs.addEventListener("click", () => {
	nav.classList.toggle("nav-container-toggle");
	background.classList.toggle("main-container-toggle");
	firstLi.classList.toggle("first-toggle");
});

diceBtn.addEventListener("click", () => {
	location.href = "#dice";
});

headsetBtn.addEventListener("click", () => {
	location.href = "#song";
});

ghostBtn.addEventListener("click", () => {
	location.href = "#ghost";
});

gamepadBtn.addEventListener("click", () => {
	location.href = "#play";
});

cogsBtn.addEventListener("click", () => {
	nav.classList.toggle("nav-container-toggle");
	background.classList.toggle("main-container-toggle");
	firstLi.classList.toggle("first-toggle");
});
