//------------------------------Task1.------------------------------

const buttonAlertOne = document.querySelector("#btn__content-one");

buttonAlertOne.onclick = function () {
    alert("Task1.");
}

//------------------------------Task2.------------------------------

const buttonAlertTwo = document.querySelector("#btn__content-two");

buttonAlertTwo.onclick = function () {
    alert("Task2.");
}

//------------------------------Task3.------------------------------

const contentClickOne = document.querySelector("#content__click-one");

contentClickOne.style.cursor = "pointer";

contentClickOne.onclick = function () {
    alert("Task3");
}

//------------------------------Task4.------------------------------

const buttonThree = document.querySelector("#btn__content-three");
const contentOne = document.querySelector("#content-three");

buttonThree.onclick = function () {
    let a = contentOne;

    if (a.checked) {
        console.log("------------------------------Task4.------------------------------");
        console.log(true);
    }
    else {
        console.log("------------------------------Task4.------------------------------");
        console.log(false);
    }
}

//------------------------------Task5.------------------------------

const buttonFour = document.querySelector("#btn__content-four");
const contentTwo = document.querySelector("#content-four");

buttonFour.onclick = () => {
    let a = contentTwo;

    if (a.checked) {
        console.log("------------------------------Task5.------------------------------");
        console.log(a.value);
    }
    else {
        console.log("------------------------------Task5.------------------------------");
        console.log("false");
    }
}

//------------------------------Task6.------------------------------

const buttonAlertThree = document.querySelector("#btn__content-five");
const contentClickTwo = document.querySelector("#content-five");

buttonAlertThree.onclick = () => {
    let a = contentClickTwo;

    alert(a.value);
}

//------------------------------Task7.------------------------------

const buttonFive = document.querySelector("#btn__content-six");
const contentThree = document.querySelector("#content-six");

buttonFive.onclick = () => {
    let a = contentThree;

    alert(a.value);

    if (a.value.length < 6) {
        console.log("------------------------------Task7.------------------------------");
        console.log("Ваш пароль меньше шести символов");
    } else {
        console.log("------------------------------Task7.------------------------------");
    }
}

//------------------------------Task8.------------------------------

const buttonSix = document.querySelector("#btn__content-seven");
const contentFour = document.querySelector(".content__result-one");

buttonSix.onclick = () => {
    let a = contentFour;

    a.innerHTML += "<input type='text' class='input-one' value='вы успешно нажали'>";
    a.innerHTML += "<button class='btn-one'>Нажать</button>";

    const inputA = document.querySelector(".input-one");
    const buttonA = document.querySelector(".btn-one");

    inputA.style.margin = "5px";
    buttonA.style.margin = "5px";
    buttonA.onclick = () => {
        alert(inputA.value);
    }
}

//------------------------------Task9.------------------------------

const buttonSeven = document.querySelector("#btn__content-eight");
const contentFive = document.querySelector(".content__seven");

buttonSeven.onclick = () => {
    let a = contentFive;

    if (a.checked) {
        alert(a.value);
    }
    else {
        alert(false);
    }
}

//------------------------------Task10.------------------------------

const buttonEight = document.querySelector("#btn__content-nine");
const contentSix = document.querySelector(".content__eight");
const blockOne = document.querySelector(".block-one");

buttonEight.onclick = () => {
    // buttonEight.style.backgroundColor = contentSix.value;
    blockOne.style.backgroundColor = contentSix.value;
}

//------------------------------Task11.------------------------------

const buttonTen = document.querySelector("#btn__content-ten");
const contentNine = document.querySelector(".content__nine");
const contentTen = document.querySelector(".content__ten");

buttonTen.onclick = () => {
    contentTen.value = contentNine.value;
}

//------------------------------Task12.------------------------------

const buttonEleven = document.querySelector("#btn__content-eleven");
const contentEleven = document.querySelector(".content__eleven");
const blockTwo = document.querySelector(".content__result-two");

buttonEleven.onclick = () => {
    blockTwo.innerHTML += contentEleven.value
}

//------------------------------Task13.------------------------------

const buttonTwelve = document.querySelector("#btn__content-twelve");
const contentTwelve = document.querySelector(".content__twelve");
const blockThree = document.querySelector(".content__result-three");

buttonTwelve.onclick = () => {
    blockThree.innerHTML += contentTwelve.value + ", ";
}

contentTwelve.oninput = () => {
    blockThree.innerHTML += contentTwelve.value + ", ";
}

//------------------------------Task14.------------------------------

const buttonThirteen = document.querySelector("#btn__content-thirteen");
const blockFour = document.querySelector(".content__result-four");
const textContentOne = document.querySelector("#text__content-one");

buttonThirteen.onclick = () => {
    let a = textContentOne.value;

    blockFour.innerHTML += a + ", ";
}
//------------------------------Task15.------------------------------

const buttonFourteen = document.querySelector("#btn__content-fourteen");
const contentFourteen = document.querySelector(".content__five");
const textContentTwo = document.querySelector("#text__content-two");
const blockFive = document.querySelector(".content__result-five");

buttonFourteen.onclick = () => {
    let a = contentFourteen.value;
    textContentTwo.value = a;

    blockFive.innerHTML += a + ", ";
}

//------------------------------Task16.------------------------------

const buttonFiveteen = document.querySelector("#btn__content-fiveteen");
const contentSelectOne = document.querySelector("#content__select-one");
const blockSix = document.querySelector(".content__result-six");

buttonFiveteen.onclick = () => {
    blockSix.innerHTML += contentSelectOne.value + ", ";
}

//------------------------------Task17.------------------------------

const buttonSixteen = document.querySelector("#btn__content-sixteen");
const contentSelectTwo = document.querySelector("#content__select-two");
const blockSeven = document.querySelector(".content__result-seven");

buttonSixteen.onclick = () => {
    let a = contentSelectTwo.options[contentSelectTwo.selectedIndex].text;

    blockSeven.innerHTML += a + ", ";
}

//------------------------------Task18.------------------------------

const contentSelectThree = document.querySelector("#content__select-three");
const blockEight = document.querySelector(".content__result-eight");

contentSelectThree.onchange = () => {
    blockEight.innerHTML += contentSelectThree.value + ", ";
}

//------------------------------Task19.------------------------------

const buttonSeventeen = document.querySelector("#btn__content-seventeen");
const contentPasswordOne = document.querySelector(".content__passwordone");
const contentLoginOne = document.querySelector(".content__loginone");

buttonSeventeen.onclick = () => {
    let b =
        console.log("------------------------------Task19.------------------------------");
    console.log("Ваш логин: " + contentLoginOne.value + " Ваш пароль: " + contentPasswordOne.value);
}

//------------------------------Task20.------------------------------

const buttonEightteen = document.querySelector("#btn__content-eighteen");
const contentPasswordTwo = document.querySelector(".content__passwordtwo");
const contentLoginTwo = document.querySelector(".content__logintwo");

buttonEightteen.onclick = () => {
    let b =
        console.log("------------------------------Task20.------------------------------");
    console.log("Ваш логин: " + contentLoginTwo.value + " Ваш пароль: " + contentPasswordTwo.value);
}
