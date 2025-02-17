// Write a function argumentsLength that returns the count of arguments passed to it

    // Example 1:
    // Input: args = [5]
    // Output: 1
    // Explanation:
    // argumentsLength(5); // 1

    // One value was passed to the function so it should return 1.

    // Example 2:
    // Input: args = [{}, null, "3"]
    // Output: 3
    // Explanation: 
    // argumentsLength({}, null, "3"); // 3

    // Three values were passed to the function so it should return 3.


// Method 1:    
var argumentsLength = function(...args) {
    return args.length;
}

console.log(argumentsLength(1, 2, 3)); // 3

// Method 2:
const argumentsLength2 = (...args) => args.length;

console.log(argumentsLength2(1, 2, 3)); // 3

// Why Rest parameter?
    let array = [1,2,3,4,5];
    // we expect argument to be passed in this way
    function sum (a,b,c,d,e){
        console.log(a,b,c,d,e) // 1 2 3 4 5 
    }

    // brute force method 
    sum(array[0],array[1],array[2],array[3],array[4]);

    // Problem :- we have to pass each value individually & 
    // if we have 1000 values in array then 
    // we have to pass 1000 arguments in function which is not feasible.


    // using spread parameter we can pass all the values of array in one go
    sum(...array); 

    //spread parameter allows us to pass indefinite number of arguments as an array within a function.
    // In the function we can get them as an array and use them as we want.
    function sum (...args){
        console.log(args) // [1,2,3,4,5]
    }

    // we can also use rest parameter to get part of arguments as an array
    function sum (a,b,...args){
        console.log(a,b,args) // 1 2 [3,4,5]
    }


