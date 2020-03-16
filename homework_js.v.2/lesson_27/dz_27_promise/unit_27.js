// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция должна по нажатию b-1.</p>*/

let getAdd = {
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

const Link = getAdd.link;

function getAnswer(one) {
  let param = "";
  for (let key in one) {
    param += `${key}=${one[key]}&`;
  }

  let prom = new Promise((resolve, reject) => {
    fetch(`${Link}?${param}`).then(responce => {
      resolve(responce.text());
    });
  });
  return prom;
}

document.querySelector(".b-1").onclick = t1;

function t1() {
  let requestA = getAnswer(getAdd.task1);
  let requestB = getAnswer(getAdd.task2);

  Promise.all([requestA, requestB]).then(
    responce => (document.querySelector(".out-1").textContent = responce)
  );
}

// ваше событие здесь!!!

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>*/

document.querySelector(".b-2").onclick = t2;

function t2() {
  let requestA = getAnswer(getAdd.task3);
  let requestB = getAnswer(getAdd.task4);

  Promise.all([requestA, requestB]).then(
    responce => (document.querySelector(".out-2").textContent = responce)
  );
}

// ваше событие здесь!!!

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>*/

document.querySelector(".b-3").onclick = t3;

function t3() {
  let requestA = getAnswer(getAdd.task5);
  let requestB = getAnswer(getAdd.task6);

  Promise.all([requestA, requestB]).then(
    responce => (document.querySelector(".out-3").textContent = responce)
  );
}

// ваше событие здесь!!!

// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>*/

document.querySelector(".b-4").onclick = t4;

function t4() {
  let requestA = getAnswer(getAdd.task7);
  let requestB = getAnswer(getAdd.task8);

  Promise.all([requestA, requestB]).then(
    responce => (document.querySelector(".out-4").textContent = responce)
  );
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function postAnswer(one) {
  let param = "";
  for (let key in one) {
    param += `${key}=${one[key]}&`;
  }

  //   console.log(param);

  let prom = new Promise((resolve, reject) => {
    fetch(`${Link}`, {
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: param
    }).then(responce => {
      resolve(responce.text());
    });
  });

  return prom;
}

document.querySelector(".b-5").onclick = t5;

function t5() {
  let requestA = postAnswer(getAdd.task1);
  let requestB = postAnswer(getAdd.task2);

  Promise.all([requestA, requestB]).then(responce => {
    document.querySelector(".out-5").textContent = responce;
  });
}

// ваше событие здесь!!!

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

document.querySelector(".b-6").onclick = t6;

function t6() {
  let requestA = postAnswer(getAdd.task3),
    requestB = postAnswer(getAdd.task4);

  Promise.all([requestA, requestB]).then(responce => {
    document.querySelector(".out-6").textContent = responce;
  });
}

// ваше событие здесь!!!

// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

document.querySelector(".b-7").onclick = t7;

function t7() {
  let requestA = postAnswer(getAdd.task5),
    requestB = postAnswer(getAdd.task6);

  Promise.all([requestA, requestB]).then(responce => {
    document.querySelector(".out-7").textContent = responce;
  });
}

// ваше событие здесь!!!

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

document.querySelector(".b-8").onclick = t8;

function t8() {
  let requestA = postAnswer(getAdd.task7),
    requestB = postAnswer(getAdd.task8);

  Promise.all([requestA, requestB]).then(responce => {
    document.querySelector(".out-8").textContent = responce;
  });
}

// ваше событие здесь!!!
