window.onload = function(){
	
	var buttonNext = document.getElementById('button--next'),
			buttonBack = document.getElementById('button--back'),
			container = document.getElementById('container'),
			navigation = document.getElementById('navigation'),
			newPosition = 0,
			lengthUnit = "px",
			currentId = 1,
			newId = 0;

	buttonNext.addEventListener( "click", function(){

	});

	buttonBack.addEventListener( "click", function(){
	});

	navigation.addEventListener("click", function(event){
		if (event.target.id === "0") {
			newId = event.target.id;
			renderPage(0);
		}
		else if (event.target.id === "1") {
			newId = event.target.id;
			renderPage(-1200);
		} 
		else if (event.target.id === "2") {
			newId = event.target.id;
			renderPage(-2000);
		}
		else if (event.target.id === "3") {
			newId = event.target.id;
			renderPage(-3200);
		}
		else if (event.target.id === "4") {
			newId = event.target.id;
			renderPage(-4600);
		}
		else if (event.target.id === "5") {
			newId = event.target.id;
			renderPage(-5600);
		}
		else if (event.target.id === "6") {
			newId = event.target.id;
			renderPage(-6600);
		}
		else if (event.target.id === "7") {
			newId = event.target.id;
			renderPage(-7600);
		}
		else if (event.target.id === "8") {
			newId = event.target.id;
			renderPage(-8800);
		}
	})


	function renderPage(newPosition) {
		// change the backgroundPosition
		newPosition = newPosition;
		container.style.backgroundPosition = newPosition + lengthUnit;

		// remove the styles of the previous page
		var prevArticleId = "article--" + currentId,
				prevArticle = document.getElementById(prevArticleId),
				prevNavButton = document.getElementById(currentId),
				newNavButton = document.getElementById(newId);
		
		prevArticle.style.opacity = 0;
		prevNavButton.className = "";
		newNavButton.className = "listitem--clicked";

		// do something about content opacity
		setTimeout(function(){
			var articleId = "article--" + newId;
			var currentArticle = document.getElementById(articleId);
			currentArticle.style.opacity = 1;
		}, 800);

		// set newId to new
		currentId = newId;
	}


	renderPage(0);

















};