/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
	//write your code here
  	console.log("Hello Rigo from the console!");
  	const min = 0;
	let who = ['The dog','My grandma','His turtle','My bird'];
	let action = ['ate','peed','crushed','broke'];
	let what = ['my homework', 'the keys', 'the car'];
	let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

	function getRandomText(arr) {
	  var max = arr.length;
	  var index = Math.floor(Math.random() * (max - min)) + min;
	  return arr[index];
	}

	var excuse = getRandomText(who) + " " +getRandomText(action) +" "+ getRandomText(what) + " "+getRandomText(when);
	//alert(excuse);
	//$('#excuses').text(excuse);
	document.getElementById("excuses").innerHTML = excuse;
};
