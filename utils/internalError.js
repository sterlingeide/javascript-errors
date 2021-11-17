function loopCheck(x) {
    if (x >= 100000000000000) {
      return;
    }
    // do stuff
    loopCheck(x + 1);
}

  
module.exports = {
    loopCheck
}