/**
 *
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    if (symbolsCount > str.length)
        return str;
    let st = '';

    for (let index = str.length - symbolsCount; index < str.length; index++) {
        st += str[index % str.length];
    }
    return st + str + st;
    throw new Error('Task not implemented');
};
console.log(this.backToFront('hello', 1));
/**
 *
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.nearest = function nearest(z, x, y) {
    let s1 = Math.abs(x - z);
    let s2 = Math.abs(y - z);
    if (s1 < s2)
        return x;
    else
        return y;
    throw new Error('Task not implemented');
};

/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    let res = [];
    for (let index = 0; index < arr.length; index++) {
        if (res.indexOf(arr[index]) === -1) {
            res.push(arr[index]);
        }

    }
    return res;
    throw new Error('Task not implemented');
};
