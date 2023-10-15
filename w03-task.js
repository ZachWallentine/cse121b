/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}
function addNumbers (add1, add2){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}
function subtractNumbers() {
    let number1 = parseFloat(document.getElementById("firstNumber").value);
    let number2 = parseFloat(document.getElementById("secondNumber").value);
    let difference = subtract(number1, number2);
    document.getElementById("result").value = difference;
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiplyNumbers() {
    let number1 = parseFloat(document.getElementById("firstNumber").value);
    let number2 = parseFloat(document.getElementById("secondNumber").value);
    let product = multiply(number1, number2);
    document.getElementById("result").value = product;
}

/* Open Function Use - Divide Numbers */
function divideNumbers() {
    let number1 = parseFloat(document.getElementById("firstNumber").value);
    let number2 = parseFloat(document.getElementById("secondNumber").value);
    let quotient = divide(number1, number2);
    document.getElementById("result").value = quotient;
}

/* Decision Structure */
var d = new Date();
var currentYear = d.getFullYear();
document.getElementById("year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
document.getElementById("array").innerHTML = numbers;
/* Output Source Array */

/* Output Odds Only Array */
var odds = numbers.filter(function(number) {
    return number % 2 !== 0;
});
document.getElementById("odds").innerHTML = odds;
/* Output Evens Only Array */
var evens = numbers.filter(function(number) {
    return number % 2 === 0;
});
document.getElementById("evens").innerHTML = evens;
/* Output Sum of Org. Array */
var sumOfArray = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);
document.getElementById("sumOfArray").innerHTML = sumOfArray;
/* Output Multiplied by 2 Array */
var multiplied = numbers.map(function(number) {
    return number * 2;
});
document.getElementById("multiplied").innerHTML = multiplied;
/* Output Sum of Multiplied by 2 Array */
