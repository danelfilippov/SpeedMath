let value;
let value1;
let answer;
let button;
let input;

function generateQuestion() {
    value = Math.round(Math.random() * 10);
    value1 = Math.round(Math.random() * 10);
    answer = value * value1;
    document.getElementById('vastused').innerHTML = `${value} * ${value1}`;
    document.getElementById("pizda").value = '';
    document.getElementById("useroutput").innerHTML = '';
}

document.addEventListener("DOMContentLoaded", () => {
    input = document.getElementById("pizda");
    button = document.getElementById("sisesta");

    document.getElementById("question").addEventListener("click", generateQuestion);

    button.addEventListener("click", () => {
        const userInput = input.value;

        if (userInput == answer) {
            document.getElementById("useroutput").innerHTML = "ÕIGE";
        } else {
            document.getElementById("useroutput").innerHTML = "VALE";
        }
    });

    setTimeout(() => {
        button.disabled = true;
        input.disabled = true;

        alert('AEG ON LÄBI!!!!!!');
    }, 60000);
});

generateQuestion();