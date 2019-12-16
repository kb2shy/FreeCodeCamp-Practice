const rot13 = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() < 65 || str[i].charCodeAt() > 90) {
            newStr += str[i];
            continue;
        }

        if (str[i].charCodeAt() <= 77) {
            newStr += String.fromCharCode(str[i].charCodeAt() + 13);
        } else {
            newStr += String.fromCharCode(str[i].charCodeAt() - 13);
        }

    }
    return newStr;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
console.log(rot13("SERR YBIR?"));
