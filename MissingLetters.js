const fearNotLetter = (str) => {
    for (let i = 1; i < str.length; i++) {
        if (str[i].charCodeAt() - str[i-1].charCodeAt() > 1) {
            return String.fromCharCode(str[i].charCodeAt() - 1);
        }
    }
    return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));