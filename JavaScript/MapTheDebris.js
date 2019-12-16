const orbitalPeriod = (arr) => {
    const GM = 398600.4418;
    const earthRadius = 6367.4447

    const newArr = [];
    arr.forEach(obj => {
        const a = Math.pow(earthRadius + obj["avgAlt"], 3);
        const op = 2 * Math.PI * Math.sqrt(a / GM);
        newArr.push({name: obj["name"], orbitalPeriod: Math.round(op)});
    });

    return newArr;
}

console.log(orbitalPeriod([{name: "sputnik", avgAlt: 35873.5553}]));