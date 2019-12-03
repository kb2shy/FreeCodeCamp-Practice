const sumAllNumsInRange = (arr) => {
    let start, end;
    if (arr[0] < arr[1]) {
        start = arr[0];
        end = arr[1];
    } else {
        start = arr[1];
        end = arr[0];
    }

    let sum = 0;
    while(start <= end) {
        sum += start;
        start++;
    }
    return sum;
}

console.log(sumAllNumsInRange([1, 4]));
console.log(sumAllNumsInRange([4, 1]));
console.log(sumAllNumsInRange([5, 10]));
console.log(sumAllNumsInRange([10, 5]));