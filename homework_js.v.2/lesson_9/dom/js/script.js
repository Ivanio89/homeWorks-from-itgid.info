//------------------------------Task1.------------------------------

function func_1() {
    let buttonOne = document.querySelector("#btn-height__content");
    buttonOne.onclick = () => { p.style.height = 100 + "px"; p.innerHTML += 'height="100px"'; };
    let p = document.querySelector(".u-1");
    p.style.windth = "200px";
    p.style.height = "0px";
    p.style.border = "1px solid #efefef99";
}
func_1();

//------------------------------Task2.------------------------------

function func_2() {
    let p = document.querySelector(".u-2");

    p.classList.add('css-1');
}
func_2();

//------------------------------Task3.------------------------------

let buttonThree = document.querySelectorAll(".u-3");

function func_3() {
    this.style.backgroundColor = "red";
}

for (i = 0; i < buttonThree.length; i++) {
    buttonThree[i].onclick = func_3;
    buttonThree[i].style.cursor = "pointer";
}

//------------------------------Task4.------------------------------

let buttonFour = document.querySelectorAll(".u-4");

function func_4() {
    this.classList.add("css-2");
}

for (i = 0; i < buttonFour.length; i++) {
    buttonFour[i].onclick = func_4;
    buttonFour[i].style.cursor = "pointer";
}

//------------------------------Task5.------------------------------

let buttonFive = document.querySelectorAll(".u-5");

function func_5() {
    this.classList.remove("css-3");
}

for (i = 0; i < buttonFive.length; i++) {
    buttonFive[i].onclick = func_5;
    buttonFive[i].style.cursor = "pointer";
}

//------------------------------Task6.------------------------------

let buttonSix = document.querySelector(".u-6");

buttonSix.addEventListener('click', func_6);

function func_6() {
    buttonSix.classList.toggle("active");
}

//------------------------------Task7.------------------------------

let answerContentSeven = document.querySelector(".answer__content-seven");

function func_7() {
    let p = document.querySelectorAll(".css-3");
    let count = "";

    for (i = 1; i < p.length + 1; i++) {
        count = i;
    }
    answerContentSeven.innerHTML += count + " ";
}
func_7();

//------------------------------Task8.------------------------------

function func_8() {
    let p = document.querySelector(".u-1");

    p.setAttribute("Title", "test-data");
    // console.log(p.getAttribute("class"));
}
func_8();

//------------------------------Task9.------------------------------

let buttonNine = document.querySelectorAll(".u-9");

for (i = 0; i < buttonNine.length; i++) {
    buttonNine[i].onclick = func_9;
}

function func_9() {
    console.log(this.getAttribute("data"));
}
//------------------------------Task10.------------------------------

let buttonTen = document.querySelectorAll(".u-10__button");
let p = document.querySelector(".u-10__out");

for (i = 0; i < buttonTen.length; i++) {
    buttonTen[i].onclick = func_10;
}

function func_10() {
    let a = this.getAttribute("data-currency");
    p.innerHTML += a + " "
}

//------------------------------Task11.------------------------------

let buttonEleven = document.querySelectorAll(".u-11__button");
let inputEleven = document.querySelector(".u-11__input");
let pharagraf = document.querySelector(".u-11__out");

for (i = 0; i < buttonEleven.length; i++) {
    buttonEleven[i].onclick = func_11;
}

function func_11() {
    let a = +inputEleven.value;
    let b = this.getAttribute("data-currency");
    pharagraf.textContent += a * b + " ";

}

//------------------------------Task12.------------------------------

function func_12() {
    console.log("------------------------------Task12.------------------------------")
    let div = document.createElement("div");
    div.className = "css-4";
    return console.log(div);
}
func_12();

//------------------------------Task13.------------------------------

let fhirteenElement = document.querySelector(".u-13");

function func_13() {
    let span = document.createElement("span");
    span.className = "span-13";
    span.innerHTML = "13";
    return fhirteenElement.append(span);
}
func_13();

//------------------------------Task14.------------------------------

let fourteenElement = document.querySelector(".u-14");

function func_14() {
    let span = document.createElement("span");
    span.className = "span-14";
    span.innerHTML = "14";
    return fourteenElement.prepend(span);
}
func_14();

//------------------------------Task15.------------------------------

let fiftteenElement = document.querySelector(".u-15");

function func_15() {
    let span = document.createElement("span");
    span.className = "span-15";
    span.innerHTML = "15";
    return fiftteenElement.before(span);
}
func_15();

//------------------------------Task16.------------------------------

let contentForButton = document.querySelector(".u-16__out");

function func_16() {
    let button = document.createElement("button");
    button.innerHTML = "Push";
    button.type = "button";
    button.className = "u-16";
    button.onclick = () => { console.log("------------------------------Task16.-----------------------------"); console.log("u-16") };
    return contentForButton.append(button);
}
func_16();

//------------------------------Task17.------------------------------

let contentSeventeen = document.querySelector(".u-17");
let buttonSeventeen = document.querySelector("#btn__start-func");

buttonSeventeen.onclick = func_17;

function func_17() {
    let p = document.createElement("p");
    p.innerHTML = "17";
    contentSeventeen.replaceWith(p);
}

//------------------------------Task18.------------------------------

let contentEight = document.querySelectorAll(".out-18");


for (i = 0; i < contentEight.length; i++) {
    contentEight[i].onclick = func_18;
}

function func_18() {
    console.log("------------------------------Task18.------------------------------");
    this.remove();
    return console.log(this);
}

//------------------------------Task19.------------------------------

let enterNineteen = document.querySelector(".elementninteen");
let contentNineteen = document.querySelector(".u-19");
let inputNineteen = document.createElement("input");
let buttonNineteen = document.createElement("button");

enterNineteen.prepend(inputNineteen);

enterNineteen.prepend(buttonNineteen);
buttonNineteen.innerHTML = "enter";
buttonNineteen.onclick = func_19;

function func_19(text) {
    text = inputNineteen.value;
    let li = document.createElement("li");
    li.innerHTML = text;
    li.style.listStyle = "none";
    return contentNineteen.append(li);
}
func_19();

//------------------------------Task20.------------------------------

let enterTwentieth = document.querySelector(".elementtwentiench");
let contentTwentieth = document.querySelector(".u-20");
let inputEnter = document.createElement("input");
let buttonTwentieth = document.createElement("button");

enterTwentieth.prepend(inputEnter);

enterTwentieth.prepend(buttonTwentieth);
buttonTwentieth.innerHTML = "Enter";
buttonTwentieth.onclick = func_20;

function func_20() {
    let li = document.createElement("li");
    let input = document.createElement("input");
    let text = inputEnter.value;

    input.setAttribute("type", "checkbox");
    contentTwentieth.append(input);

    li.innerHTML = text;
    li.className = "css-5";
    li.style.listStyle = "none";
    li.prepend(input);
    contentTwentieth.append(li);
    // console.log(li);
}





