;(function() {
	"use strict";
	
	var s, cSlide = 0, on = "addEventListener",
		slides = [].slice.call(document.querySelectorAll("slide"),0),
		nextKeys = [13,32,38,39], prevKeys = [37,40],
		html = document.documentElement;
	
	function next() {
		if (cSlide < slides.length-1) slide(cSlide + 1);
	}
	
	function previous() {
		if (cSlide > 0) slide(cSlide - 1);
	}
	
	window.slide = function slide(n) {
		html.className = "slide" + (location.hash = cSlide = n);
		
		slides.forEach(function(slide) {
			s = +slide.getAttribute("number")|0;
			slide.className = ["past","present","future"][s<n?0:s===n?1:2];
		});
	}
	
	window[on]("keyup",function(evt) {
		if (nextKeys.indexOf(evt.keyCode) > -1) next();
		if (prevKeys.indexOf(evt.keyCode) > -1) previous();
	},!1);
	
	window[on]("load",function() {
		slide(+location.hash.substr(1)|0 || 0);
	},!1);
	
	// Fullscreen body on demand
	html[on]("click",(html.webkitRequestFullScreen||html.mozRequestFullScreen),!1);
}());