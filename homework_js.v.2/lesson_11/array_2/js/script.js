//------------------------------Task1.------------------------------
// Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. При нажатии кнопки, функция читает содержимое input и добавляет содержимое в массив, после чего выводит содержимое массива в div.out-1

let inputContentOne = document.querySelector(".u-1");
let buttonContentOne = document.querySelector(".u-2__push");
let contentOne = document.querySelector(".out-1");
let arr1 = [];

buttonContentOne.onclick = getOnePush;

function getOnePush() {
    let a = +inputContentOne.value;
    if (a == "") {
        contentOne.innerHTML += "input it is undefined ";
    }
    else {
        arr1.push(a);
        // console.log(arr1);
        contentOne.innerHTML += arr1 + " ";
    }

}

//------------------------------Task2.------------------------------
// Добавьте к предыдущему заданию кнопку button.u-2__pop, при нажатии которой, к массиву arr1 применяется метод pop, после чего массив выводится в div.out-1.

let buttonContentTwo = document.querySelector(".u-2__pop").onclick = function () {
    // let a = inputContentOne.value;
    arr1.pop();
    // console.log(arr1);
    contentOne.innerHTML += arr1 + " ";
}

//------------------------------Task3.------------------------------
// Добавьте к заданию 1 кнопку button.u-3__shift, которая применяет к массиву arr1 метод shift (читать за метод shift). После применения shift, массив arr1 выподится в div.out-1.

let buttonContentThree = document.querySelector(".u-3__shift").onclick = function () {
    // let a = inputContentOne.value;
    arr1.shift();
    // console.log(arr1);
    contentOne.innerHTML += arr1 + " ";
}

//------------------------------Task4.------------------------------
// Добавьте к заданию 1 кнопку button.u -4__unshift, которая применяет к массиву arr1 метод unshift(читать за метод unshift).После применения unshift, массив arr1 выподится в div.out - 1. Надеюсь, вы догадаетесь проверять input на пустоту перед применением unshift.Надеюсь, вы это сделали и в первой задаче ?

let buttonContentFour = document.querySelector(".u-4__unshift").onclick = function () {
    // let a = inputContentOne.value;
    arr1.unshift("one");
    // console.log(arr1);
    contentOne.innerHTML += arr1 + " ";
}

//------------------------------Task5.------------------------------
// Обьявите массив arr5, добате два элемента input, в первый пользователь может ввести индексэлемента, во второй - количество.Добавьте кнопку, по нажатию на которую к массиву arr5 применяется метод splice.Результат применения выводите в div.out - 5.

let buttonContentFive = document.querySelector(".u-5__splice");
let contentFive = document.querySelector(".out-5")
let inputFiveOne = document.querySelector(".text-content__five-one");
let inputFiveTwo = document.querySelector(".text-content__five-two");
let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

buttonContentFive.onclick = getFiveSlice;

function getFiveSlice() {
    let a = inputFiveOne.value;
    let b = inputFiveTwo.value;
    // console.log(a);
    // console.log(b);

    arr5.splice(a, b);
    contentFive.innerHTML = arr5;
    // console.log(arr5);
}

//------------------------------Task6.------------------------------
// Напишите функцию funcPush, которая эмулирует работу метода push, функция, по нажатию кнопки:
//1. читает содержимое input в переменную
//2. вычисляет длину массива
//3. присваивает массиву новый элемент, а в качестве индекса указывает длину массива
// Выводит массив на страницу

let inputContentSix = document.querySelector(".u-6__push");
let buttonContentSix = document.querySelector(".btn-6__push");
let contentSix = document.querySelector(".out-6");
let arraySix = [];

buttonContentSix.onclick = function () {
    let count = inputContentSix.value;
    let a = arraySix.length;
    arraySix.push(count, a);
    contentSix.innerHTML += arraySix + " ";
    // console.log(arraySix);
}

//------------------------------Task7.------------------------------
// Напишите функцию funcPop, которая эмулирует работу метода pop, функция, по нажатию кнопки:
// 1.удаляет последний элемент массива
// Выводит массив на страницу

let buttonContentSeven = document.querySelector(".btn-7__pop");
let contentSeven = document.querySelector(".out-7");
let arraySeven = ["последний", "элемент", "массива"];
let a = [];

buttonContentSeven.onclick = function () {
    let a = [];
    a = arraySeven.pop();
    contentSeven.innerHTML += a + ", ";
    // console.log(a);
}

//------------------------------Task8.------------------------------
// Напишите функцию funcShift, которая эмулирует работу метода shift, функция, по нажатию кнопки:
// 1. Создает новый массив где нулевым элементом выступает первый элемент исходного массива
// Выводит массив на страницу

let buttoContentEight = document.querySelector(".btn-8__shift");
let contentEight = document.querySelector(".out-8");
let arrayEight = [];

buttoContentEight.onclick = function () {
    let a = [];
    a = arrayEight.shift();
    contentEight.innerHTML += a + " ";
}

//------------------------------Task9.------------------------------
// Напишите функцию funcUnShift, которая эмулирует работу метода unshift, функция, по нажатию кнопки:
//1. читает содержимое input в переменную
//2. создает новый массив где нулевым элементов задает считанную из input строку
//3. дописывает остальные значения старого массива в новый
// Выводит массив на страницу

let inputContentNine = document.querySelector(".u-9__nine");
let buttonContentNine = document.querySelector(".btn-9__nine");
let contentNine = document.querySelector(".out-9");
let arrayNine = ["two", "three"];

buttonContentNine.onclick = function () {
    let a = inputContentNine.value;
    let b = arrayNine.unshift(a);
    // console.log(arrayNine);
    contentNine.innerHTML += arrayNine + " ";

}

//------------------------------Task10.------------------------------
// Создайте массив arr10, примените к массиву метод reverse ( читать за метод reverse). После применения reverse, массив arr10 выподится в div.out-10.

let arr10 = [2, 4, 6, 8, 10, 'hello'];
let contentTen = document.querySelector(".out-10");

arr10.reverse();

contentTen.innerHTML += "let arr10 = [" + arr10 + "]" + " ";

//------------------------------Task11.------------------------------
// Создайте input.u-11__input и кнопку button.u-11__button. Объявите массив arr11. По нажатию на кнопку, читайте содержимое input.u-11__input в переменную u11. Потом примените к массиву arr11 метод indexOf ( читать за метод indexOf). Результат применения indexOf выводите на страницу в div.out-11. Последовательно проверьте программу вводя в input числа 1, 3, 5, 12.

let inputContentEleven = document.querySelector(".u-11__input");
let buttonContentEleven = document.querySelector(".u-11__button");
let contentEleven = document.querySelector(".out-11");
let arr11 = [0, 2, 3, 7, 8, 5, 11];

buttonContentEleven.onclick = function () {
    let u11 = +inputContentEleven.value;
    // console.log(u11);
    let a = arr11.indexOf(u11);
    // console.log(a);
    contentEleven.innerHTML += a;
}

//------------------------------Task12.------------------------------
// Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf. Программа должна:
//1. читает содержимое input в переменную
//2. Запускать цикл по массиву и сравнивать каждый элемент массива с введенным.
//3. Если совпадение есть - останавливать цикл и выводить номер индекса на котором произошло совпадение.
//4. Если совпадения нет выводить -1.

let inputContentTwelve = document.querySelector(".u-12__input");
let buttonContentTwelve = document.querySelector(".btn-12__twelve");
let contentTwelve = document.querySelector(".out-12");

buttonContentTwelve.onclick = funcIndexOf;

function funcIndexOf() {
    let a = inputContentTwelve.value;
    for (i = 0; i < arr11.length; i++) {
        if (arr11[i] == a) {
            contentTwelve.innerHTML = i + " ";
            // console.log(a);
            break;
        }
        else {
            contentTwelve.innerHTML = " -1 ";
        }
        // console.log(arr11[i]);
    }
}

//------------------------------Task13.------------------------------
// Напишите функцию funcReverse, которая эмулирует работу метода reverse.Программа должна:
// 1. Создать новый пустой массив
// 2. Перебирать старый массив с конца(массив создайте сами)
// 3. По очереди по элементу присвоить значения в новый массив.
// 4. Вывести новый массив.

let buttonContentThirteen = document.querySelector(".btn-13__thirteen");
let contentThirteenOne = document.querySelector(".out-13");
let contentThirteen = document.querySelector(".out-13__one");
let arrayThirteen = [4, 3, 5, 6, true, "word"];

contentThirteenOne.innerHTML += "Взяли: " + arrayThirteen;

buttonContentThirteen.onclick = funcReverse
function funcReverse() {
    let a = [];
    for (i = arrayThirteen.length - 1; i > -1; i--) {
        a += arrayThirteen[i] + " ";
        // console.log(a);
    }
    contentThirteen.innerHTML = "Получили: " + a + " ";
}

//------------------------------Task14.------------------------------
// Создайте инпут, куда пользователь может ввести число элементов в массиве. Создайте функцию, которая прочитает введенное число и создаст массив такой длины, причем каждый элемент - это случайное число от 0 до 100. Массивы выведите на страницу.

let inputContentFourteen = document.querySelector(".u-14__input");
let buttonContenFourteen = document.querySelector(".btn-14__fourteen");
let contentFourteen = document.querySelector(".out-14");

buttonContenFourteen.onclick = funcMulti;

function funcMulti() {
    let a = +inputContentFourteen.value;
    let v = [];

    for (i = 0; i < a; i++) {
        v += Math.floor(Math.random() * 100) + " ";
        // console.log(v);
    }
    contentFourteen.innerHTML += v + " ";
}

//------------------------------Task15.------------------------------
// Создайте массив arr15. Напишите функцию, которая создаст новый массив, в который входят только четные элементы массива arr15 (элементы с четным индексом). Выведите на экран.

let contentFifteen = document.querySelector(".out-15");
let arrayFifteen = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function funcEven() {
    let a = [];

    for (i = 0; i < arrayFifteen.length; i++) {
        if (arrayFifteen[i] % 2 == 0) {
            a += ", " + arrayFifteen[i];
        }
    }
    // console.log(a);
    contentFifteen.innerHTML += a + " ";
}
funcEven()

//------------------------------Task16.------------------------------
// Создайте button.u-16__button. Объявите массив arr16_1 и arr16_2. По нажатию на кнопку примените к массивам метод concat ( читать за метод concat). Результат применения concat выводите на страницу в div.out-16.

let contentSixteen = document.querySelector(".out-16");
let buttonContentSixteen = document.querySelector(".btn-16__sixteen");
let arr16_1 = [3, 5, 7];
let arr16_2 = [2, 4, 6];

buttonContentSixteen.onclick = function () {
    let a = arr16_1.concat(arr16_2);
    // console.log(a);
    contentSixteen.innerHTML += a + " ";
}

//------------------------------Task17.------------------------------
// Напишите функцию funcConcat, которая эмулирует работу метода concat. Программа должна:
//1. Перебирает второй массив и его элементы добавляет в первый массив.
//2. Выводит массив на страницу.

let contentSeventeen = document.querySelector(".out-17");
let buttonContentSeventeen = document.querySelector(".btn-17__seventeen");

buttonContentSeventeen.onclick = funcConcat;

function funcConcat() {
    for (i = 0; i < arr16_2.length; i++) {
        arr16_1.push(arr16_2[i]);
    }
    // return console.log(arr16_1);
    contentSeventeen.innerHTML += arr16_1 + " ";
}

//------------------------------Task18.------------------------------
// Создайте button. u-18__button и input.u-18__input. Объявите массив arr18. По нажатию на кнопку примените к массивам метод includes, который проверяет есть ли в массиве значение введенное в input. (читать за метод includes). Результат применения includes выводите на страницу в div. out-18.

let inputContentEighteen = document.querySelector(".u-18__input");
let buttonContentEighteen = document.querySelector(".u-18__button");
let contentEighteen = document.querySelector(".out-18");
let arr18_1 = [3, 5, 7, 11, 12, 13, 14];

buttonContentEighteen.onclick = function () {
    let a = +inputContentEighteen.value;
    let b = arr18_1.includes(a);
    // console.log(b);
    contentEighteen.innerHTML += b + " ";
}
//------------------------------Task19.------------------------------
// Напишите функцию funcIncludes, которая эмулирует работу метода includes. Программа должна:
//1. Перебирает второй массив и сравнивать если введенный элемент совпал с текущим - прекращать работу цикла и выводить true.
//2. Если совпадений нет - false.

let contentNineteen = document.querySelector(".out-19");
let arre1 = [2, 1, 3, 4];//true
let arre2 = [2, 1, 3, 4];//true
let arre3 = [3, 4, 5, 6, 6, 7, 3];//false


function funcIncludes(arrayone, arraytwo) {
    if (arrayone.length !== arraytwo.length) {
        // return console.log(false);
        return contentNineteen.innerHTML += false + " ";
    }
    for (i = 0; i < arrayone.length; i++) {
        if (arrayone[i] !== arraytwo[i]) {
            // return console.log(false);
            return contentNineteen.innerHTML += false + " ";

        }
    }
    // return console.log(true);
    return contentNineteen.innerHTML = true + " ";

}
funcIncludes(arre1, arre3);

//------------------------------Task20.------------------------------
// Объявите массив arr20.Создайте кнопку, по нажатию которую к массиву применяется метод join(читать за метод join).Результа выведите на страницу.

let buttonContentTwenty = document.querySelector(".btn-20__twenty");
let contentTwenty = document.querySelector(".out-20");
let arrayTwenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

buttonContentTwenty.onclick = function () {
    let a = arrayTwenty.join(" ");
    contentTwenty.innerHTML += a + " end array";
}
