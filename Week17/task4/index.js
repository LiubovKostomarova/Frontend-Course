/*let numberRandom = Math.round((Math.random()*5));
document.write("Случайное число равно " + numberRandom.toString());*/


/* Получение случайного целого числа в заданном интервале
Этот пример возвращает случайное целое число в заданном интервале. Возвращаемое значение не менее min (или следующее целое число, которое больше min, если min не целое) и не более (но не равно) max.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    } */


//document.getElementById("demo").innerHTML = Math.round((Math.random() * 5))


/* Получение случайного числа в заданном интервале
Этот пример возвращает случайное число в заданном интервале. Возвращаемое значение не менее (и может быть равно) min и не более (и не равно) max.*/

/*function getRandomArbitrary(min, max) {

    return Math.floor(Math.random() * (max - min) + max);
}
document.getElementById("randoms").innerHTML = document.write(getRandomArbitrary(- 10, 11)); // we write 11 in order to get a chance to get 10*/


//создаем функцию для генерации случайных чисел в заданном промежутке
function randomNumber() {
    //создаем массив с 10ю случайнвми числами в промежутке от -10 до 10ч
    let numbers = [];
    let sum = 0;
    //let mult = 1;

    for (let i = 0; i < 10; i++) {
        let num = Math.round(Math.random() * (10 - (-10))) + (-10);
        numbers.push(num);
    }

    let numbersArray = document.getElementById(`numbers`);
    numbersArray.innerHTML = `Generated numbers from -10 to 10 are: ` + numbers.toString();

    let minimum = document.getElementById(`min`);
    let min = Math.min.apply(null, numbers);
    minimum.innerHTML = `Minimum: ` + min.toString();

    let maximum = document.getElementById(`max`);
    let max = Math.max.apply(null, numbers);
    maximum.innerHTML = `Maximum: ` + max.toString();

    let averageNumber = document.getElementById(`mean`);
    let average = numbers.reduce((a, b) => a + b) / numbers.length     //sum / numbers.length;
    averageNumber.innerHTML = `The arithmetic average: ` + average.toString();

    let totalSum = document.getElementById(`sum`);
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    totalSum.innerHTML = "Sum: " + sum.toString();

    let multiply = document.getElementById(`mult`);
    let mult = numbers.reduce(function (a, b) {
        return a * b;
    });

    /*for (let i = 0; i < numbers.length; i++) {
        mult = mult *= numbers[i];
    }*/
    multiply.innerHTML = `Multiplication: ` + mult;
}
