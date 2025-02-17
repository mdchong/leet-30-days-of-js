// Sum of an Array
    // Write a function that takes an array of numbers and returns the sum using reduce()

    const numbers = [1, 2, 3, 4, 5];

    let sum = numbers.reduce( 
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    )

    console.log(sum);


// Product of an Array
    // Write a function that multiplies all numbers in an array using reduce()

    const numbers1 = [1, 2, 3, 4, 5];

    let multiplies = numbers1.reduce(
        (accumulator, currentValue) => accumulator * currentValue,
        1,
    )

    console.log(multiplies);


// Find the Maximum Value
    // Use reduce() to find the largest number in an array

    // Method 1:

    const numbers2 = [10, 5, 8, 20, 3];

    let maxNumber = numbers2.reduce(
        (maxNumber, currentValue) => {
            return currentValue > maxNumber ? currentValue : maxNumber;
        }, numbers2[0]
    )

    console.log(maxNumber);

    // Method 2: 
    const numbers3 = [10, 5, 8, 20, 3];

    let maxNumber2 = numbers3.reduce(
        (maxNumber, currentValue) => Math.max(maxNumber, currentValue)
        , numbers3[0]
    )

    console.log(maxNumber2);


// Flatten an Array
    // Given a nested array, use reduce() to flatten it into a single-level array

    const nestedArray = [[1, 2], [3, 4], [5, 6]];

    let flatArray = nestedArray.reduce(
        (newArray, currentArray) => {
            return newArray.concat(currentArray);
        }, []
    )

    console.log(flatArray);


// Count Occurrences in an Array
    // Given an array of words, count how many times each word appears

    const words = ["apple", "banana", "apple", "orange", "banana", "banana"];

    let occurrencesObject = words.reduce(
        (existing, element) => {
            existing[element] = (existing[element] || 0) + 1;
            return existing;
        }, {}
    )

    console.log(occurrencesObject);


// Concatenate Strings
    // Given an array of words, return a single string where words are separated by a space

    const words2 = ["Hello", "world", "this", "is", "reduce"];

    let sentence = words2.join(" ");
    console.log(sentence);

    let sentence1 = words2.reduce(
        (sentence, word) => sentence + word + " ",
        ""
    )

    console.log(sentence1);

    
// Group Objects by Property
    // Given an array of objects, group them by a specified property

    const people = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 25 },
        { name: "David", age: 30 }
    ];

    // Group objects by age into an object where the keys are ages and values are arrays of people
    // Age is the key value where it has an array of people categorized by that age
        // Initialize a new object
        // For each person's age, if the age does not exist in the new object, create the age as a new key value
        // Then push the person's information to that specific age group

    let groupedByAge = people.reduce(
        (existing, person) => {
            if (!existing[person.age]) {
                existing[person.age] = [];
            }
            existing[person.age].push(person);
            return existing;
        }, {} 
    )

    console.log(groupedByAge);

    // {
    //     "25": [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
    //     "30": [{ name: "Bob", age: 30 }, { name: "David", age: 30 }]
    // } 


// Calculate Total Price with Tax
    // Given an array of items with prices, return the total cost including a 10% tax
    const items = [
        { name: "Book", price: 10 },
        { name: "Pen", price: 2 },
        { name: "Notebook", price: 5 }
    ];

    // Formula: Total Price = Sum of Prices * 1.1;

    // First we iterate through the item.price and accumulate it
    // Then with the accumulated price, we get the total price including tax

    let afterTax = items.reduce(
        (totalCost, item) => {
            return totalCost = totalCost + item.price * 1.1;
        }, 0
    )

    console.log(afterTax);


// Custom Map Using Reduce
    function myMap(arr, callback) {
        return arr.reduce(
            (newArray, currentValue) => {
                newArray.push(callback(currentValue));
                return newArray;
            }
        , []);
    }
    
    console.log(myMap([1, 2, 3], x => x * 2)); // [2, 4, 6]