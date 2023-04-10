/*
 * Conditional, Functions, Scope and Loops.
 */

// Equals
let equals = 1 === 1;

// Greater than
let greaterThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

//Greater than Equals
let greaterThanEq = 5 >= 5;

//Less Than Equals
let lessThanEq = 4 <= 9;

//Not Equals
let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 4.40

let storeAIsLower = storeA < storeB;

if (storeAIsLower) {
    console.log("Store A has a lower price.")
} else if (storeB < storeA) {
    console.log("Store B has a lower price.")
} else {
    console.log("Their prices are equal.")
}

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if  (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

compareStorePrices(10, 5);
compareStorePrices(7,10);

function squareNum (number) {
    let squared = number * number;
    return squared;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);

let x = 10;

function addNumbers (n, m, x) {
    console.log(x);
    let b;
    if (1===1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}

addNumbers(2, 3, 8);

//              0  1  2  3  4
let ourArray = [1, 2, 3, 4, 5,];
console.log(ourArray[0])

//Loops are a structure, like an if block, that repeat a certain section of code until a condition is met.
// There are 3 kinds of loops. FOR loops, X loops, and X loops.
// FOR loops are composed of three elements: counter; comp; incr and are seperated by semicolons.
//For a counter we commonly use i.

//(EXAMPLE): for(let counter; comp; incr)

for(let i=0; i<5; i++){
    //console.log("i is equal to: " + i)
    console.log(ourArray[i]);
}
//If the length of the array has values added to it? We can include ourArray.length.
//              0  1  2  3  4
//let ourArray = [1, 2, 3, 4, 5,];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++) {
    console.log(ourArray[i]);
}

//A WHILE loop runs until a conditional is false.
let v = 0;
while (v < 10) {
    console.log('Ran');
    v = v + 1;
}