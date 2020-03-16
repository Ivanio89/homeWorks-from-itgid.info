document.querySelectorAll(".window-show").forEach(elem => {
  elem.onclick = function() {
    let showWindow = this.dataset.modal;
    let windowWrap = document
      .querySelector(showWindow)
      .parentElement.classList.remove("hide");
    let windowModal = document
      .querySelector(showWindow)
      .classList.remove("hide");

    document.onkeydown = function(e) {
      if (e.keyCode == 27) {
        document.querySelector(".modal-wrap").children[0].classList.add("hide");
        document.querySelector(".modal-wrap").classList.add("hide");
        document.onkeydown = null;
      }
    };
  };
});

document.querySelectorAll(".window-close").forEach(elem => {
  elem.onclick = function() {
    let windowClose = this.dataset.modal;
    // console.log(document.querySelector(windowClose));
    document.querySelector(windowClose).parentElement.classList.add("hide");
    document.querySelector(windowClose).classList.add("hide");
    document.onkeydown = null;
  };
});

document.querySelectorAll(".window-close_x").forEach(elem => {
  elem.onclick = function() {
    let windowX = this.dataset.modal;
    document.querySelector(windowX).parentElement.classList.add("hide");
    document.querySelector(windowX).classList.add("hide");
    document.onkeydown = null;
  };
});

document.querySelector(".modal-wrap").onclick = function() {
  this.children[0].classList.add("hide");
  this.classList.add("hide");
  document.onkeydown = null;
};
