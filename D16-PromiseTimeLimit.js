// Given an asynchronous function fn and a time t in milliseconds, return a new time limited versio of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules;
    // If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result
    // If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded"



    // So basically...
        // The function will return an asynchronous function that returns a Promise
        // This Promise will come back 'promising' with the results
            // If the original function completes before the time limit, it resolves the Promise with the result from your function
            // And would not reject you!

            // BUT if the original function takes  WAYYYYY too long, it'll reject 


var timeLimit = function(fn, t) {

    return async function(...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t)

            fn(...args).then(resolve).catch(reject)
        })
    }
}




