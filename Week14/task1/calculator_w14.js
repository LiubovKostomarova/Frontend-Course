function addResult() {
    let x = document.getElementById(`first_number`).value;
    let y = document.getElementById(`second_number`).value;
    document.getElementById('final_result').value = add(x, y);
}

function add(x, y) {
    return (+x + +y);
}



function subtractResult() {
    let x = document.getElementById(`first_number`).value;
    let y = document.getElementById(`second_number`).value;
    document.getElementById('final_result').value = subtract(x, y);
}

function subtract(x, y) {
    return (x - y);
}



function multiplyResult() {
    let x = document.getElementById(`first_number`).value;
    let y = document.getElementById(`second_number`).value;
    document.getElementById('final_result').value = multiply(x, y);
}

function multiply(x, y) {
    return (x * y);
}



function divideResult() {
    let x = document.getElementById(`first_number`).value;
    let y = document.getElementById(`second_number`).value;
    document.getElementById('final_result').value = divide(x, y);
}

function divide(x, y) {
    return (x / y);
}



function clearInputs() {
    document.getElementById("first_number").value = "";
    document.getElementById("second_number").value = "";
    document.getElementById("final_result").value = "";
}