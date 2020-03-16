//------------------------------Task1.------------------------------
// Создайте новый Set. Добавьте в него через add элементы. Выведите в консоль.

let arraySet = new Set();
arraySet.add(2);
arraySet.add(4);
arraySet.add("How");
arraySet.add("ara you?");

console.log("------------------------------Task1.------------------------------");
console.log(arraySet);

//------------------------------Task2.------------------------------
// Создайте input куда пользователь может вводить элементы и кнопку. По нажатию на кнопку значение из input добавляется в set. Set выводится в консоль.

let inputContentTwo = document.querySelector("#text-content__two");
let buttonContentTwo = document.querySelector("#btn-content__two");

buttonContentTwo.addEventListener("click", function () {
    let a = inputContentTwo.value;
    let b = new Set();
    b.add(a);

    console.log("------------------------------Task2.------------------------------");
    console.log(b);
})

//------------------------------Task3.------------------------------
// Добавьте к предыдущему заданию кнопку удалить. При нажатии кнопки читаете содержимое input и удаляете его из Set. Если input пустой - выводите ошибку (alert).

buttonContentThree = document.querySelector("#btn-content__three").addEventListener("click", function () {
    let a = inputContentTwo.value;
    let b = new Set();
    b.add(a);
    b.delete(a);
    console.log(b);

    if (a == "") {
        alert("error");
    }

})

//------------------------------Task4.------------------------------
// Добавьте к предыдущему заданию кнопку проверить. При нажатии кнопки читаете содержимое input и проверяет его наличие в Set. Функция должна возвращать true или false.Действия запускаются при вызове функции t4.

buttonContentFour = document.querySelector("#btn-content__four").addEventListener("click", t4);

function t4() {
    let a = inputContentTwo.value;
    let b = new Set();
    b.add(a);
    console.log("------------------------------Task4.------------------------------");

    if (a == "") {
        return console.log(false);
    }
    else {
        return console.log(true);
    }
}

//------------------------------Task5.------------------------------
// Выведите размер полученного в результате предыдущих операций Set. Выводить на страницу и возвращать в функции. Действия должны запускаться при вызове функции t5.

let buttonContetnFive = document.querySelector("#btn-content__five");
let textContentFive = document.querySelector("#text-content__five");

buttonContetnFive.onclick = t5;

function t5() {
    let a = inputContentTwo.value;
    let b = new Set();
    b.add(a);
    return textContentFive.textContent = `Size: ${b.size}`;
}

//------------------------------Task6.------------------------------
// Есть массив a6 = [3,4,3,2,4,56,1,23]. Напишите функцию, которая возвращает и выводит на страницу количество уникальных элементов в массиве a6. Решение должно использовать set. Действия должны запускаться при вызове функции t6.

let buttonContentSix = document.querySelector("#btn-content__six");
let textContentSix = document.querySelector("#text-content__six");
let ab = [3, 4, 3, 2, 4, 56, 1, 23];

buttonContentSix.onclick = t6;

function t6() {

    let size = "";
    let set = new Set();
    let setTwo = new Set();

    for (i = 0; i < ab.length; i++) {
        size = set.size;
        set.add(ab[i]);
        if (set.size == size) {
            setTwo.add(ab[i]);
        }
    }
    textContentSix.innerHTML += `Size: ${setTwo.size}`;

}


//------------------------------Task7.------------------------------
// Создайте input куда пользователь может ввести пароль и кнопку - проверить. Проверяйте с помощью Set, чтобы пользователь использовал в пароле только не повторяющиеся символы. Логика решения - получаем строку из input - и преобразуем ее в массив (arr.split()). Считаем длину массива. На основе массива создаем  Set. Сравниваем размеры массива и Set.

let inputContentSeven = document.querySelector("#text-content__seven");
let buttonContentSeven = document.querySelector("#btn-content__seven");

buttonContentSeven.addEventListener("click", function () {
    let password = inputContentSeven.value;
    let arr = password.split("");
    // console.log(arr.length);
    let arrSet = new Set(arr);
    // console.log(arrSet);

    if (arr.length > arrSet.size) {
        // console.log("arr");
    }
    else if (arr.length < arrSet.length) {
        // console.log("set");
    }
})

//------------------------------Task8.------------------------------
// Создайте набор set a8. Напишите функцию, которая принимает set в качестве параметра и четные элементы из набора добавляет в массив a8_res. После завершения операции - выводит a8_res на страницу. Запуск - по нажатию кнопки b-8.

let buttonEight = document.querySelector("#btn-content__eight");
let textContentEight = document.querySelector("#text-content__eight");
let setes = new Set(["string", 8, 2, "sonic", 4, "limon", 3,]);
let a8_res = [];

buttonEight.onclick = () => giwSet(setes);

function giwSet(one) {

    for (item of one) {
        if (item % 2 == 0) {
            a8_res.push(item);
        }
    }
    return textContentEight.innerHTML = a8_res;
}

//------------------------------Task9.------------------------------
// Создайте набор set a9. Напишите функцию, которая принимает set в качестве параметра присваивает a9_res так, что порядок элементов в a9_res обратный a9. Выведите a9_res на страницу. Действия должны запускаться при вызове функции t9.

let textContentNine = document.querySelector("#text-content__nine");
let a9 = new Set([3, "string", 34, 1, 7, 5, 4, 3, 8]);
let a9_res = [];

function getSetToo(set) {
    let arr = [];
    for (item of set) {
        arr.push(item);
    }
    for (i = item - 1; i >= 0; i--) {
        a9_res.push(arr[i]);
    }
    return textContentNine.innerHTML += a9_res;
}
getSetToo(a9);
//------------------------------Task10.------------------------------
// Сложная задача!!! Самая сложная задача за урок. Если ее решите - то массивов вы больше не испугаетесь. Задачу Можно пропустить. Создайте массив элементов a10. Посчитайте, сколько раз встречается каждый из элементов в массиве. Результат присвойте массиву a10_res. Логика решения: создайте на основе массива - набор. Потом запустите перебор набора и внутри цикла перебора запустите еще один цикл - перебираете массив и смотрите совпадения если элемент массива совпадает с элементом набора - то плюсуете счетчик. После прохода внутреннего цикла добавляете в a20_res запись в виде элемент набора - счетчик. a10_res = { "3" : 5, "1" : 1, }

let a10 = [0, 0, 0, 0, 1, 6, 5, 5, 5,];
// let countA10One = "";
let countStep = 0;
let setSeven = new Set(a10);
let a10_res = {};

// for (t = 0; t <= a10.length - 1; t++) {
//     countA10One = a10[t];
//     // console.log(countA10One);
//     if (a10_res[countA10One]) {
//         a10_res[countA10One] += 1;
//         // console.log(a10_res[countA10One])
//     }
//     else {
//         a10_res[countA10One] = 1;
//         // console.log("no")
//     }
// }


// console.log(a10_res);

for (myitem of setSeven) {
    // console.log(myitem);
    for (i = 0; i <= a10.length - 1; i++) {

        if (myitem == a10[i]) {
            countStep++;
            // console.log(countStep);
            a10_res[myitem] = countStep;
            // a10_res[a10[i]] = countStep;
        }
    }
    countStep = 0;
}
console.log("------------------------------Task10.------------------------------");
console.log(a10_res);

//------------------------------Task11.------------------------------
// Эмулируем работу set. Пользователь может ввести значение в i-11. Напишите функцию, которая по нажатию b-11 запускает функцию t11. Функция получает введенное значение и добавляет его в массив a11_res. Добавление происхдит если такого значения в массиве нет. После каждой операции выводите a11_res на страницу.

let buttonContentEleven = document.querySelector("#b-11");
let inputContentEleven = document.querySelector("#i-11");
let textContentEleven = document.querySelector("#text-content__eleven");
let a11_res = [];

buttonContentEleven.onclick = t11;

function t11() {
    let a = inputContentEleven.value;

    a11_res.push(a);

    let c = new Set(a11_res);

    console.log("------------------------------Task11.------------------------------");
    console.log(c);

    return textContentEleven.innerHTML = a11_res;
}

//------------------------------Task12.------------------------------
// Напишите функцию, которая принимает в качестве параметра набор set и преобразует его в массив, результат выводит на страницу и присваивает a12_res. Действия должны запускаться при вызове функции t12.

let textContentTwelve = document.querySelector("#text-content__twelve");
let setTwelve = new Set(["string", "hack", "crazy", "icon"]);

function t12(set) {
    let a12_res = [];
    for (item of setTwelve) {
        // console.log(item);
        a12_res.push(item);
        // console.log(a12_res);
    }
    return textContentTwelve.innerHTML = a12_res;
}
t12(setTwelve);
//------------------------------Task13.------------------------------
// Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр. Действия должны запускаться при вызове функции t13.

let textContentThirteen = document.querySelector("#text-content__thirteen");
let setThirteen = new Set(["animal"]);
// console.log(setThirteen);

function t13(set, animal) {
    for (item of animal) {
        // console.log(item);
    }

    return textContentThirteen.innerHTML += `answer:  ${item}`;
}
t13(null, setThirteen);

//------------------------------Task14.------------------------------
// Напишите функцию, которая принимает set и выводит его на страницу в указанный элемент. Элемент задавать как второй параметр. Третий параметр - разделитель. Действия должны запускаться при вызове функции t14. Т.е. ввели в качестве разделителя дефис и вывод на страницу 1-2-3- (без пробелов).

let textContentFourteen = document.querySelector("#text-content__fourteen");
let setFourteen = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])

function t14(one, two, three) {
    one = null;

    for (item of two) {
        // console.log(item);
        textContentFourteen.innerHTML += `${item}${three}`;
    }

}
t14(null, setFourteen, "-");

//------------------------------Task15.------------------------------
// Дан массив arr15 = [ [1,0], [1,0], [2,0] ] . Добавьте вложенные в него массивы в набор. Изучите результат. Результирующий набор a15_res выведите на страницу. Добавление сделайте через цикл. Действия должны запускаться при вызове функции t15. Результат операции запишите в a15_res.

let textContentFifteen = document.querySelector("#text-content__fifteen");
let arr15 = [[1, 0], [1, 0], [2, 0]];
let a15_res = new Set();



//------------------------------Task16.------------------------------
// Дан массив a16 = [ { Ivan: 1 }, { Ivan: 1 }, { Ivan: 2 }, { Serg: 0 } ]. Добавьте вложенные в него массивы в набор. Изучите результат. Результирующий набор выведите в консоль. Добавление сделайте через цикл. Действия должны запускаться при вызове функции t15. Результат операции запишите в a16_res.

let a16 = [
    { Ivan: 1 },
    { Ivan: 1 },
    { Ivan: 2 },
    { Serg: 0 }
];
let setSixteen = new Set();
let a16_res = [];

setSixteen.add(a16);
// console.log("------------------------------Task16.------------------------------");
// console.log(setSixteen);

function t15() {
    a15_res.add(arr15[0][0]);
    a15_res.add(arr15[0][1]);
    a15_res.add(arr15[1][0]);
    a15_res.add(arr15[1][1]);
    a15_res.add(arr15[2][0]);
    a15_res.add(arr15[2][1]);
    // console.log(a15_res);

    for (item of a15_res) {
        // console.log(item);
        textContentFifteen.innerHTML += `${item} `;
    }


    for (key of setSixteen) {
        a16_res.push(key);
    }

    console.log("------------------------------Task16.------------------------------");
    console.log(a16_res);
}
t15();

//------------------------------Task17.------------------------------
// Создайте строку u17 = 'Primer'. Создайте новый набор с Set(u17). Выведите в консоль. Изучите результат. Действия должны запускаться при вызове функции t17.

let u17 = 'Primer';

function t17() {
    let setSeventeen = new Set(u17);

    console.log("------------------------------Task17.------------------------------");
    console.log(setSeventeen);
}

t17();

//------------------------------Task18.------------------------------
// Переберите массив a18 = [5, 7, 9, 11, 13, 15], c помощью цикла for of. Выведите на страницу в виде ключ - значение (разделены дефисом без пробелов). В конце строки - br. Результирующую строку присвойте a18_res. Действия должны запускаться при вызове функции t18

let textContentEighteen = document.querySelector(".text-content__eighteen");
let a18 = [5, 7, 9, 11, 13, 15];
let a18_res = "";

function t18() {
    for (keyf of a18) {
        a18_res += `${keyf}-`
    }
    return textContentEighteen.innerHTML = `${a18_res} <br>`;
}

t18();

//------------------------------Task19.------------------------------
// Создайте набор a19 и добавьте в него значения. Выведите на страницу каждый второй по счету элемент набора. Действия должны запускаться при вызове функции t19.

let textContentNinteen = document.querySelector(".text-content__ninteen");
let a19 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let coutnA19 = [];
let countNinteen = "";
// console.log(a19);

function t19() {
    for (item of a19) {
        // console.log(item);
        coutnA19.push(item);
    }
    for (i = 1; i < coutnA19.length; i = i + 2) {
        countNinteen += `${coutnA19[i]} `;
    }
    textContentNinteen.innerHTML = `${countNinteen}`;
}

t19();

//------------------------------Task20.------------------------------
// Создайте функцию, которая принимает массив и четные по индексу элементы добавляет в набор s20_res в нечетные в набор s21_res. Выводите данные наборы в консоль.

let arrayTwenty = [2, 1, 3, 4, 6, 7, 1, 0, 9, 8];
let s20_res = new Set();
let s21_res = new Set();

function getCountSet(arraySet) {
    for (i = 0; i < arraySet.length; i++) {
        if (arraySet[i] % 2 == 0 && arraySet[i] > 0) {
            s20_res.add(arraySet[i]);

        }
        else if (arraySet[i] % 2) {
            s21_res.add(arraySet[i]);

        }
    }
    console.log("------------------------------Task20.------------------------------");
    console.log(s20_res);
    console.log(s21_res);
}

getCountSet(arrayTwenty);

//------------------------------Task1.------------------------------
// Переберите массив a2 = [5, 7, 9, 11, 13, 15], c помощью цикла for. Выведите на страницу в виде ключ - значение. Разделение между ключем и значением пользователь может выбирать из выпадающего списка (пробел, дефис, две точки).

let textContentBlockTwoLevel = document.querySelector(".text-content__block-two__level");
let textContentAnswerTwoLevel = document.querySelector(".text-content__answer-two__level");
let a2 = [5, 7, 9, 11, 13, 15];
// let symbol = "";
let setSymbol = {
    "space": " ",
    "dash": " - ",
    "colon": " : ",
}
let section = "";
let countOneArray = "";
let countTwoArray = "";
let selectSet = "";

function getValue(assArr) {
    let keys = [];
    for (key in assArr) {
        keys.push(key);
    }
    return keys;
}

countOneArray = getValue(setSymbol);

function getKey(assArr) {
    let values = [];
    for (value in assArr) {
        values.push(assArr[value]);
    }
    return values;
}

countTwoArray = getKey(setSymbol);

function getKeyValue(arr, symbol) {
    let count = "";
    for (i = 0; i < arr.length; i++) {
        count += arr[i] + symbol;
    }
    return `${count} <br>`;
}

function getSelect(array) {
    selectSet = document.createElement("select");
    selectSet.id = "setTwoLevel";
    textContentBlockTwoLevel.appendChild(selectSet);

    for (i = 0; i < array.length; i++) {
        section = document.createElement("option");
        section.text = array[i];
        selectSet.appendChild(section);
    }
}

getSelect(countOneArray);

textContentAnswerTwoLevel.innerHTML = getKeyValue(a2, countTwoArray[0]);

selectSet.addEventListener("change", function () {
    let countSelect = this.value;
    // console.log(countSelect);
    if (countSelect == "space") {
        // console.log(getKeyValue(a2, countTwoArray[0]));
        textContentAnswerTwoLevel.innerHTML = getKeyValue(a2, countTwoArray[0]);
    }
    else if (countSelect == "dash") {
        // console.log(getKeyValue(a2, countTwoArray[1]));
        textContentAnswerTwoLevel.innerHTML = getKeyValue(a2, countTwoArray[1]);
    }
    else if (countSelect == "colon") {
        // console.log(getKeyValue(a2, countTwoArray[2]));
        textContentAnswerTwoLevel.innerHTML = getKeyValue(a2, countTwoArray[2]);
    }
})

