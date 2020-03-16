//-----------------------------task 1.-----------------------------
// Выведите на экран числа от 0 до 100.

document.querySelector(".one-click").onclick = function() {
  for (i = 0; i <= 100; i++) {
    document.querySelector(".content-answer_one").textContent += `${i} `;
  }
};

//-----------------------------task 2.-----------------------------
// Вывести четные числа от 0 до 101.

document.querySelector(".two-click").onclick = () => {
  for (i = 0; i <= 101; i++) {
    if (i % 2 == 0) {
      document.querySelector(".content-answer_two").textContent += `${i} `;
    }
  }
};
//-----------------------------task 3.-----------------------------
// Вывести числа в следущей последовательности: 200 199 198 ... 0.

document.querySelector(".three-click").onclick = function() {
  for (i = 200; i > 0; i--) {
    document.querySelector(".content-answer_three").textContent += `${i} `;
  }
};
//-----------------------------task 4.-----------------------------
// Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).

document.querySelector(".four-click").onclick = function() {
  let numOne = 0;
  for (i = 0; i <= 100; i++) {
    numOne = numOne + i;
    document.querySelector(".content-answer_four").textContent = `${numOne}`;
  }
};
//-----------------------------task 5.-----------------------------
// Задайте два input. В первый вводится число, во второе его степень. С помощью цикла возведите число в степень. Напечатайте результат.

document.querySelector(".five-click").onclick = () => {
  let a = document.querySelector(".one-num").value;
  let b = document.querySelector(".two-num").value;
  document.querySelector(".content-answer_five").textContent = `answer: ${a *
    b}`;
};

//-----------------------------task 6.-----------------------------
// С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.

document.querySelector(".six-click").onclick = () => {
  for (i = 1; i < 10; i++) {
    document.querySelector(".content-answer_six").innerHTML += `${i}*7=${i *
      7}<br>`;
  }
};
//-----------------------------task 7.-----------------------------
// С помощью цикла вывести произведение чисел от 1 до 50.

document.querySelector(".seven-click").onclick = () => {
  let mult = 1;
  for (i = 1; i <= 50; i++) {
    document.querySelector(
      ".content-answer_seven"
    ).textContent = `answer: ${(mult = mult * i)}`;
  }
};

//-----------------------------task 8.-----------------------------
// Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что спецсимвол получается комбинацией &#число; Например &#1222;

document.querySelector(".eight-click").onclick = () => {
  for (i = 1000; i < 2000; i++) {
    document.querySelector(".content-answer_eight").innerHTML += `&#${i}<br>`;
  }
};

//-----------------------------task 9.-----------------------------
// Получите все параграфы внутри div.main страницы. Используя цикл пронумеруйте все параграфы. Номер добавьте внутри тега параграфа перед текстом.

document.querySelector(".nine-click").onclick = () => {
  let a = document.querySelectorAll(".main p");
  for (i = 0; i < a.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = i + 1;
    a[i].prepend(span);
  }
};

//-----------------------------task 10.-----------------------------
// Создайте два поля. В одно пользователь вводит день рождения, во второй - месяц (в виде числа). Выведите знак зодиака под каким родился пользователь. Данные о знаке зодиака храните в массиве.

const deyMonth = [
  [1, 1, 20, "Козерок"],
  [1, 21, 31, "Водолей"],

  [2, 1, 19, "Водолей"],
  [2, 20, 28, "Рыбы"],

  [3, 1, 20, "Рыбы"],
  [3, 21, 31, "Овен"],

  [4, 1, 20, "Овен"],
  [4, 21, 30, "Телец"],

  [5, 1, 21, "Телец"],
  [5, 22, 31, "Близнецы"],

  [6, 1, 21, "Близнецы"],
  [6, 22, 30, "Рак"],

  [7, 1, 22, "Рак"],
  [7, 23, 31, "Лев"],

  [8, 1, 21, "Лев"],
  [8, 22, 31, "Дева"],

  [9, 1, 23, "Дева"],
  [9, 24, 30, "Весы"],

  [10, 1, 23, "Весы"],
  [10, 24, 31, "Скорпион"],

  [11, 1, 22, "Скорпион"],
  [11, 23, 30, "Стрелец"],

  [12, 1, 22, "Стрелец"],
  [12, 23, 31, "Козерок"]
];

document.querySelector(".ten-click").onclick = function() {
  let deySing = document.querySelector(".num-dey").value;
  let monthSing = document.querySelector(".num-month").value;

  for (let i = 0; i < deyMonth.length; i++) {
    if (
      deyMonth[i][0] == deySing &&
      deyMonth[i][1] >= monthSing &&
      deyMonth <= deySing
    ) {
      console.log(deyMonth[i][3]);
    }
  }
};

//-----------------------------task 11.-----------------------------
// С помощью JS найдите все span на странице и сделайте им цвет фона - желтый.

document.querySelector(".eleven-click").onclick = function() {
  let span = document.querySelectorAll("span");
  for (let i = 0; i < span.length; i++) {
    span[i].style.backgroundColor = "yellow";
  }
};
//-----------------------------task 12.-----------------------------
// Выведите внизу страницы информацию о количестве параграфов.

document.querySelector(".twelve-click").onclick = function() {
  let paragraph = document.querySelectorAll("p");
  for (let i = 0; i < paragraph.length; i++) {
    document.querySelector(
      ".content-answer_twelve"
    ).textContent = `answer: ${i}`;
  }
};
//-----------------------------task 13.-----------------------------
// Создайте массив состояний из единицы и 5 нулей. Т.е. [1, 0,0,0,0,0]. Выведите массив на страницу. Добавьте кнопку. При каждом нажатии кнопки смещайте единицу вправо на одну позицию и заново выводите массив в тот же блок что и раньше. Если единица достигла конца массива - не делайте ничего.

let gameNum = [1, 0, 0, 0, 0, 0];
let step = 0;

document.querySelector(".content-answer_thirteen").textContent = gameNum;
document.querySelector(".thirteen-click").onclick = function() {
  if (gameNum[step + 1] < 5) {
    gameNum[step] = 0;
    gameNum[step + 1] = 1;
    step++;
    document.querySelector(".content-answer_thirteen").textContent = gameNum;
  }
};

//-----------------------------task 14.-----------------------------
// Создайте массив с произвольными числами. Выведите количество элементов массива меньше нуля.

let arrOne = [1, -3, 5, 0, 4, -6, 8];

document.querySelector(".content-answer_fourteen").textContent = arrOne;
document.querySelector(".fourteen-click").onclick = function() {
  let col = [];
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] < 0) {
      col.push(arrOne[i]);
    }
  }
  document.querySelector(
    ".content-answer_fourteen"
  ).innerHTML = ` answer: ${col.length},`;
};

//-----------------------------task 15.-----------------------------
// Cоздайте массив с произвольными числами. Выведите элементы массива меньше нуля.

document.querySelector(".content-answer_fiveteen").textContent = arrOne;
document.querySelector(".fiveteen-click").onclick = function() {
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] < 0) {
      document.querySelector(
        ".content-answer_fiveteen"
      ).innerHTML += `<br>${arrOne[i]}`;
    }
  }
};

//-----------------------------task 16.-----------------------------
// Создайте input куда пользователь может ввести количество элементов массива. После нажатия кнопки создается массив заданной длинны заполненный единицами.
let elem = [];
document.querySelector(".sixteen-click").onclick = function() {
  let a = document.querySelector(".num-elem").value;
  for (let i = 0; i < a.length; i++) {
    elem.push(1);
  }
  document.querySelector(".content-answer_sixteen").textContent = elem;
};

//-----------------------------task 17.-----------------------------
// Создайте input куда пользователь может ввести количество элементов массива. После нажатия кнопки создается массив заданной длинны заполненный случайными числами от 0 до 100.

document.querySelector(".seventeen-click").onclick = function() {
  let randomNum = [];
  let a = document.querySelector(".num-random").value;
  for (let i = 0; i < a.length; i++) {
    randomNum.push(Math.floor(Math.random() * 100));
    document.querySelector(
      ".content-answer_seventeen"
    ).textContent += `${randomNum}, `;
  }
};
//-----------------------------task 18.-----------------------------
// Создайте массив заполненный числами и строками. Используя цикл создайте другой массив куда поместите только числа из первого массива.

let arrAll = [3, "strings", 5, "sem", 2];
document.querySelector(".content-answer_eighteen").textContent = arrAll;

document.querySelector(".eighteen-click").onclick = () => {
  let arrNum = [];
  for (let i = 0; i < arrAll.length; i++) {
    if (Number(arrAll[i])) {
      arrNum.push(arrAll[i]);
      document.querySelector(".content-answer_eighteen").textContent = arrNum;
    }
  }
};

//-----------------------------task 19.-----------------------------
// Создайте массив. Выведите максимальное значение из этого массива.

let arrMax = [1, 4, 6, 1, 4, 5, 7, 8, 9];

document.querySelector(".content-answer_ninteen").textContent = arrMax;
document.querySelector(".ninteen-click").onclick = () => {
  let arrMaxCopy = [];
  for (let i = 0; i < arrMax.length; i++) {
    if (arrMax[i] > arrMaxCopy) {
      arrMaxCopy = arrMax[i];
      document.querySelector(
        ".content-answer_ninteen"
      ).textContent = arrMaxCopy;
    }
  }
};

//-----------------------------task 20.-----------------------------
// Сложное! Создайте массив и заполните его значениеми. Выведите статистику - сколько раз в массиве повторяется то или инное значение.

document.querySelector(".twenty-click").onclick = () => {
  let arrNew = {};
  for (let i = 0; i < arrMax.length; i++) {
    if (arrNew[arrMax[i]]) {
      arrNew[arrMax[i]]++;
    } else {
      arrNew[arrMax[i]] = 1;
    }
  }
  for (let key in arrNew) {
    document.querySelector(
      ".content-answer_twenty"
    ).innerHTML += `Элемент массива : ${key} количество повторений = ${arrNew[key]}<br>`;
  }
};
