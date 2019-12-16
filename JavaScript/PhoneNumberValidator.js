const telephoneCheck = (str) => {
    const regex = /^(?:(?:\+?1\s*(?:[-]\s*)?)?(?:\(\s*([2-9][02-8][02-9])\s*\)|([2-9][02-8][02-9]))\s*(?:[-]\s*)?)?([2-9][02-9]{2})\s*(?:[-]\s*)?([0-9]{4})?$/gm;

    if (str.length < 10) {
        return false;
    }
    
    return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("(6054756961)"));
