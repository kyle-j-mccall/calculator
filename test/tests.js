// IMPORT code to test here
// import { add } from '../utils.js';
import { add } from '../utils.js'
const test = QUnit.test;

test('adds two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 3;
    const num2 = 4;
    const expected = 7;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

import { subtract } from '../utils.js'

test('subtracts two numbers',(expect) => {
    //Arrange
    const num1 = 10;
    const num2 = 5;
    const expected = 5;

    //Act
    const actual = subtract(num1, num2);

    expect.equal(actual, expected);
});
