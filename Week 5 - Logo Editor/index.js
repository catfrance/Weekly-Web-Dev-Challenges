/*
DESCRIPTION:
In this challenge you are asked to change how the logo looks when you click 
the three buttons. This is an excellent challenge for styling elements in 
JavaScript, not CSS.

If the user clicks the first button, I want the text on the 
logo to become black. If the user clicks the second button, 
I want the logo background to become red. If the user clicks the third button,
I would like you to add a shadow to the logo.

event listeners, getElementById, operators

*/

// Write your code here 👇

let button1 = document.getElementById("button-one");
let button2 = document.getElementById("button-two");
let button3 = document.getElementById("button-three");

let text = document.getElementById("text");
let logo = document.getElementsByClassName("logo")[0];

let shadowOptions = document.getElementById("shadow-options");
let slider = document.getElementById("slider");

button1.addEventListener("click", () => ToggleTextBlack());
button2.addEventListener("click", () => ToggleLogoRed());
button3.addEventListener("click", () => ToggleLogoShadow());

slider.addEventListener("input", function () {
	SetShadow(this.value);
});

function ToggleTextBlack() {
	if (text.style.color == "") {
		text.style.color = "rgb(0, 0, 0)";
	}
	else {
		text.style.color = "";
	}	
}

function ToggleLogoRed() {
	if (logo.style.backgroundColor == "") {
		logo.style.backgroundColor = "red";
	}
	else {
		logo.style.backgroundColor = "";
	}
}

function ToggleLogoShadow() {
	if (logo.style.boxShadow == "") {
		SetShadow(10);
		ShowSlider(true);
	}
	else {
		logo.style.boxShadow = "";
		ShowSlider(false);
	}
}

function ShowSlider(visible) {
	if (visible) {
		shadowOptions.style.visibility = "visible";
	}
	else {
		shadowOptions.style.visibility = "";
	}
}

function SetShadow(value) {
	logo.style.boxShadow = value + "px " + value + "px 0px 0px gray";
}

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. use eventlisteners on the buttons to envoke functions
3. change the properties of the logo using JavaScript

STRETCH GOALS:
- If any of the buttons are clicked a second time, I want the change they 
  are responsible for to be reversed.
- Can you improve the overall design?

*/
