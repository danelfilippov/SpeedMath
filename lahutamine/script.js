function lahutamine() {

    let answer;
    const activity = Math.round(Math.random());

    if (activity == 0) {

        const value = Math.round(Math.random() * 100);
        const value1 = Math.round(Math.random() * 100);

        console.log(value, value1);
        answer = value - value1;
        const userInput = parseInt(prompt(''));

        if (userInput == answer) {
            document.getElementById("useroutput").innerHTML = "ÕIGE";
        } else {
            document.getElementById("useroutput").innerHTML = "VALE";
        }


    } else if (activity == 1) {

        const value = Math.round(Math.random() * 100);
        const value1 = Math.round(Math.random() * 100);
        const value2 = Math.round(Math.random() * 100);

        console.log(value, value1, value2);
        answer = value - value1 - value2;
        const userInput = parseInt(prompt(''));

        if (userInput == answer) {
            document.getElementById("useroutput").innerHTML = "ÕIGE";
        } else {
            document.getElementById("useroutput").innerHTML = "VALE";
        }
    }
}

lahutamine()
