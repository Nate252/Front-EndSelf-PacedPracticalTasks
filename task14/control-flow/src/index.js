/**
 *
 * @param number1: {Number}
 * @param number2: {Number}
 * @param number3: {Number}
 * @returns {Number}
 */
module.exports.getMin = function getMin(number1, number2, number3) {
    let min = number1 < number2 ? number1 : number2;
    min = min < number3 ? min : number3;
    return min;
    throw new Error('Task not implemented');
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.evenOrOdd = function evenOrOdd(x, y, z) {
    if (x % 2 == 0 && y % 2 == 0 && z % 2 == 0)
        return "even";
    
    if(x % 2 != 0 && y % 2 != 0 && z % 2 != 0) 
        return "odd";
    return "even/odd";
    throw new Error('Task not implemented');
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.inOrOutRange = function inOrOutRange(x, y, z) {
    if (x <= z && y >= z) {
        return "In range";
    } else {
        return "Out of range";
    }
    throw new Error('Task not implemented');
};
