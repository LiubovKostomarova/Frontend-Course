document.getElementById('brand').onchange = function () {
    const value = document.getElementById('brand').value

    const audi = ['A1', 'A2', 'A3']
    const bmw = ['1 Series', '2 Series', '3 Series']

    let values = []
    document.getElementById("containermodel").innerHTML = ''

    if (value == 0) {
        return
    }
    else if (value == 1) {
        values = [...audi]
    }
    else if (value == 2) {
        values = [...bmw]
    }

    let select = document.createElement("select");
    select.name = "models"
    select.id = "models"

    for (const val of values) {
        let option = document.createElement("option");
        option.value = val;
        option.text = val;
        select.appendChild(option);
    }
    document.getElementById("containermodel").appendChild(select);
}

document.getElementById('containermodel').onclick = function () {
    const valuemodel = document.getElementById("models").value

    const yearaudiA1 = ['2015', '2016', '2017']
    const yearaudiA2 = ['2017', '2018', '2019']
    const yearaudiA3 = ['2019', '2020']
    const yearbmw1Series = ['2017', '2018']
    const yearbmw2Series = ['2018', '2019']
    const yearbmw3Series = ['2020', '2021']

    let values = []
    document.getElementById("containeryear").innerHTML = ''

    if (valuemodel == "A1") {
        values = [...yearaudiA1]
    }
    else if (valuemodel == "A2") {
        values = [...yearaudiA2]
    }
    else if (valuemodel == "A3") {
        values = [...yearaudiA3]
    }
    else if (valuemodel == "1 Series") {
        values = [...yearbmw1Series]
    }
    else if (valuemodel == "2 Series") {
        values = [...yearbmw2Series]
    }
    else if (valuemodel == "3 Series") {
        values = [...yearbmw3Series]
    }

    let select = document.createElement("select");
    select.name = "years"
    select.id = "years"

    for (const val of values) {
        let option = document.createElement("option");
        option.value = val;
        option.text = val;
        select.appendChild(option);
    }
    document.getElementById("containeryear").appendChild(select);
}

document.getElementById('containeryear').onclick = function () {


    document.getElementById("containerrun").type = "number";
    document.getElementById("containerrunname").innerHTML = 'Пробег, км'
}
document.getElementById('containerrun').onchange = function () {
    document.getElementById("accidentname").innerHTML = 'Наличие аварий'
    document.getElementById("accident").type = "checkbox";
    document.getElementById("calc").type = "button";
    document.getElementById("calc").value = "Рассчитать";
}

document.getElementById('calc').onclick = function () {
    let pricemodel = 0;
    let priceyear = 0;
    let pricerun = 0;
    let finalprice = 0;

    if (document.getElementById('models').value == 'A1') {
        pricemodel = 100000
    }
    else if (document.getElementById('models').value == 'A2') {
        pricemodel = 150000
    }
    else if (document.getElementById('models').value == 'A3') {
        pricemodel = 250000
    }
    else if (document.getElementById('models').value == '1 Series') {
        pricemodel = 170000
    }
    else if (document.getElementById('models').value == '2 Series') {
        pricemodel = 270000
    }
    else if (document.getElementById('models').value == '3 Series') {
        pricemodel = 370000
    }
    if (document.getElementById('years').value == '2015') {
        priceyear = pricemodel * 0.8
    }
    else if (document.getElementById('years').value == '2016') {
        priceyear = pricemodel * 0.9
    }
    else if (document.getElementById('years').value == '2017') {
        priceyear = pricemodel * 0.9
    }
    else if (document.getElementById('years').value == '2018') {
        priceyear = pricemodel * 1
    }
    else if (document.getElementById('years').value == '2019') {
        priceyear = pricemodel * 1.1
    }
    else if (document.getElementById('years').value == '2020') {
        priceyear = pricemodel * 1.2
    }
    else if (document.getElementById('years').value == '2021') {
        priceyear = pricemodel * 1.3
    }
    if (document.getElementById('containerrun').value > 0 && document.getElementById('containerrun').value < 10000) {
        pricerun = priceyear * 1.1
    }
    else if (document.getElementById('containerrun').value > 10000 && document.getElementById('containerrun').value < 100000) {
        pricerun = priceyear * 0.9
    }
    else if (document.getElementById('containerrun').value > 100000) {
        pricerun = priceyear * 0.8
    }
    if (document.getElementById('accident').checked) {
        finalprice = pricerun * 0.8
    }
    else {
        finalprice = pricerun
    }
    document.getElementById("price").innerHTML = 'Стоимость автомобиля  ' + finalprice + 'тыс.руб.';
}