//change of first selector
function onChangeBrand() {
    const value = document.getElementById('brand').value

    const acura = ['MDX', 'RDX', 'RL', 'RSX', 'TL', 'TLX', 'TSX', 'ZDX']
    const alfaromeo = ['147', '156', '159', '166', 'Brera', 'Giulia', 'Giulietta', 'MiTo', 'Spider']
    const astonmartin = ['DB9', 'DBS', 'Rapide', 'V8 Vantage', 'Vanquish']
    const audi = ['A1', 'A2', 'A3', 'A4', 'A4 allroad', 'A5', 'A6', 'A6 allroad', 'A7', 'A8', 'e-tron', 'e-tron sportback', 'Q2', 'Q3', 'Q3 Sportback', 'Q5', 'Q7', 'Q8']
    const bentley = ['Arnage', 'Bentayaga', 'Brooklands', 'Continental Flying Spur', 'Continental GT', 'Flying Spur', 'Mulsanne']
    const bmw = ['1', '2', '3', '4']
    const brilliance = ['1', '2', '3', '4']
    const buick = ['1', '2', '3', '4']
    const byd = ['1', '2', '3', '4']
    const cadillac = ['1', '2', '3', '4']
    const citroen = ['1', '2', '3', '4']
    const dacia = ['1', '2', '3', '4']

    let values = []
    document.getElementById("model").innerHTML = ''

    if (value == 0) {
        document.getElementById("model").value = ''
        document.getElementById("model").disabled = true;
        return
    }
    else if (value == 50000) {
        values = [...acura]
    }
    else if (value == 55000) {
        values = [...alfaromeo]
    }
    else if (value == 60000) {
        values = [...astonmartin]
    }
    else if (value == 80000) {
        values = [...audi]
    }
    else if (value == 90000) {
        values = [...bentley]
    }
    else if (value == 10000) {
        values = [...bmw]
    }
    else if (value == 11000) {
        values = [...brilliance]
    }
    else if (value == 12000) {
        values = [...buick]
    }
    else if (value == 13000) {
        values = [...byd]
    }
    else if (value == 14000) {
        values = [...cadillac]
    }
    else if (value == 8000) {
        values = [...citroen]
    }
    else if (value == 7000) {
        values = [...dacia]
    }


    var select = document.getElementById("model");

    for (const val of values) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val;
        select.appendChild(option);
    }
    document.getElementById("model").disabled = false
}

//change of second selector
function onChangeModel() {
    document.getElementById('releaseYear').disabled = false
}

//change of third selector
function onChangeYear() {
    const value = document.getElementById('releaseYear').value

    const year_2021 = ['Basic', 'Middle', 'Maximum']
    const year_2020 = ['Basic', 'Middle', 'Maximum']
    const year_2019 = ['Middle', 'Maximum']
    const year_2018 = ['Middle', 'Maximum']
    const year_2017 = ['Basic', 'Middle']
    const year_2016 = ['Basic', 'Middle']
    const older = ['Basic']


    let values = []
    document.getElementById("configuration").innerHTML = ''

    if (value == 0) {
        document.getElementById("configuration").value = ''
        document.getElementById("configuration").disabled = true;
        return
    }
    else if (value == 1000) {
        values = [...year_2021]
    }
    else if (value == 800) {
        values = [...year_2020]
    }
    else if (value == 700) {
        values = [...year_2019]
    }
    else if (value == 600) {
        values = [...year_2018]
    }
    else if (value == 500) {
        values = [...year_2017]
    }
    else if (value == 400) {
        values = [...year_2016]
    }
    else if (value == 250) {
        values = [...older]
    }


    var select = document.getElementById("configuration");

    for (const val of values) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val;
        select.appendChild(option);
    }
    document.getElementById("configuration").disabled = false

    /*var [Basic] = "1000"
    var [Middle] = "2000"
    var [Maximum] = "3000"*/
}

//change of last selector
function onChangeConfiguration() {
    document.getElementById('carBody').disabled = false
}

//price calculation
function calculatePrice() {
    let carBrand = Number(document.getElementById('brand').value);
    /*let carModel = Number(document.getElementById('model').value);*/
    let carAge = Number(document.getElementById('releaseYear').value);
    /*let carConfiguration = Number(document.getElementById('configuration').value);*/
    let carMileage = Number(document.getElementById('exampleRadios1').value);
    let carBody = Number(document.getElementById('carBody').value);
    let carFuel = Number(document.getElementById('inlineCheckbox').value);
    let totalPrice = carBrand /*+ carModel + carConfiguration */ + carAge + carMileage + carBody + carFuel;

    console.log(carBrand);
    /*console.log(carModel);*/
    console.log(carAge);
    /*console.log(carConfiguration);*/
    console.log(carMileage);
    console.log(carBody);
    console.log(carFuel);
    console.log(totalPrice);
    console.log(Number.isNaN(totalPrice));

    if (Number.isNaN(totalPrice) == false) {
        document.getElementById('result').innerHTML = 'The price is ' + totalPrice + ' €';
    } else document.getElementById('result').innerHTML = 'In order to get a full price, please fulfil all the fields.';
}

function deleteData() {
    document.location.reload(true);
}