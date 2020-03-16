// document.querySelector('.push').onclick = function(){
	// console.log(document.querySelector('.text-input').value);

// 	console.log(document.querySelector('.password-input').value);

	// console.log(document.querySelector('.range-input').value);

// 	console.log(document.querySelector('.calendar-input').value);
// 	 	
// console.log(document.querySelector('.color-input').value);

// 	console.log(document.querySelector('#checkbox-input').checked);
// 	if(document.querySelector('#checkbox-input').checked){
// 		console.log('Даааа!');
// 	}
// 	else {
// 		console.log('Нет!');
// 	}
// }

//----------------------background----------------------

let subColor = document.querySelector('#color-bg');
let colorBg = document.querySelector('#color-choose');

function BgColor(){
	document.body.style.backgroundColor = colorBg.value;
	// console.log(colorBg.value);
 }

subColor.onclick = BgColor;

//------------------background and text----------------------


let bgColor = document.querySelector('#bgChange');
let textColor = document.querySelector('#colorChange');
let newText = document.querySelector('#newText');
let resetColorAll = document.querySelector('#reset');
// console.log(newss);

let subBg = document.querySelector('#changeBg');
let subText = document.querySelector('#changeColor');

function bgAndColor(){
	document.body.style.backgroundColor = bgColor.value;
}

function colorAndText(){
	newText.style.color = textColor.value;
}

subBg.onclick = bgAndColor;
subText.onclick = colorAndText;

function reset(){
	location.reload();
}

resetColorAll.onclick = reset;

//-------------------range---------------

let size = document.querySelector('#fsize');

function sizez() {
	let text = document.querySelector('#text-size');
	let pixsels = document.querySelector('#pixsels-size');
	text.style.fontSize = size.value + 'px';
	pixsels.innerHTML = size.value + 'px';
}

size.oninput = sizez;

// console.log(sizez());

// if(sizez.value == "undefined")
//   alert("Undefined");
// else
//   alert("Not undefined");

//----------------------------color input----------------

let subR = document.querySelector('#range-r');
let subG = document.querySelector('#range-g');
let subB = document.querySelector('#range-b');
let r = document.querySelector('#r');
let g = document.querySelector('#g');
let b = document.querySelector('#b');
let hex_out = document.querySelector('#hex');

function colorRGB(){
	let	hexR = parseInt(subR.value, 10).toString(16),
			hexG = parseInt(subG.value, 10).toString(16),
			hexB = parseInt(subB.value, 10).toString(16),
			hex = "#" + pad(hexR) + pad(hexG) + pad(hexB);
			document.body.style.backgroundColor = hex;
			hex_out.value = hex;
};

function pad(n){
	return (n.length < 2) ? "0" + n : n;
};

subR.addEventListener('input',function(){
	colorRGB();
	// r.value = subR.value;
},false);

subG.addEventListener('input',function(){
	colorRGB();
},false);

subB.addEventListener('input',function(){
	colorRGB();
},false);

//Делала по подобному из интеренета https://codepen.io/anon/pen/NVYYar
