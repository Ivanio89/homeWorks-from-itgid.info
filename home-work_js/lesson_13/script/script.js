let range = (document.querySelector(
  "input[type='range']"
).oninput = function() {
  //   console.log(this.value);
  let text = document.querySelector(".text-answer");
  text.style.color = "black";
  text.textContent = this.value;
});

let start = (document.querySelector("#start").onclick = function(e) {
  let form = document.querySelector("form");
  e.preventDefault(); //перезагрузка отключена
  console.log(serialize(form));
  document.querySelector(".answer").textContent += `answer: ${serialize(form)}`;
});
