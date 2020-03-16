//------------------------------Task1.------------------------------
// Переберите массив a1 = [5, 7, 9, 11, 13, 15], c помощью цикла for. Выведите на страницу в формате значение+пробел. Результат присвойте переменной a1_res. Действия запускаются при вызове функции t1.

let textContentOne = document.querySelector(".text-content__one");
let a1 = [5, 7, 9, 11, 13, 15];

function t1() {
    let count = "";
    for (i = 0; i < a1.length; i++) {
        count += `${a1[i]} `;
    }
    return textContentOne.innerHTML = count;
}

t1();

//------------------------------Task2.------------------------------
// Переберите массив a2 = [5, 7, 9, 11, 13, 15], c помощью цикла for. Выведите на страницу в виде ключ - значение. Разделитель между ключом и значением - дефис, между строками - br. Результат присвойте переменной a2_res. Действия запускаются при вызове функции t2.

let textContentTwo = document.querySelector(".text-content__two");
let a2 = [5, 7, 9, 11, 13, 15];
let a2_res = "";

function t2() {
    for (i = 0; i < a2.length; i++) {
        a2_res += `${a2[i]}-${a2[i]} <br>`;
    }
    // a2_res = `<br>`;
    textContentTwo.innerHTML += a2_res;
}

t2();

//------------------------------Task3.------------------------------
// При нажатии кнопки, получите div.u-3 с помощью getElementsByClassName, переберите циклом for, допишите в каждый из div цифру 3 (без пробелов). Действия запускаются при вызове функции t3.

let textListContentThree = document.getElementsByClassName("u-3");
let buttonContentThree = document.querySelector("#btn-content__three");

buttonContentThree.onclick = t3;

function t3() {
    for (i = 0; i <= textListContentThree.length - 1; i++) {
        textListContentThree[i].textContent += 3;
    }

}
//------------------------------Task4.------------------------------
// Получите div.u-3 с помощью querySelectorAll, переберите циклом for, допишите в каждый из div цифру 4 (без пробелов). Действия запускаются при вызове функции t4.

let buttonContentFour = document.querySelector("#btn-content__four");
let textListContentFour = document.querySelectorAll(".u-3");

buttonContentFour.onclick = t4;

function t4() {
    for (i = 0; i <= textListContentFour.length - 1; i++) {
        textListContentFour[i].textContent += 4;
    }

}

//------------------------------Task5.------------------------------
// Создайте div с помощью createElement. Получите все div.u-3 с помощью getElementsByClassName в "массив". Попробуйте добавить в "массив" созданный div с помощью метода push. В комментарии к задаче опишите результат. Действия должны запускаться при вызове функции t5.

let textListContentFive = document.getElementsByClassName("u-3");

function t5() {
    let elementDivs = document.createElement("div");
    let array = [];
    for (i = 0; i <= textListContentFive.length - 1; i++) {
        array.push(textListContentFive[i]);
    }
    for (t = 0; t <= textListContentFive.length - 1; t++) {
        array.push(elementDivs);
    }
    console.log("------------------------------Task5.------------------------------");
    console.log(array);
    //Если я все правильно сделал Тут мы видим добавления элементов div в массив эллементов через метод push()
}

t5();

//------------------------------Task6.------------------------------
// Создайте div с помощью createElement. Получите все div.u-3 с помощью querySelectorAll в "массив". Попробуйте добавить в "массив" созданный div с помощью метода push. В комментарии к задаче опишите результат. Действия должны запускаться при вызове функции t6.

let textListContentSix = document.querySelectorAll(".u-3")

function t6() {
    // console.log(textListContentSix);
    let countArray = [];
    divS = document.createElement("div");
    for (i = 0; i <= textListContentSix.length - 1; i++) {
        countArray.push(textListContentSix[i]);
    }
    for (t = 0; t <= textListContentSix.length - 1; t++) {
        countArray.push(divS);
    }
    console.log("------------------------------Task6.------------------------------");
    console.log(countArray);
    //Если я все правильно сделал Тут мы видим добавления элементов div в массив эллементов через метод push()
}

t6();

//------------------------------Task7.------------------------------
// Дан массив a7 = [ [1,2], [3,4], [5,6]], напишите функцию которая делает из него массив [1,2,3,4,5,6]. Используем for. Действия должны запускаться при вызове функции t7. Результат - выведите на страницу и сохраните в массив a7_res.

let textContentSeven = document.querySelector(".text-content__seven")
let a7 = [[1, 2], [3, 4], [5, 6]];

function t7() {
    let a7_res = [];
    for (i = 0; i <= a7.length - 1; i++) {
        for (t = 0; t < a7.length - 1; t++) {
            a7_res.push(a7[i][t]);
        }
    }
    textContentSeven.textContent = a7_res;
}

t7();

//------------------------------Task8.------------------------------
// Дан массив a8 = [ [1,2,3], [3,4,9], [5,6]], напишите функцию которая выводит самый большой индекс вложенных массивов. Результат сохраняется в переменную a8_res. Используем for. Действия должны запускаться при вызове функции t8.

let textListContentEight = document.querySelector(".text-content__eight");
let a8 = [[1, 2, 3], [3, 4, 9], [5, 6]];
let a8_res = "";

function t8() {
    for (i = 0; i < a8.length; i++) {
        for (t = 0; t < a8.length; t++) {
            // console.log(a8[i][t]);
            if (a8[i][t] > a8_res) {
                a8_res = a8[i][t];
                // console.log(a8[i][t]);
            }
        }
    }
    textListContentEight.textContent = a8_res;
}

t8();

//------------------------------Task9.------------------------------
// Дан массив a9 = [4, 6, 9, "hello"]. Напишите функцию, которая преобразовывает его в ассоциативный массив вида a9_1={4: 4, 6: 6, 9: 9, hello : "hello"}. Используйте цикл for. Результат сохраняется в переменную a9_res. Используем for. Действия должны запускаться при вызове функции t9.

let a9 = [4, 6, 9, "hello"];
let a9_1 = {};
let a9_res = "";

function t9() {
    for (i = 0; i < a9.length; i++) {
        a9_1[a9[i]] = a9[i];
        a9_res += `${a9[i]}:${a9[i]},`;
    }

    console.log("------------------------------Task9.------------------------------");
    // console.log(a9_1);
    console.log(`a9_1 = {${a9_res}}`);
}
t9();

//------------------------------Task10.------------------------------
// Переберите массив a10 = [5, 7, 9, 11, 13, 15], c помощью цикла for in. Выведите на страницу. Результат сохраняется в переменную a10_res. Действия должны запускаться при вызове функции t10.

let textListContentTen = document.querySelector(".text-content__ten");
let a10 = [5, 7, 9, 11, 13, 15];
let a10_res = "";

for (let key in a10) {
    a10_res += a10[key];
}

textListContentTen.textContent = `${a10_res} `;

//------------------------------Task11.------------------------------
// Переберите массив a11 = [5, 7, 9, 11, 13, 15], c помощью цикла for in. Выведите на страницу в виде ключ - значение. Разделение между ключем и значением - дефис (без пробелов) между строками - br. Результат (строка) сохраняется в переменную a11_res. Действия должны запускаться при вызове функции t11.

let textListContentEleven = document.querySelector(".text-content__eleven");
let a11 = [5, 7, 9, 11, 13, 15];
let a11_res = "";

function t11() {
    for (let key in a11) {
        a11_res += `${key}-${a11[key]} <br>`;
    }
    textListContentEleven.innerHTML += a11_res;
}

t11();

//------------------------------Task12.------------------------------
// Напишите функцию, которая выполняет: при нажатии кнопки div.u-12 с помощью getElementsByClassName, переберите циклом for in, допишите в каждый из div число 12 (без пробелов). Если это невозможно - напишите в комментарии. Действия должны запускаться при вызове функции t12.

//комментарий к 12 заданию. Тут мы получили методом etElementsByClassName все элементы с документа html div.u-12 далее перебор был циклом for in мы получили:
// script.js:201 ƒ item() { [native code] }
// script.js:201 ƒ namedItem() { [native code] }
//Как я понимаю это нативная часть браузера которую js  запускает в браузере. И был перебор самих элементов куда по условию задания я добовляю number 12

let textListContentTwelve = document.getElementsByClassName("u-12");
let buttonContentTwelve = document.querySelector("#btn-content__twelve");

buttonContentTwelve.onclick = t12;

function t12() {
    for (let key in textListContentTwelve) {
        textListContentTwelve[key].innerHTML += 12;
    }
}

//------------------------------Task13.------------------------------
// Напишите функцию, которая выполняет: при нажатии кнопки, получите div.u-13 с помощью querySelectorAll, переберите циклом for in, допишите в каждый из div число 13 (без пробелов). Если это невозможно - напишите в комментарии. Действия должны запускаться при вызове функции t13.

let textListContentThirteen = document.querySelectorAll(".u-13");
let buttonContentThirteen = document.querySelector("#btn-content__thirteen");

buttonContentThirteen.onclick = t13;

function t13() {
    for (let key in textListContentThirteen) {
        textListContentThirteen[key].innerHTML += 13;
    }
}

//------------------------------Task14.------------------------------
// Дан массив a14 = [[1,2], [3,4], [5,6]], напишите функцию которая делает из него массив [1,2,3,4,5,6]. Используем for in. Действия должны запускаться при вызове функции t14. Результат операции запишите в a14_res.

let a14 = [[1, 2], [3, 4], [5, 6]];
let a14_res = [];

function t14() {
    for (let key in a14) {
        for (let item in a14) {
            // console.log(a14[key][item]);
            if (a14[key][item] !== undefined) {
                a14_res.push(a14[key][item]);
            }
        }
    }
    console.log("------------------------------Task14.------------------------------");
    console.log(a14_res);
}

t14();

//------------------------------Task15.------------------------------
// Дан массив a15 = [ [1,2,3], [3,4,9], [5,6]], напишите функцию которая выводит самый большой индекс вложенных массивов. Используем for in. Действия должны запускаться при вызове функции t15. Результат операции запишите в a15_res.

let a15 = [[1, 2, 3], [3, 4, 9], [5, 6]];
let a15_res = [];

function t15() {
    for (let key in a15) {
        for (let item in a15) {
            if (a15[key][item] !== undefined && a15[key][item] > a15_res) {
                a15_res = a15[key][item];
            }
        }
    }
    console.log("------------------------------Task15.------------------------------");
    console.log(a15_res);
}

t15();

//------------------------------Task16.------------------------------
// Дан массив a16 = [4, 6, 9, "hello"]. Напишите функцию, которая преобразовывает его в ассоциативный массив вида a16_res={4: 4, 6: 6, 9: 9, hello : "hello"}. Используйте цикл for in. Действия должны запускаться при вызове функции t16. Результат операции запишите в a16_res.

let a16 = [4, 6, 9, "hello"];
let a16_res = {};

function t16() {
    for (let key in a16) {
        a16_res[a16[key]] = a16[key];
    }
    console.log("------------------------------Task16.------------------------------");
    console.log(a16_res);
}

t16();

//------------------------------Task17.------------------------------
// Переберите массив a17 = [5, 7, 9, 11, 13, 15], c помощью цикла for of. Выведите на страницу в формате елемент+пробел. Действия должны запускаться при вызове функции t17.

let textListContentSeventeen = document.querySelector(".text-content__seventeen");
let a17 = [5, 7, 9, 11, 13, 15];

function t17() {

    for (let key in a17) {
        textListContentSeventeen.innerHTML += `${a17[key]}&nbsp;`
    }
}

t17();

//------------------------------Task18.------------------------------
// Переберите массив a18 = [5, 7, 9, 11, 13, 15], c помощью цикла for of. Выведите на страницу в виде ключ - значение (разделены дефисом без пробелов). В конце строки - br. Результирующую строку присвойте a18_res. Действия должны запускаться при вызове функции t18.

let textListContentEighteen = document.querySelector(".text-content__eighteen");
let a18 = [5, 7, 9, 11, 13, 15];
let a18_res = "";

function t18() {
    for (let item of a18) {
        a18_res += `${item}-${item}<br>`;
    }
    textListContentEighteen.innerHTML += a18_res;
}

t18();

//------------------------------Task19.------------------------------
// Напишите функцию, которая выполняет: при нажатии кнопки div.u-19 с помощью getElementsByClassName, переберите циклом for of, допишите в каждый из div цифры 19 (без пробелов). Если это невозможно - напишите в комментарии. Действия должны запускаться при вызове функции t19.

let textListContentNinteen = document.getElementsByClassName("u-19");
let buttonContentNinteen = document.querySelector("#btn-content__ninteen");

buttonContentNinteen.onclick = t19;

function t19() {
    for (let item of textListContentNinteen) {
        item.textContent = 19;
    }
}

//------------------------------Task20.------------------------------
// Дан массив a20 = [4, 6, 9, "hello"]. Напишите функцию, которая преобразовывает его в ассоциативный массив вида a20_res ={4: 4, 6: 6, 9: 9, hello : "hello"}. Используйте цикл for of. Действия должны запускаться при вызове функции t20.

let a20 = [4, 6, 9, "hello"];
let a20_res = {};

function t20() {
    for (let item of a20) {
        a20_res[item] = item;
    }
    console.log("------------------------------Task20.------------------------------");
    console.log(a20_res);
}

t20();
