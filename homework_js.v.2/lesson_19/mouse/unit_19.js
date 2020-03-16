
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */
document.querySelector(".div-1").onclick = t1;

function t1() {
    let one = document.querySelector(".out-1").textContent = document.querySelector(".div-1").outerText;
    return one
}

// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

document.querySelector(".div-2").onclick = t2;
let countt = "";

function t2(e) {
    if (e.altKey) {
        countt = true;
    }
    else {
        countt = false;
    }
    document.querySelector(".out-2").textContent = countt;
}

// ваше событие здесь!!!

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;
document.querySelector(".div-3").onclick = t3;

function t3() {
    let answer = document.querySelector(".div-3").style.width = w3 + "px";
    w3 += 5;
    document.querySelector(".out-3").textContent = answer;
}

// ваше событие здесь!!!

// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

document.querySelector(".div-4").ondblclick = t4;

function t4() {
    document.querySelector(".out-4").textContent = "ваше событие здесь!!!";
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

document.querySelector(".div-5").ondblclick = t5;

function t5() {
    document.querySelector(".div-5").classList.toggle("active");
    document.querySelector(".div-5").textContent = "active";
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

document.querySelector(".div-6").ondblclick = t6;

function t6() {
    document.querySelector(".ul-6").classList.toggle("hide");
    if (document.querySelector(".ul-6").classList.contains("hide")) {
        document.querySelector(".out-6").textContent = "remove";
    }
    else {
        document.querySelector(".out-6").textContent = "";
    }

}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

document.querySelector(".div-7").oncontextmenu = t7;

function t7() {
    document.querySelector(".div-7").classList.toggle("active");
    if (document.querySelector(".div-7").classList.contains("active")) {
        document.querySelector(".out-7").textContent = "active";
    }
    else {
        document.querySelector(".out-7").textContent = "";
    }
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

document.querySelector(".ch-8").onchange = t8;

function t8() {
    if (document.querySelector(".ch-8").checked) {
        document.querySelector(".out-8").textContent = "false";
        document.body.oncontextmenu = () => {
            return false;
        };
    }
    else {
        document.querySelector(".out-8").textContent = "true";
        document.body.oncontextmenu = () => {
            return true;
        };
    }
}

// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

document.querySelector(".div-9").oncontextmenu = t9;

function t9() {
    if (document.querySelector("img").hasAttribute("src")) {
        document.querySelector("img").removeAttribute("src")
        document.querySelector("img").setAttribute("src", "img/2.png");
        document.querySelector(".out-9").textContent = "yes!!!";
    }
}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

document.querySelector(".div-10").onmouseenter = t10;

function t10() {
    if (document.querySelectorAll("img")[1].hasAttribute("src")) {
        document.querySelectorAll("img")[1].removeAttribute("src")
        document.querySelectorAll("img")[1].setAttribute("src", "img/2.png");
        document.querySelector(".out-10").textContent = "yes!!!";
    }
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

document.querySelector(".div-11").onmouseenter = t11;

function t11(e) {
    if (document.querySelector(".div-11").onmouseenter) {
        if (document.querySelectorAll("img")[2].hasAttribute("src")) {
            document.querySelectorAll("img")[2].removeAttribute("src")
            document.querySelectorAll("img")[2].setAttribute("src", "img/2.png");
            document.querySelector(".out-11").textContent = "yes!!!";
        }
    }
    document.querySelector(".div-11").onmouseleave = () => {
        if (document.querySelectorAll("img")[2].hasAttribute("src")) {
            document.querySelectorAll("img")[2].removeAttribute("src")
            document.querySelectorAll("img")[2].setAttribute("src", "img/1.png");
            document.querySelector(".out-11").textContent = "no!!!";
        }
    }

}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

document.querySelector(".div-12").onmousedown = () => {
    document.querySelector(".div-12").classList.add("active");
    document.querySelector(".out-12").textContent = "active";
}

// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

document.querySelector(".div-13").onmousedown = () => {
    document.querySelector(".div-13").classList.add("active");
    document.querySelector(".out-13").textContent = "active";
}

document.querySelector(".div-13").onmouseup = () => {
    document.querySelector(".div-13").classList.remove("active");
    document.querySelector(".out-13").textContent = "";
}
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

document.querySelector(".b-14").onclick = t14;

function t14() {
    document.querySelector(".out-14").textContent = "onclick";
    document.querySelector(".div-14").onclick = () => {
        document.querySelector(".div-14").classList.add("active");
        document.querySelector(".out-14").textContent = "active";
    };
}
// document.querySelector('t-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

document.querySelector(".div-15").onmousemove = t15;
let count = 0;
function t15() {

    if (document.querySelector(".div-15").onmousemove) {
        count += 1;
    }
    document.querySelector(".div-15").textContent = count;
    document.querySelector(".out-15").textContent = `count: ${count}`;
}
// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

document.querySelector(".div-16").onmousemove = t16;
let countblock = 75;

function t16() {
    document.querySelector(".div-16").style.width = countblock + "px";
    document.querySelector(".out-16").textContent = `${countblock}px`;
    countblock++;
}
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */
document.querySelector(".b-17_on").onclick = t17On;
document.querySelector(".b-17_off").onclick = t17Off;

function t17On() {
    document.querySelector(".div-16").onmousemove = () => {
        document.querySelector(".out-17").textContent = "On";
        t16();
    }
}

function t17Off() {
    document.querySelector(".div-16").onmousemove = () => {
        document.querySelector(".out-17").textContent = "Off";
        return false;
    }
}
// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

document.querySelector(".div-18").onmouseenter = t18;

function t18() {
    let width = this.offsetWidth
    document.querySelector(".div-18").textContent = width;
    document.querySelector(".out-18").textContent = width;
}

// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

document.querySelector(".div-19").onmouseout = t19;

function t19() {
    let countElem = document.querySelector(".div-19").textContent = document.querySelector(".div-19").getAttribute("class");
    document.querySelector(".out-19").textContent = countElem;
}
// ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

let progressCount = 10;
document.querySelector("progress").onmousemove = t20;

function t20() {
    document.querySelector("progress").setAttribute("value", progressCount);
    progressCount++;
    let textProgress = document.querySelector("#value").textContent = progressCount;
    if (progressCount == 100) {
        document.querySelector("progress").onmousemove = () => {
            return false;
        }
        if (progressCount == 100) {
            document.querySelector("progress").setAttribute("value", progressCount) + 1
        }
    }
}

// ваше событие здесь!!!