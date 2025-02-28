/* 

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.
    - sum accepts two integers, a and b, and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made
    - fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
    - factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

*/

function memoize(fn) {
    let cache = {}; // Object only takes strings as key value

    return function(...args) { // Rest parameter will pass the arguments as array elements 
        const key = JSON.stringify(args); // So it needs to be stringified before stored as a key value in an object

        if (key in cache) {
            return cache[key];
        }

        let result = fn(...args); // Compute the result using the original function
        // Wait WHAT?
        // ... as a parameter is a rest parameter (packs into an array)
        // ... as an argument is a spread operator! (:)

        cache[key] = result;

        return result;
    }
}