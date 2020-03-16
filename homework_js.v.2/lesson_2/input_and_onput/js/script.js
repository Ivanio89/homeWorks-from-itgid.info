// ----------------------task 1.----------------------
console.log("----------------------task 1.----------------------");
let a = 7;
let b = 9;
console.log(a * b);

// ----------------------task 2.----------------------

let c = 7;
let d = 9;
let cd = c / d;
let workOne = document.querySelector("#work_one");
workOne.innerHTML += cd;

// ----------------------task 3.----------------------

let e = 3;
let f = 5;
let ef = e + f;
let workTwoo = document.querySelector("#work_twoo");
workTwoo.innerHTML += ef;

// ----------------------task 4.----------------------

let e1 = "3";
let f1 = 5;
let e1f1 = e1 + f1;
let workThree = document.querySelector("#work_three");
workThree.innerHTML += e1f1 + " js склеивает string and number";

// ----------------------task 5.----------------------

let e2 = 3;
let f2 = 0;
let e2f2 = e2 / f2;
let workFour = document.querySelector("#work_four");
workFour.innerHTML += e2f2;

// ----------------------task 6.----------------------

let e3 = 3;
let f3 = " hello";
let e3f3 = e3 + f3; 
let workFive = document.querySelector("#work_five");
workFive.innerHTML += e3f3;

// ----------------------task 7.----------------------

let e4 = 3;
let f4 = " hello";
let e4f4 = e4 * f4;
let workSix = document.querySelector("#work_six");
workSix.innerHTML += e4f4 + " no number";

// ----------------------task 8.----------------------

let inputOne = document.querySelector(".input_one");
let buttonOne = document.querySelector(".button_one");

buttonOne.onclick = function (){
    console.log(inputOne.value);
}

// ----------------------task 9.----------------------

let inputTwoo = document.querySelector(".input_twoo");
let stringSeven = document.querySelector("#work_seven");
let buttonTwoo = document.querySelector(".button_twoo");
let buttonReset = document.querySelector(".reset");

buttonTwoo.onclick = function (){
    inputString = inputTwoo.value + " ";
    stringSeven.innerHTML += inputString;
}

buttonReset.onclick = function(){
    inputTwoo.value = "";
}

// ----------------------task 10.----------------------

let inputThree = document.querySelector(".input_three");
let buttonThree = document.querySelector(".button_three");
let stringTen = document.querySelector("#work_ten");

buttonThree.onclick = function(){
    let number = +inputThree.value * 10 + " ";
    stringTen.innerHTML += number;
}

// ----------------------task 11.----------------------

let inputFour = document.querySelector(".input_four");
let buttonFour = document.querySelector(".button_four");
let stringEleven = document.querySelector("#work_eleven");

buttonFour.onclick = function(){
    let number = +inputFour.value + 10 + " ";
    stringEleven.innerHTML += number;
}

// ----------------------task 12.----------------------

let inputName = document.querySelector(".input_name");
let inputSurname = document.querySelector(".input_surname");
let buttonFive = document.querySelector(".button_five");
let stringTwelve = document.querySelector("#work_twelve");
let stringThirteen = document.querySelector("#work_thirteen");

buttonFive.onclick = function(){
    stringTwelve.innerHTML += inputName.value;
    stringThirteen.innerHTML += inputSurname.value;
}

// ----------------------task 13.----------------------

let inputSix = document.querySelector(".input_six");
let inputSeven = document.querySelector(".input_seven");
let buttonSix = document.querySelector(".button_six");
let stringFourteen = document.querySelector("#work_fourteen");

buttonSix.onclick = function(){
    let numberOne = +inputSix.value;
    let numberTwoo = +inputSeven.value;
    let result = numberOne + numberTwoo + " ";
    stringFourteen.innerHTML += result;
}

// ----------------------task 14.----------------------

let inputNine = document.querySelector(".input_nine");
let buttonSeven = document.querySelector(".button_seven");

buttonSeven.onclick = function(){
    inputNine.value = "hello";
}

// ----------------------task 15.----------------------

let inputTen = document.querySelector(".input_ten");
let buttonNine = document.querySelector(".button_nine");

buttonNine.onclick = function(){
    let y = inputTen;
    y.style.border = '2px solid red';
}

// ----------------------task 16.----------------------

let inputEleven = document.querySelector(".input_eleven");
let inputTwelve = document.querySelector(".input_twelve");
let buttonTen = document.querySelector(".button_ten");
let stringFifteen = document.querySelector("#work_fifteen");

buttonTen.onclick = function(){
    let numberOne = +inputEleven.value;
    let numberTwoo = +inputTwelve.value;
    let result = numberOne + numberTwoo;
    stringFifteen.innerHTML += result + " ";
}

// ----------------------task 17.----------------------

let inputTwirtheen = document.querySelector(".input_thirteen");
let buttonEleven = document.querySelector(".button_eleven");

buttonEleven.onclick = function(){
    let t = inputTwirtheen.value;
    t = parseInt(t);
    console.log(t);
}

// ----------------------task 18.----------------------

let inputFourtheen = document.querySelector(".input_fourteen");
let buttonTwelve = document.querySelector(".button_twelve");

buttonTwelve.onclick = function(){
    let t = inputFourtheen.value;
    t = parseFloat(t);
    console.log(t);
}

// ----------------------task 19.----------------------

let inputFifteen = document.querySelector(".input_fifteen");
let inputSixteen = document.querySelector(".input_sixteen");
let buttonThirteen = document.querySelector(".button_thirteen");
let stringSixteen = document.querySelector(".work_sixteen");

buttonThirteen.onclick = function(){
    let numberOne = +inputFifteen.value;
    let numberTwoo = +inputSixteen.value;
    let result = numberOne + numberTwoo;
    stringSixteen.innerHTML += result + " ";
}

// ----------------------task 20.----------------------

let inputNameOne = document.querySelector(".input_name-one");
let inputSurNameOne = document.querySelector(".input_surname-one");
let inputAge = document.querySelector(".input_age");
let inputProfession  = document.querySelector(".input_profession");
let buttonFourteen = document.querySelector(".button_fourteen");
let stringNameOne = document.querySelector(".work_name-one")
let stringSurNameOne = document.querySelector(".work_surname-one");
let stringAge = document.querySelector(".work_age");
let stringProfession = document.querySelector(".work_profession");

buttonFourteen.onclick = function(){
    stringNameOne.innerHTML += inputNameOne.value;
    stringSurNameOne.innerHTML += inputSurNameOne.value;
    stringAge.innerHTML += inputAge.value;
    stringProfession.innerHTML += inputProfession.value;
}