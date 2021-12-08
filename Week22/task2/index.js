document.addEventListener("DOMContentLoaded", function (event) {
    const moment = require('moment');
    let now = moment();
    document.getElementById("dataNow").innerHTML = `Today ${now.format('dddd, MMMM DD YYYY')}`;

    const Choreographer = require('choreographer-js');
    let choreographer1 = new Choreographer({
        animations: [
            {
            range: [-1, window.innerHeight * 4],
            selector: '#box',
            type: 'scale',
            style: 'opacity',
            from: 0.2,
            to: 1
            }
        ]
    })
    window.addEventListener('scroll', function() {
        choreographer1.runAnimationsAt(window.pageYOffset)
    })

    let massJSON = [{
        "month":"January",
        "value":"25"
    },{
        "month":"February",
        "value":"30"
    },{
        "month":"March",
        "value":"25"
    },{
        "month":"April",
        "value":"28"
    },{
        "month":"May",
        "value":"44"
    },{
        "month":"June",
        "value":"30"
    },{
        "month":"July",
        "value":"45"
    },{
        "month":"August",
        "value":"90"
    },{
        "month":"September",
        "value":"80"
    },{
        "month":"October",
        "value":"55"
    },{
        "month":"November",
        "value":"10"
    },{
        "month":"December",
        "value":"5"
    }];

    let labels = [];
    let dataValue = [];
    for(let i = 0; i < massJSON.length; i++){
        labels[i] = massJSON[i].month;
        dataValue[i] = massJSON[i].value;
    }

    const data = {
        labels: labels,
        datasets: [{
            label: 'Load on tasks throughout the year',
            backgroundColor: 'rgb(0, 178, 117)',
            borderColor: 'rgb(255, 99, 132)',
            color: 'rgb(255, 99, 132)',
            data: dataValue,
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    Chart.defaults.font.size = 16;
    
    let massJSON1 = [{
        "routine":"Dream",
        "value":"150",
        "bgc":"blue"
    },{
        "routine":"Work",
        "value": "100",
        "bgc":"yellow"
    },{
        "routine":"Eating",
        "value": "50",
        "bgc":"red"
    },{
        "routine":"Rest at home",
        "value": "160",
        "bgc":"green"
    },{
        "routine":"Walk in the park",
        "value": "80",
        "bgc":"orange"
    }];

    let labels1 = [];
    let dataValue1 = [];
    let dataColor1 = [];
    for(let i = 0; i < massJSON1.length; i++){
        labels1[i] = massJSON1[i].routine;
        dataValue1[i] = massJSON1[i].value;
        dataColor1[i] = massJSON1[i].bgc;
    }

    const data1 = {
        labels: labels1,
        datasets: [{
            label: 'My daily routine',
            data: dataValue1,
            backgroundColor: dataColor1,
            hoverOffset: 4
        }]
    };

    const config1 = {
        type: 'pie',
        data: data1,
        options: {}
    };

    const myChart1 = new Chart(
        document.getElementById('myChart1'),
        config1
    );
});

