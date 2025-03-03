// P1
    function talk (lang, isPolite) {
        if (isPolite) {
            if (lang === 'en') {
                return `Hello, I am ${this.name}`
            } else if (lang === 'sp') {
                return `Hola, ${this.name}`
            }
        }

        if (!isPolite) {
            if (lang === 'en') {
                return `${this.name}, what you want?`
            } else if (lang === 'sp') {
                return `${this.name}, 🖕`
            }
        }
    }

    const me = {
        name: 'Sina'
    }

    talk.call(me, 'sp', false)
    // 'Sina, 🖕'
    talk.bind(me)('sp', true)
    // 'Hola, Sina'
    talk.call(me, 'en', false)
    // 'Sina, what you want?'
    talk.call(me, 'en', true)
    // 'Hello, I am Sina'
    talk.apply(me, ['en', true])
    // 'Hello, I am Sina'

// P2
    function talk() {
        return `Hello ${this.name}`
    }

    const me = {
        name: 'Sina',
        talk
    }

    me.talk()
    // 'Hello Sina'

    const combined = talk.bind(me)

    combined(); // 'Hello Sina'

    talk.call(me) // 'Hello Sina'

    talk.apply(me) // 'Hello Sina'


// P3: Constructor function

function Person(n) {
    this.name = n;
    console.log(this)
}

