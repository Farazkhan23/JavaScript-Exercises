const string = document.querySelector("#text");
let button = document.querySelector("#btn");

let node = string.childNodes[0];
let text = node.data;
let animate  = () => {

	node.data = "";
	setInterval( function(){
		text = text[text.length - 1] + text.substring(0, text.length - 1);
		node.data = text;
		}
		, 500);
	 		
	 } 

button.addEventListener("click", animate);