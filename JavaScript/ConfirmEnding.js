const confirmEnding = (str, target) => {
    // not allowed to use .endsWith() per challenge

    let targetLength = target.length;
    // console.log(str.slice(str.length - target.length));
    return str.slice(str.length - targetLength) === target;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));