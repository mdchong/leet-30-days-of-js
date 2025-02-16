// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
    // toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
    // notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".


// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".

// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.


// Function expect takes any value, val
// return an object the the following two functions
    // toBe(val), accepts another value and return true IF the two values === each other
        // IF NOT EQUAL, it should throw an error "Not Equal"
    // notToBe(val) accepts another value and return true IF the two values !== each other
        // IF EQUAL, it should throw an error "Equal"

function expect(val) {
    let val1 = val;
    return {
        toBe: function(val2) {
            if (val1 === val2) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(val2) {
            if (val1 !== val2) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    }
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */