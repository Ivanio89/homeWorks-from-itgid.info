let rulesSlider = (document.querySelector(".text-rules").onclick = function() {
  document.querySelector(".rules").style.marginLeft = "-270px";
  document.querySelector(".rules").style.transition = "1s";
});

let backSlider = document.querySelectorAll(".text-back").forEach(element => {
  element.onclick = function() {
    document.querySelector(".rules").style.marginLeft = "0px";
    document.querySelector(".rules").style.transition = "1s";
  };
});
