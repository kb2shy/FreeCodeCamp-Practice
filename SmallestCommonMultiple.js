const smallestCommonMultiple = (arr) => {
    
    const revSortArr = [];
    let arrMax = arr[0] < arr[1] ? arr[1] : arr[0];
    let arrMin = arr[0] < arr[1] ? arr[0] : arr[1];
    for (let i = arrMax; i >= arrMin; i--) {
        revSortArr.push(i);
    }

    let count = revSortArr[1];
    let minCommon = revSortArr[0] * count;
    // let repeat = true;
    while (true) {
        for (let i = 0; i < revSortArr.length; i++) {
            if (minCommon % revSortArr[i] !== 0) {
                break;
            }
            if (i === revSortArr.length - 1 && minCommon % revSortArr[i] === 0) {
                return minCommon;
            }
        }
        minCommon = revSortArr[0] * ++count;
    }

}

console.log(smallestCommonMultiple([1,5]));
console.log(smallestCommonMultiple([5,1]));
console.log(smallestCommonMultiple([2,10]));
console.log(smallestCommonMultiple([1,13]));
console.log(smallestCommonMultiple([23,18]));