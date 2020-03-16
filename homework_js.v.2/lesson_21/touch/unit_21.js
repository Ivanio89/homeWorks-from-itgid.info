
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

document.querySelector(".div-1").addEventListener("touchstart", t1);

function t1() {
    document.querySelector(".out-1").textContent += " touch";
}

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

document.querySelector(".div-2").addEventListener("touchstart", t2);

let count = 1;

function t2() {
    document.querySelector(".out-2").textContent = count;
    count++;
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

document.querySelector(".div-3_1").addEventListener("touchstart", t3);
document.querySelector(".div-3_2").addEventListener("touchstart", t3);

function t3(e) {
    let blockOne = e.target.getAttribute("class");
    let blockTwo = e.target.getAttribute("class");
    if (blockOne == "div-3_1 block") {
        document.querySelector(".out-3").textContent = blockOne;
    }
    if (blockTwo == "div-3_2 block") {
        document.querySelector(".out-3").textContent = blockTwo;
    }
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

document.querySelector("#btn-four").onclick = t4;

function t4() {
    document.querySelector(".div-4").ontouchstart = document.querySelector(".out-4").textContent += "touch";
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

document.querySelector("#btn-five").onclick = t5;

function t5() {
    document.querySelector(".div-4").ontouchstart = document.querySelector(".out-4").textContent = "";
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

document.querySelector(".div-4").ontouchend = t6;

function t6() {
    document.querySelector(".out-6").textContent += " touchend";
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

document.querySelector(".div-7").ontouchstart = t7;

function t7() {
    document.querySelector(".div-7").style = "background: red;";
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

document.querySelector(".div-8").ontouchstart = t8;

function t8() {
    let a8 = ["red", "green", "blue", "orange", "pink", "yellow"];
    let b = "";
    b = a8[Math.floor(Math.random() * a8.length)];
    document.querySelector(".div-8").style.background = b;
}

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

document.querySelector(".div-9").ontouchstart = t9;

function t9(e) {
    document.querySelector(".out-9").textContent += e.touches.length;
}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

document.querySelector(".div-10").ontouchmove = t10;

let countWidth = 75;

function t10() {
    document.querySelector(".div-10").style.width = + countWidth + "px";
    countWidth++;

}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

document.querySelector(".div-11").addEventListener("touchstart", t11);

function t11(e) {
    let radiusX = e.changedTouches[0].radiusX;
    let radiusY = e.changedTouches[0].radiusY;
    document.querySelector(".out-11").innerHTML = `radiusX: ${radiusX}<br>radiusY: ${radiusY}`;

}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12. Добавьте touch события так, чтобы при клике на img-12-min картинка появлялась в блоке div-12-max. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.  Изображение, которое сейчас дублируется в большом блоке должно выделяться классом .active-img. Добавьте кнопку reset для сброса состояния, когда выводится первое изображение. Все изображения и начальное состояние - выводится из массива 
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст, которая будет выводиться если картинка активна. Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/

let allImg = document.querySelectorAll(".img-12-min");
let rightButton = document.querySelector(".next");
let leftButton = document.querySelector(".prev");
let resetButton = document.querySelector(".btn-reset");
let answerImg = document.querySelector(".img-12-max");
let countImg = 0;
let arrImg = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
let imgSrc = "";
let avImg = "";

answerImg.setAttribute("src", `img/${arrImg[countImg]}`);

allImg.forEach((elem, i) => {
    elem.setAttribute("data", `img/${arrImg[i]}`);
    // console.log(elem.getAttribute("data", `img/${arrImg[i]}`));
    elem.ontouchstart = t12;
});

function t12(event) {

    // console.log(event.target.getAttribute("data"));
    allImg.forEach(elem => {
        elem.classList.remove("active-img");
        avImg = this.getAttribute("data");
        // console.log(this.getAttribute("data"));
    });

    event.target.classList.add("active-img");
    // answerImg = event.target.getAttribute("data");

    // avImg = event.target.getAttribute("src");
    answerImg.setAttribute("src", avImg);
    console.log(avImg);
    // return imgSrc;
};

rightButton.ontouchstart = function () {
    countImg++;
    if (countImg > 5) {
        countImg = 0;
    };

    allImg.forEach(elem => {
        elem.classList.remove("active-img");
    });
    answerImg.setAttribute("data", avImg);
    console.log(answerImg.getAttribute("data"));
    answerImg.getAttribute("data");

    console.log(arrImg[countImg]);
    answerImg.setAttribute("src", `img/${arrImg[countImg]}`);
    allImg[countImg].classList.add("active-img");
    // cosnoel.log(answerImg.getAttribute("src"));
    // console.log(answerImg);
    // console.log(answerImg.getAttribute("src"));
    // console.log(allImg[countImg]);
};

leftButton.ontouchstart = function () {
    countImg--;
    if (countImg < 0) {
        countImg = 5;
    };
    allImg.forEach(elem => {
        elem.classList.remove("active-img");
    });
    // console.log(arrImg[countImg]);
    answerImg.setAttribute("src", `img/${arrImg[countImg]}`);
    // console.log(answerImg);
    allImg[countImg].classList.add("active-img");
    // console.log(answerImg.getAttribute("src"));


    // console.log(countImg);
};

resetButton.addEventListener("click", () => {
    countImg = 0;
    document.querySelector(".img-12-max").setAttribute("src", `img/${arrImg[countImg]}`);
    allImg.forEach(elem => {
        elem.classList.remove("active-img");
    });
    allImg[0].classList.add("active-img");
});


// ваше событие здесь!!!


