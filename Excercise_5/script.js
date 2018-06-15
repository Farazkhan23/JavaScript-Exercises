let pyInput = document.querySelector("#pyinput");
let pyButton = document.querySelector("#pyBtn");
let pyResult = document.querySelector("#resultPy");
let a =() =>{
	if(pyInput!=null ){
		let currentText = pyInput.value;
		if(currentText.substr(0,2) ==  "py" || currentText.substr(0,2) ==  "PY" || currentText.substr(0,2) ==  "Py" || currentText.substr(0,2) ==  "pY"){
			arr = currentText.split("py");
			pyResult.textContent = `Hey Your String already contain PY in Front.`;	
		}else{
			pyString = "Py";
			newString = pyString.concat("",currentText);
			pyResult.textContent = `Here is you're new String with PY  : ${ newString} `;
		}
	}
}

pyButton.addEventListener("click",a);


// URL Code

let urlResult = document.querySelector("#urlResult");
let urlButton = document.querySelector("#urlBtn");

let getUrl = () => {

	urlResult.textContent ="Url : " + document.URL	;
}

urlButton.addEventListener("click",getUrl);