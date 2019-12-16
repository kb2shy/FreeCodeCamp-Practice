const sumPrimes = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));
console.log(sumPrimes(7));