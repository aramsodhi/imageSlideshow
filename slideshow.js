"use strict";

const slideshow = document.getElementById("slideshow");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

const images = ["images/Cliff.jpg", "images/Fall.jpg", "images/Forest.png", "images/Lake.jpeg", "images/Mountains.jpg", "images/NorthernLights.jpg"];
let index = 0;

slideshow.style = `background-image: url(${images[index]})`;

next.addEventListener("click", () => {
	updateIndex("next");
	
	slideshow.style = `background-image: url(${images[index]})`;

});

previous.addEventListener("click", () => {
	updateIndex("prev");
	slideshow.style = `background-image: url(${images[index]})`;

});

function updateIndex(type) {
	if (type === "next") {
		if ((index + 1) > (images.length - 1)) index = 0;
		else index++;
	} else if (type === "prev") {
		if ((index - 1) < 0) index = images.length - 1;
		else index--;
	}
}