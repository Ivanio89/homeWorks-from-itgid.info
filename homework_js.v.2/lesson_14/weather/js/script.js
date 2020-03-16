
let buttonConetntWeather = document.querySelector(".btn-weather").onclick = function () {
    window.location.reload();
}
function weaterAll(id) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=78dfc4a826e8638f26bdee55305b9295`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            let nameCity = document.querySelector(".city-name").innerHTML = data.name;
            let weatherCity = document.querySelector(".weather").innerHTML = data.weather[0].description;
            let degCity = document.querySelector(".deg").innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            let imgCity = document.querySelector(".img-weather").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        })
}

let selectContries = document.querySelector("#contries");
let answerContent = document.querySelector(".answer");

let contries = {
    "Russia": {
        "Moscow": {
            "id": 524901,
        },
        "Saint Peterburg": {
            "id": 536203,
        },
        "Ivanovo": {
            "id": 6608392,
        }
    },
    "Ukraine": {
        "Kiev": {
            "id": 703448,
        },
        "Odessa": {
            "id": 698740,
        },
        "Kharkiv": {
            "id": 706483,
        }
    },
    "Belarus": {
        "Minsk": {
            "id": 625144,
        },
        "Lida": {
            "id": 626081,
        },
        "Slutsk": {
            "id": 621741,
        }
    }
}

let one = [];
for (t in contries) {
    // console.log(contries[t]);
    for (r in contries[t]) {
        one.push(contries[t][r]);
        // console.log(contries[t][r]);
    }
}

function cantries() {
    let arraContries = [];


    for (key in contries) {
        arraContries.push(key);
    }

    for (i = 0; i < arraContries.length; i++) {
        optionCantry = document.createElement("option");
        optionCantry.className = "cantry";
        optionCantry.innerHTML = arraContries[i];
        selectContries.appendChild(optionCantry);
    }
}

function contriesCan(arraCantries) {

    let countCantries = [];
    select = "";
    answerContent.innerHTML = "";

    select = document.createElement("select");
    select.style = "width: 200px; font-size: 1.3em; text-align: center; border-radius: 5px;"
    answerContent.appendChild(select);

    for (r in arraCantries) {
        countCantries.push(r);
    }

    let option = "";
    select.innerHTML = "";

    for (i = 0; i < countCantries.length; i++) {
        option = document.createElement("option");
        option.className = countCantries[i];
        option.innerHTML = countCantries[i];
        select.appendChild(option);
    }
    return countCantries;
}

contriesCan(contries["Russia"]);
let ont = this.value;
let id = one[0]["id"];
weaterAll(id);

select.addEventListener("change", function () {
    let ont = this.value;
    if (ont == "Moscow") {
        let id = one[0]["id"];
        weaterAll(id);
    }
    if (ont == "Saint Peterburg") {
        let id = one[1]["id"];
        weaterAll(id);
    }
    if (ont == "Ivanovo") {
        let id = one[2]["id"];
        weaterAll(id);
    }
})

selectContries.addEventListener("change", function () {
    let countContry = this.value;

    if (countContry == "Russia") {
        contriesCan(contries["Russia"])
        let id = one[0]["id"];
        weaterAll(id);
        select.addEventListener("change", function () {
            let ont = this.value;
            if (ont == "Moscow") {
                let id = one[0]["id"];
                weaterAll(id);
            }
            if (ont == "Saint Peterburg") {
                let id = one[1]["id"];
                weaterAll(id);
            }
            if (ont == "Ivanovo") {
                let id = one[2]["id"];
                weaterAll(id);
            }
        })
    }
    if (countContry == "Ukraine") {
        contriesCan(contries["Ukraine"])
        let id = one[3]["id"];
        weaterAll(id);
        select.addEventListener("change", function () {
            let ont = this.value;
            if (ont == "Kiev") {
                let id = one[3]["id"];
                weaterAll(id);
            }
            if (ont == "Odessa") {
                let id = one[4]["id"];
                weaterAll(id);
            }
            if (ont == "Kharkiv") {
                let id = one[5]["id"];
                weaterAll(id);
            }
        })
    }
    if (countContry == "Belarus") {
        contriesCan(contries["Belarus"]);
        let id = one[6]["id"];
        weaterAll(id);
        select.addEventListener("change", function () {
            let ont = this.value;
            if (ont == "Minsk") {
                let id = one[6]["id"];
                weaterAll(id);
            }
            if (ont == "Lida") {
                let id = one[7]["id"];
                weaterAll(id);
            }
            if (ont == "Slutsk") {
                let id = one[8]["id"];
                weaterAll(id);
            }
        })
    }
})
cantries();