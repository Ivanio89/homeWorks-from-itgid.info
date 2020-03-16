let buttonOne = document.querySelector("#btn-one");
let inputOne = document.querySelector("#one");

buttonOne.onclick = () => {
    console.log(inputOne.checked);
    if(inputOne.checked){
        console.log("yes!");
    }
    else{
        console.log("no!");
    }
}

let buttonTwo = document.querySelector("#btn-two");


buttonTwo.onclick = () => {
    let inputTwo = document.querySelector("#two");
    console.log(inputTwo.value);
    inputTwo.value = "all element";
}

let buttonThree = document.querySelector("#btn-three");

//event -объект события

buttonThree.onclick = (event) => {
    event.preventDefault();
//    let inputThree = document.querySelector("#three");
//    console.log(inputThree.value);
//    inputThree.value = "one";
    let form = document.querySelector("form");
    console.log(form);
    console.log(form.elements.three.value);
    console.log(form.elements.four.value);
}
