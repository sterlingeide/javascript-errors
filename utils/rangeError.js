function checkNumber(n) {
    
    if( !(n >= -500 && n <= 500) )
    {
        throw new RangeError("The argument must be between -500 and 500.")
    }
}

function checkString(value)
{
    if(["apple", "banana", "carrot"].includes(value) === false)
    {
        throw new RangeError('The argument must be an "apple", "banana", or "carrot".')
    }
}

module.exports = {
    checkNumber,
    checkString
}