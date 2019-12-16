const truthCheck = (collection, pre) => {
    for (let obj of collection) {
        let keys = Object.keys(obj);
        // console.log(keys);
        if (!keys.includes(pre) || !obj[pre]) {
            return false;
        }
    }
    return true;
}

const obj1 = [{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}];
const obj2 = [{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}];
const obj3 = [{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}];
const obj4 = [{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}];
const obj5 = [{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}];
const obj6 = [{"single": "yes"}];
console.log(truthCheck(obj1, "sex"));
console.log(truthCheck(obj2, "sex"));
console.log(truthCheck(obj3, "age"));
console.log(truthCheck(obj4, "onBoat"));
console.log(truthCheck(obj5, "onBoat"));
console.log(truthCheck(obj6, "single"));