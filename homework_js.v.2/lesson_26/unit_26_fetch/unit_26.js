// Task 1 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

let getArr = {
  link: "http://getpost.itgid.info/index2.php",
  task1: {
    action: 1,
    auth: "zhrgB3DxC8LoG7Gcisjc"
  },
  task2: {
    action: 2,
    auth: "zhrgB3DxC8LoG7Gcisjc",
    name: "Ivan"
  },
  task3: {
    action: 3,
    auth: "zhrgB3DxC8LoG7Gcisjc",
    num1: 3,
    num2: 10
  },
  task4: {
    action: 4,
    auth: "zhrgB3DxC8LoG7Gcisjc",
    num1: 4,
    num2: 10
  },
  task5: {
    action: 5,
    auth: "zhrgB3DxC8LoG7Gcisjc",
    num1: 5,
    num2: 10
  },
  task6: {
    action: 6,
    auth: "zhrgB3DxC8LoG7Gcisjc",
    num1: 6,
    num2: 10
  },
  task7: {
    action: 7,
    auth: "zhrgB3DxC8LoG7Gcisjc"
  },
  task8: {
    action: 8,
    auth: "zhrgB3DxC8LoG7Gcisjc",
    year: 1989
  },
  task9: {
    action: 9,
    auth: "zhrgB3DxC8LoG7Gcisjc",
    m: 1,
    d: 1,
    y: 1
  }
};

document.querySelector(".b-1").onclick = t1;

function t1() {
  let link = getArr.link;
  let requestS = "";
  for (let key in getArr.task1) {
    requestS += `${key}=${getArr.task1[key]}&`;
  }

  //   console.log(`${link}?${requestS}`);

  fetch(`${link}?${requestS}`)
    .then(response => {
      return response.text();
    })
    .then(response => {
      document.querySelector(".out-1").textContent = response;
    });
}

// ваше событие здесь!!!

// Task 2 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

document.querySelector(".b-2").onclick = t2;

function t2() {
  let link = getArr.link;
  let requestS = "";
  for (let key in getArr.task2) {
    requestS += `${key}=${getArr.task2[key]}&`;
  }

  fetch(`${link}?${requestS}`)
    .then(response => {
      return response.text();
    })
    .then(response => {
      document.querySelector(".out-2").textContent = response;
    });
}

// ваше событие здесь!!!

// Task 3 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

document.querySelector(".b-3").onclick = t3;

function t3() {
  let link = getArr.link;
  let requestS = "";
  for (let key in getArr.task3) {
    requestS += `${key}=${getArr.task3[key]}&`;
  }

  fetch(`${link}?${requestS}`)
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-3").textContent = responce;
    });
}

// ваше событие здесь!!!

// Task 4 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

document.querySelector(".b-4").onclick = t4;

function t4() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task4) {
    requestS += `${key}=${getArr.task4[key]}&`;
  }

  fetch(`${link}?${requestS}`)
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-4").textContent = responce;
    });
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

document.querySelector(".b-5").onclick = t5;

function t5() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task5) {
    requestS += `${key}=${getArr.task5[key]}&`;
  }

  fetch(`${link}?${requestS}`)
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-5").textContent = responce;
    });
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

document.querySelector(".b-6").onclick = t6;

function t6() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task6) {
    requestS += `${key}=${getArr.task6[key]}&`;
  }

  fetch(`${link}?${requestS}`)
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-6").textContent = responce;
    });
}

// ваше событие здесь!!!

// Task 7 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

document.querySelector(".b-7").onclick = t7;

function t7() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task7) {
    requestS += `${key}=${getArr.task7[key]}&`;
  }

  fetch(`${link}?${requestS}`)
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-7").textContent = responce;
    });
}

// ваше событие здесь!!!

// Task 8 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

document.querySelector(".b-8").onclick = t8;

function t8() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task8) {
    requestS += `${key}=${getArr.task8[key]}&`;
  }

  fetch(`${link}?${requestS}`)
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-8").textContent = responce;
    });
}

// ваше событие здесь!!!

// Task 9 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

document.querySelector(".b-9").onclick = t9;

function t9() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task9) {
    requestS += `${key}=${getArr.task9[key]}&`;
  }

  fetch(`${link}?${requestS}`)
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-9").textContent = responce;
    });
}

// ваше событие здесь!!!

// Task 10 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.*/

document.querySelector(".b-10").onclick = t10;

function t10() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task1) {
    requestS += `${key}=${getArr.task1[key]}&`;
  }

  fetch(link, {
    method: "post",
    mode: "cors",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: requestS
  })
    // .then(responce => responce.text())
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-10").textContent = responce;
    });
}
// Task 11 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

document.querySelector(".b-11").onclick = t11;

function t11() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task2) {
    requestS += `${key}=${getArr.task2[key]}&`;
  }

  fetch(link, {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: requestS
  })
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-11").textContent = responce;
    });
}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

document.querySelector(".b-12").onclick = t12;

function t12() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task3) {
    requestS += `${key}=${getArr.task3[key]}&`;
  }

  fetch(link, {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: requestS
  })
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-12").textContent = responce;
    });
}

// ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

document.querySelector(".b-13").onclick = t13;

function t13() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task4) {
    requestS += `${key}=${getArr.task4[key]}&`;
  }

  fetch(link, {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: requestS
  })
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-13").textContent = responce;
    });
}

// ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

document.querySelector(".b-14").onclick = t14;

function t14() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task5) {
    requestS += `${key}=${getArr.task5[key]}&`;
  }

  fetch(link, {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: requestS
  })
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-14").textContent = responce;
    });
}

// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

document.querySelector(".b-15").onclick = t15;

function t15() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task6) {
    requestS += `${key}=${getArr.task6[key]}&`;
  }

  fetch(link, {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: requestS
  })
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-15").textContent = responce;
    });
}

// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

document.querySelector(".b-16").onclick = t16;

function t16() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task7) {
    requestS += `${key}=${getArr.task7[key]}&`;
  }

  fetch(link, {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: requestS
  })
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-16").textContent = responce;
    });
}

// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

document.querySelector(".b-17").onclick = t17;

function t17() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task8) {
    requestS += `${key}=${getArr.task8[key]}&`;
  }

  fetch(link, {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: requestS
  })
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-17").textContent = responce;
    });
}

// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

document.querySelector(".b-18").onclick = t18;

function t18() {
  let link = getArr.link;
  let requestS = "";

  for (let key in getArr.task9) {
    requestS += `${key}=${getArr.task9[key]}&`;
  }

  fetch(link, {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: requestS
  })
    .then(responce => {
      return responce.text();
    })
    .then(responce => {
      document.querySelector(".out-18").textContent = responce;
    });
}

// ваше событие здесь!!!
