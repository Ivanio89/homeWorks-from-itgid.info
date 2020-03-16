// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while

function func_1() {
    let content = document.querySelector(".task-1");
    let i = 0;
    while (i < 100) {
        i++;
        content.textContent += i + " ";
    }
}
func_1();

// Task 2
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 5 6 7
// считаем что второе число всегда больше первого. Решаем с помощью while

function func_2(a, b) {
    let content = document.querySelector(".task-2");
    while (a <= b) {
        content.textContent += a + " ";
        a++;
    }
}
func_2(5, 7);

// Task 3
// Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 7 6 5
// Решаем с помощью while

function func_3(a, b) {
    let content = document.querySelector(".task-3");
    while (a <= b) {
        content.textContent += b + " ";
        b--;
    }
}
func_3(5, 7);

// Task 4
// Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и возращает строку от большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while

function func_4(a, b, c) {
    let content = document.querySelector(".task-4");
    if (a > b) {
        while (a >= b) {
            content.textContent += a - c + " ";
            a = a - c;
        }
    }
    else {
        while (a <= b) {
            content.textContent += b + " ";
            b = b - c;
        }
    }
}
func_4(1, 5, 2);

// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.

function func_5() {
    let content = document.querySelector(".task-5");
    let i = 0;
    while (i <= 10) {
        content.textContent += i + i + " ";
        i++;
    }
}
func_5();

// Task 6
// C помощью цикла
// while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает сумму чисел от первого до второго включительно. Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_6(a, b) {
    let content = document.querySelector(".task-6");
    if (a < b) {
        while (a <= b) {
            content.textContent += a + b + " ";
            a++;
        }
    }
    else {
        content.textContent += false + " ";
    }
}
func_6(1, 5);

// Task 7
// C помощью цикла
// while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает произведение чисел от первого до второго включительно.Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_7(a, b) {
    let content = document.querySelector(".task-7");
    if (a < b) {
        while (a <= b) {
            content.textContent += a * b + " ";
            a++;
        }
    }
    else {
        content.textContent += false + " ";
    }
}
func_7(1, 5);

// Task 8
// У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет увеличиваетя в 2 раза. Напишите функцию func_8, которая вернет день, в который количество монет станет больше или равно 1 000 000.

function func_8() {
    let content = document.querySelector(".task-8");
    let result = "";
    let i = 333;
    while (i <= 1000000) {
        result = i;
        i = i * 2;

    }
    content.textContent += result + " ";
}
func_8();

// Task 9
// Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго введенного параграфа, где все четные числа заменены на символ нуля(0).

function func_9(a, b) {
    let content = document.querySelector(".task-9");
    let result = "";
    while (a <= b) {
        result = a + b;
        if (result % 2 == 0) {
            content.textContent += "0 ";
        }
        else {
            content.textContent += a + " ";
        }
        a++;
    }
}
func_9(5, 20);

// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через
//         while):
//     **
//     *
//     **
//     *
//     **
//     *

function func_10() {
    let content = document.querySelector(".task-10");
    let count = 2;
    let countOne = 2;
    let countTwo = 2;
    let star = "<br>";
    let i = 0;
    let e = 0;
    let r = 0;
    while (i < 2) {
        let t = 0;
        while (t < 2) {
            if (t < count) {
                star += "*";
            }
            else {
                star += "&nbsp;&nbsp;";
            }
            t++;
        }
        count--;
        star += "<br>";
        i++;
    }
    while (e < 2) {
        let t = 0;
        while (t < 2) {
            if (t < countOne) {
                star += "*";
            }
            else {
                star += "&nbsp;&nbsp;";
            }
            t++;
        }
        countOne--;
        star += "<br>";
        e++;
    }
    while (r < 2) {
        let t = 0;
        while (t < 2) {
            if (t < countTwo) {
                star += "*";
            }
            else {
                star += "&nbsp;&nbsp;";
            }
            t++;
        }
        countTwo--;
        star += "<br>";
        r++;
    }
    content.innerHTML += star;
}
func_10()

// Task 11
// Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. . 1 10. Решаем через
// while.

function func_11() {
    let content = document.querySelector(".task-11");
    let i = 0;
    let t = 0;
    let e = 0;
    let r = 0;
    let q = 0;
    let w = 0;
    let count = "";

    while (i <= 10) {
        if (i == 10) {
            count += i + " ";
        }
        i++;
    }
    while (t <= 10) {
        if (t == 1) {
            count += t + " ";
        }
        t++
    }
    while (e <= 10) {
        if (e == 9) {
            count += e + " ";
        }
        e++
    }
    while (r <= 10) {
        if (r == 2) {
            count += r + " ";
        }
        r++
    }
    while (q <= 10) {
        if (q == 8) {
            count += q + " ";
        }
        q++
    }
    while (w <= 10) {
        if (w == 3) {
            count += w + ". ";
        }
        w++
    }
    content.innerHTML += count;
}

func_11();

// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
// let a = 0;
// do
//     console.log('do while work');
// while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }

// изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.Т.е.вначале идет срабатывание, а потом проверка.

function func_12() {
    console.log("----------Task 12----------");
    let a = 0;
    do
        console.log('do while work');
    while (a < 0);

    let b = 0;
    while (b < 0) {
        console.log('while work');
    }
}

func_12();

// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.Используем цикл do while.

function func_13() {
    let content = document.querySelector(".task-13");
    let i = 101;
    let result = "";

    do {
        i = i - 1;
        result += i + " ";
    } while (i > 0);
    content.innerHTML += result + " ";
}
func_13();

// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от предыдущего дня .Напишите функцию func_14 которая вернет день, когда Стаханова побьют все, кто с ним работает, этот день наступит тогда, когда Стаханов в день добудет 132 тонны угля.Используйте для решения do while. Считаем, что каждый день Стаханов дает угля на 30% больше предыдущего.

function func_14() {
    let content = document.querySelector(".task-14");
    let result = "";
    let i = 5;
    do {
        i = i + 5
    } while (i < 132);
    result = Math.floor(i / 100 * 30);
    content.innerHTML += result + " days";
}
func_14();

// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.Во второй день на 0.3 литра зелья больше.Напишите функцию func_15, которая вернет день, когда в Хоргвардсе не останется пустых котлов(суммарный объем котлов в замке 568 литров).Обратите внимание, что вам нужно найти суммарных объем сваренного зелья, а не дневной объем.Используем do while.

function func_15() {
    let content = document.querySelector(".task-15");
    let i = 0;
    let result = "";

    do {
        i = i + 1;
    } while (i < 568);
    result += Math.floor((1.1 + 0.3) * i);
    content.innerHTML += result + " суммарный объем сваренного зелья.";
}
func_15();

// Task 16
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while посчитайте количество параграфов p.task-16 и если число четное - верните значение, если нет - верните false.Код напишите в функции func_16.

function func_16() {
    console.log("----------Task 16----------");
    let content = document.querySelectorAll(".task-16");
    let i = 0;

    do {
        i = i + 1;

    } while (i < content.length);

    if (i % 2 == 0) {
        console.log(i);
    }
    else {
        console.log(false);
    }
    content.innerHTML = i;
}
func_16();

// Task 17
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while выведите в первый p.task-16 - число 1, во второй 2 и т.д.Решение оформите в виде функции func_17.

function func_17() {
    let content = document.querySelectorAll(".task-16");
    let i = 0;

    do {
        if (i == 0) {
            content[i].textContent += 1;
        }
        if (i == 1) {
            content[i].textContent += 2;
        }
        if (i == 2) {
            content[i].textContent += 3;
        }
        if (i == 3) {
            content[i].textContent += 4;
        }
        i = i + 1;
    } while (i < content.length) {
    }

}
func_17();

// Task 18
// На странице есть три параграфа p.task-18. Используя цикл do ..while выведите в первый p.task-18 - число равное количеству параграфов p.task - 18, во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.

function func_18() {
    let content = document.querySelectorAll(".task-18");
    let i = 0;
    let t = 18;

    do {
        if (i == 0) {
            content[i].innerHTML += 18;
        }
        if (i == 1) {
            content[i].innerHTML += 17;
        }
        if (i == 2) {
            content[i].innerHTML += 16;
        }
        i = i + 1;
    } while (i < content.length);
}
func_18();

// Task 19
// Напишите функцию func_19, которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. Решите с помощью do while.

function func_19() {
    let content = document.querySelector(".task-19");
    let i = 1;

    do {
        if (i == 1) {
            content.innerHTML += i;
        }
        else {
            content.innerHTML += "*" + i;
        }
        i = i + 2;
    } while (i <= 19);
}
func_19();

// Task 20
// Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * * * 1

function func_20() {
    let content = document.querySelector(".task-20");
    let i = 0;
    let starLeft = 2;
    let starRight = 0;


    content.innerHTML += "<br>";
    do {
        i = i + 1;
        content.innerHTML += "<br>";

        let t = 0;
        do {
            t = t + 1;
            if (t > starRight && t < starLeft) {
                content.innerHTML += "1";
            }
            else {
                content.innerHTML += "*";
            }

        } while (t < 4);
        starLeft++;
        starRight++;
    } while (i < 4);

}
func_20();