function jagamine() {

    const value = Math.round(Math.random() * 10);
    const value1 = Math.round(Math.random() * 10);

    console.log(value, value1);

    const valuesElement = document.getElementById('vastused');
    if (valuesElement) {
        valuesElement.innerHTML = value + ' / ' + value1;
    }

    const answer = value / value1;
    const userInput = document.getElementById('pizda').valueAsNumber;
    userInput.addEventListener('click', function() {
        if (userInput == answer) {
            document.getElementById("useroutput").innerHTML = "ÕIGE";
        } else {
            document.getElementById("useroutput").innerHTML = "VALE";
        }
    });
}
jagamine()