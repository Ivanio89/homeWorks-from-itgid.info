// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

document.querySelector(".b-1").onclick = t1;

const getAss = {
  action: 1,
  auth: "zhrgB3DxC8LoG7Gcisjc"
};

let linkIt = "http://getpost.itgid.info/index2.php";

function t1() {
  let one = "";
  let oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getOnePrim(this.responseText);
    }
  };

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  oReq.open("get", `${linkIt}?${one}`, true);

  oReq.send();
  function getOnePrim(answer) {
    document.querySelector(".out-1").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

document.querySelector(".b-2").onclick = t2;

function t2() {
  let one = "";
  let oQeq = new XMLHttpRequest();
  oQeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getTwoPrim(this.responseText);
    }
  };

  getAss["action"] = 2;
  getAss.name = "Ivan";

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  oQeq.open("get", `${linkIt}?${one}`, true);
  oQeq.send();

  function getTwoPrim(answer) {
    document.querySelector(".out-2").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

document.querySelector(".b-3").onclick = t3;

function t3() {
  let one = "";
  let oWeq = new XMLHttpRequest();
  oWeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getThreePrim(this.responseText);
    }
  };

  getAss.action = 3;
  getAss.num1 = 5;
  getAss.num2 = 5;

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  oWeq.open("get", `${linkIt}?${one}`, true);

  oWeq.send();

  function getThreePrim(answer) {
    document.querySelector(".out-3").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

document.querySelector(".b-4").onclick = t4;

function t4() {
  let one = "";
  let oEeq = new XMLHttpRequest();
  oEeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getFourPrim(this.responseText);
    }
  };

  getAss.action = 4;
  getAss.num1 = 1;
  getAss.num2 = 10;

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  oEeq.open("get", `${linkIt}?${one}`, true);
  oEeq.send();
  function getFourPrim(answer) {
    document.querySelector(".out-4").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

document.querySelector(".b-5").onclick = t5;

function t5() {
  let one = "";
  let oYeq = new XMLHttpRequest();
  oYeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getSixPrim(this.responseText);
    }
  };

  getAss.action = 5;

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  oYeq.open("get", `${linkIt}?${one}`, true);
  oYeq.send();
  function getSixPrim(answer) {
    document.querySelector(".out-5").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

document.querySelector(".b-6").onclick = t6;

function t6() {
  let one = "";
  let oTeq = new XMLHttpRequest();
  oTeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getFivePrim(this.responseText);
    }
  };

  getAss.action = 6;
  getAss.num1 = 5;
  getAss.num2 = 10;

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }
  console.log(one);

  oTeq.open("get", `${linkIt}?${one}`, true);

  oTeq.send();
  //   document.querySelector(".out-6").innerHTML = one;

  function getFivePrim(answer) {
    document.querySelector(".out-6").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

document.querySelector(".b-7").onclick = t7;

function t7() {
  let one = "";
  let oAeq = new XMLHttpRequest();
  oAeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getSevenPrim(this.responseText);
    }
  };

  getAss.action = 7;

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  console.log(one);

  oAeq.open("get", `${linkIt}?${one}`, true);

  oAeq.send();
  function getSevenPrim(answer) {
    document.querySelector(".out-7").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

document.querySelector(".b-8").onclick = t8;

function t8() {
  let one = "";
  let oSeq = new XMLHttpRequest();
  oSeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getEightPrim(this.responseText);
    }
  };

  getAss.action = 8;
  getAss.year = 1989;

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }
  console.log(one);

  oSeq.open("get", `${linkIt}?${one}`, true);

  oSeq.send();

  function getEightPrim(answer) {
    document.querySelector(".out-8").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

document.querySelector(".b-9").onclick = t9;

function t9() {
  let one = "";
  let oFeq = new XMLHttpRequest();
  oFeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getNinePrim(this.responseText);
    }
  };

  getAss.action = 9;
  getAss.m = 1;
  getAss.d = 1;
  getAss.y = 1;

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  oFeq.open("get", `${linkIt}?${one}`, true);

  oFeq.send();

  function getNinePrim(answer) {
    document.querySelector(".out-9").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.
 */

document.querySelector(".b-10").onclick = t10;

function t10() {
  let one = "";
  let oGeq = new XMLHttpRequest();
  oGeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status) {
      getTenPrim(this.responseText);
    }
  };

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  oGeq.open("post", `${linkIt}?${one}`, true);

  oGeq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  oGeq.send(`${one}`);

  function getTenPrim(answer) {
    document.querySelector(".out-10").innerHTML = answer;
  }
}
// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

document.querySelector(".b-11").onclick = t11;

function t11() {
  let one = "";
  let oHeq = new XMLHttpRequest();
  oHeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getElevenPrim(this.responseText);
    }
  };

  getAss.action = 2;
  getAss.name = "Ivan";

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  oHeq.open("post", `${linkIt}?${one}`, true);

  oHeq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  oHeq.send(`${one}`);

  function getElevenPrim(answer) {
    document.querySelector(".out-11").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

document.querySelector(".b-12").onclick = t12;

function t12() {
  let one = "";
  let oJeq = new XMLHttpRequest();
  oJeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getTwelvePrim(this.responseText);
    }
  };

  getAss.action = 3;
  getAss.num1 = 5;
  getAss.num2 = 4;

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  oJeq.open("post", `${linkIt}?${one}`, true);
  oJeq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  oJeq.send(`${one}`);

  function getTwelvePrim(answer) {
    document.querySelector(".out-12").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

document.querySelector(".b-13").onclick = t13;

function t13() {
  let one = "";
  let oLeq = new XMLHttpRequest();
  oLeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getThirteenPrim(this.responseText);
    }
  };

  getAss.action = 4;
  getAss.num1 = 10;
  getAss.num2 = 20;

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  oLeq.open("post", `${linkIt}?${one}`, true);

  oLeq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  oLeq.send(`${one}`);

  function getThirteenPrim(answer) {
    document.querySelector(".out-13").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

document.querySelector(".b-14").onclick = t14;

function t14() {
  let one = "";
  let oKeq = new XMLHttpRequest();
  oKeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getFourteenPrim(this.responseText);
    }
  };

  getAss.action = 5;

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  oKeq.open("post", `${linkIt}?${one}`, true);

  oKeq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  oKeq.send(`${one}`);

  function getFourteenPrim(answer) {
    document.querySelector(".out-14").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

document.querySelector(".b-15").onclick = t15;

function t15() {
  let one = "";
  let oZeq = new XMLHttpRequest();
  oZeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getFifteenPrim(this.responseText);
    }
  };

  getAss.action = 6;
  getAss.num1 = 10;
  getAss.num2 = 20;

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  oZeq.open("post", `${linkIt}?${one}`, true);

  oZeq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  oZeq.send(`${one}`);

  function getFifteenPrim(answer) {
    document.querySelector(".out-15").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

document.querySelector(".b-16").onclick = t16;

function t16() {
  let one = "";
  let oXeq = new XMLHttpRequest();
  oXeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getSixteenPrim(this.responseText);
    }
  };

  getAss.action = 7;

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }
  oXeq.open("post", `${linkIt}?${one},true`);
  oXeq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  oXeq.send(`${one}`);

  function getSixteenPrim(answer) {
    document.querySelector(".out-16").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

document.querySelector(".b-17").onclick = t17;

function t17() {
  let one = "";
  let oCeq = new XMLHttpRequest();
  oCeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getSeventeenPrim(this.responseText);
    }
  };

  getAss.action = 8;
  getAss.year = 1989;

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  oCeq.open("post", `${linkIt}?${one}`, true);

  oCeq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  oCeq.send(`${one}`);

  function getSeventeenPrim(answer) {
    document.querySelector(".out-17").innerHTML = answer;
  }
}

// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

document.querySelector(".b-18").onclick = t18;

function t18() {
  let one = "";
  let oVeq = new XMLHttpRequest();
  oVeq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getEighteenPrim(this.responseText);
    }
  };

  getAss.action = 9;
  getAss.m = 1;
  getAss.d = 1;
  getAss.y = 1;

  for (let key in getAss) {
    one += `${key}=${getAss[key]}&`;
  }

  oVeq.open("post", `${linkIt}?${one}`, true);

  oVeq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  oVeq.send(`${one}`);

  function getEighteenPrim(answer) {
    document.querySelector(".out-18").innerHTML = answer;
  }
}

// ваше событие здесь!!!
