function uriError(){
    try {
        throw new URIError('Hello')
    } catch (e) {
        console.log(e instanceof URIError)  // true
        console.log(e.message)              // "Hello"
        console.log(e.name)                 // "URIError"
        console.log(e.stack)                // "@Scratchpad/2:2:9\n"
    }
}

module.exports = {
    uriError
}