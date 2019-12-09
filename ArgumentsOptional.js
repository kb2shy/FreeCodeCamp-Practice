const addTogether = (...args) => {

    const checkNum = (num) => {
        if (typeof num !== "number") {
            return undefined;
        } else {
            return num;
        }
    }

    if (args.length > 1) {
        const a = checkNum(args[0]);
        const b = checkNum(args[1]);
        if (a === undefined || b === undefined) {
            return undefined;
        } else {
            return a + b;
        }
    } else {
        const c = args[0];
        if (checkNum(c)) {
            return function(arg2) {
                if (c === undefined || checkNum(arg2) === undefined) {
                    return undefined;
                } else {
                    return c + arg2;
                }
            };
        }
    }
    // let sum;
    // if (args.length === 2 && args[0].type === "integer" && args[1].type === "integer") {
    //     sum = args[0] + args[1];
    // }
    // //  else if (args.length === 1) {
    // //     sum = args[0] + addTogether(args[1]);
    // // } 
    // else {
    //     sum = undefined;
    // }
    // return sum;
}

console.log(addTogether(2,3));
console.log(addTogether(2)(3));
console.log(addTogether(2,"3"));
console.log(addTogether(2,([3])));
console.log(addTogether("some weird string"));