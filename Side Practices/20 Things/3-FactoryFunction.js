function personFactory(name) {
    return {
        talk: function() {
            return `Hi! My name is ${name}`
        }
    }
}

