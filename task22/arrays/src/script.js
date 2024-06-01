function addNumber(arr, number) {
    if (number === 0 || isNaN(number)) {
        return arr;
    }
    if (number > 0) {
        arr.unshift(number);
    } else {
        arr.push(number);
    }
    return arr;
}

function compareArrays(arr1, arr2) {
    if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
        return true;
    } else
        return false;
}

function getNumberOfEven(arr) {
    let num = 0;
    if (!arr) {
        return num;
    }

    for (let index = 0; index < arr.length; index++) {
        if (typeof arr[index] === 'number') {
            if (arr[index] % 2 == 0) {
                num++;
            }

        }

    }
    return num;
}

function getSubarray(arr, data) {
    if (!arr || !data) {
        return [];
    }
    let indexArr = arr.indexOf(data);
    newArr = arr.slice(0, indexArr + 1);
    return newArr;
}



function getDuplicateValues(arr) {
    if (arr.length === 0) return [];

    const duplicates = [];


    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];


        if (arr.indexOf(item) != i && !duplicates.includes(item)) {
            duplicates.push(item);
        }
    }

    return duplicates;
}


function getMaxNumbers(arr) {
    let newArr = [];
    if (arr.length === 0) return [];

    for (let index = 0; index < arr.length; index++) {
        let arrt = [];
        arrt = arr[index];
        let max = Math.max.apply(null, arrt);
        newArr.push(max);

    }
    return newArr;
}


