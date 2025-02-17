// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x)))
// The function composition of an empty list of function is the identity function f(x) = x

// You may assume each function the array accepts one integer as input and returns on integer as output

// Example 1:
    // Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
    // Output: 65
    // Explanation:
    // Evaluating from right to left ...
    // Starting with x = 4.
    // 2 * (4) = 8
    // (8) * (8) = 64
    // (64) + 1 = 65

// Example 2:
    // Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
    // Output: 1000
    // Explanation:
    // Evaluating from right to left ...
    // 10 * (1) = 10
    // 10 * (10) = 100
    // 10 * (100) = 1000

// Example 3: 
// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function


// What is reduce() method?
    // The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation of the preceding element. The final result of running the reducer across all elements of the array is a single value.

    const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue, // Callback function
        initialValue,
    );

// For this question...
// We are passing in array of functions to the compose function

let compose = function(functions) {
    // We will be using reduceRight() to evaluate from right to left
    // And for each function, we will be tossing in the initial value as the accumulator
    // Which this initial value has to be passed as a parameter for the function
    return x => functions.reduceRight(
        (accumulator, fn) => fn(accumulator),
        x,
    )
}

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(5));