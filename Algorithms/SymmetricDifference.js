const sym = (...args) => {
    // let newArray = [];
    function symDiff(arr1, arr2) {
        const uniqueVals = [];
        arr1.forEach(element => {
            if (!arr2.includes(element) && !uniqueVals.includes(element)) {
                uniqueVals.push(element);
            }
        });

        arr2.forEach(element => {
            if (!arr1.includes(element) && !uniqueVals.includes(element)) {
                uniqueVals.push(element);
            }
        });

        return uniqueVals;
    }

    return args.reduce(symDiff).sort();
}

// const diff = (arr1, arr2) => {
//     const tempArray = [];
//     for (let elem of arr1) {
//         if (!arr2.includes(elem) && !tempArray.includes(elem)) {
//             tempArray.push(elem);
//         }
//     }
//     for (let elem of arr2) {
//         if (!arr1.includes(elem) && !tempArray.includes(elem)) {
//             tempArray.push(elem);
//         }
//     }
//     return tempArray;
// }

console.log(sym([1,2,3], [5,2,3,4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4, 5]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));