window.onload = function(){
	console.log("loaded!")
	
	var buttonNext = document.getElementById('button--next'),
			buttonBack = document.getElementById('button--back'),
			container = document.getElementById('container'),
			currentPage = 0,
			measure = "px",
			navigation = document.getElementById('navigation'),
			nav1 = document.getElementById('nav8');

	buttonNext.addEventListener( "click", function(){
		currentPage -= 1200;
		container.style.backgroundPosition = currentPage + measure;
	});

	buttonBack.addEventListener( "click", function(){
		currentPage += 1200;
		container.style.backgroundPosition = currentPage + measure;
	});

	nav1.addEventListener("click", function(){
		this.childNodes[0].className += "listitem--clicked";
		currentPage -= 4800;
		container.style.backgroundPosition = currentPage + measure;
	})










};