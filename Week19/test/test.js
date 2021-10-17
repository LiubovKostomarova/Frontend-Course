let user = {
    login: 'vasya123',
    name: 'Vasya Pupkin',
    regDate: newDate(11, 11, 2011),
    url: '1.jpg',
    orders: [111, 234, 256],
}

let comment = {
    date: newDate(11, 11, 2011),
    author: "vasya123",
    text: "Here is our text",
}

console.log(comment);

let cat = {
    name: "Kitty",
    age: 3,
    weight: 5.5,
    happiness: 3,
}

feedCat() {
    this.happiness = this.happiness + 5;
}

let calc = {
    sum(a, b) {
        return a + b
    }
}

let car = {}
car.brand = 'BMW';
car['brand'] = 'Mercedez';
car.drive = function test() {
    console.log('I want a test-drive.');
}

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;

        showInfo(); {
            console.log('This is ' + this.type);
        }
    }
}

let animal1 = new Animal('Pups', 'cat');
let animal2 = new Animal('Sweety', 'dog');

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;

        drive(); {
            console.log(`Let us drive ${this.brand}`);
        }
    }
}

let car1 = new Car('BMW', 'X5');
car1.drive ();

let car2 = new Car('Land Crousier', '200');
car2.drive ();

class Validation {
    static checkEmpty (collection){
        let isEmpty = false;
        for (let input of collection) {
            if (input.value == '')
            isEmpty = true;
        }
        return isEmpty;
    }
}

let array = document.getElementsByClassName('test');
let isEmpty = Validation.checkEmpty(array);

//let isEmpty = Validation.checkEmpty(document.getElementsByClassName('test'))

if (Validation.checkEmpty(document.getElementsByClassName('test'))) {
    //there is an empty element
    alert ('there is an empty element!')

}

function bike () {
    console.log (this.name);
  }
  var name = "ninja"
  var obj1 = {name:"pomidor", bike:"bike"}
  var obj2 = {name:"site", bike:"bike"}
  
  bike()
  obj1.bike()
  obj2.bike() 