// let start = 0, maxLength = 0;

const longestPalindrome = (str) => {
    if (str.length < 2) {
        return str;
    }

    let start = 0, end = 0, diff = 0;

    for (let i = 0; i < str.length - 1; i++) {
        checkPalindrome(str, i, i);
        checkPalindrome(str, i, i+1);
    }

    return str.substring(start, maxLength);
}

const checkPalindrome = (str, a, b) => {
    while (a >= 0 && b <= str.length && str[a] === str[b]) {
        a--;
        b++;
    }
    if (maxLength < b - a - 1) {
        start = a + 1;
        maxLength = b - a - 1;
    }
}



console.log(longestPalindrome("babad"));