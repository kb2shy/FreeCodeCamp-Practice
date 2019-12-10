const palindrome = (str) => {
    const regex = /[\W\s_]/g;
    const strArray = str.toLowerCase().replace(regex, "").split("");
    for (let i = 0; i < strArray.length / 2; i++) {
        if (strArray[i] !== strArray[strArray.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("eye"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));