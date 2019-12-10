const convertToRoman = (number) => {
    const NUMERALS = {
        "M": 1000,
        "CM": 900, 
        "D": 500, 
        "CD": 400, 
        "C": 100, 
        "XC": 90, 
        "L": 50, 
        "XL": 40, 
        "X": 10, 
        "IX": 9, 
        "V": 5, 
        "IV": 4, 
        "I": 1, 
    }
    let romanString = "";

    let i;
    for (i in NUMERALS) {
        while (number >= NUMERALS[i]) {
            romanString += i;
            number -= NUMERALS[i];
        }

    }
    return romanString;
}

// console.log(convertToRoman(1));
// console.log(convertToRoman(2));
// console.log(convertToRoman(3));
// console.log(convertToRoman(4));
// console.log(convertToRoman(5));
// console.log(convertToRoman(6));
// console.log(convertToRoman(7));
// console.log(convertToRoman(8));
// console.log(convertToRoman(9));
// console.log(convertToRoman(10));
console.log(convertToRoman(11));
console.log(convertToRoman(14));
console.log(convertToRoman(19));
console.log(convertToRoman(20));
console.log(convertToRoman(311));
console.log(convertToRoman(999));
console.log(convertToRoman(99));
console.log(convertToRoman(100));