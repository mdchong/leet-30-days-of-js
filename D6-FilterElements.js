// filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter(word => word.length > 6); // If true, will filter the outcome to variable result

console.log(result); // ["exuberant", "destruction", "present"]

// Exercise
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr
// The fn function takes one or two arguments:
    // arr[i] - number from the arr
    // i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value
// A truthy value is a value where Boolean(value) returns true

// Please solve it without the built-in Array.filter method

// Example 1:
// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10

// Example 2:
// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]
// Explanation:
// fn can also accept the index of each element
// In this case, the function removes elements not at index 0

// We need a function that takes in two arguments: an array and a function
// We will return a filtered array called filteredArr
// To get the index, we will loop through the array
// The method will take in two arguments: number from the arr, and the index of arr
// When the method is evaluated to true, we will push this to the filteredArr

function filtered(arr, fn) {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

console.log(filtered([0, 10, 20, 30], (n) => n > 10)); // [20, 30]
console.log(filtered([1, 2, 3], (n, i) => i === 0)); [1]