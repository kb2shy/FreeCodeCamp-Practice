const pairwise = (arr, num) => {
    if (arr.length < 1) {
        return 0;
    }

    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && (arr[i] + arr[j] === num) && !indices.includes(i) && !indices.includes(j)) {
                indices.push(i, j);
            }
        }
    }

    return indices.length > 0 ? indices.reduce((sum, elem) => sum += elem) : 0;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
console.log(pairwise([1, 3, 2, 4], 4));
console.log(pairwise([1, 1, 1], 2));
console.log(pairwise([0, 0, 0, 0, 1, 1], 10));
console.log(pairwise([], 100));