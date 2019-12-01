const bouncer = (arr) => {
    const newArr = [];
    for (let element of arr) {
        if (element) {
            newArr.push(element);
        }
    }
    return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(['a', 'b', 'c']));
console.log(bouncer([1, null, NaN, 2, undefined]));