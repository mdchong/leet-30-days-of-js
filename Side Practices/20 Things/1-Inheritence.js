// const me = {
//     talk: function() {
//         return 'Talking';
//     }
// }

// const you = {
//     talk: function() {
//         return 'Talking';
//     }
// }

// Problem 1: We have to write everything hard coded
// Solution is to use inheritance!

// By using class

    class Person {
        talk() {
            return 'Talking';
        }
    }

    const me = new Person();
    const you = new Person();

    me.talk(); // 'Talking'
    you.talk(); // 'Talking'

    Person.prototype.talk = function() {
        return `Improved talking`
    }

    me.talk() // "Improved talking"


// extends

    class SuperHuman extends Person {
        fly() {
            return 'Flying!'
        }
    }

    you.fly() // works
    you.talk() // works!


// 3 ways to create an inheritance chain
    // Object

        const person = {
            talk: function() {
                return 'Talking'
            }
        }

        const he = Object.assign(person);

        me.talk(); // "Talking"

    // Object
        const person1 = {
            talk() {
                return 'Talking';
            }
        }

        const me1 = {};

        Object.setPrototypeOf(me, person);

        me.talk(); // "Talking"


// Pure editing
class Eating {
    eating() {
        return 'I am busy eating'
    }
}

const one = new Eating();
const two = new Eating();

one.eating() // I am busy eating
two.eating() // I am busy eating

one.eating = function() {
    return 'I am not eating'
}

Eating // "I am busy eating"

one.eating() // I am not eating
two.eating() // I am busy eating

// Object assign
const standing = {
    stand: function() {
        return 'Standing'
    }
}

const humanBeing = Object.assign(standing) // 'standing' is targeted
const humanNot = Object.assign(standing);

humanBeing.stand() // "Standing"
humanNot.stand() // "Standing"

humanBeing.stand = function() {
    return 'Sitting'
}

humanBeing.stand() // "Sitting"
humanNot.stand() // "Sitting"
standing.stand() // "Sitting"


// Correct way
const standing = {
    stand: function() {
        return 'Standing';
    }
};

// Use Object.assign with an empty object to create a new copy
const humanBeing = Object.assign({}, standing);
const humanNot = Object.assign({}, standing);

humanBeing.stand = function() {
    return 'Sitting';
};

console.log(humanBeing.stand()); // "Sitting"
console.log(humanNot.stand()); // "Standing"
console.log(standing.stand()); // "Standing"
