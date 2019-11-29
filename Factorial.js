const factorialize = (num) => {
    if (num <= 1) {
        return 1;
    }

    return num * factorialize(num - 1);

}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(1));