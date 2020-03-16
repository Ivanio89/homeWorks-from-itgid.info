//------------------------------Task1.------------------------------
console.log("------------------------------Task1.------------------------------");
for (i = 1; i <= 10; i++) {
    console.log(i);
}

//------------------------------Task2.------------------------------

const contentOne = document.querySelector(".loop__content-one");

for (i = 1; i <= 10; i++) {
    contentOne.innerHTML += i + " ";
}

//------------------------------Task3.------------------------------

const contentTwo = document.querySelector(".loop__content-two");

for (i = 10; i >= 0; i--) {
    contentTwo.innerHTML += i + " ";
}

//------------------------------Task4.------------------------------

const contentThree = document.querySelector(".loop__content-three");

for (i = 0; i <= 10; i = i + 2) {
    contentThree.innerHTML += i + " ";
}

//------------------------------Task5.------------------------------

const contentFour = document.querySelector(".loop__content-four");

for (i = 0; i <= 21; i = i + 3) {
    contentFour.innerHTML += i + " ";
}

//------------------------------Task6.------------------------------

const contentFive = document.querySelector(".loop__content-five");

for (i = 1; i <= 6; i++) {
    for (t = 1; t <= 6; t++) {
        contentFive.innerHTML += "*";
    }
    contentFive.innerHTML += "<br>";
}

//------------------------------Task7.------------------------------

const contentSeven = document.querySelector("#content__seven");
const buttonSeven = document.querySelector("#btn__content-seven");
const answerSeven = document.querySelector("#answer__seven");

buttonSeven.onclick = () => {
    let a = +contentSeven.value;
    for (i = a; i >= 0; i--) {
        answerSeven.innerHTML += i + " ";
    }
}

//------------------------------Task8.------------------------------

const contentEight_One = document.querySelector("#content__eight-one");
const contentEight_Two = document.querySelector("#content__eight-two");
const buttonEight = document.querySelector("#btn__content-eight");
const answerEight = document.querySelector("#answer__eight");

buttonEight.onclick = () => {
    let a = +contentEight_One.value;
    let b = +contentEight_Two.value;
    let c = 0;

    // for (i = b - 1; i > a; i--) {
    //     console.log(i);
    // }
    // answerEight.innerHTML += "Вашь диапaзон от " + a + " до " + b + " будет " + i;

    for (i = a + 1; i < b; i++) {
        answerEight.innerHTML += i + " ";
    }
}

//------------------------------Task9.------------------------------

const contentNine_One = document.querySelector("#content__nine-one");
const contentNine_Two = document.querySelector("#content__nine-two");
const buttonNine = document.querySelector("#btn__content-nine");
const answerNine = document.querySelector("#answer__nine");

buttonNine.onclick = () => {
    let a = +contentNine_One.value;
    let b = +contentNine_Two.value;

    if (a > b) {
        alert("Error!!!");
    }
    else {
        for (i = a + 1; i < b; i++) {
            answerNine.innerHTML += i + " ";
        }
    }
}

//------------------------------Task10.------------------------------

const answerTen = document.querySelector("#answer__ten");

for (i = 1901 + 1; i <= 1950; i = i + 2) {
    // console.log(i);
    answerTen.innerHTML += i + " ";
}

//------------------------------Task11.------------------------------

const answerEleven = document.querySelectorAll(".one");
const contentEleven = document.querySelector("#answer__eleven");

for (i = 0; i <= answerEleven.length; i++) {
    contentEleven.innerHTML = i;
}

//------------------------------Task12.------------------------------

const answerTwelve = document.querySelectorAll(".one-one");
const buttonTwelve = document.querySelector("#btn__content-twelve");

buttonTwelve.onclick = () => {
    // let a = answerTwelve.length;
    let b = '';
    for (i = 0; i < answerTwelve.length; i++) {
        answerTwelve[i].style.backgroundColor = "orange";
        answerTwelve[i].style.margin = "5px 0 5px 0";
        answerTwelve.innerHTML += i;
    }
}

//------------------------------Task13.------------------------------

const answerThirteen = document.querySelectorAll(".one-one-one");
const buttonThirteen = document.querySelector("#btn__content-thirteen");

buttonThirteen.onclick = () => {
    console.log("------------------------------Task13.------------------------------");
    for (i = 0; i < answerThirteen.length; i++) {
        console.log(answerThirteen[i]);
    }
}

//------------------------------Task14.------------------------------

const contentFourteen = document.querySelectorAll("input[type ='text");
const buttonFourteen = document.querySelector("#btn__content-fourteen");

buttonFourteen.onclick = () => {
    console.log("------------------------------Task14.------------------------------");
    for (i = 0; i < contentFourteen.length; i++) {
        // console.log(contentFourteen[i].getAttribute('type'));
        contentFourteen[i].setAttribute("placeholder", "Введите данные");
        console.log(contentFourteen[i]);
    }

}

//------------------------------Task15.------------------------------

const contentFiveteen = document.querySelectorAll("input[type ='text'");
const buttonFiveteen = document.querySelector("#btn__content-fiveteen");

buttonFiveteen.onclick = () => {
    console.log("------------------------------Task15.------------------------------");
    for (i = 0; i < contentFiveteen.length; i++) {
        console.log(contentFiveteen[i]);
    }
}

//------------------------------Task16.------------------------------

const contentSixteen = document.querySelectorAll("#content__sixteen");
const buttonSixteen = document.querySelector("#btn__content-sixteen");
const answerSixteen = document.querySelector("#answer__sixteen");

buttonSixteen.onclick = () => {
    for (i = 0; i < contentSixteen.length; i++) {
        if (contentSixteen[i].checked) {
            answerSixteen.innerHTML += contentSixteen[i].value + ", ";
        }
    }
}

//------------------------------Task17.------------------------------

const buttonSeventeen = document.querySelector("#btn__content-seventeen");

buttonSeventeen.onclick = () => {
    answerSixteen.innerHTML += contentSixteen[0].value + ", ";
}

//------------------------------Task18.------------------------------

const contentEightteen = document.querySelectorAll("#content__eightteen");
const buttonEightteen = document.querySelector("#btn__content-eightteen");
const answerEightteen = document.querySelector("#answer__eightteen");

buttonEightteen.onclick = () => {
    let word = " ";
    for (i = 0; i < contentEightteen.length; i++) {
        // console.log(contentEightteen[i]);
        if (contentEightteen[i].checked) {
            if (contentEightteen[0].checked) {
                word = contentEightteen[0].value = " 0 ";
            }
            else if (contentEightteen[1].checked) {
                word = contentEightteen[1].value = " 1 ";
            }
            else if (contentEightteen[2].checked) {
                word = contentEightteen[2].value = " 2 ";
            }
        }
    }
    answerEightteen.innerHTML += word + ", ";
}

//------------------------------Task19.------------------------------

const contentNineteen = document.querySelectorAll("#content__nineteen");
const buttonNineteen = document.querySelector("#btn__content-nineteen");
const answerNineteen = document.querySelector("#answer__nineteen");

buttonNineteen.onclick = () => {
    let word = "";
    for (i = 0; i < contentNineteen.length; i++) {
        if (contentNineteen[i].checked) {
            if (contentNineteen[i].value == 6) {
                word = true;
            }
            else if (contentNineteen[i].value != 6) {
                word = false;
            }
        }

    }
    answerNineteen.innerHTML += word + ", ";
}


//------------------------------Task20.------------------------------

const contentTwenty = document.querySelectorAll("#content__twenty");
const buttonTwenty = document.querySelector("#btn__content-twenty");

buttonTwenty.onclick = () => {
    console.log("------------------------------Task20.------------------------------");
    for (i = 0; i < contentTwenty.length; i++) {
        contentTwenty[i].oninput = () => {
            console.log("input был изменен! ");
        }
    }
}
