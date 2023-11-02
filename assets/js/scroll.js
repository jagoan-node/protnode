window.addEventListener("beforeunload", function () {
	document.body.classList.add("animate-out");
});

var mybutton = document.getElementById("send");
window.onscroll = function () {
	disappear();
};

function disappear() {
	if (window.pageYOffset > 0) {
		mybutton.style.display = "block";
		window.setTimeout(function () {
			mybutton.style.opacity = 1;
		}, 0);
	} else {
		mybutton.style.opacity = "0";
		window.setTimeout(function () {
			mybutton.style.display = "none";
		}, 500);
	}
}
