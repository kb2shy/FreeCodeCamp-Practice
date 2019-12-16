const convertHTML = (str) => {
    const convert = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "\'": "&apos;"
    }

    let newStr = "";
    const strArr = str.split("");
    for (let char of strArr) {
        if (Object.keys(convert).includes(char)) {
            newStr += convert[char];
        } else {
            newStr += char;
        }
    }
    return newStr;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));