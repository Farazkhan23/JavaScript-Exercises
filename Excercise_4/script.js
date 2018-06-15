let numberGenerated = document.querySelector("#NumberGenerated");
let guess = document.querySelector("#YourGuess");
let result = document.querySelector("#result");
let button0 = document.querySelector("#btn0");
let button1 = document.querySelector("#btn1");
let button2 = document.querySelector("#btn2");
let button3 = document.querySelector("#btn3");
let button4 = document.querySelector("#btn4");
let button5 = document.querySelector("#btn5");
let button6 = document.querySelector("#btn6");
let button7 = document.querySelector("#btn7");
let button8 = document.querySelector("#btn8");
let button9 = document.querySelector("#btn9");
var myGuess = '';

let a = (num) =>{

	let randomNumber = Math.floor(Math.random()* 10);
	if(randomNumber==num){
		numberGenerated.textContent = `Number is ${randomNumber}`;
		guess.textContent = `Your Guess : ${num}`;
		result.textContent = "YEEPIEEE  YOU WON";
		result.style.color = "green";
	}else{
		numberGenerated.textContent = `Number is ${randomNumber}`;
		guess.textContent = `Your Guess : ${num}`;
		result.textContent = "Opps close enough";
		result.style.color = "red";
	}
}

button0.addEventListener("click", function (){

	myGuess = 0;
	a(myGuess);
} );


button1.addEventListener("click", function (){

	myGuess = 1;
	a(myGuess);
} );

button2.addEventListener("click", function (){

	myGuess = 2;
	a(myGuess);
} );

button3.addEventListener("click", function (){

	myGuess = 3;
	a(myGuess);
} );

button4.addEventListener("click", function (){

	myGuess = 4;
	a(myGuess);
} );

button5.addEventListener("click", function (){

	myGuess = 5;
	a(myGuess);
} );

button6.addEventListener("click", function (){

	myGuess = 6;
	a(myGuess);
} );


button7.addEventListener("click", function (){

	myGuess = 7;
	a(myGuess);
} );

button8.addEventListener("click", function (){

	myGuess = 8;
	a(myGuess);
} );

button9.addEventListener("click", function (){

	myGuess = 9;
	a(myGuess);
} );
