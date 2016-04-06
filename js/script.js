window.onload = function(){
	
	var arrowNext = document.getElementById('arrow--next'),
			arrowPrev = document.getElementById('arrow--back'),
			bgImage = document.getElementById('bg_image'),
			navigation = document.getElementById('navigation'),
			newPosition = 0,
			currentId = 0,
			prevId;

	/* 
	Replace existing coordinatesArray and lengthUnit for smoother experience
	*/
	// var coordinatesArray = [ 0, 1200, 2100, 3300, 4600, 5800, 7200, 8400, 8900, 10000 ]
	// var lengthUnit = "px";

	var coordinatesArray = [ 0, 125, 225, 350, 495, 625, 780, 900, 950, 1060 ];
	var lengthUnit = "vh";


	function getCoordinates(coordinatesArray, pageId) {
		return "-" + coordinatesArray[pageId];
	};

	arrowNext.addEventListener( "click", function(){
		currentId ++;
		var nextPageCoordinates = getCoordinates(coordinatesArray, currentId);
		renderPage(nextPageCoordinates);
	});

	arrowPrev.addEventListener( "click", function(){
		currentId --;
		var nextPageCoordinates = getCoordinates(coordinatesArray, currentId);
		renderPage(nextPageCoordinates);
	});

	navigation.addEventListener("click", function(event){
		var coordinates = getCoordinates(coordinatesArray, event.target.id);
		currentId = event.target.id;
		renderPage(coordinates);
	});

	function checkArrowVisibility() {
		if (currentId == 9) {
			arrowNext.style.visibility = "hidden";
		} else if (currentId == 0) {
			arrowPrev.style.visibility = "hidden";
		} else {
			arrowNext.style.visibility = "visible";
			arrowPrev.style.visibility = "visible";
		}
	}

	function renderPage(coordinates) {
		// set new bg position
		newPosition = coordinates;
		bgImage.style["transform"] = "translate(" + newPosition + lengthUnit + ", 0)";

		// hide previous content
		if (prevId != null) {
			var prevArticleId = "article--" + prevId,
					prevArticle = document.getElementById(prevArticleId),
					prevNavButton = document.getElementById(prevId);

			if (prevId != 9) {
				prevArticle.style.opacity = 0;
			}
			prevNavButton.className = "";
		}

		// display current page on navigation
		var newNavButton = document.getElementById(currentId);
		newNavButton.className = "listitem--clicked"; 

		// display current page contents
		setTimeout(function(){
			var articleId = "article--" + currentId, 
					currentArticle = document.getElementById(articleId);

			currentArticle.style.opacity = 1;
		}, 1500);

		checkArrowVisibility();
		// set previous page id to the current one 
		prevId = currentId;
	}

	checkArrowVisibility();
	renderPage(0);


};