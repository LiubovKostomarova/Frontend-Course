function addResult() {
    let x = document.getElementById(`first_number`).value;
    let y = document.getElementById(`second_number`).value;
    updateResult(+x + +y)
}

function subtractResult() {
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