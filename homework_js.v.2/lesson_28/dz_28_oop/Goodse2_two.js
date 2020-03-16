class Goods2 extends Goods {
  constructor(name, amount, img, count, sale, out) {
    super(name, amount, img, count, sale, out);
    this.sale = false;
    this.out = ".out-6";
  }
  draw() {
    this.sale = Math.floor(Math.random() * 2);
    if (this.sale == 1) {
      this.sale = true;
    } else {
      this.sale = false;
    }
    if (this.sale == true) {
      document.querySelector(`${this.out}`).innerHTML = "Расспродажи";
    } else {
      document.querySelector(`${this.out}`).innerHTML =
        "Расспродажи закончились";
    }
  }
}
