const getIndexToIns = (arr, num) => {
    // if (num < arr[0]) {
    //     return 0;
    // } else if (num > arr[arr.length - 1]) {
    //     return arr.length;
    // }

    // let result = 0; minDiff = Number.MAX_SAFE_INTEGER;
    arr.sort((a, b) => (a - b));
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            return i;
        }
    }
    return num > arr[arr.length-1] ? arr.length : 0;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([2, 5, 10], 15));