var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var hardButton = document.getElementById("hard");
var easyButton = document.getElementById("easy")


easyButton.addEventListener("click", function() {
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = "none";
		}
	}
})

hardButton.addEventListener("click", function() {
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
})







resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	messageDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		h1.style.backgroundColor = "steelblue"
		resetButton.textContent = "New Colors";
	}
});
colorDisplay.textContent = pickedColor;


for(var i=0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if ( clickedColor === pickedColor ){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again :("
		}
	})
}

function changeColors (color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	//change each color to match given color
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}


function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return array
	return arr ;
}
function randomColor() {
	//pick a red from 0 -255
	var r = Math.floor(Math.random() * 255);
	//pick a grean from 0 -255
	var g = Math.floor(Math.random() * 255);
	//pick a blue from 0 -255
	var b = Math.floor(Math.random() * 255);
	//"rgb(r,g,b)"
	return "rgb(" + r + ", " + g + ", " + b + ")"
}











// Math.random() * 6 + 1;
// Math.floor(Math.random() * 6 + 1;)
