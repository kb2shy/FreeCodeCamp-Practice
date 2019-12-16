const sumFibs = (num) => {
    // const fibArr = [1, 1];
    // let current = 0;
    // let lastIndex = 1;

    // while (current <= num) {
    //     current = fibArr[lastIndex - 1] + fibArr[lastIndex];
    //     fibArr.push(current);
    //     lastIndex++;
    // }

    // let sum = 0;
    // for (let el of fibArr) {
    //     if (el % 2 === 1 && el <= num) {
    //         sum += el;
    //     }
    // }
    // return sum;

    let prev = 0, curr = 1, result = 0;
    while (curr <= num) {
        if (curr % 2 !== 0) {
            result += curr;
        }

        curr += prev;
        prev = curr - prev;
    }

    return result;
}

// const fib = (num) => {
//     let a = 1, b = 0, temp;
//     while (num >= 0) {
//         temp = a;
//         a = a + b;
//         b = temp;
//         num--;
//     }
//     return b;
// }

console.log(sumFibs(10));