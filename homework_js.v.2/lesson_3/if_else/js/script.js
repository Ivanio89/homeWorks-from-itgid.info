// ------------------------------Task1.------------------------------
console.log("------------------------------Task1.------------------------------");

const a = 4;

if (a == 4) {
    console.log(true);
}

// ------------------------------Task2.------------------------------
console.log("------------------------------Task2.------------------------------");

const b = 8;
const c = 10;

if (c < b) {
    console.log("b больше, чем c");
}
else if (c > b) {
    console.log("c больше, чем b");
}

// ------------------------------Task3.------------------------------
console.log("------------------------------Task3.------------------------------");

if (c < b) {
    console.log("b больше, чем c");
}
else if (c > b) {
    console.log("c больше, чем b");
}
else if (c == b) {
    console.log("c равно b");
}

// ------------------------------Task4.------------------------------

const buttonNumberOne = document.querySelector("#btn__number-one");
const numberOne = document.querySelector("#number__one");
const numberTwo = document.querySelector("#number__two");

buttonNumberOne.onclick = function () {
    let one = +numberOne.value;
    let two = +numberTwo.value;

    if (one == two) {
        console.log("------------------------------Task4.------------------------------");
        console.log("числа равны");
    }
    else if (one > two) {
        console.log("------------------------------Task4.------------------------------");
        console.log("первое число больше");
    }
    else if (one < two) {
        console.log("------------------------------Task4.------------------------------");
        console.log("второе число больше");
    }
}

// ------------------------------Task5.------------------------------

const buttonNumberTwo = document.querySelector("#btn__number-two");
const year = document.querySelector("#number__three");
const receiveOne = document.querySelector(".block__answer-one");

buttonNumberTwo.onclick = function () {
    let b = +year.value;
    let a = 2019 - b;

    if (b < 2000) {
        receiveOne.innerHTML += "Вам " + a + " лет ! ";
    }
    else if (b >= 2000) {
        receiveOne.innerHTML += "Вам " + a + " лет ! ";
    }
}

// ------------------------------Task6.------------------------------


const buttonNumberThree = document.querySelector("#btn__number-three");
const numberHous = document.querySelector("#number__four");
const receiveTwo = document.querySelector(".block__answer-two");

buttonNumberThree.onclick = function () {
    let a = +numberHous.value;

    if (a <= 32) {
        console.log("------------------------------Task6.------------------------------");
        console.log("Такая квартира тут есть!");
        receiveTwo.innerHTML += "Такая квартира тут есть!";
    }
    else if (a > 32) {
        console.log("------------------------------Task6.------------------------------");
        console.log("Такой квартиры тут нет!");
        receiveTwo.innerHTML += "Такой квартиры тут нет!";
    }
}

// ------------------------------Task7.------------------------------

const buttonNumberFour = document.querySelector("#btn__number-four");
const numberZero = document.querySelector("#number__five");
const receiveThree = document.querySelector(".block__answer-three");

buttonNumberFour.onclick = function () {
    let a = +numberZero.value;

    if (a > 0) {
        receiveThree.innerHTML += "Больше нуля! ";
    }
    else {
        receiveThree.innerHTML += "Меньше нуля! ";
    }
}

// ------------------------------Task8.------------------------------

const buttonNumberFive = document.querySelector("#btn__number-five");
const numberDegree = document.querySelector("#number__six");
const receiveFour = document.querySelector(".block__answer-four");

buttonNumberFive.onclick = function () {
    let a = +numberDegree.value;

    if (a % 2 == 0) {
        receiveFour.innerHTML += "Четное! ";
    }
    else {
        receiveFour.innerHTML += "Не четное! ";
    }
}

// ------------------------------Task9.------------------------------

const buttonNumberSix = document.querySelector("#btn__number-six");
const numberStantDown = document.querySelector("#number__seven");
const numberStantUp = document.querySelector("#number__eight");
const receiveFive = document.querySelector(".block__answer-five");

buttonNumberSix.onclick = function () {
    let a = +numberStantDown.value;
    let b = +numberStantUp.value;

    if (a == '') {
        receiveFive.innerHTML += "Введите число! ";
    }
    else if (b == '') {
        receiveFive.innerHTML += "Введите число! ";
    }
    else {
        receiveFive.innerHTML += a ** b + " Ваш результат! ";
    }
}

// ------------------------------Task10.------------------------------

const buttonNumberSeven = document.querySelector("#btn__number-seven");
const numberName = document.querySelector("#number__nine");

buttonNumberSeven.onclick = function () {
    let a = numberName.value;

    if (a == "") {
        alert("Укажите свое имя");
    }
    else if (a.indexOf(" ") > -1) {
        alert("Имя не может состоять из пробелов");
    }
    else {
        alert("Hello " + a);
    }
}

// ------------------------------Task11.------------------------------

const buttonNumberNine = document.querySelector("#btn__number-nine");
const numberNameToo = document.querySelector("#number__ten");
const receiveSix = document.querySelector(".block__answer-six");

buttonNumberNine.onclick = function () {
    let a = numberNameToo.value;

    a = a.trim();
    if (a == "") {
        console.log("------------------------------Task11.------------------------------")
        console.log("Error!");
        receiveSix.innerHTML += "Error!" + ", ";
    }
    else {
        console.log("------------------------------Task11.------------------------------")
        console.log(a);
        receiveSix.innerHTML += a + ", ";
    }
}

// ------------------------------Task12.------------------------------

const buttonNumberTen = document.querySelector("#btn__number-ten");
const numberforConsole = document.querySelector("#number__eleven");

buttonNumberTen.onclick = function () {
    let a = +numberforConsole.value;

    switch (a) {
        case 1:
            console.log("------------------------------Task12.------------------------------");
            console.log("one");
            break;
        case 2:
            console.log("------------------------------Task12.------------------------------");
            console.log("two");
            break;
        case 3:
            console.log("------------------------------Task12.------------------------------");
            console.log("three")
            break;
        default:
            console.log("------------------------------Task12.------------------------------");
            console.log("number from 1 to 3");
    }
}

// ------------------------------Task13.------------------------------

const buttonNumberEleven = document.querySelector("#btn__number-eleven");
const numberStreet = document.querySelector("#number__twelve");

buttonNumberEleven.onclick = function () {
    let a = +numberStreet.value;

    if (a <= 5) {
        console.log("------------------------------Task13.------------------------------");
        console.log("Улица 1");
    }
    else if (a <= 11 && a >= 6) {
        console.log("------------------------------Task13.------------------------------");
        console.log("Улица 2");
    }
    else if (a >= 11 && a <= 20) {
        console.log("------------------------------Task13.------------------------------");
        console.log("Улица 3");
    }
}

// ------------------------------Task14.------------------------------

const buttonNumberTwelve = document.querySelector("#btn__number-twelve");
const numberRetgen = document.querySelector("#number__thirteen");
const receiveSeven = document.querySelector(".block__answer-seven");

buttonNumberTwelve.onclick = function () {
    let a = +numberRetgen.value;

    if (a > 0 && a <= 25) {
        receiveSeven.innerHTML += "не обнаруживается, ";
    }
    else if (a > 25 && a <= 50) {
        receiveSeven.innerHTML += "снижение числа лимфоцитов, ";
    }
    else if (a > 50 && a <= 100) {
        receiveSeven.innerHTML += "вялость, рвота, ";
    }
    else if (a > 100 && a <= 150) {
        receiveSeven.innerHTML += "смертность 5%, ";
    }
    else if (a > 150 && a <= 350) {
        receiveSeven.innerHTML += "смертность 50% за 30 суто, ";
    }
    else if (a > 350 && a <= 600) {
        receiveSeven.innerHTML += "90% смертность за 2 недели, ";
    }
}

// ------------------------------Task15.------------------------------

const buttonNumberThirteen = document.querySelector("#btn__number-thirteen").onclick = function () {
    let x = 1;
    let y = 0;

    if (x == 1 && y == 0) {
        console.log("------------------------------Task15.------------------------------");
        console.log("&& - это оператор строгое сравнения 'и' то есть оба ответа дожны быть истиной.");
    }

}

const buttonNumberFourteen = document.querySelector("#btn__number-fourteen").onclick = function () {
    let x = 1;
    let y = 0;

    if (x == 0 || y == 0) {
        console.log("------------------------------Task15.------------------------------");
        console.log("|| - это оператор сравнения 'или' хотябы один ответ должен быть истиной.")
    }

}

// ------------------------------Task16.------------------------------

const numberEngine = document.querySelector("#number__fourteen");
const buttonNumberFiveteen = document.querySelector("#btn__number-fiveteen");
const receiveNine = document.querySelector(".block__answer-nine");

buttonNumberFiveteen.onclick = function () {
    let a = +numberEngine.value;

    if (a == 500) {
        console.log("------------------------------Task16.------------------------------");
        console.log("Ваш налог составляет 2525 тенге");
        receiveNine.innerHTML += "Ваш налог составляет 2525 тенге";
    }
    else if (a == 1200) {
        console.log("------------------------------Task16.------------------------------");
        console.log("Ваш налог составляет 5050 тенге");
        receiveNine.innerHTML += "Ваш налог составляет 5050 тенге";
    }
    else if (a == 1600) {
        console.log("------------------------------Task16.------------------------------");
        console.log("Ваш налог составляет 8275 тенге");
        receiveNine.innerHTML += "Ваш налог составляет 8275 тенге";
    }
    else if (a == 1900) {
        console.log("------------------------------Task16.------------------------------");
        console.log("Ваш налог составляет 9675 тенге");
        receiveNine.innerHTML += "Ваш налог составляет 9675 тенге";
    }
    else if (a == 2000) {
        console.log("------------------------------Task16.------------------------------");
        console.log("Ваш налог составляет 11075 тенге");
        receiveNine.innerHTML += "Ваш налог составляет 11075 тенге";
    }
}

// ------------------------------Task17.------------------------------

const numberMoneyOne = document.querySelector("#number__fiveteen");
const numberMoneyTwo = document.querySelector("#number__sixteen");
const buttonNumberSixteen = document.querySelector("#btn__number-sixteen");
const receiveTen = document.querySelector(".block__answer-ten");

buttonNumberSixteen.onclick = function () {
    let a = +numberMoneyOne.value;
    let b = numberMoneyTwo.value;

    if (a > 0 && b == "rub") {
        let r = a * 66.05
        console.log("------------------------------Task17.------------------------------");
        console.log("Ваши " + a + " доллaров будет " + r.toFixed(3) + " в рублях!");
        receiveTen.innerHTML += "Ваши " + a + " доллaров будет " + r.toFixed(3) + " в рублях!";
    }
    else if (a > 0 && b == "euro") {
        let e = a * 1.10;
        console.log("------------------------------Task17.------------------------------");
        console.log("Ваши " + a + " доллaров будет " + e.toFixed(3) + " в еврах!");
        receiveTen.innerHTML += "Ваши " + a + " доллaров будет " + e.toFixed(3) + " в еврах!";
    }
    else if (a > 0 && b == "uah") {
        let u = a * 10;
        console.log("------------------------------Task17.------------------------------");
        console.log("Ваши " + a + " доллaров будет " + u.toFixed(3) + " в гривнах!");
        receiveTen.innerHTML += "Ваши " + a + " доллaров будет " + u.toFixed(3) + " в гривнах!";
    }
}

// ------------------------------Task18.------------------------------

const numberMoneyThree = document.querySelector("#number__seventeen");
const numberMoneyFour = document.querySelector("#number__nineteen");
const buttonNumberSeventeen = document.querySelector("#btn__number-seventeen");
const receiveEleven = document.querySelector(".block__answer-eleven");

buttonNumberSeventeen.onclick = function () {
    let a = +numberMoneyThree.value;
    let b = numberMoneyFour.value;
    switch (a > 0) {
        case b == "rub":
            let r = a * 66.05;
            console.log("------------------------------Task17.------------------------------");
            console.log("Ваши " + a + " доллaров будет " + r.toFixed(3) + " в рублях!");
            receiveEleven.innerHTML += "Ваши " + a + " доллaров будет " + r.toFixed(3) + " в рублях!";
            break;
        case b == "euro":
            let e = a * 1.10;
            console.log("------------------------------Task17.------------------------------");
            console.log("Ваши " + a + " доллaров будет " + e.toFixed(3) + " в еврах!");
            receiveEleven.innerHTML += "Ваши " + a + " доллaров будет " + e.toFixed(3) + " в еврах!";
            break;
        case b == "uah":
            let u = a * 10;
            console.log("------------------------------Task17.------------------------------");
            console.log("Ваши " + a + " доллaров будет " + u.toFixed(3) + " в гривнах!");
            receiveEleven.innerHTML += "Ваши " + a + " доллaров будет " + u.toFixed(3) + " в гривнах!";
            break;
    }
}

// ------------------------------Task19.------------------------------

const numberSignOne = document.querySelector("#number__twenty");
const numberSignTwo = document.querySelector("#number__twenty-one");
const numberSign = document.querySelector("#number__twenty-two");
const buttonNumberNineteen = document.querySelector("#btn__number-nineteen");
const receiveTwolve = document.querySelector(".block__answer-twelve");

buttonNumberNineteen.onclick = function () {
    let a = +numberSignOne.value;
    let b = +numberSignTwo.value;
    let c = numberSign.value;

    if (c == "/") {
        receiveTwolve.innerHTML += a / b + ", ";
    }
    else if (c == "*") {
        receiveTwolve.innerHTML += a * b + ", ";
    }
    else if (c == "+") {
        receiveTwolve.innerHTML += a + b + ", ";
    }
    else if (c == "-") {
        receiveTwolve.innerHTML += a - b + ", ";
    }
}

// ------------------------------Task20.------------------------------

const numberSignThree = document.querySelector("#number__twenty-three");
const numberSignFour = document.querySelector("#number__twenty-four");
const numberOneSign = document.querySelector("#number__twenty-five");
const buttonNumberTwenty = document.querySelector("#btn__number-twenty");
const receiveThirteen = document.querySelector(".block__answer-thirteen");

buttonNumberTwenty.onclick = function () {
    let a = +numberSignThree.value;
    let b = +numberSignFour.value;
    let c = numberOneSign.value;
    switch (a > 0 && b > 0) {
        case c == "/":
            receiveThirteen.innerHTML += a / b + ", ";
            break;
        case c == "*":
            receiveThirteen.innerHTML += a * b + ", ";
            break;
        case c == "+":
            receiveThirteen.innerHTML += a + b + ", ";
            break;
        case c == "-":
            receiveThirteen.innerHTML += a - b + ", ";
            break;
    }
}