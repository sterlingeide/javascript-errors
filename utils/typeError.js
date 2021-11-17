function typeError(){
    try {
        throw new TypeError('Hello', "someFile.js", 10)
    } catch (e) {
        console.log(e instanceof TypeError)  // true
        console.log(e.message)               // "Hello"
        console.log(e.name)                  // "TypeError"
        console.log(e.stack)                 // "@Scratchpad/2:2:9\n"
    }
}

module.exports = {
    typeError
}