//------------------------------Task1.------------------------------

let oneArray = [1, "hello", true, "how", 2, false, 3, "are", 4, "you"];

console.log("------------------------------Task1.------------------------------");
console.log(oneArray);

//------------------------------Task2.------------------------------

let contentArrayTwo = document.querySelector("#two-array__content");
let twoArray = [4, "you", false, "are", 3, true, 2, "how", 1, "hello"];

contentArrayTwo.innerHTML += twoArray;

//------------------------------Task3.------------------------------

let threeArray = document.querySelector("#three-array__content");
const a = [2, 'hello', 17, 34, 'privet'];

threeArray.innerHTML += a.length;

//------------------------------Task4.------------------------------

console.log("------------------------------Task4.------------------------------");
console.log(a[0]);
console.log(a[3]);
console.log(a[8]);

//------------------------------Task5.------------------------------

console.log("------------------------------Task5.------------------------------");
console.log(a[0] + a[2] + a[3]);


//------------------------------Task6.------------------------------

let contentArraySix = document.querySelector("#six-array__content");
let sixArray = ["Ivan", "Дева", 1, "september"];

contentArraySix.innerHTML += sixArray;

//------------------------------Task7.------------------------------

let contentArraySeven = document.querySelector("#seven-array__content");
let b = ['hi', "foo", "bar"];
b[0] = "one";
b[1] = 1;
b[2] = 2;
b[3] = "two";

contentArraySeven.innerHTML += b;

//------------------------------Task8.------------------------------

let contentArrayEight = document.querySelector("#eight-array__content");

console.log("------------------------------Task8.------------------------------");

b[3] = 3.14;
b[4] = 17.6;
b[6] = 5;
console.log(b);
console.log("length - " + b.length);

contentArrayEight.innerHTML += b + " ";
contentArrayEight.innerHTML += "length - " + b.length;

//------------------------------Task9.------------------------------

let contentArrayNine = document.querySelector("#nine-array__content");
let nineArray = [1, "hello", 2, true, "how", 3, "are", 4, "you", 5];

console.log("------------------------------Task9.------------------------------");
contentArrayNine.innerHTML += nineArray[3] + " ";
contentArrayNine.innerHTML += nineArray[7] + " ";
console.log(nineArray.length);

//------------------------------Task10.------------------------------

let contentArrayTen = document.querySelector("#ten-array__content");
let tenArray = [];

tenArray[1] = "one";
tenArray[5] = "five";
tenArray[10] = "ten";

console.log("------------------------------Task10.------------------------------");
console.log(tenArray);
console.log(tenArray.length);

contentArrayTen.innerHTML += tenArray + " ";
contentArrayTen.innerHTML += ",length: " + tenArray.length + " ";

//------------------------------Task11.------------------------------

let contentArrayEleven = document.querySelector("#eleven-array__content");
let buttonArrayEleven = document.querySelector("#btn-eleven__content");

buttonArrayEleven.onclick = getArrayEleven;

const c = [77, 88, 99, 66];

function getArrayEleven() {
    let f = c.pop();
    let g = c.shift();

    c.unshift(f);
    c.push(g);

    contentArrayEleven.innerHTML += c;
}

//------------------------------Task12.------------------------------

let newArrayTwelve = [1, 2, 3, 4, 5];

function getArrayTwelve(array) {
    let arrayOne = array.pop();
    let arrayTwo = array.shift();

    array.push(arrayTwo);
    array.unshift(arrayOne);

    console.log("------------------------------Task12.------------------------------");
    console.log(array);
}
getArrayTwelve(newArrayTwelve)

//------------------------------Task13.------------------------------

let contentArrayFhirteen = document.querySelector("#thireteen-array__content");
let arrayThirteen = "";

d = ['y', 4, 22, 'o'];
for (i = 0; i < d.length; i++) {
    arrayThirteen += d[i] + " ";
}

contentArrayFhirteen.innerHTML += arrayThirteen;

//------------------------------Task14.------------------------------

let contetnArrayFourteen = document.querySelector("#fourteen-array__content");
let e = [1, 2, 3, 'hello', 66];
let countFourteen = "";

for (let i = e.length - 1; i > 0 - 1; i--) {
    countFourteen += e[i] + " ";
}

contetnArrayFourteen.innerHTML += countFourteen;

//------------------------------Task15.------------------------------

let contentArrayFifteen = document.querySelector("#fifteen-array__content");
let d_2 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let countFifteen = "";

for (i = 0; i < d_2.length; i++) {
    countFifteen = d_2[i] + " ";
    if (countFifteen > 0) {
        contentArrayFifteen.innerHTML += countFifteen;
    }
}

//------------------------------Task16.------------------------------

let contentArraySixteen = document.querySelector("#sixteen-array__content");

let a1 = [];
let a2 = [];
let countSixteen = "";

for (i = 1; i < d_2.length; i++) {
    if (d_2[i] % 2 == 0) {
        a1 += d_2[i] + " ";
    }
    else if (d_2[i] % 2 != 0) {
        a2 += d_2[i] + " ";
    }
}

contentArraySixteen.innerHTML += "a1 = " + a1 + "<br>";
contentArraySixteen.innerHTML += "a2 = " + a2;

//------------------------------Task17.------------------------------

let contentArraySeventeen = document.querySelector("#seventeen-array__content");
let e_2 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let countSeventeen = "";

for (i = 0; i < e_2.length; i++) {
    if (e_2[i] == 0) {
        countSeventeen += e_2[i] + " ";
    }
}
contentArraySeventeen.innerHTML += countSeventeen;
//------------------------------Task18.------------------------------
let contentArrayEighteen = document.querySelector("#eighteen-array__content");
let max = e_2[0];

for (i = 0; i < e_2.length; i++) {
    if (max < e_2[i]) {
        max = e_2[i];
        // console.log(max);
    }
}
contentArrayEighteen.innerHTML += max;

//------------------------------Task19.------------------------------

let f = [-3, 0, 45, 22, 123, -485, 98, 34];
let newArrayNineteen = f[0];
let newArrayIndexNineteen = 0;

for (i = 0; i < f.length; i++) {
    if (f[i] > newArrayNineteen) {
        newArrayNineteen = f[i];
        newArrayIndexNineteen = i;
    }
}
console.log("------------------------------Task19.------------------------------");
console.log(newArrayNineteen + " - big number");
console.log(newArrayIndexNineteen + " - it is big number for index");

//------------------------------Task20.------------------------------
let contentArrayTwenty = document.querySelector("#twenty-array__content");
let countTwenty = 0;

for (i = 0; i < f.length; i++) {
    countTwenty += f[i];
}
contentArrayTwenty.innerHTML += countTwenty;
