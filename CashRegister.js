const checkCashRegister = (price, cash, cid) => {
    const UNIT_AMOUNT = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "DOLLAR": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }
    let totalCID = 0;
    for (let element of cid) {
        totalCID += element[1];
    }
    totalCID = totalCID.toFixed(2);

    let change = cash - price;
    const changeArray = [];
    if (change > totalCID) {
        return { status: "INSUFFICIENT_FUNDS", change: changeArray };
    } else if (change === totalCID) {
        return { status: "CLOSED", change: cid };
    } else {
        cid = cid.reverse();
        for (let elem of cid) {
            let temp = [elem[0], 0];
            while (change >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
                temp[1] += UNIT_AMOUNT[elem[0]];
                elem[1] -= UNIT_AMOUNT[elem[0]];
                change -= UNIT_AMOUNT[elem[0]];
            }
            // if ((change / UNIT_AMOUNT[elem[0]]) > 1) {
            //     temp.push(elem[0]);
            //     let numOfCurr = UNIT_AMOUNT[elem[0]] * Math.floor(change / UNIT_AMOUNT[elem[0]]);
            //     if ((numOfCurr / 100) >= elem[1]) {
            //         temp.push(elem[1]);
            //         elem[1] = 0;
            //     } else {
            //         temp.push(numOfCurr / 100);
            //         elem[1] -= (numOfCurr / 100);
            //     }
            //     change -= numOfCurr;
            // }
            // console.log(temp[1]);
            if (temp[1] > 0) {
                changeArray.push(temp);
            }
        }
    }

    return { status: "OPEN", change: changeArray};
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
