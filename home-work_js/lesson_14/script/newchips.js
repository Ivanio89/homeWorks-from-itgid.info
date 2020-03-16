let btnLength = 3;
let button = "";
for (let i = 0; i < btnLength; i++) {
  button = document.createElement("button");
  button.className = "btn-chips";
  button.style = "margin: 5px;";
  document.querySelector("body").appendChild(button);
}

let allbutton = document.querySelectorAll("button");
allbutton[0].className = "error";
allbutton[1].className = "info";
allbutton[2].className = "normal";
allbutton[0].innerHTML = "error";
allbutton[1].innerHTML = "info";
allbutton[2].innerHTML = "normal";

for (let i = 0; i < allbutton.length; i++) {
  allbutton[i].onclick = () => {
    let atribute = allbutton[i].getAttribute("class");
    let secitem = secItem();
    let bgcolor = bgColor();
    chips(atribute, secitem, bgcolor);
  };
}

let text = document.createElement("span");
text.textContent = "Write the delay time and select color";
text.style = "font-size: 20px; padding: 0 10px";
document.querySelector("body").appendChild(text);

let input = document.createElement("input");
input.type = "number";
input.max = 15;
input.min = 1;
input.value = 1;
input.style = "width: 40px;height: 30px; font-size: 20px";
document.querySelector("body").appendChild(input);

let inputColor = document.createElement("input");
inputColor.type = "color";
inputColor.style = "margin: 0 10px;";
document.querySelector("body").appendChild(inputColor);

function secItem() {
  let inputs = input.value * 1000;
  return inputs;
}

function bgColor() {
  let inputs = inputColor.value;
  return inputs;
}

function chips(messanges, secitem, bgcolor) {
  let chips = document.createElement("div");
  chips.style = `font-size: 20px; margin: 10px 20px; padding: 10px 15px; border-radius: 5px; background: green; color: white; background:${bgcolor};`;
  chips.className = "chips";
  chips.innerHTML = messanges;
  //   document.querySelector("body").appendChild(chips);
  addChips(chips);
  setTimeout(function() {
    deleteChips(chips);
  }, secitem);
}

function deleteChips(chips) {
  chips.remove();
  let = allChips = document.querySelectorAll(".chips-field .chips");
  if (allChips.length == 0) {
    document.querySelector(".chips-field").remove();
  }
}

function addChips(chips) {
  let chipsField = document.querySelector(".chips-field");
  if (chipsField) {
    chipsField.appendChild(chips);
  } else {
    let chipsField = document.createElement("div");
    chipsField.className = "chips-field";
    document.querySelector("body").appendChild(chipsField);
    chipsField.appendChild(chips);
  }
}
