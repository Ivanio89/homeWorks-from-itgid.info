let typing = document.querySelector('#stylesOne');
let main = document.querySelector('#stylesTwo');
let textsadd = document.querySelector('#add');
//Переменным присвоил кнопки и текст
//функция которая переподключает стили для печати и кнопка запускает ее
function typings(){
	document.querySelector('link').href = 'style2.css';
}

typing.onclick = typings;
//функция которая переподключает стили на главную и кнопка запускает ее
function backwards(){
	document.querySelector('link').href = 'style1.css';
}

main.onclick = backwards;
//переменным присвоил кнопки 
let after = document.querySelector('#beforadd');
let befor =	document.querySelector('#afteradd');
let aftertext = document.querySelector('#endadd');
let befortext = document.querySelector('#addend');

//добовляем work
function textes(){
	let addstext = document.querySelector('#addtexts');
	addstext.innerHTML += ' work';
}

textsadd.onclick = textes;
//добовляем слово перд тегом
function textBefor(){
	let text = document.querySelector('#befortext');
	text.insertAdjacentHTML('beforebegin', ' any text');
}

after.onclick = textBefor;
//добовляем слово перед словом в теге
function textAfter(){
	let text = document.querySelector('#aftertext');
	text.insertAdjacentHTML('afterbegin', ' any text ');
}

befor.onclick = textAfter;
//добовляем слово после слова в теге
function textBeforNext(){
	let text = document.querySelector('#endtext');
	text.insertAdjacentHTML('beforeend', ' any text');
}

aftertext.onclick = textBeforNext;
//добовляем слово после тега
function textAfterNext(){
	let text = document.querySelector('#textend');
	text.insertAdjacentHTML('afterend', ' any text');
}

befortext.onclick = textAfterNext;

//------------------innerHTML-------------------------------------//

let textinner = document.querySelector('#texts');
let textouter = document.querySelector('#text-s');
let inneRtext = document.querySelector('#stext');
let outeRtExt = document.querySelector('#s-text');

function textS(){
	let text = document.querySelector('#textinner');
	text.innerHTML = "<b>Hi</b>";
};

function Stext(){
	let text = document.querySelector('#textinner');
	text.innerText = "<b>Hi</b>";
};

textinner.onclick = textS;
textouter.onclick = Stext;


function textZ(){
	let text = document.querySelector('#textouter');
	text.outerHTML = "<b>Hi</b>";
};

function Ztext(){
	let text = document.querySelector('#textouter');
	text.outerText = "<b>Hi</b>";
};

inneRtext.onclick = textZ;
outeRtExt.onclick = Ztext;


