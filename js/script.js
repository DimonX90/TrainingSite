"use strict"

//slider 1

var slideIndex = 1;
showSlider(slideIndex);

window.addEventListener('resize', function (event) {
	var width = window.innerWidth;
	if (width > 756) {
		hideSlider();
	}
	else {
		oneSlide();
	}
})

function plusDivs(n) {
	showSlider(slideIndex += n);
}

function oneSlide() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 1; i < x.length; i++) {
		x[i].style.display = "none";
	}
}

function showSlider(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = x.length };
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex - 1].style.display = "block";
}

function hideSlider() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "block";
	}
}


//slider 2
var slideIndexT = 1;
showSliderT(slideIndexT);

window.addEventListener('resize', function (event) {
	var width = window.innerWidth;
	if (width > 1100) {
		hideSliderT();
	}
	else {
		oneSlideT();
	}
})

function plusDivsT(n) {
	showSliderT(slideIndexT += n);
}

function oneSlideT() {
	var i;
	var x = document.getElementsByClassName("card");
	for (i = 1; i < x.length; i++) {
		x[i].style.display = "none";
	}
}

function showSliderT(n) {
	var i;
	var x = document.getElementsByClassName("card");
	if (n > x.length) { slideIndexT = 1 }
	if (n < 1) { slideIndexT = x.length };
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndexT - 1].style.display = "block";
}

function hideSliderT() {
	var i;
	var x = document.getElementsByClassName("card");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "block";
	}
}

//scroll


const button = document.querySelector(".footer__image");


if (button)
	button.addEventListener('click', function (e) {
		const bike = document.querySelector(".bike");
		bike.scrollIntoView(top);
	})