const diffTwoArrays = (arr1, arr2) => {
    // const newArr = [];
    // for (let el of arr1) {
    //     if (!arr2.includes(el) && !newArr.includes(el)) {
    //         newArr.push(el);
    //     }
    // }

    // for (let el of arr2) {
    //     if (!arr1.includes(el) && !newArr.includes(el)) {
    //         newArr.push(el);
    //     }
    // }

    let f1 = arr1.filter(el => !arr2.includes(el));
    f1 = f1.concat(arr2.filter(el => !arr1.includes(el)));

    return f1;
}

console.log(diffTwoArrays([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffTwoArrays(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffTwoArrays(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffTwoArrays(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffTwoArrays([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffTwoArrays([], ["snuffleupagus", "cookie monster", "elmo"]));