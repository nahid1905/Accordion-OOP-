var textItems = document.querySelectorAll(".text");

for (var text of textItems){
	text.addEventListener('click', function() {
		var previous = document.querySelector(".active");
		previous.classList.remove("active");
		this.classList.add("active");
	})
}