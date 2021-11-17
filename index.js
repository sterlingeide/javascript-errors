const evalError = require('./utils/evalError');
const rangeError = require('./utils/rangeError');
const referenceError = require('./utils/referenceError');
const syntaxError = require('./utils/syntaxError');
const typeError = require('./utils/typeError');
const uriError = require('./utils/uriError');
const aggregateError = require('./utils/aggregateError');
const internalError = require('./utils/internalError');


try
{
    rangeError.checkNumber(2000)
}
catch(error)
{
    if (error instanceof RangeError)
    {
        console.log('number error happened');
        // Handle the error
    }
}

try
{
    rangeError.checkString("cabbage")
}
catch(error)
{
    if(error instanceof RangeError)
    {
        console.log('string error happened')
        // Handle the error
    }
}

evalError.evalError();

referenceError.referenceError();
syntaxError.syntaxError();
typeError.typeError();
uriError.uriError();
aggregateError.aggregateError();
try{
    internalError.loopCheck(0);
}
catch
{
    console.log('loop error happened')
}
