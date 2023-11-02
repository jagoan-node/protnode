const scriptURL =
	"https://script.google.com/macros/s/AKfycbw0VuvXjcUe5eCMSvk1V2t58GIJtA6UHSBw9D2fHnu2gGnIYbeC0exIUuw2Pa26L-mL/exec";
const form = document.forms["con-form"];
const btnsubmit = document.querySelector(".btn-kirim");
const btnloading = document.querySelector(".btn-loading");
const alert = document.querySelector(".alertf");

// replace tombol kirim dengan tombol loading

form.addEventListener("submit", (e) => {
	e.preventDefault();
    btnloading.classList.toggle("d-none");
	btnsubmit.classList.toggle("d-none");
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
            // replace tombol loading dengan tombol kirim
            btnloading.classList.toggle("d-none");
            btnsubmit.classList.toggle("d-none");
            // tampilkan alert
            alert.classList.toggle("d-none");
            console.log("Success!", response)})
		.catch((error) => console.error("Error!", error.message));
});
