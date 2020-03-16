let ber = document.querySelector('#randomNumber');
let clicks = document.querySelector('#click');
//После того как присвоил переменным значения. Создаю переменную которая генерирует случайное число
let r = Math.round(Math.random() * 10);
	console.log(r);
// После созданной функции создаем кнопку, которой будем проверять результат функции
clicks.onclick = root;
//Проверка результата
function root(){
	let n = ber.value;//так определяется, что ввели в инпут
	n = parseInt(n);//функция для конвертации чисел что бы выводились числа без букв и символов
	if(isNaN(n)){
		alert('Введите корректное число');
	}else if(n == r){
		alert('Вы угадали! =)');
		location.reload();
	}else if(n != r){
		alert('Рискнем еще раз!');
	}
}

