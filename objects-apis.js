/*
 * Objects, Interfaces, and API's
 */

let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "Small",
    bark: function(typeOfBark){
        console.log("Bark!");
    },
};

function x(y) {
    y = y + 5;
    console.log(y);
}

let y = 5;
x(y);
console.log(y);

//or

let y = {
    name: "Tom",
    num: 10,
}
x(y);
console.log(y);
