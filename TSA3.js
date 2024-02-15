function addToResult(value) {
    document.getElementById('result').value += value;
}

function removeLastCharacter() {
    var value = document.getElementById('result').value;
    document.getElementById('result').value = value.substring(0, value.length - 1);
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculate() {
    let result = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(result);
    } catch (error) {
        alert('Invalid input');
        clearResult();
    }
}
