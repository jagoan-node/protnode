let ckbox = document.getElementById("fab-checkbox");
let menu = document.getElementById("menu");
let btn = document.getElementById("btn-in");
ckbox.addEventListener("click", function () {
	menu.classList.toggle("animation-in");
	btn.classList.toggle("btn-anim-in");
	menu.classList.toggle("animation-out");
	btn.classList.toggle("btn-anim-out");
});
