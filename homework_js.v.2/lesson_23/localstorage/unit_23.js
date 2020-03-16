
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

// var iframe = document.createElement("iframe");
// iframe.style.display = "none";
// document.documentElement.appendChild(iframe);
// var localStorage = iframe.contentWindow.localStorage;

document.querySelector(".b-1").onclick = t1;

function t1() {
    localStorage.setItem('5', 11);
}

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

document.querySelector(".b-2").onclick = t2;

function t2() {
    let a2 = [7, 6, 5];
    localStorage.setItem("a2", JSON.stringify(a2));
}



// ваше событие здесь!!!


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

document.querySelector(".b-3").onclick = t3;

function t3() {
    let one = localStorage.getItem("a2");
    document.querySelector(".out-3").innerHTML = `a2 ${one[1]} <br> a2 ${one[3]} <br> a2 ${one[5]}`;
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

document.querySelector(".b-4").onclick = t4;

function t4() {
    a4 = {
        hello: "world",
        hi: "mahei",
    }
    localStorage.setItem("a4", JSON.stringify(a4));
}

// ваше событие здесь!!!

// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a4. Выведите в out-4 в формате ключ пробел значение перенос строки. */

document.querySelector(".b-5").onclick = t5;

function t5() {
    let one = localStorage.getItem("a4");
    one = JSON.parse(one);
    let two = "";
    for (let key in one) {
        two += `a4 ${key} ${one[key]} <br>`;
    }
    document.querySelector(".out-5").innerHTML = two;
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

document.querySelector(".b-6").onclick = t6;

function t6() {
    localStorage.clear();
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/
let inputAnswer = document.querySelector(".i-7");
document.querySelector(".b-7").onclick = t7;
let a7 = [];

function t7() {
    let a = inputAnswer.value;
    a7.push(a);
    localStorage.setItem("a7", JSON.stringify(a7));
}

// ваше событие здесь!!!

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

document.querySelector(".b-8").onclick = t8;

function t8() {
    a7.pop();
    localStorage.setItem("a7", JSON.stringify(a7));
}

// ваше событие здесь!!!


// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */
let allradio = document.querySelectorAll("input[type='radio']")
for (i = 0; i < allradio.length; i++) {
    allradio[i].addEventListener("change", t9);
}

function t9() {
    let a = this.getAttribute("value");
    localStorage.setItem("bg", a);
    let b = localStorage.getItem("bg");
    document.body.style.backgroundColor = b;
}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

const buttonCardSet = document.querySelector(".b-10").onclick = t10;

const card = {
    'apple': 3,
    'grape': 2
}

function t10() {
    localStorage.setItem("card", JSON.stringify(card));
}

// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */

const buttonCardGet = document.querySelector(".b-11").onclick = t11;
let tableCard = document.querySelector(".out-10");

function t11() {
    let countNum = "";
    let product = "";
    let resul = localStorage.getItem("card");
    resul = JSON.parse(resul);
    for (let key in resul) {
        countNum = resul[key];
        product += `<tr><td class="text">fruits</td><td class="text">${key}</td><td class="text"><span class="text open">${countNum}<span><td><span class="">${plus} ${minus}</span></td></td></tr>`;
    }

    tableCard.innerHTML += `<table border='1'><tr><th class="text">формат</th><th class="text">название товара</th><th colspan="2" class="text">количество</th></tr>${product}</table>`;
}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

let plus = `<button class="plus" onclick=getPlus()>+</button>`;
let minus = `<button class="minus" onclick=getMinus()>-</button>`;
let countPlus = "";
let count = 0;

function getPlus() {
    let t = "";
    let open = document.querySelector(".open");
    let one = localStorage.getItem("card");
    one = JSON.parse(one);
    for (let key in one) {
        countNum = one[key] += 1;
    }
    localStorage.setItem("card", JSON.stringify(one));
    let p = localStorage.getItem("card");
    p = JSON.parse(p);
    for (let k in p) {
        t = p[k];
    }
    open.innerHTML = t;
    console.log(one);
}

function getMinus() {
    let t = "";
    let open = document.querySelector(".open");
    let one = localStorage.getItem("card");
    one = JSON.parse(one);
    for (let key in one) {
        countNum = one[key] -= 1;
    }
    localStorage.setItem("card", JSON.stringify(one));
    let p = localStorage.getItem("card");
    p = JSON.parse(p);
    for (let k in p) {
        t = p[k];
    }
    open.innerHTML = t;
    if (t == 0) {
        alert("товар закончился");
    }
    console.log(one);
}

// ваше событие здесь!!!

// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */

function t13() {

}

// ваше событие здесь!!!

// Task 14 ============================================
/*  Добавьте функцию t13, которая при загрузке страницы проверяет наличие card в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

function t13() {

}

// ваше событие здесь!!!