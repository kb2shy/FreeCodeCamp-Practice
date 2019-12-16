const translatePigLatin = (str) => {
    const vowel = /^[aeiou]/gi;
    let index = 0;
    while (index < str.length && !vowel.test(str[index])) {
        index++;
    }

    let newStr = "";
    if (index > 0) {
        newStr = str.substring(index, str.length) + str.substring(0, index) + "ay";
    } else {
        newStr = str + "way";
    }

    return newStr;
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraph"));
console.log(translatePigLatin("anyway"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythym"));