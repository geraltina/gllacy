var link = document.querySelector(".form-button");
var popup = document.querySelector(".form-visible");
var arrive = popup.querySelector(".arrive");
var departure = popup.querySelector(".departure");
var adults = popup.querySelector("[name=adults]");
var kids = popup.querySelector("[name=kids]");
var storage = localStorage.getItem("adults, kids");

popup.classList.add("form-hidden");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("form-hidden");
	arrive.focus();
});

popup.addEventListener("submit", function (evt) {
	if (!arrive.value || !departure.value || !adults.value || !kids.value) {
		evt.preventDefault();
	} else {
		localStorage.setItem("adults", adults.value);
		localStorage.setItem("kids", kids.value);
	}
});