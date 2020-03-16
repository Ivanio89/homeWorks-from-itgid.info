//------------------------------Task1.------------------------------
let answerFirst = document.querySelector("#answer__first");

for (i = 0; i < 3; i++) {
    for (e = 0; e < 3; e++) {
        answerFirst.innerHTML += "*";
    }
    answerFirst.innerHTML += " ";
}

//------------------------------Task2.------------------------------

let answerSecond = document.querySelector("#answer__second");

for (i = 0; i < 3; i++) {
    for (e = 0; e < 5; e++) {
        answerSecond.innerHTML += "*";
    }
    answerSecond.innerHTML += "<br>";
}

//------------------------------Task3.------------------------------

let answerThird = document.querySelector("#answer__third");

for (i = 0; i < 3; i++) {
    for (e = 3; e < 9; e++) {
        if (e % 2) {
            answerThird.innerHTML += "1";
        }
        else {
            answerThird.innerHTML += "0";
        }
    }
    answerThird.innerHTML += "<br>";
}

//------------------------------Task4.------------------------------

let answerFourth = document.querySelector("#answer__fourth");

for (i = 0; i < 3; i++) {
    for (e = 3; e < 9; e++) {
        if (e % 2) {
            answerFourth.innerHTML += "1";
        }
        else {
            answerFourth.innerHTML += "0";
            answerFourth.innerHTML += "x";
        }
    }
    answerFourth.innerHTML += "<br>";
}

//------------------------------Task5.------------------------------

let answerFifth = document.querySelector("#answer__fifth");
let count = "";

for (i = 0; i < 3; i++) {
    for (t = 0; t < 1; t++) {
        count += "*";
    }
    answerFifth.innerHTML += count + "<br>";
}

//------------------------------Task6.------------------------------

let answerSixth = document.querySelector("#answer__sixth");
let countSix = "";
let subcountSix = 5;

for (i = 0; i < 5; i++) {
    for (t = 0; t < 5; t++) {
        if (t < subcountSix) {
            countSix += "*";
        }
        else {
            countSix += "&nbsp;";
        }

    }
    subcountSix--;
    countSix += "<br>";
}
answerSixth.innerHTML += countSix;

//------------------------------Task7.------------------------------

let answerSeventh = document.querySelector("#answer__seventh");
let countSeven = "";
let subcountSeven = 2;
let subcountSeventwee = 7;

for (i = 0; i < 3; i++) {
    for (t = 0; t < 8; t++) {
        if (t < subcountSeven || t > subcountSeventwee) {
            countSeven += "&nbsp;";
        }
        else {
            countSeven += "*";
        }
    }
    subcountSeven--;
    subcountSeventwee--;
    countSeven += "<br>";
}
answerSeventh.innerHTML += countSeven;

//------------------------------Task8.------------------------------

let answerEigthth = document.querySelector("#answer__eighth");
let countEigth = "";
let subcountEigth = 1;
let subcountEigthtwee = 2;

for (i = 0; i < 3; i++) {
    for (t = 0; t < 3; t++) {
        if (t < subcountEigth) {
            countEigth += "*";
        }
    }

    subcountEigth++;
    countEigth += "<br>";

}
for (z = 0; z < 2; z++) {
    for (q = 0; q < 2; q++) {
        if (q < subcountEigthtwee) {
            countEigth += "*";
        }
    }
    subcountEigthtwee--;
    countEigth += "<br>";
}
answerEigthth.innerHTML += countEigth;

//------------------------------Task9.------------------------------

let answerNinth = document.querySelector("#answer__ninth");
let countNinth = "";
let subcountNinth = 1;
let subcountNinthtwee = 4;

for (q = 0; q <= 5; q++) {
    countNinth += "*";
}
countNinth += "<br>";
for (i = 0; i < 3; i++) {
    for (t = 0; t < 6; t++) {
        if (t < subcountNinth || t > subcountNinthtwee) {
            countNinth += "*";
        }
        else {
            countNinth += "&nbsp;&nbsp;";
        }
    }
    subcountNinth;
    subcountNinthtwee;
    countNinth += "<br>";
}
for (q = 0; q <= 5; q++) {
    countNinth += "*";
}
answerNinth.innerHTML += countNinth;

//------------------------------Task10.------------------------------

let contentTen = document.querySelector("#content__ten");
let buttonTen = document.querySelector("#btn__content-ten");
let answerTenth = document.querySelector("#answer__tenth");
let countTenth = "";
let subcountTenth = 1;
let subcountTenthtwee = 4;

buttonTen.onclick = () => {
    let content = contentTen.value;
    console.log(content);

    for (q = 0; q <= 5; q++) {
        countTenth += content;
    }
    countTenth += "<br>";
    for (i = 0; i < 3; i++) {
        for (t = 0; t < 6; t++) {
            if (t < subcountTenth || t > subcountTenthtwee) {
                countTenth += content;
            }
            else {
                countTenth += "&nbsp;&nbsp;";
            }
        }
        subcountTenth;
        subcountTenthtwee;
        countTenth += "<br>";
    }
    for (q = 0; q <= 5; q++) {
        countTenth += content;
    }
    answerTenth.innerHTML += countTenth;
}

//------------------------------Task11.------------------------------

let answerEleventh = document.querySelector("#answer__eleventh");
let countEleventh = "";
let numberOne = "";
let numberTwee = "";

for (let t = 0; t <= 9; t++) {
    numberOne += `6*${t}=${t * 6}<br>`;
    numberTwee += `7*${t}=${t * 7}<br>`;
}
answerEleventh.innerHTML = `${numberOne} <br> ${numberTwee}`;

//------------------------------Task12.------------------------------

let answerTwelfth = document.querySelector("#answer__twelfth");
let countTwelfth = "";
// let numberTwelfth = 2;

for (let t = 0; t < 6; t++) {
    for (let i = 1; i <= t; i++) {
        countTwelfth += i;
    }
    countTwelfth += "<br>";
}
answerTwelfth.innerHTML += countTwelfth;

//------------------------------Task13.------------------------------

let answerThirteenth = document.querySelector("#answer__thirteenth");
let countThirteenth = "";

for (let i = 1; i <= 1; i++) {
    for (let t = 1; t <= 50; t++) {
        if (t <= 9) {
            countThirteenth += "0";
        }
        countThirteenth += t;
        if (t == 10) {
            countThirteenth += "<br>";
        }
        if (t == 20) {
            countThirteenth += "<br>";
        }
        if (t == 30) {
            countThirteenth += "<br>";
        }
        if (t == 40) {
            countThirteenth += "<br>";
        }
    }
    countThirteenth += "<br>";
}
answerThirteenth.innerHTML += countThirteenth;

//------------------------------Task14.------------------------------

let answerFourteenth = document.querySelector("#answer__fourteenth");
let countFourteenth = "";

for (let i = 5; i > 0; i--) {
    for (let q = i; q > 0; q--) {
        countFourteenth += q;
    }
    countFourteenth += "<br>";
}
answerFourteenth.innerHTML += countFourteenth;
//------------------------------Task15.------------------------------

let answerFifteenth = document.querySelector("#answer__fifteenth");
let countFifteenth = "";
let countFifteenthtoo = 2;

for (let i = 0; i < 5; i++) {
    for (let t = 5; t >= 1; t--) {
        if (t < countFifteenthtoo) {
            countFifteenth += t;
        } else {
            countFifteenth += "x";
        }
    }
    countFifteenthtoo++;
    countFifteenth += "<br>";
}
answerFifteenth.innerHTML += countFifteenth;

//------------------------------Task16.------------------------------

let answerSixteenth = document.querySelector("#answer__sixteenth");
let countSixteenth = "";
let countSixteenthtoo = 2;

for (let i = 1; i <= 5; i++) {
    for (let t = 1; t <= i; t++) {
        countSixteenth += i;
    }
    countSixteenth += "<br>";
}
answerSixteenth.innerHTML += countSixteenth;

//------------------------------Task17.------------------------------

let answerSeventeenth = document.querySelector("#answer__seventeenth");
let countSeventeenth = "";
let countSeventeenthtoo = 4;

for (let i = 5; i >= 1; i--) {
    for (let t = 1; t <= 5; t++) {
        if (t > countSeventeenthtoo) {
            countSeventeenth += i;
        }
    }
    countSeventeenthtoo--;
    countSeventeenth += "<br>";
}
answerSeventeenth.innerHTML += countSeventeenth;

//------------------------------Task18.------------------------------

let answerEighteenth = document.querySelector("#answer__eighteenth");
let countEighteenth = "";
let countEighteenthToo = 4;
let countEighteenthTooOne = "x";

for (let i = 5; i >= 1; i--) {
    for (let t = 1; t <= 5; t++) {
        if (t > countEighteenthToo) {
            if (i % 2) {
                countEighteenth += i
            }
            else {
                countEighteenth += "x";
            }
        }
    }
    countEighteenthToo--;
    countEighteenth += "<br>";
}
answerEighteenth.innerHTML += countEighteenth;

//------------------------------Task19.------------------------------

let answerNineteenth = document.querySelector("#answer__nineteenth");
let countNineteenth = "";
let countNineteenthToo = 8;
let countNineteenthTooOne = 2;

for (let i = 1; i <= 3; i++) {
    for (let t = 1; t <= 11; t++) {
        if (t < countNineteenthToo && t > countNineteenthTooOne) {
            countNineteenth += "*";
        }
        else {
            countNineteenth += "&nbsp;&nbsp;";
        }
    }
    countNineteenthTooOne--;
    countNineteenthToo++;
    countNineteenth += "<br>";
}
answerNineteenth.innerHTML += countNineteenth;

//------------------------------Task20.------------------------------

let answerTwentieth = document.querySelector("#answer__twentieth");
let countTwentieth = "";
let countTwentiethToo = 5;
let countTwentiethTooOne = 2;
let countTwentiethTootwo = 1;
let countTwentiethToothree = 6;

for (let i = 1; i <= 3; i++) {
    for (let t = 1; t <= 6; t++) {
        if (t < countTwentiethToo && t > countTwentiethTooOne) {
            countTwentieth += "*";
        }
        else {
            countTwentieth += "&nbsp;&nbsp;";
        }
    }
    countTwentiethTooOne--;
    countTwentiethToo++;
    countTwentieth += "<br>";
}
for (let i = 1; i <= 2; i++) {
    for (let t = 1; t <= 6; t++) {
        if (t < countTwentiethToothree && t > countTwentiethTootwo) {
            countTwentieth += "*";
        }
        else {
            countTwentieth += "&nbsp;&nbsp;";
        }
    }
    countTwentiethToothree--;
    countTwentiethTootwo++;
    countTwentieth += "<br>";
}

answerTwentieth.innerHTML += countTwentieth;