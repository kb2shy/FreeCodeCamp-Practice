const permAlone = (str) => {

    if (str.length < 2) {
        return str.length;
    }

    const strArr = str.split("");
    let result = 0;

    const swap = (a, b) => {
        let temp = strArr[a];
        strArr[a] = strArr[b];
        strArr[b] = temp;
    }

    const generate = (num) => {
        const regex = /([a-z])\1+/;

        if (num === 1 && !regex.test(strArr.join(""))) {
            result++;
            console.log(strArr.join(""));
        } else {
            for (let i = 0; i !== num; i++) {
                generate(num - 1);
                swap(num % 2 ? 0 : i, num - 1);
            }
        }
    }

    generate(strArr.length);

    return result;
}

console.log(permAlone("aaa"));
console.log(permAlone("aba"));
console.log(permAlone("abc"));
// console.log(permAlone("aaa"));