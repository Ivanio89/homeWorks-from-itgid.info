let modalwindow = document.createElement("div");
modalwindow.style.width = "500px";
modalwindow.style.height = "200px";
modalwindow.style.backgroundColor = "grey";
modalwindow.style.margin = "20px auto";
modalwindow.innerHTML = "Modal Window";
modalwindow.style.color = "white";
modalwindow.style.padding = "60px 90px";
modalwindow.style.boxSizing = "border-box";
modalwindow.style.fontSize = "50px";
document.querySelector(".container").appendChild(modalwindow);

let buttonAdd = document.createElement("input");
buttonAdd.type = "button";
buttonAdd.style.borderRadius = "12px";
buttonAdd.value = "on/off";
buttonAdd.style.marginTop = "20px";
buttonAdd.style.marginLeft = "600px";
buttonAdd.style.outline = "none";
buttonAdd.style.padding = "10px 20px";
buttonAdd.style.fontSize = "20px";
document.querySelector(".container").appendChild(buttonAdd);

buttonAdd.onclick = function() {
  modalwindow.classList.toggle("hide");
};
