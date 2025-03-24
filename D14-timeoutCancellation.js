/* Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

- setTimeout(cancelFn, cancelTimeMs)

Initially, the execution of the function fn should be delayed by t milliseconds.

If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

** Example 1:
    Input: fn = (x) => x * 5, args = [2], t = 20
    Output: [{"time": 20, "returned": 10}]
    Explanation: 
        const cancelTimeMs = 50;
        const cancelFn = cancellable((x) => x * 5, [2], 20);
        setTimeout(cancelFn, cancelTimeMs);

        The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.

*/

// Return a function after a specific time only if you didn't call other function, if we called the other function then the first function shouldn't be called at all
    // Returns function at a specific time only
    // If another function is called within that time, the first function should be ignored

// function, args of array, and time
function cancellable(fn, args, t) {
    let cancelFn = function() {
        clearTimeout(timer)
        console.log("Function has been canceled")
    }

    let timer = setTimeout(() => {
        fn(...args);
    }, t);

    return cancelFn; // return () => clearTimeout(timer)
}

// Calling the cancellable function immediately invokes as setTimeout is immediately scheduled to run fn(...args) after t milliseconds

// But because the function itself returns a cancel function with a clearTimeout of the timer, when the cancelFn is called before t milliseconds pass, it clears the schedule execution and prevents it from running

function greet(name) {
    console.log(`Hello ${name}`)
}

const cancel = cancellable(greet, ["alice"], 5000)

// Cancels before 5 seconds, so "Hello alice" never logs
setTimeout(cancel, 2000);

// Immediate cancel
// cancel();