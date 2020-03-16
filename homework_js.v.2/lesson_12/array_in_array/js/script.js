//------------------------------Task1.------------------------------
// Создайте массив a. Выведите его на страницу. Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массивами - перенос строки!

const contentOne = document.querySelector(".content-text__one");
let arrayOne = "<br>";
const a = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [4, 5, 6],
    ['d', 'e', 'f'],
    [7, 8, 9],
];

for (i = 0; i < a.length; i++) {
    for (t = 0; t < a[i].length; t++) {
        arrayOne += a[i][t] + " ";
    }
    arrayOne += "<br>";
}

contentOne.innerHTML += arrayOne;

//------------------------------Task2.------------------------------
// Выведите на страницу символ 3 из массива a.

let contentTwo = document.querySelector(".content-text__two");

contentTwo.innerHTML += a[0][2];

//------------------------------Task3.------------------------------
// Выведите на страницу символ e из массива a.

let contentThree = document.querySelector(".content-text__three");

contentThree.innerHTML += a[3][1];
//------------------------------Task4.------------------------------
// Выведите на страницу содержимое третьего вложенного массива в массиве a.

let contentFour = document.querySelector(".content-text__four");

contentFour.innerHTML += a[3];

//------------------------------Task5.------------------------------
// Выведите на страницу только первые элементы вложенных массивов массива a.

let contentFive = document.querySelector(".content-text__five");

contentFive.innerHTML += a[1][0] + "<br>" + a[3][0];

//------------------------------Task6.------------------------------
// Выведите на страницу только четные вложенные массивы массива a.

let contentSix = document.querySelector(".content-text__six");
let countSix = [];

for (i = 0; i < a.length; i++) {
    for (t = 0; t < a[i].length; t++) {
        if (a[i][t] % 2 == 0) {
            // console.log(a[i][t]);
            countSix += a[i][t] + " ";

        }
    }
}

contentSix.innerHTML += countSix;

//------------------------------Task7.------------------------------
// Выведите на страницу только числа из массива a.

let contentSeven = document.querySelector(".content-text__seven");

for (i = 0; i < a.length; i++) {
    for (t = 0; t < a[i].length; t++) {
        if (Number(a[i][t])) {
            // console.log(a[i][t]);
            contentSeven.innerHTML += a[i][t] + " ";
        }
        else {
            contentSeven.innerHTML += "";
            // console.log("");
        }
    }
}

// console.log(a[0]);
// console.log(a[2]);
// console.log(a[4]);

//------------------------------Task8.------------------------------
// Выведите на страницу длины вложенных массивов в массив a.

let contentEight = document.querySelector(".content-text__eight");
let countEight = [];

for (i = 0; i < a.length; i++) {
    // console.log(a.length);
    for (t = 0; t < a[i].length; t++) {
        countEight += a[i][t];
        // console.log(a[i].length);
        // console.log(a[t].length);
    }
}
contentEight.innerHTML += countEight.length;

//------------------------------Task9.------------------------------
// Выведите на страницу элементы массива a в обратном порядке, т.е.
// 
// 9 8 7 f e ...

let contentBlock = document.querySelector(".content-text__block");//по условию задания .block, т.к. я зарезервировал это название у меня "content-text__block"
let countNine = [];

for (i = a.length - 1; i >= 0; i--) {
    // console.log(a[i]);
    for (let t = a[i].length - 1; t >= 0; t--) {
        // console.log(a[i][t]);
        countNine = a[i][t] + " ";
        contentBlock.innerHTML += countNine;
    }
}

//------------------------------Task10.------------------------------
// Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:

// 3 2 1
// c b a
// 6 5 4

let contentTen = document.querySelector(".content-text__ten");//по условию задания .block, т.к. я зарезервировал это название у меня "content-text__block"
let countTen = [];

for (i = 0; i < a.length; i++) {
    // console.log(a[i]);
    for (let t = a[i].length - 1; t >= 0; t--) {
        // console.log(a[i][t]);
        countTen = a[i][t] + " ";
        contentTen.innerHTML += countTen;
    }
}

//------------------------------Task11.------------------------------
// Создайте массив шахматную доску. Белые - 0, черные - 1. Выведите на страницу.

let contentEleven = document.querySelector(".content-text__eleven");
let whiteeleven = 0;
let blackeleven = 1;
let counteleven = [];

for (i = 1; i <= 5; i++) {
    // console.log(counteleven);
    for (t = 0; t <= 4; t++) {
        if ((t + i) % 2 == 0) {
            counteleven += blackeleven + " ";
        }
        else {
            counteleven += whiteeleven + " ";
        }
    }
    counteleven += "<br>";
}

contentEleven.innerHTML += counteleven;

//------------------------------Task12.------------------------------
// Создайте массив шахматную доску. Белые - 0, черные - 1. Напишите функцию, которая выводит данный массив в виде шахматной доски - блоки div в нужном порядке, закранные цветом.

let contentTwelve = document.querySelector(".content-text__twelve");
let countTwelve = "";

function chess() {
    for (i = 0; i < 5; i++) {
        for (t = 0; t < 4; t++) {
            if ((t + i) % 2 == 0) {
                countTwelve += '<div class="black"></div>';
            }
            else {
                countTwelve += '<div class="white"></div>';
            }

        }
        // countTwelve += "<br>";
        // console.log(countTwelve);
    }
    contentTwelve.innerHTML += countTwelve;
}
chess()


//------------------------------Task13.------------------------------
// Создайте массив, который подходит под следующие условия:

// b[0][1] == 4;
// b[3][2] == 5

let b = [[0, 4, 3], [5, 4, 8], [0, 4, 3], [5, 4, 5]];

console.log("------------------------------Task13.------------------------------");
console.log(b[0][1]);
console.log(b[3][2]);

//------------------------------Task14.------------------------------
// Создайте массив, который подходит под следующие условия:

// c[0][1] == 4;
// c[2] == 5

let c = [[0, 4, 5], [1, 6, 7], [5], [3, 4, 5]];

console.log("------------------------------Task14.------------------------------");
console.log(c[0][1]);
console.log(c[2]);

//------------------------------Task15.------------------------------
// Создайте массив, который подходит под следующие условия:

// d[0][1] == 4;
// d[2][3] == 5
// d[6] = [4,5]

let d = [[0, 4, 2, 3], [0, 1, 2, 3], [0, 1, 2, 5], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [4, 5]];

//------------------------------Task16.------------------------------
// Создайте массив, который подходит под следующие условия:

// e[0][1] == 4;
// e[2][3] == 5
// e[6][0][1] = 6;

let e = [[1, 4, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 8, 3, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [[6], [3, 3, 4]]];

//------------------------------Task17.------------------------------
// Создайте массив, который подходит под следующие условия:

// f[0][1][3] == 4;
// f[2][1][1] == 5;
// f[6][0][1] = 6;

let f = [[[1, 2, 3,], [1, 5, 5, 4]], [1, 2, 3, 4, 5], [[1, 2, 3, 4, 5], [1, 5, 3, 4, 5]], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [[1, 6, 3, 4, 5], [1, 2, 3, 4, 5]]];

//------------------------------Task18.------------------------------
// Создайте массив, который подходит под следующие условия:

// g[0][1][3] == 4;
// g[2][1][3] == 5;
// g[6][0][1] = 6;
// g[3] == g[5];

let g = [[[0, 1, 2, 3, 4, 5], [0, 1, 2, 4, 4, 5]], [0, 1, 2, 3, 4, 5], [[0, 1, 2, 3, 4, 5], [0, 1, 2, 5, 4, 5]], [5], [0, 1, 2, 3, 4, 5], [5], [[0, 6, 2, 3, 4, 5]]];

//------------------------------Task19.------------------------------
// Выведите на страницу сумму элементов массива a (только чисел).

let contentNineteen = document.querySelector(".content-text__nineteen");
let countNineteen = 0;

for (i = 0; i < a.length; i++) {
    for (t = 0; t < a[i].length; t++) {
        if (Number(a[i][t])) {
            countNineteen += a[i][t];
        }
    }
}

contentNineteen.innerHTML = countNineteen;

//------------------------------Task20.------------------------------
// Создайте массив, который эмулирует доску для крестиков - ноликов, напишите все возможные выиграшные комбинации, т.е. a[0][0], a[0][1], a[0][2] - занята первая линия, и т.д.

let ticTacToeOne = [
    ["x", 0, 0],
    [0, 'x', 0],
    [0, 0, "x"],
]

let ticTacToeTwo = [
    [0, 0, "x"],
    [0, 'x', 0],
    ["x", 0, 0],
]

let ticTacToeThree = [
    ["x", "x", "x"],
    [0, 0, 0],
    [0, 0, 0],
]

let ticTacToeFour = [
    ["x", 0, 0],
    ["x", 0, 0],
    ["x", 0, 0],
]

let ticTacToeFive = [
    [0, 0, 0],
    [0, 0, 0],
    ["x", "x", "x"],
]

let ticTacToeSix = [
    [0, 0, 0],
    ["x", "x", "x"],
    [0, 0, 0],
]

let ticTacToeSeven = [
    [0, 0, "x"],
    [0, 0, "x"],
    [0, 0, "x"],
]

let ticTacToeEight = [
    [0, "x", 0],
    [0, "x", 0],
    [0, "x", 0],
]
