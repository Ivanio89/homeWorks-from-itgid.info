
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

document.querySelector(".i-1").onkeypress = t1;

function t1(e) {
    document.querySelector(".out-1").textContent += e.key;
}

// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

document.querySelector(".i-2").onkeypress = t2;

function t2(e) {
    return document.querySelector(".out-2").textContent += e.keyCode;
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

document.querySelector(".i-3").onkeypress = t3;
let w3 = 75;
let arrkey = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 97, 115, 100, 102, 103, 104, 106, 107, 108, 122, 120, 99, 118, 98, 110, 109, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77];

let arrNumb = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48];

function t3(e) {
    for (i = 0; i < arrkey.length; i++) {
        if (arrkey[i] == e.keyCode) {
            document.querySelector(".out-3").textContent = true;
        }
    }
    for (t = 0; t < arrNumb.length; t++) {
        if (arrNumb[t] == e.keyCode) {
            document.querySelector(".out-3").textContent = false;
        }
    }
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

document.querySelector(".i-4").onkeypress = t4;


function t4(e) {
    for (i = 0; i < arrkey.length; i++) {
        if (e.keyCode == arrkey[i]) {
            return document.querySelector(".out-4").textContent += e.key.toLowerCase();
        }
    }
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

document.querySelector(".i-5").onkeypress = t5;

function t5(e) {

    for (i = 0; i < arrkey.length; i++) {
        if (arrkey[i] == e.keyCode) {
            return document.querySelector(".out-5").textContent += e.key.toUpperCase();
        }
    }
}
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

document.querySelector(".i-6").onkeypress = t6;

function t6(e) {
    document.querySelector(".out-6").textContent += e.key.toLowerCase();
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

document.querySelector(".i-7").onkeypress = t7;

function t7(e) {
    const a7 = ["!", "(", "@", "#", "]", "$", "~", "&", "<", "|", "^", "%", "*"];
    let word = a7[Math.floor(Math.random() * a7.length)];
    document.querySelector(".out-7").textContent += word;
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

document.querySelector(".i-8").onkeypress = t8;

function t8(e) {
    let word = e.key;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == 1) {
            return document.querySelector(".out-8").textContent += "i";
        }
        else if (word[i] == 7) {
            return document.querySelector(".out-8").textContent += "l";
        }
        else if (word[i] == 0) {
            return document.querySelector(".out-8").textContent += "o";
        }
    }
    document.querySelector(".out-8").textContent += word;
    // console.log(e);
}

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let countStep = 0;
document.querySelector(".i-9").onkeydown = t9;

function t9(e) {
    if (e.keyCode == 40) {
        countStep++
    }
    document.querySelector(".out-9").textContent = countStep;
}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

document.querySelector(".i-10").onkeydown = t10;
let countImg = 75;

function t10(e) {
    console.log(e);
    if (e.keyCode == 40) {
        document.querySelector("img").style.height = countImg + "px";
        // console.log(document.querySelector("img").hasAttribute("src"));
        countImg++;
    }
    if (e.keyCode == 38) {
        document.querySelector("img").style.height = countImg + "px";
        // console.log(document.querySelector("img").hasAttribute("src"));
        countImg++;
    }
    if (e.keyCode == 37) {
        document.querySelector("img").style.width = countImg + "px";
        // console.log(document.querySelector("img").hasAttribute("src"));
        countImg++;
    }
    if (e.keyCode == 39) {
        document.querySelector("img").style.width = countImg + "px";
        // console.log(document.querySelector("img").hasAttribute("src"));
        countImg++;
    }
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

let buttonSymbol = document.querySelectorAll(".btn-symbol");
let arrSym = [];
let symbol = ""

function t11() {
    for (t = 0; t < buttonSymbol.length; t++) {
        buttonSymbol[t].onmousedown = function () {
            symbol = this.getAttribute("data");
            this.classList.add("key-active");
            arrSym.push(symbol);
            if (symbol == "space") {
                arrSym.pop(symbol);
                document.querySelector(".i-11").value = arrSym.pop(symbol);
            }
            if (symbol == "enter") {
                arrSym.pop(symbol);
                document.querySelector(".i-11").value = "<br>";
            }
            if (symbol == "alt" || symbol == "ctrl" || symbol == "shift") {
                arrSym.pop(symbol);
            }

            document.querySelector(".i-11").value = arrSym.join("");
        }
    }

    document.querySelector(".touch").onmousedown = function () {
        this.classList.toggle("key-active");
    }

    for (t = 0; t < buttonSymbol.length; t++) {
        buttonSymbol[t].onmouseup = function () {
            this.classList.remove("key-active");
        }
    }
}
t11();
