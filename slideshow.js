;(function() {
	var cSlide = 0,
		slides = [].slice.call(document.querySelectorAll("slide"),0),
		slideAdvanceKeys = [13,32,38,39],
		slideReverseKeys = [37,40];
	
	function nextSlide() {
		goToSlide(cSlide < slides.length -1 ? cSlide + 1 : slides.length -1);
	}
	
	function previousSlide() {
		goToSlide(cSlide > 0 ? cSlide - 1 : 0);
	}
	
	function goToSlide(num) {
		location.hash = cSlide = num;
		document.documentElement.className = "slide" + cSlide;
		
		slides.forEach(function(slide) {
			var sNum = +slide.getAttribute("number");
			
			if (sNum < num)
				slide.className = "past";
			
			if (sNum === num)
				slide.className = "present";
			
			if (sNum > num)
				slide.className = "future";
		});
	}
	
	window.addEventListener("keyup",function(evt) {
		if (slideAdvanceKeys.indexOf(evt.keyCode) > -1)
			nextSlide();
		
		if (slideReverseKeys.indexOf(evt.keyCode) > -1)
			previousSlide();
	});
	
	// Fullscreen body on demand
	document.documentElement.addEventListener("click",function() {
		document.documentElement.webkitRequestFullScreen();
	});
	
	window.addEventListener("load",function() {
		goToSlide(+location.hash > 0 ? +location.hash : 0);
	});
})();