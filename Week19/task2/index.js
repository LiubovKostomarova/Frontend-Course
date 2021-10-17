const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {

    createObjectCat();
    
});

    function createObjectCat() {
        class Cat {
            constructor(name, birthdate, breed, food, meal, sex) {
                this.name = name;
                this.birthdate = birthdate;
                this.breed = breed;
                this.food = food;
                this.meal = meal;
                this.sex = sex;
            }
        }

        let name = document.getElementById('name').value;

        let birthdate = document.getElementById('bd').value;

        let breed = document.getElementById('breed').value;

        let food = "";
        let foodInput = document.getElementsByName('feed');
        for (let i = 0; foodInput[i]; ++i) {
            if (foodInput[i].checked) {
                food = `${foodInput[i].value} ${food}`;
            }
        }

        let meal = document.getElementById('meal').value;

        let sex = "";
        let sexInput = document.getElementsByName('sex');
        for (let i = 0; sexInput[i]; ++i) {
            if (sexInput[i].checked) {
                sex = sexInput[i].value;
                break;
            }
        }

        let cat1 = new Cat(name, birthdate, breed, food, meal, sex);
        console.log("Cat");
        console.log(`Cat's name is ${cat1.name}`);
        console.log(`Cat's birthday is on ${cat1.birthdate}`);
        console.log(`Cat's breed is ${cat1.breed}`);
        console.log(`Cat eats ${cat1.food}`);
        console.log(`Cat eats ${cat1.meal} times per day`);
        console.log(`The kitty is ${cat1.sex}`);
    }
