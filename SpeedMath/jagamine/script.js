let answer;

const value = Math.round(Math.random()*10);
const value1 = Math.round(Math.random()*10);

console.log(value, value1);
answer = value / value1;
const userInput = parseInt(prompt(''));

if(userInput == answer){
    document.getElementById("useroutput").innerHTML = "ÕIGE";
}else{
    document.getElementById("useroutput").innerHTML = "VALE";
}
