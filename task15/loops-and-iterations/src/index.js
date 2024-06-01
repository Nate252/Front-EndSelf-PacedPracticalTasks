/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param step: {Number}
 * @returns {String}
 */
module.exports.createString = function createString(x, y, step) {
    let result = '';
    for (x; x <= y; x += step) {
        result += x;
        if (x != y) 
            result += ' ';
    }
    return result;
    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum1 = function rangeSum1(x, y) {
    let count = y;
    let sum = 0;
    while (count >= x) {
        for (let index = x; index <= y; index++) {
            sum += index;
            
        }
        count--;
        y--;
    }
    return sum;
    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum2 = function rangeSum2(x, y) {
    let sum = 0;
    for (x; x <= y; x++) {
       sum += x;
        
    }
    return sum;
    throw new Error("Task not implemented");

};

/**
 *
 * @param x: {Number}
 * @returns {String}
 */
module.exports.seriesSum = function seriesSum(x) {
    
    if (x === 0) {
        return "0.00";
    } else {
        let sum = 0;
        for (let i = 1; i <= x; i++) {
            sum += 1 / (i * i);
        }
        return sum.toFixed(2);
    }
    
    throw new Error("Task not implemented");

};

/**
 *
 * @param x: {Number}
 * @returns {Number}
 */
module.exports.countDigits = function countDigits(x) {
    return x.toString().length;
    throw new Error("Task not implemented");

};

