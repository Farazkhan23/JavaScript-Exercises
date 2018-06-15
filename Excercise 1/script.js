const dateField = document.querySelector("#date");
const timeField = document.querySelector("#time");
const yearField = document.querySelector("#year");

let date = new Date();
const daysArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const monthArray = ['January','Febraury','March','April','June','July','August','September','October','November','December'];
let year = date.getFullYear();
let month = monthArray[date.getMonth()];
let today = daysArray[date.getDay()];
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

hours = hours >=12 ? hours -12 : hours ;

yearField.textContent= `Year : ${year}  Month : ${month}`;
dateField.textContent  = ` Today is ${ today } `;
timeField.textContent = `Time : ${hours} : ${minutes} : ${seconds}`;
