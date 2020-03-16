let add = document.querySelector('#add');
let del = document.querySelector('#del');
let mach = document.querySelector('#mach');
let hi = document.querySelector('#hi');
let twoFunctions = document.querySelector('#twoFunctions');
let hide = document.querySelector('#hider');
let press = document.querySelector('#press');
//кнопки
let modal = document.querySelector('#modal');
let preses = document.querySelector('.preses');
//После того как создал переменные и присвоил им id тегов, пишу функции:
function adds(){
	modal.style.display = 'block';
	modal.style.fontSize = '50px';
	modal.innerHTML = 'blok modal';
}

function dels(){
	modal.style.display = 'none';
}

function machs(){
	a = 2;
	b = 3;
	c = a + b;
	modal.style.display = 'block';
	modal.style.fontSize = '50px';
	modal.innerHTML = a + ' ' + '+' + ' ' + b + ' ' + '=' + ' ' + c;
}

function his(){
	alert('Hello! My teacher!');
}

function twoFunctionss(){
	machs();
	his();
}

function hides(){
	hide.style.display = 'none';
}

function presss(){
	preses.innerHTML = 'do not press';
}
//После написания функций и получения результат присваиваю кнопкам onclick, что бы запускать функции:
add.onclick = adds;
del.onclick = dels;
mach.onclick = machs;
hi.onclick = his;
twoFunctions.onclick = twoFunctionss;
hide.onclick = hides;
press.onclick = presss;




