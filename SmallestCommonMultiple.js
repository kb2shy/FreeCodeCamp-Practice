const smallestCommonMultiple = (arr) => {
    
    const revSortArr = [];
    let arrMax = arr[0] < arr[1] ? arr[1] : arr[0];
    let arrMin = arr[0] < arr[1] ? arr[0] : arr[1];
    for (let i = arrMax; i >= arrMin; i--) {
        revSortArr.push(i);
    }

    let count = revSortArr[1];
    let minCommon = revSortArr[0] * count;
    let repeat = true;
    while (repeat) {
        for (let i = 0; i < revSortArr.length; i++) {
            if (minCommon % i == 0) {

            }
        }
    }
    return ;
}

console.log(smallestCommonMultiple([1,5]));