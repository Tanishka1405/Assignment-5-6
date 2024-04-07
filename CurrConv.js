// Function to convert USD to CAD
function conUSD_to_CAD() {
    var amount = parseFloat(document.getElementById('USD').value);

    if (isNaN(amount) || amount <= 0 || amount === null || amount === "") {
        alert('Enter a valid amount.');
        return;
    }

    var exchange_rate = 1.27;

    var convert = (amount * exchange_rate).toFixed(3);

    document.getElementById('CAD').value = convert;
    document.getElementById('CAD').focus();
}

// Function to convert CAD to USD
function conCAD_to_USD() {
    var amount = parseFloat(document.getElementById('CAD').value);

    if (isNaN(amount) || amount <= 0 || amount === null || amount === "") {
        alert('Enter a valid amount.');
        return;
    }

    var exchange_rate = 0.79;

    var convert = (amount * exchange_rate).toFixed(3);

    document.getElementById('USD').value = convert;
    document.getElementById('USD').focus();
}

