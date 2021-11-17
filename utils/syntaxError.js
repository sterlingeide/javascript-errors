function syntaxError(){
    try {
        throw new SyntaxError('Hello', 'someFile.js', 10);
      } catch (e) {
        console.error(e instanceof SyntaxError); // true
        console.error(e.message);                // Hello
        console.error(e.name);                   // SyntaxError
        console.error(e.stack);                  // @debugger eval code:3:9
    }
}

module.exports = {
    syntaxError
}