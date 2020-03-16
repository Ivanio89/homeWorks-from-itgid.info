
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие onclick. При срабатывании события  выводите в out-1 количество срабатываний события. В комментариях опишите результат. */

let answerOne = document.querySelector(".out-1");
document.querySelector(".div-1").onclick = t1;
let countOne = 0;

function t1() {
    countOne++;
    answerOne.textContent = countOne;
}

//клик как на телефоне так и по клику мыши вызывается событие!
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие ondblclick. При срабатывании события  выводите в out-2 количество срабатываний события. В комментариях опишите результат. */

document.querySelector(".div-2").ondblclick = t2;
let = answerTwo = document.querySelector(".out-2");
let countTwo = 0;

function t2() {
    countTwo++;
    answerTwo.textContent = countTwo;
}

//по двойному клику мыши вызывается событие, а на телефоне не отрабатывает!
// ваше событие здесь!!!

// Task 3 ============================================
/*  Создайте блок div-3. Добавьте на него событие onmousemove. При срабатывании события выводите в out-3 количество срабатываний события. В комментариях опишите результат. */

let answerThree = document.querySelector(".out-3");
document.querySelector(".div-3").onmousemove = t3;
let countThree = 0;

function t3() {
    countThree++;
    answerThree.textContent = countThree;
}

//клик как на телефоне так и при наведении мыши вызывается событие!
// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. Добавьте на него событие oncontextmenu. При срабатывании события выводите в out-4 количество срабатываний события. В комментариях опишите результат. */

let answerFour = document.querySelector(".out-4");
document.querySelector(".div-4").oncontextmenu = t4;
let countFour = 0;

function t4() {
    countFour++;
    answerFour.textContent = countFour;
}

//по клику мыши левой клавишей вызывается событие контекст меню, а на телефоне не отрабатывает!
// ваше событие здесь!!!

// Task 5 ============================================
/*   Создайте блок div-5. Добавьте на него событие onmousedown. При срабатывании события выводите в out-5 количество срабатываний события. В комментариях опишите результат. */

let answerFive = document.querySelector(".out-5");
document.querySelector(".div-5").onmousedown = t5;
let countFive = 0;

function t5() {
    countFive++;
    answerFive.textContent = countFive;
}

//клик как на телефоне так и по клику мыши вызывается событие!
// ваше событие здесь!!!

// Task 6 ============================================
/*  Создайте блок div-6. Добавьте на него событие onmouseenter. При срабатывании события выводите в out-6 количество срабатываний события. В комментариях опишите результат. */

let answerSix = document.querySelector(".out-6");
document.querySelector(".div-6").onmouseenter = t6;
let countSix = 0;

function t6() {
    countSix++;
    answerSix.textContent = countSix;
}

//клик как на телефоне так и при наведении мыши вызывается событие один раз!
// ваше событие здесь!!!


// Task 7 ============================================
/*   Создайте блок div-7. Добавьте на него событие onmouseleave. При срабатывании события выводите в out-7 количество срабатываний события. В комментариях опишите результат.*/

let answerSeven = document.querySelector(".out-7");
document.querySelector(".div-7").onmouseleave = t7;
let countSeven = 0;

function t7() {
    countSeven++;
    answerSeven.textContent = countSeven;
}

//при отведении мыши вызывается событие, а на телефоне отрабатывает за переделами клик!
// ваше событие здесь!!!

// Task 8 ============================================
/*   Создайте блок div-8. Добавьте на него событие onmouseout. При срабатывании события выводите в out-8 количество срабатываний события. В комментариях опишите результат.*/

let answerEight = document.querySelector(".out-8");
document.querySelector(".div-8").onmouseout = t8;
let countEight = 0;

function t8() {
    countEight++;
    answerEight.textContent = countEight;
}

//при отведении мыши вызывается событие, а на телефоне отрабатывает за переделами клик!
// ваше событие здесь!!!


// Task 9 ============================================
/* Создайте блок div-9. Добавьте на него событие onmouseover. При срабатывании события выводите в out-9 количество срабатываний события. В комментариях опишите результат. */

let answerNine = document.querySelector(".out-9");
document.querySelector(".div-9").onmouseover = t9;
let countNine = 0;

function t9() {
    countNine++;
    answerNine.textContent = countNine;
}

//клик как на телефоне так и при наведении мыши вызывается событие!
// ваше событие здесь!!!


// Task 10 ============================================
/*  Создайте блок div-10. Добавьте на него событие onmouseup. При срабатывании события выводите в out-10 количество срабатываний события. В комментариях опишите результат.*/

let answerTen = document.querySelector(".out-10");
document.querySelector(".div-10").onmouseup = t10;
let countTen = 0;

function t10() {
    countTen++;
    answerTen.textContent = countTen;
}

//клик как на телефоне так и по клику мыши любой из клавишь (правой или левой) вызывается событие!
// ваше событие здесь!!!