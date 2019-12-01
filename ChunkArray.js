const chunkArrayInGroups = (arr, size) => {
    const newArr = [];
    let right = 0;
    while (right < arr.length) {
        let temp = arr.slice(right, right + size);
        newArr.push(temp);
        right += size;
    }
    return newArr;

}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));