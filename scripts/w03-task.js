/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}
function addNumbers (){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function substract (number1, number2){
    return number1 - number2;
}
function substractNumbers (){
    let substractNumber1 = Number(document.querySelector('#subtract1').value);
    let substractNumber2 = Number(document.querySelector('#subtract2').value);
    
    document.querySelector('#difference').value = substract(substractNumber1, substractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', substractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply =  (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide =  (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
   
const date = new Date();
const currentYear = new Date. getFullYear();

document.getElementById('year').value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const numbersArrayElement = document.querySelector("#array");

/* Output Odds Only Array */

let oddNumbers = numbersArray.filter(number => number % 2 !== 0);

const oddNumbersElement = document.getElementById("odds");
oddNumbersElement.textContent = (oddNumbers);

/* Output Evens Only Array */

document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */

const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

document.getElementById('sumOfArray').textContent = sum;

/* Output Multiplied by 2 Array */

const multiply2Array = numbersArray.map((number => number * 2));

document.getElementById("multiplied").textContent= multiply2Array;

/* Output Sum of Multiplied by 2 Array */
const sumOfNewArray = multiply2Array.reduce((sum, number) => sum + number);

document.getElementById("sumOfMultiplied").textContent= sumOfNewArray;