/*function addResult() {
    let x = document.getElementById(`first_number`).value;
    let y = document.getElementById(`second_number`).value;
    updateResult(+x + +y)
}

function substractResult() {
    let x = document.getElementById(`first_number`).value;
    let y = document.getElementById(`second_number`).value;
    updateResult(x - y)
}

function multiplyResult() {
    let x = document.getElementById(`first_number`).value;
    let y = document.getElementById(`second_number`).value;
    updateResult(x * y)
}

function divideResult() {
    let x = document.getElementById(`first_number`).value;
    let y = document.getElementById(`second_number`).value;
    updateResult(x / y);
    if (y != 0) {
        return (x / y);
    } else {
        alert(`Oops, you can't divide by zero!`);
    }
}

function updateResult(result) {
    document.getElementById('final_result').value = result
}

function clearInputs() {
    document.getElementById("first_number").value = "";
    document.getElementById("second_number").value = "";
    document.getElementById("final_result").value = "";
}
*/

class Calculator{
    static addResult(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    static substractResult(firstNumber, secondNumber) {     
        return firstNumber - secondNumber;
    }

    static divideResult(firstNumber, secondNumber) {
        if(secondNumber != 0){        
            return firstNumber / secondNumber;
        } else {
            return 'Oops, you cannot divide by zero!';
        }
    }

    static multiplyResult(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }
}

function addResult(){
    document.getElementById('final_result').value = Calculator.addResult(Number(document.getElementById('first_number').value), Number(document.getElementById('second_number').value));
}

function substractResult(){
    document.getElementById('final_result').value = Calculator.substractResult(Number(document.getElementById('first_number').value), Number(document.getElementById('second_number').value));
}

function divideResult(){
    document.getElementById('final_result').value = Calculator.divideResult(Number(document.getElementById('first_number').value), Number(document.getElementById('second_number').value));
}

function multiplyResult(){
    document.getElementById('final_result').value = Calculator.multiplyResult(Number(document.getElementById('first_number').value), Number(document.getElementById('second_number').value));
}

/*OR Variant2:
class Calculator {
    static multiplyResult(a, b){
        return document.getElementById('final_result').value = `${+a * +b}`;
    }

    static divideResult(a, b){
        if(b != 0){
            return document.getElementById('final_result').value = `${+a / +b}`;
        } else {
            return document.getElementById('final_result').value = `Oops, you cannot divide by zero!`;
        }
    }

    static addResult(a, b){
        return document.getElementById('final_result').innerText = `${+a + +b}`;
    }

    static substractResult(a, b){
        return document.getElementById('final_result').innerText = `${+a - +b}`;
    }
}
*/