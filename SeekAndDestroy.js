const seekAndDestroy = (arr, ...args) => {
    // console.log(arr);
    // console.log(args);
    return arr.filter(el => !args.includes(el));
}

console.log(seekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(seekAndDestroy([3, 5, 1, 2, 2], 2, 3, 5));
console.log(seekAndDestroy(["tree", "hamburger", 53], "tree", 53));
console.log(seekAndDestroy(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));