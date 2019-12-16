const mutation = (arr) => {
    const secondWordArray = arr[1].split("");
    // console.log(secondWordArray);
    for (let char of secondWordArray) {
        if (!arr[0].toLowerCase().includes(char.toLowerCase())) {
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "HELLO"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["voodoo", "no"]));