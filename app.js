// import needed modules
import { add } from './utils.js'
// define and grab DOM elements
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const addButton = document.getElementById('add-button');
const result = document.getElementById('result');
// event handlers - what needs to happen?
    // logic and calculations
    // update UI
addButton.addEventListener('click', () => {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    result.textContent = add(num1, num2);
})

import { subtract } from './utils.js'

const subtractInput1 = document.getElementById('subtract-input1');
const subtractInput2 = document.getElementById('subtract-input2');
const subtractButton = document.getElementById('subtract-button');
const subtractResult = document.getElementById('subtract-result');

subtractButton.addEventListener ('click', () => {
    const num1 = Number(subtractInput1.value);
    const num2 = Number(subtractInput2.value);
    subtractResult.textContent = subtract(num1, num2);
})

import { multiply } from './utils.js'

const multiplyInput1 = document.getElementById('multiply-input1');
const multiplyInput2 = document.getElementById('multiply-input2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResult = document.getElementById('multiply-result');

multiplyButton.addEventListener('click', () => {
    const num1 = Number(multiplyInput1.value);
    const num2 = Number(multiplyInput2.value);
    multiplyResult.textContent =  multiply(num1, num2);
})