let array = ['hello', 'guitar', 'picture', 'tree']

// O(n^2) => exponential b/c of .split(), .reverse(), and .join() inside of .map() ...not sure?
function reverseStringsInArray(array) {
    return array.map(str => str.split("").reverse().join(""));
}

console.log(reverseStringsInArray(array));


// // O(n^3) - b/c of += inside of loop inside of .map()
// function reverseStringsInArray2(array) {
//     return array.map(str => {
//         let str2 = "";
//         for (i = str.length - 1; i >= 0; i--) {
//             str2 += str[i];
//         }
//         return str2
//     })
// }

// console.log(reverseStringsInArray2(array));


// // O(n^2)...? assuming .join(), .split(), and .reverse() are all O(n), and += (linear) is inside of loop
// function reverseStringsInArray3(array) {
//     let str = array.join(" ");
//     let str2 = "";
//     for (i = str.length - 1; i >= 0; i--) {
//         str2 += str[i];
//     }
//     return str2.split(" ").reverse();
// }

// console.log(reverseStringsInArray3(array));


// // O(n^2), assuming just .join() and .split() are both linear, and += is linear inside of loop
// function reverseStringsInArray4(array) {
//     let str = array.join(" ");
//     let str2 = "";
//     for (i = str.length - 1; i >= 0; i--) {
//         str2 += str[i];
//     }

//     let array2 = str2.split(" ")

//     let length = array2.length;
//     let halfLength = Math.floor(length / 2);
//     for (let i = 0; i < halfLength; i++) {
//         let temp = array2[i];
//         array2[i] = array2[length - 1 - i];
//         array2[length - 1 - i] = temp;
//     }
//     return array2;
// }

// console.log(reverseStringsInArray4(array));


// not exactly sure, but this avoids any kind of nested stuff except for pup in index lookup which are constant
function reverseStringsInArray5(array) {
    let str = array.join();

    let array2 = str.split("")
    let array3 = []
    
    for (let i = array2.length - 1; i >= 0; i--) {
        array3.push(array2[i])
    }

    let array4 = array3.join("").split(",")

    let length = array4.length;
    let halfLength = Math.floor(length / 2);
    for (let i = 0; i < halfLength; i++) {
        let temp = array4[i];
        array4[i] = array4[length - 1 - i];
        array4[length - 1 - i] = temp;
    }

    return array4;
}

console.log(reverseStringsInArray5(array));