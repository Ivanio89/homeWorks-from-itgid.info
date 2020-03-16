class Goods {
  constructor(name, amount, img, count) {
    this.name = name;
    this.amount = amount;
    this.img = "img/1.png";
    this.count = 1;
  }
  draw() {
    document.querySelector(
      ".out-4"
    ).innerHTML = `<div><img src="${this.img}" alt=""><p>Costet: ${this.count}</p></div>`;
  }
}
