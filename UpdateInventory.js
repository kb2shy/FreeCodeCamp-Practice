const updateInventory = (arr1, arr2) => {
    let newArr = [...arr1];
    
    for (let a = 0; a < arr2.length; a++) {
        let found = false;
        for (let b = 0; b < arr1.length; b++) {
            if (arr2[a][1] === arr1[b][1]) {
                const getItem = newArr.find(elem => elem[1] === arr2[a][1]);
                getItem[0] += arr2[a][0];
                found = true;
            }
        }
        if (!found) {
            newArr.push(arr2[a]);
        }
    }
    return newArr.sort((a, b) => {
        if (a[1] === b[1]) {
            return 0;
        } else {
            return (a[1] < b[1] ? -1 : 1);
        }
    });
}

currInv1 = [
    [21, "Bowling Ball"], 
    [2, "Dirty Sock"], 
    [1, "Hair Pin"], 
    [5, "Microphone"]
]

newInv1 = [
    [2, "Hair Pin"], 
    [3, "Half-Eaten Apple"], 
    [67, "Bowling Ball"], 
    [7, "Toothpaste"]
]

console.log(updateInventory(currInv1, newInv1));

// currInv2 = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];
// newInv2 = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];
// console.log(updateInventory(currInv2, newInv2));

currInv3 = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];
newInv3 = [];
console.log(updateInventory(currInv3, newInv3));
// console.log(updateInventory());