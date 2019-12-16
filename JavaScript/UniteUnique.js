const uniteUnique = (...arr) => {
    let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[i].length; j++) {
    //         if (!newArr.includes(arr[i][j])) {
    //             newArr.push(arr[i][j]);
    //         }
    //     }
    // }
    let args = Array.prototype.slice.call(arr);
    newArr = args.reduce((a, b) => {
        return a.concat(b.filter(c => {
            return a.indexOf(c) === - 1;
        }))
    })
    return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));