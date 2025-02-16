// Side practices
// 1. Custom sum Function with Chaining
    // Create a functio sum that can be called like this:
    // sum(2).add(3).subtract(1).value(); // should return 4

    function sum(a) {
        total = a;
        return {
            add: function(b) {
                total += b;
                return this; // Helps chaining
            },

            subtract: function(b) {
                total -= b;
                return this; // Helps chaining
            },

            value: function() {
                return total; // Terminates
            }
        }
    }

console.log(sum(2).add(3).subtract(1).value());


// Task Scheduler
// Create a function taskScheduler that stores tasks and can execute them later

function taskScheduler() {
    let tasks = [];

    return {
        addTask: function(task) {
            tasks.push(task);
        },

        runTasks: function() {
            tasks.forEach(task => task());
        },

        display: function() {
            console.log(tasks);
        }
    }
}

const scheduler = taskScheduler();
scheduler.addTask(() => console.log("Task 1"));
scheduler.addTask(() => console.log("Task 2"));
scheduler.runTasks();
scheduler.display();


// Counter
// Write a function counter that stores a series of increment and decrement operations and executes them in order
function counter() {
    let currentValue = 0;
    return {
        increment: function() {
            currentValue++;
            return this;
        },

        decrement: function() {
            currentValue--;
            return this;
        },

        value: function() {
            return currentValue;
        }
    }
}

const count = counter();
console.log(count.increment().increment().decrement().value()); // Should return 1


// Logger
// Create a function logger that stores messages and provides a method to log them in order

function logger() {
    let myMessage = [];

    return {
        add: function(message) {
            myMessage.push(message);
        },

        show: function() {
            myMessage.forEach(message => console.log(message));
        }
    }
}

const log = logger();
log.add("First message");
log.add("Second message");
log.show(); // Should log "First message", then "Second message"

// Queue
// Implement a queue function that stores actions (functions) and processes them one by one. Example:

function taskQueue() {
    let newTask = [];
    return {
        addTask: function(theTask) {
            newTask.push(theTask);
            return this;
        },
        processQueue: function() {
            newTasks.forEach(task => task());
            return this;
        }
    }
}

const queue = taskQueue();
queue.addTask(() => console.log("Task 1"));
queue.addTask(() => console.log("Task 2"));
queue.processQueue(); // Should log "Task 1" and "Task 2"


// Event Emitter
// Write a simple eventEmitter function that stores event handlers and allows you to trigger events. Example:

const emitter = eventEmitter();
emitter.on("click", () => console.log("Clicked"));
emitter.trigger("click"); // Should log "Clicked"
