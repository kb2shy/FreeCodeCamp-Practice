const whatIsInAName = (collection, source) => {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    const sourceKeys = Object.keys(source);
    arr = collection.filter(obj => {
        return sourceKeys.map((key) => {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        })
        .reduce((a, b) => a && b)
    });
  
    // Only change code above this line
    return arr;
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
  console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));