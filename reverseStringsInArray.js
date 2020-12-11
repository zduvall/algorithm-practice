let array = ['hello', 'guitar', 'picture', 'tree']

// O(n^2) => exponential b/c of .split(), .reverse(), and .join() inside of .map() ...not sure?
function reverseStringsInArray(array) {
    return array.map(str => str.split("").reverse().join(""));
}

console.log(reverseStringsInArray(array));


// O(n^2) - quadratic b/c of loop inside of .map()
function reverseStringsInArray2(array) {
    return array.map(str => {
        let str2 = "";
        for (i = str.length - 1; i >= 0; i--) {
            str2 += str[i];
        }
        return str2
    })
}

console.log(reverseStringsInArray2(array));


// O(n)...? assuming .join(), .split(), and .reverse() are all O(n), not sure though
function reverseStringsInArray3(array) {
    let str = array.join(" ");
    let str2 = "";
    for (i = str.length - 1; i >= 0; i--) {
        str2 += str[i];
    }
    return str2.split(" ").reverse();
}

console.log(reverseStringsInArray3(array));


// O(n), assuming just .join() and .split() are both linear
function reverseStringsInArray4(array) {
    let str = array.join(" ");
    let str2 = "";
    for (i = str.length - 1; i >= 0; i--) {
        str2 += str[i];
    }

    let array2 = str2.split(" ")

    let length = array2.length;
    let halfLength = Math.floor(length / 2);
    for (let i = 0; i < halfLength; i++) {
        let temp = array2[i];
        array2[i] = array2[length - 1 - i];
        array2[length - 1 - i] = temp;
    }
    return array2;
}

console.log(reverseStringsInArray4(array));