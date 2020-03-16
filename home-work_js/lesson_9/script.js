//-----------------------Task 1.-------------------------------
// Задача 1. Создайте input в который пользователь может вводить текст на латинице. Используя события клавиатуры перехватывайте введенный символ - если пользователь ввел маленькую (строчную) букву, выводите ее. Если большую (пропись) - удаляйте. Ограничте возможность введения только буквами.

document.querySelector(".text-content").onkeypress = function(e) {
  if (e.keyCode > 122 || e.keyCode < 97) {
    return false;
  } else {
    return true;
  }
};

//-----------------------Task 2.-------------------------------
// Задача 2. Создайте один блок внутри другого. На внутренний блок добавьте возможность сдвига блока вправо, влево, вверх, вниз с помощью клавиш стрелок. Бонус - добавьте на пробел возможность поворота фигуры вокруг оси на 45 градусов.

let step = 0;
let steplp = 0;
let deg = 0;

//   // console.log(e.keyCode);

// document.querySelector(".block-front").onkeydown = function() {
document.onkeydown = function(e) {
  let block = document.querySelector(".block");
  if (e.keyCode == 38) {
    // console.log("up");
    step = step - 15;
    block.style.marginTop = step + "px";
  }
  if (e.keyCode == 40) {
    // console.log("down");
    step = step + 15;
    block.style.marginTop = step + "px";
  }
  if (e.keyCode == 37) {
    // console.log("left");
    steplp = steplp - 15;
    block.style.marginLeft = steplp + "px";
  }
  if (e.keyCode == 39) {
    // console.log("right");
    steplp = steplp + 15;
    block.style.marginLeft = steplp + "px";
  }
  if (e.keyCode == 32) {
    // console.log("deg");
    deg = deg + 45;
    block.style.transform = `rotate(${deg}deg)`;
  }
};
// };
//-----------------------Task 3.-------------------------------
// Задача 3. Напишите программу которая при нажатии кнопки клавиатуры меняет символ на произвольный.

document.onkeyup = function(e) {
  let arrSimbol = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m"
  ];
  if (e) {
    index = Math.floor(Math.random() * arrSimbol.length);
    let buk = document.querySelector(".text-answer");
    buk.style.fontSize = "30px";
    buk.textContent = arrSimbol[index];
  }
};

//-----------------------Task 4.-------------------------------
// Задача 4. Напишите программу шутку которая меняет введенный символ q на w, w на e и т.д. Т.е. выполняет сдвиг на одну клавишу влево на клавиатуре. Последние символы строк меняет так: ] на q, \ на a, / на z. Возможно для решения потребуется массив.

document.onkeypress = function randomSimbol(e) {
  let arrSimbolrandom = {
    q: "w",
    w: "e",
    e: "r",
    r: "t",
    t: "y",
    y: "u",
    u: "i",
    i: "o",
    o: "p",
    "]": "q",
    a: "s",
    s: "d",
    d: "f",
    f: "g",
    g: "h",
    h: "j",
    j: "k",
    k: "l",
    l: ";",
    "|": "a",
    z: "x",
    x: "c",
    c: "v",
    v: "b",
    b: "n",
    n: "m",
    m: ",",
    "/": "z"
  };
  let buk = document.querySelector(".text-random_answer");
  buk.style.fontSize = "30px";
  buk.textContent = arrSimbolrandom[event.key];
};
