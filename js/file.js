var feedback = document.querySelector(".feedback-send");
var popup = document.querySelector(".feedback-form");
var close = document.querySelector(".feedback-cross");
var login = popup.querySelector(".feedback-name");
var email = popup.querySelector(".feedback-email");
var text = popup.querySelector(".feedback-text");
var form = popup.querySelector("form");
var keeplog = localStorage.getItem("login");
var keepemail = localStorage.getItem("email");

feedback.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.add("feedback-show");
	
	if (keepemail) {
		email.value = keepemail;
		text.focus();
	} else {
		email.focus();
	}
	
	if (keeplog) {
		login.value = keeplog;
		email.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("feedback-show");
	popup.classList.remove("feedback-error");
});

form.addEventListener("submit", function(evt){
	if (!login.value || !email.value || !text.value) {
		evt.preventDefault();
		popup.classList.add("feedback-error");
	} else {
		localStorage.setItem("email", email.value);
		localStorage.setItem("login", login.value);
	}
});