const findLongestWordLength = (str) => {

    // simplest way to solve but increases space complexity
    // let maxWord = "";
    // const wordsArray = str.split(" ");
    // for (let word of wordsArray) {
    //     if (word.length > maxWord.length) {
    //         maxWord = word;
    //     }
    // }
    // return maxWord.length;

    // sliding window technique I learned earlier last week without too much
    // space and time complexity
    let left = 0, right = 0, max = Number.MIN_SAFE_INTEGER;
    while (right < str.length) {
        let temp = 0;
        if (str[right] === " ") {
            temp = right - left - 1;
        } else if (right === str.length - 1) {
            temp = right - left;
        }
        if (temp > max) {
            max = temp;
        }
        right++;
        left = right;
    }
    
    return max;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
