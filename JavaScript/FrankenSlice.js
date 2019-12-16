const frankenSplice = (arr1, arr2, n) => {
    const end = arr2.splice(n, arr2.length);
    return arr2.concat(arr1).concat(end);
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
// console.log(frankenSplice([1, 2, 3], [4, 5], 1));