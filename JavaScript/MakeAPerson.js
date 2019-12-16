// class Person {
//     constructor(firstAndLast) {
//         this.firstName = firstAndLast.split(" ")[0];
//         this.lastName = firstAndLast.split(" ")[1];
//     }

//     getFirstName = () => {
//         return this.firstName;
//     }

//     getLastName = () => {
//         return this.lastName;
//     }

//     getFullName = () => {
//         return this.firstName + " " + this.lastName;
//     }

//     setFirstName = (str) => {
//         this.firstName = str;
//     }

//     setLastName = (str) => {
//         this.lastName = str;
//     }

//     setFullName = (str) => {
//         this.firstName = firstAndLast.split(" ")[0];
//         this.lastName = firstAndLast.split(" ")[1];
//     }
// }

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let firstName = firstAndLast.split(" ")[0];
    let lastName = firstAndLast.split(" ")[1];
    this.getFirstName = function() {
      return firstName;
    }

    this.getLastName = function() {
        return lastName;
    }

    this.getFullName = function() {
      return firstName + " " + lastName;
    };

    this.setFirstName = function(str) {
        firstName = str;
    }

    this.setLastName = function(str) {
        lastName = str;
    }

    this.setFullName = function(str) {
        firstName = str.split(" ")[0];
        lastName = str.split(" ")[1];
    }
  };

let bob = new Person("Bob Ross");
console.log(bob.getFirstName());
console.log(Object.keys(bob).length);