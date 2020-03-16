//------------------------------Task1.------------------------------
// Выведите массив a1 на страницу.

let a1 = {
    3: 'hello',
    'one': 'hi'
};

let answerOne = "";
let contentTextOne = document.querySelector(".content-text__one");

for (key in a1) {
    answerOne += `${key} : ${a1[key]} <br>`;
}

contentTextOne.innerHTML = answerOne;

//------------------------------Task2.------------------------------
// Выведите на страницу элементы из масиива a2 у которых символов больше 4.


let contentTextTwo = document.querySelector(".content-text__two");
let answerTwo = "";

let a2 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov',
};

for (key in a2) {
    if (a2[key].length - 1 > 4) {
        answerTwo += `${a2[key]} `;
    }
}

contentTextTwo.innerHTML += answerTwo;

//------------------------------Task3.------------------------------
// Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.

let contentThree = document.querySelector(".content-text__three");
let answerThree = "";

a3 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};

for (key in a3) {
    if (key.length > 4) {
        answerthree = key;
    }
}

contentThree.innerHTML += answerthree;

//------------------------------Task4.------------------------------
// Выведите на страницу элементы из масиива a4 у которых значение - число.

let contentFour = document.querySelector(".content-text__four");
let answerFour = "";

a4 = {
    3: 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};

for (key in a4) {
    if (typeof a4[key] == "number") {
        answerFour += `${a4[key]}, `;
    }
}

contentFour.innerHTML += answerFour;

//------------------------------Task5.------------------------------
// Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.

let contentFive = document.querySelector(".content-text__five");
let answerFive = 0;

a5 = {
    a: 7,
    z: 4,
    45: 12,
    f: 6
};

for (key in a5) {
    answerFive += a5[key];
}

contentFive.innerHTML += answerFive;

//------------------------------Task6.------------------------------
// Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого персонажа. Выведите массив на страницу.

let contentSix = document.querySelector(".content-text__six");
let ab = {
    name: "Ivan",
    age: 30,
    sex: "male",
    height: 165,
    hobbi: "js",
};
let answerSix = "";

for (key in ab) {
    answerSix += `${key} : ${ab[key]} <br>`;
}

contentSix.innerHTML += answerSix;

//------------------------------Task7.------------------------------
// Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки добавляйте в массив новое значение с соответствующим ключем. Выводите массив на страницу.

let inputContentSevenOne = document.querySelector(".u7-key__input");
let inputContentSevenTwo = document.querySelector(".u7-value__input");
let buttonContentSeven = document.querySelector(".btn-content__seven");
let contentTextSeven = document.querySelector(".content-text__seven");
let a7 = {};

buttonContentSeven.onclick = function () {
    let a = inputContentSevenOne.value;
    let b = inputContentSevenTwo.value;
    let count = "";
    a7[a] = b;
    for (let key in a7) {
        count += `${key} : ${a7[key]} <br>`;
    }
    contentTextSeven.innerHTML = `${count} <br>`;
}


//------------------------------Task8.------------------------------
// Добавьте к предыдущей задачи input.u8-key__input и кнопку. При нажатии кнопки - удаляйте значение с соответствующим ключем. Выводите массив на страницу.

let inputContentEight = document.querySelector(".u8-key__input")
let contetnTextEight = document.querySelector(".content-text__eight");
let buttonContentEight = document.querySelector(".btn-content__eight");

buttonContentEight.onclick = function () {
    let a = inputContentEight.value;
    let count = "";

    for (one in a7) {
        if (a7[one] == a) {
            delete a7[one];
        }
    }
    for (two in a7) {
        count += `${two} : ${a7[two]} <br>`;
    }
    return contetnTextEight.innerHTML = `${count} <br>`;
}

//------------------------------Task9.------------------------------
// Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. При нажатии кнопки - удаляйте записи с соответствующим значением. Выводите массив на страницу.

let inputContentNine = document.querySelector(".u9-delete-value__input");
let buttonContentNine = document.querySelector(".btn-content__nine");
let contentTextNine = document.querySelector(".content-text__nine");

buttonContentNine.onclick = function () {
    let a = inputContentNine.value;
    let count = "";

    for (key in a7) {
        if (key == a) {
            delete a7[key];
        }
    }
    for (keys in a7) {
        count += `${keys} : ${a7[keys]} <br>`;
    }
    contentTextNine.innerHTML = `${count} <br>`;
}

//------------------------------Task10.------------------------------
// Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки - возвращайте true если такой ключ есть в массиве, и false если нет.

let inputConetntTen = document.querySelector(".u10-has-key__input");
let buttonContentTen = document.querySelector(".btn-content__ten");
let contentTextTen = document.querySelector(".content-text__ten");

buttonContentTen.onclick = function () {
    let count = false;
    let a = inputConetntTen.value;

    for (j in a7) {
        if (j == a) {
            count = `true <br>`;
            break;
        }
    }
    contentTextTen.innerHTML = `${count} <br>`;
}
//------------------------------Task11.------------------------------
// Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.

let contentTextEleven = document.querySelector(".content-text__eleven");
let countEleven = "";
let a11 = {
    "red": ['Академгородок', ' Житомирская', ' Святошин', ' Нивки', ' Берестейская', ' Шулявская', ' Политехнический институт', ' Вокзальная', ' Университет', ' Театральная', ' Крещатик', ' Арсенальная', ' Днепр', ' Гидропарк', ' Левобережная', ' Дарницкая', ' Черниговская', ' Лесная',],
    "green": [' Сырец', ' Дорогожичи', ' Лукьяновская', ' Золотые ворота', ' Театральная', ' Дворец спорта', ' Кловская', ' Перская', ' Дружбы народов', ' Выдубичи', ' Славутич', ' Осокорки', ' Позняки', ' Харьковская', ' Вырлица', ' Бориспольская', ' Красный хутор',],
    "blue": [' Героев Днепра', ' Минская', ' Оболонь', ' Петровка', ' Тараса Шевченко', ' Контрактовая площадь', ' Почтовая площадь', ' Площадь Независимости', ' Площадь Льва Толстого', ' Олимпийская', ' Дворец "Украина"', ' Лыбедская', ' Демеевская', ' Голосеевская', ' Васильковская', ' Выставочный центр', ' Ипподром', ' Теремки',],
};
for (let maps in a11) {
    countEleven += `${maps}: ${a11[maps]} <br><br>`;
}

contentTextEleven.innerHTML += `${countEleven} <br>`;
//------------------------------Task12.------------------------------
// Добавьте к предыдущей задаче select.u12-branch и кнопку. Пользователь может выбрать цвет ветки и нажать кнопку, после чего на страницу будут выведены только станции данной ветки.

let buttonContentRed = document.querySelector(".btn-content__red");
let buttonContentGreen = document.querySelector(".btn-content__green");
let buttonContentBlue = document.querySelector(".btn-content__blue");
let contentTextTwelve = document.querySelector(".content-text__twelve");

buttonContentRed.onclick = function () {
    // let arrayRed = Object.values(a11)[0];
    // let keysRed = Object.keys(a11)[0];
    // contentTextTwelve.innerHTML += `${keysRed} : ${arrayRed} <br><br>`;

    count = "";
    for (red in a11) {
        count = `${"red"} : ${a11["red"]} <br><br>`;
    }
    return contentTextTwelve.innerHTML += count;
}

buttonContentGreen.onclick = function () {
    // let arrayGreen = Object.values(a11)[1];
    // let keysGreen = Object.keys(a11)[1];
    // contentTextTwelve.innerHTML += `${keysGreen} : ${arrayGreen} <br><br>`;

    for (green in a11) {
        count = `${"green"} : ${a11["green"]} <br><br>`;
    }
    return contentTextTwelve.innerHTML += count;
}

buttonContentBlue.onclick = function () {
    // let arrayBlue = Object.values(a11)[2];
    // let keysBlue = Object.keys(a11)[2];
    // contentTextTwelve.innerHTML += `${keysBlue} : ${arrayBlue} <br><br>`;

    for (blue in a11) {
        count = `${"blue"} : ${a11["blue"]} <br><br>`;
    }
    return contentTextTwelve.innerHTML += count;
}

//------------------------------Task13.------------------------------
// Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит станции ветки в обратном порядке. Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!!

let buttonContentThirteen = document.querySelector(".u13-reverse");
let contentTextThirteen = document.querySelector(".content-text__thirteen");

buttonContentThirteen.onclick = function () {
    let a = "";
    for (keym in a11) {
        a += `${keym} : ${a11[keym].reverse()} <br><br>`;
    }
    contentTextThirteen.innerHTML += a;
}

//------------------------------Task14.------------------------------
// Добавьте к предыдущей задаче select.u14-find-station и кнопку. В select - пользователь может выбрать станцию, а вы перебирая массив - вывести ветку на которой эта станция находится.

let contentSelectFourteen = document.querySelector(".selector-station__fourteen");
let buttonContentFourteen = document.querySelector(".btn-content__fourteen");
let contentTextFourteen = document.querySelector(".content-text__fourteen");
let arraOne = [];
let arraTwo = [];
let arraThree = [];

for (key in a11) {
    if (key == "red") {
        for (i = 0; i < a11[key].length; i++) {
            arraOne.push(a11[key][i]);
            answerred = 'red';
        }
    }
    else if (key == "green") {
        for (t = 0; t < a11[key].length; t++) {
            arraTwo.push(a11[key][t]);
            answergreen = 'green';
        }
    }
    else if (key == "blue") {
        for (r = 0; r < a11[key].length; r++) {
            arraThree.push(a11[key][r]);
            answerblue = 'blue';
        }
    }
}

let selectList = document.createElement("select");

selectList.id = "u14-find-station";
selectList.name = "selectlist";

contentSelectFourteen.appendChild(selectList);

for (t = 0; t < arraOne.length; t++) {
    let option = document.createElement("option");
    option.id += "one";
    option.value = option.id;
    option.text = arraOne[t];
    selectList.appendChild(option);
}

for (t = 0; t < arraTwo.length; t++) {
    let option = document.createElement("option");
    option.id += "two";
    option.value = option.id;
    option.text = arraTwo[t];
    selectList.appendChild(option);
}

for (t = 0; t < arraThree.length; t++) {
    let option = document.createElement("option");
    option.id += "three";
    option.value = option.id;
    option.text = arraThree[t];
    selectList.appendChild(option);
}

buttonContentFourteen.onclick = function () {
    if (selectList.value == "one") {
        contentTextFourteen.innerHTML = "Вы находитесь на красной ветке метро";
    }
    else if (selectList.value == "two") {
        contentTextFourteen.innerHTML = "Вы находитесь на зеленой ветке метро";
    }
    else if (selectList.value == "three") {
        contentTextFourteen.innerHTML = "Вы находитесь на синей ветке метро";
    }
}

//------------------------------Task15.------------------------------
// Добавьте к предыдущему заданию 2 select где пользователь может выбрать 2 станции, и если они на одной ветке - то по нажатию на кнопку будет показано сколько станций между ними (сами станции не включаем. Если это соседние станции - то 0).

let contentSelectFifteenOne = document.querySelector(".selector-station__fifteen-one");
let contentSelectFifteenTwo = document.querySelector(".selector-station__fifteen-two");
let buttonContentFifteen = document.querySelector(".btn-content__fifteen");
let contentTextFifteen = document.querySelector(".content-text__fifteen");

let selectListOne = document.createElement("select");

selectListOne.id = "u15-find-station";
selectListOne.name = "selectlistOne";

contentSelectFifteenOne.appendChild(selectListOne);
for (i = 0; i < arraOne.length; i++) {
    let arraNew = [];
    arraNew.push(arraOne[i]);
    let optionOne = document.createElement("option");
    optionOne.classList += "one";
    optionOne.value += i;
    optionOne.text = arraOne[i];
    selectListOne.appendChild(optionOne);
}

for (i = 0; i < arraTwo.length; i++) {
    let optionOne = document.createElement("option");
    optionOne.classList += "two";
    optionOne.value = i;
    optionOne.text = arraTwo[i];
    selectListOne.appendChild(optionOne);
}

for (i = 0; i < arraThree.length; i++) {
    let optionOne = document.createElement("option");
    optionOne.classList += "three";
    optionOne.value = i;
    optionOne.text = arraThree[i];
    selectListOne.appendChild(optionOne);
}

let selectListTwo = document.createElement("select");

selectListTwo.id = "u15-find-station";
selectListTwo.name = "selectlistOne";

contentSelectFifteenTwo.appendChild(selectListTwo);
let countoptionOne = [];
for (i = 0; i < arraOne.length; i++) {
    let arraNew = [];
    arraNew.push(arraOne[i]);
    countoptionOne += arraThree;
    let optionTwo = document.createElement("option");
    optionTwo.classList += "one";
    optionTwo.value = i;
    optionTwo.text = arraOne[i];
    selectListTwo.appendChild(optionTwo);
}

for (i = 0; i < arraTwo.length; i++) {
    let optionTwo = document.createElement("option");
    optionTwo.classList += "two";
    optionTwo.value = i;
    optionTwo.text = arraTwo[i];
    selectListTwo.appendChild(optionTwo);
}

for (i = 0; i < arraThree.length; i++) {
    let optionTwo = document.createElement("option");
    optionTwo.classList += "three";
    optionTwo.value = i;
    optionTwo.text = arraThree[i];
    selectListTwo.appendChild(optionTwo);
}

buttonContentFifteen.onclick = function () {
    if (selectListOne.value && selectListTwo.value) {
        let countMap = 0;
        for (i = selectListOne.value; i < selectListTwo.value; i++) {
            countMap++;
        }
        contentTextFifteen.innerHTML = `До следующей станции ${countMap} станции(й)!`;
    }
}

//------------------------------Task16.------------------------------
// Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в соотвтествии с цветом веток метро. Добавьте пустой select.u16-select. При выборе radio - программа должна в select добавлять option с названиями станций метро. Т.е. выбрали radio(value="green") то внутрь select должны быть записаны option со станциями зеленой ветки. Выбрали red - select должен быть очищен и добавлены option со станциями красной ветки.

let inputRadioSixteen = document.querySelectorAll(".ubat");
let contentBlockInfo = document.querySelector(".block-info");
let selectInfoSixteen = document.querySelector(".u16-select");

function selectOptions(array) {

    selectInfoSixteen.innerHTML = "";
    for (i = 0; i < array.length; i++) {
        optionInfo = document.createElement("option");
        optionInfo.innerHTML = array[i];
        selectInfoSixteen.appendChild(optionInfo);
    }
    return array;
}
selectOptions(arraOne);
for (i = 0; i < inputRadioSixteen.length; i++) {
    inputRadioSixteen[i].onchange = function () {
        let countValue = this.value;
        // console.log(countValue);
        if (countValue == "red") {

            selectOptions(arraOne);
        }
        if (countValue == "green") {
            selectOptions(arraTwo);
        }
        if (countValue == "blue") {
            selectOptions(arraThree);
        }
    }
}

//------------------------------Task17.------------------------------
// Создайте массив, который описывает метро киевского метрополитена и обозначаются конечные и станции перехода, выведите его на страницу. Конечные - обозначать 0, перехода - 1.

let contentTextSeventeen = document.querySelector(".content-text__seventeen");

a17 = {
    "red": [['Академгородок', 0], ' Житомирская', ' Святошин', ' Нивки', ' Берестейская', ' Шулявская', ' Политехнический институт', ' Вокзальная', ' Университет', [' Театральная', 1], [' Крещатик', 1], ' Арсенальная', ' Днепр', ' Гидропарк', ' Левобережная', ' Дарницкая', ' Черниговская', [' Лесная', 0]],
    "green": [[' Сырец', 0], ' Дорогожичи', ' Лукьяновская', [' Золотые ворота', 1], [' Дворец спорта', 1], ' Кловская', ' Перская', ' Дружбы народов', ' Выдубичи', ' Славутич', ' Осокорки', ' Позняки', ' Харьковская', ' Вырлица', ' Бориспольская', [' Красный хутор', 0]],
    "blue": [[' Героев Днепра', 0], ' Минская', ' Оболонь', ' Петровка', ' Тараса Шевченко', ' Контрактовая площадь', ' Почтовая площадь', [' Площадь Независимости', 1], [' Площадь Льва Толстого', 1], ' Олимпийская', ' Дворец "Украина"', ' Лыбедская', ' Демеевская', ' Голосеевская', ' Васильковская', ' Выставочный центр', ' Ипподром', [' Теремки', 0]]
};

let oneArray = a17.red;
let twoArray = a17.green;
let threeArray = a17.blue;
let allArrays = `${oneArray}<br><br>${twoArray}<br><br>${threeArray}`;

// contentTextSeventeen.innerHTML = Object.entries(a17);//более простой способ
contentTextSeventeen.innerHTML = allArrays;

//------------------------------Task18.------------------------------
// Выведите на страницу только станции с переходами из массива a17.

let conetentTextEighteen = document.querySelector(".content-text__eighteen");

let myArrayOne = a17.red[9];
let myArrayTwo = a17.red[10];

let myArrayThree = a17.green[3];
let myArrayFour = a17.green[4];

let myArrayFive = a17.blue[7];
let myArraySix = a17.blue[8];

let allMyArrays = myArrayOne + myArrayTwo + myArrayThree + myArrayFour + myArrayFive + myArraySix;

// console.log(allMyArrays);

conetentTextEighteen.innerHTML += allMyArrays;

//------------------------------Task19.------------------------------
// Создайте ассоциативный массив где ключами являются страны азии, а вложенными массивами - ассоциативный массив содержащий название столицы, количество населения, площадь. Выведите его на страницу.

let contentTextNinteen = document.querySelector(".content-text__ninteen");
let asianCountries = {
    "Abkhazia": {
        "Sukhum": [243564, 8600]
    },
    "Azerbaijan": {
        "Baku": [9705600, 86600]
    },
    "Armenia": {
        "Erevan": [2955100, 29741]
    },
    "Afganistan": {
        "Kabul": [29822848, 647500]
    },
    "Bangladesh": {
        "Dhaka": [160221000, 144000]
    },
    "Bahrain": {
        "Manama": [1397000, 701]
    },
    "Brunei": {
        "Bandar Seri Begaw an": [436620, 5770]
    },
    "Bhutan": {
        "Thimphu": [784000, 47000]
    },
    "East-Timor": {
        "Dili": [1167242, 14874]
    },
    "Vietnam": {
        "Hanoi": [91713300, 329560]
    },
    "Georgia": {
        "Tbilisi": [3720400, 69700]
    },
    "Israel": {
        "Jerusalem": [8585000, 22072]
    },
    "India": {
        "New-Delhi": [1268961000, 3287590]
    },
    "Indonesia": {
        "Jakarta": [255461700, 1904556]
    },
    "Jordan": {
        "Amman": [9813095, 89400]
    },
    "Iraq": {
        "Baghdad": [37883543, 437072]
    },
    "Iran": {
        "Theran": [80840713, 1648000]
    },
    "Yemen": {
        "Sana`a": [27478000, 527970]
    },
    "Kazakhstan": {
        "Astana": [17753200, 2724900]
    },
    "Cambodia": {
        "Phnom Penh": [15827000, 181040]
    },
    "Qatar": {
        "Doha": [848319, 9250]
    },
    "Cyprys": {
        "Nicosia": [6019500, 198500]
    },
    "China": {
        "Pekin": [1410549741, 9640821]
    },
    "North-Korea": {
        "Pyongyang": [25281000, 120540]
    },
    "Kuwait": {
        "Bishkek": [6019500, 198500]
    },
    "Laos": {
        "Vientiane": [6492400, 236800]
    },
    "Lebanon": {
        "Beirut": [5988000, 10452]
    },
    "Malaysia": {
        "Kuala Lumpur": [31790277, 31790277]
    },
    "Maldives": {
        "Male": [402071, 300]
    },
    "Mongolia": {
        "Ulan Bator": [3081677, 1564116]
    },
    "Myanmar": {
        "Naypyidaw": [51419420, 678500]
    },
    "Nepal": {
        "Kathmandu": [28431494, 140800]
    },
    "United-Arab-Emirates": {
        "Abu Dhabi": [9267000, 82880]
    },
    "Oman": {
        "Muscat": [4523401, 309500]
    },
    "Pakistan": {
        "Islamabad": [196174380, 881913]
    },
    "Saudi-Arabia": {
        "Riyadh": [31015999, 2218000]
    },
    "Sinapore": {
        "Singapore": [5607300, 714]
    },
    "Syria": {
        "Damascus": [17185170, 185180]
    },
    "Tajikistan": {
        "Dushanbe": [8551000, 143100]
    },
    "Thailand": {
        "Bangkok": [68147000, 514000]
    },
    "Turkmenistan": {
        "Ashgabat": [5439000, 491200]
    },
    "Turkey": {
        "Ankara": [78741053, 780580]
    },
    "Uzberistan": {
        "Tashkent": [31807000, 447400]
    },
    "Philippines": {
        "Manila": [102980480, 300000]
    },
    "Sri-Lanka": {
        "Colombo": [21866445, 65610]
    },
    "South-Korea": {
        "Seoul": [53532, 3900]
    },
    "Japan": {
        "Tokyo": [127103388, 377944]
    },
}

let countCountries = "";

for (cou in asianCountries) {
    for (key in asianCountries[cou]) {
        countCountries += `<br> ${cou} - ${key} : ${asianCountries[cou][key]} <br>`;
    }
}

contentTextNinteen.innerHTML += countCountries;

//------------------------------Task20.------------------------------
// Дополните массив из задачи 19 так, чтобы пользователь мог сам выбирать страну в select, а необходимая информация подтягивалась на страницу.

let contentSelectTwenty = document.querySelector(".content-select__twenty");
let contentTextTwenty = document.querySelector(".content-text__twenty");
let selectCantries = document.createElement("select");
let optionCantri = "";
let oneArrayCantris = [];
let countCantri = "";

contentSelectTwenty.appendChild(selectCantries);

for (cou in asianCountries) {
    oneArrayCantris.push(cou);
}

selectCantries.addEventListener('change', function () {

    let values = asianCountries[this.value];
    for (j in values) {
        countCantri = `<br> ${j} : ${values[j]} <br>`;
    }
    contentTextTwenty.innerHTML = countCantri;
});

for (z = 0; z < oneArrayCantris.length; z++) {
    optionCantri = document.createElement('option');
    optionCantri.value = oneArrayCantris[z];
    optionCantri.innerHTML = oneArrayCantris[z];
    selectCantries.appendChild(optionCantri);
}
