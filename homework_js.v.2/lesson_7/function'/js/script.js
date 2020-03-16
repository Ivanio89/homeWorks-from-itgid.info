//------------------------------Task1.------------------------------

const buttonContentOne = document.querySelector("#btn__content-first");

buttonContentOne.addEventListener("click", () => { ansverConsoleOne() });

function ansverConsoleOne() {
    console.log("------------------------------Task1.------------------------------");
    return console.log("My name Ivan");
}

//------------------------------Task2.------------------------------

function ansverConsoleTwo(name) {
    console.log("------------------------------Task2.------------------------------")
    return console.log(name);
}

ansverConsoleTwo("Sergey");

//------------------------------Task3.------------------------------

const buttonContentThird = document.querySelector("#btn__content-third");

buttonContentThird.addEventListener("click", () => { ansverConsoleThree(20) });

function ansverConsoleThree(number) {
    console.log("------------------------------Task3.------------------------------")
    return console.log(number * 10);
}

//------------------------------Task4.------------------------------

const buttonContentFourch = document.querySelector("#btn__content-fourch");

buttonContentFourch.addEventListener("click", ansverConsoleFourch);

function ansverConsoleFourch() {
    buttonContentFourch.style.backgroundColor = "red";
    buttonContentFourch.style.outline = "none";
}

//------------------------------Task5.------------------------------

const contentFifth = document.querySelector("#content__answer-fifth");
const buttonContentFifth = document.querySelector("#btn__content-fifth");

buttonContentFifth.addEventListener("click", ansverFifth);

function ansverFifth() {
    console.log("------------------------------Task5.------------------------------");
    return console.log(contentFifth.value);
}

//------------------------------Task6.------------------------------

const contentSixth = document.querySelector("#content__answer-sixth");
const contentSixthOne = document.querySelector("#content__answer-sixth-one");
const buttonContentSixth = document.querySelector("#btn__content-sixth");

buttonContentSixth.addEventListener("click", ansverSixth);

function ansverSixth() {
    let a = +contentSixth.value;
    let b = +contentSixthOne.value;
    console.log("------------------------------Task6.------------------------------");
    if (a > b) {
        return console.log(a);
    }
    else if (b > a) {
        return console.log(b);
    }
    else if (a == b) {
        return console.log(a);
    }
}

//------------------------------Task7.------------------------------

const contentSeventh = document.querySelector("#content__answer-seventh");
const buttonContentSeventh = document.querySelector("#btn__content-seventh");

buttonContentSeventh.addEventListener("click", ansverConsoleSeventh);

function ansverConsoleSeventh() {
    let a = +contentSeventh.value;
    let b = 2019;
    let result = b - a;
    console.log("------------------------------Task7.------------------------------")
    return console.log("You have are " + result + " years");
}

//------------------------------Task8.------------------------------

const buttonContentEighth = document.querySelector("#btn__content-eighth");

buttonContentEighth.addEventListener("click", ansverConsoleEighth);

function ansverConsoleEighth() {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log("------------------------------Task8.------------------------------")
    return console.log(randomNumber);
}

//------------------------------Task9.------------------------------

let one = 10;
let two = 1;

function ansverConsoleTenth(one, two) {
    console.log("------------------------------Task9.------------------------------");
    let x = one - two;
    let numberRandom = Math.floor(Math.random() * x);
    return numberRandom;
}

console.log(ansverConsoleTenth(one, two))

//------------------------------Task10.------------------------------

function getRandomColor() {
    console.log("------------------------------Task10.------------------------------")
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "#" + r + g + b;
    return color;
}

console.log(getRandomColor());

//------------------------------Task11.------------------------------

function f11() {
    return 5;
}

function getmultiplay(numberone, numbertwo) {
    console.log("------------------------------Task11.------------------------------");
    return numberone * numbertwo;
}

console.log(getmultiplay(f11(), 11))

//------------------------------Task12.------------------------------

let contentTvelfth = document.querySelector("#content__answer-tvelfth");
let buttonTvelfth = document.querySelector("#btn__content-tvelfth");

buttonTvelfth.addEventListener("click", toNum);

function toNum(param) {
    console.log("------------------------------Task12.------------------------------");
    let a = +contentTvelfth.value;
    return console.log(a);
}

//------------------------------Task13.------------------------------

let contentThirteenth = document.querySelector("#content__answer-thirteenth");
let buttonThirteenth = document.querySelector("#btn__content-thirteenth");

buttonThirteenth.addEventListener("click", toNumtoo);

function toNumtoo(tonumber) {
    console.log("------------------------------Task13.------------------------------");
    let a = contentThirteenth.value.trim();
    if (a == "") {
        return console.log(false);
    }
    else {
        return console.log(a);
    }
}

//------------------------------Task14.------------------------------

let contentFourteenth = document.querySelector("#content__answer-fourteenth");
let buttonFourteenth = document.querySelector("#btn__content-fourteenth");

buttonFourteenth.addEventListener("click", getNumber);

function getNumber(getnumber) {
    console.log("------------------------------Task14.------------------------------");
    let a = +contentFourteenth.value;
    if (a % 2 == 0) {
        return console.log(true);
    }
    else {
        return console.log(false);
    }
}

//------------------------------Task15.------------------------------

let blockFifteenth = document.querySelector("#block__content-one");

blockFifteenth.onmousemove = () => { console.log("------------------------------Task15.------------------------------"); console.log("move"); blockFifteenth.style.border = "1px solid rgb(249, 245, 245)" };

//------------------------------Task16.------------------------------

let blockSixteenth = document.querySelector("#block__content-two");

blockSixteenth.onmouseenter = () => { console.log("------------------------------Task16.------------------------------"); console.log("enter"); blockSixteenth.style.border = "1px solid rgb(249, 245, 245)" };

//------------------------------Task17.------------------------------

let blockSeventeenth = document.querySelector("#block__content-three");

blockSeventeenth.onmouseleave = () => { console.log("------------------------------Task17.------------------------------"); console.log("leave"); blockSeventeenth.style.border = "1px solid rgb(249, 245, 245)" };

//------------------------------Task18.------------------------------

let blockEighteenth = document.querySelector("#block__content-four");

blockEighteenth.onmouseenter = function () {
    this.style.background = "red";
    blockEighteenth.style.border = "1px solid rgb(249, 245, 245)"
};

//------------------------------Task19.------------------------------

let blockNineteenth = document.querySelector("#block__content-five");

blockNineteenth.onclick = () => { this.style.background = "red"; blockNineteenth.style.border = "1px solid rgb(249, 245, 245)" };

//------------------------------Task20.------------------------------

let blockTwentieth = document.querySelectorAll("#block__content-six");

for (let i = 0; i < blockTwentieth.length; i++) {
    blockTwentieth[i].onclick = function () {
        this.style.backgroundColor = "red";
    }
}




