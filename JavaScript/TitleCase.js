const titleCase = (str) => {
    const arrStr = str.toLowerCase().split(" ");
    for (let i = 0; i < arrStr.length; i++) {
        if ((i === 0) || (arrStr[i] !== "the" && arrStr[i] !== "of")) {
            arrStr[i] = arrStr[i].slice(0, 1).toUpperCase() + arrStr[i].slice(1);
        }
    }
    return arrStr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("I'm all over the place"));
console.log(titleCase("AboVe and bEYOND"));
console.log(titleCase("of mice and of men"));