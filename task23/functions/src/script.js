function sumSequence(n) {
    let sum = 0;
    let temp = 1/2;
    for (let index = 1; index <= n; index++) {

        sum += Math.pow(temp,index);
        
    }


    return sum.toFixed(2);
  }


  function mergeArrays(...arr) {
    return arr.length === 0 ? [] : arr.reduce((prev,curn) => [...prev,...curn], []);
  }
  
  function isPalindrome(str) {
    const charCount = new Map();
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let oddCount = 0;
    for (const count of charCount.values()) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }

    if (str.length % 2 === 0 && oddCount === 0) {
        return true;
    } else if (str.length % 2 !== 0 && oddCount === 1) {
        return true;
    } else {
        return false;
    }
  }

  
  function countLetters(str) {
    if (str === 0) {
        return {};
    }
    const counts = {};

    for (let char of str) {
        if (char != " ") {
            counts[char] = (counts[char] || 0) + 1;
        }
    }
    return counts;
  }


  function divideArrays(arr, size) {
    if (!arr || size <= 0) {
        return [];
    }

    let newArr = [];

    for (let index = 0; index < arr.length; index += size) {
        const chun = arr.slice(index, index + size);
        newArr.push(chun);
    }
    return newArr;

  }



  function encrypt(str, n) {
    if (!str || n <=0) {
        return str;
    }
    let newArr = "";
    for (let index = 0; index < str.length; index++) {
        let element = str.charCodeAt(index) - n;
        if (element < 65) {
            element = (90 - (65 - element)) + 1;
        }
        newArr += String.fromCharCode(element);
    }
    return newArr;
  }

