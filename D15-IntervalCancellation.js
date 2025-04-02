// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked
    // setTimeout(cancelFn, cancelTimeMs)

// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

// My plan
    // Inside cancellable function
        // function fn is called with args immediately
        // Called again and again every t milliseconds = setInterval!
        // Until cancelFn is called at cancelTimeMs (This will be called outside!)

var cancellable = function (fn, args, t) {
    // Will call function immediately
    fn(...args)

    // Repeated calling
    const timer = setInterval(() => fn(...args), t)

    // Will cancel when called
    const cancelFn = () => clearInterval(timer)

    return cancelFn;
}

const cancelTimeMs = 190;
const cancelFn = cancellabe((x) => x * 2, [4], 35)
setTimeout(cancelFn, cancelTimeMS);