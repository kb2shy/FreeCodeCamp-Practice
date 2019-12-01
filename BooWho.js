const booWho = (bool) => {
    return typeof bool === "boolean";
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho(undefined));
console.log(booWho([1,2,3]));
console.log(booWho([].slice()));