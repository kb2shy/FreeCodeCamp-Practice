const repeatStringNumTimes = (str, num) => {
    let newStr = "";
    if (num < 0) {
        return newStr;
    }

    for (let i = 0; i < num; i++) {
        newStr += str;
    }
    
    return newStr;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -1));