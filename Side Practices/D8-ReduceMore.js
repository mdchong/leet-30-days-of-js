/* Sum of an Array */

    const numbers = [5, 10, 15, 20];

    let sumNumbers = numbers.reduce(
        (accumulator, newSum) => accumulator + newSum,
        0
    )

    console.log(`Sum of numbers : ${sumNumbers}`);


/* Product of an Array */

    const numbers1 = [2, 3, 4, 5];

    let productNumbers = numbers1.reduce(
        (accumulator, number) => accumulator * number,
        1
    )

    console.log(`Product of numbers: ${productNumbers}`);


/* Find the Maximum Value */

    const numbers2 = [12, 45, 7, 89, 23];

    let maxNumber = numbers2.reduce(
        (max, number) => number > max ? number : max,
        -1
    )

    console.log(`Maximum number: ${maxNumber}`);


/* Flatten an Array */

    const nestedArray = [[1, 2], [3, 4], [5, 6]];

    let flatArray = nestedArray.reduce(
        (newArray, array) => {
            return newArray.concat(array);
        }, []
    )

    console.log(`Flat array: ${flatArray}`);


/* Count Occurrences in an Array */

    const words = ["apple", "banana", "apple", "orange", "banana", "banana"];

    let occurrences = words.reduce(
        (newObject, item) => {
            newObject[item] = (newObject[item] || 0) + 1;
            return newObject;
        }, {}
    )

    console.log(occurrences);


/* Create an Object from an Array of Pairs */

    const keyValuePairs = [["name", "Alice"], ["age", 25], ["city", "New York"]];

    let arrayOfPairs = keyValuePairs.reduce(
        (newObject, array) => {
            newObject[array[0]] = array[1];
            return newObject;
        }, {}
    )

    console.log(arrayOfPairs);

    // Expected Output { name: "Alice", age: 25, city: "New York" }
