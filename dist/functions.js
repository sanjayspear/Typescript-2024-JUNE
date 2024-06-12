"use strict";
function addNumber(x) {
    return x + 2;
}
console.log(`The sum is : ${addNumber(11)}`);
function signUpUser(fn, ln, isPaid) {
    if (isPaid == true) {
        console.log(`The user ${fn} ${ln} is successfully signed up`);
    }
}
signUpUser("Sanjay", "Singhania", true);
let signUpUserTwo = (fn, ln, isPaid) => {
    if (isPaid == true) {
        console.log(`The user ${fn} ${ln} is successfully signed up`);
    }
    else {
        console.log("Failed to sign up, please try again sometime later ...");
    }
};
signUpUserTwo("Sagar", "Verma", false);
let signUpUserThree = (fn, ln, isPaid = false) => {
    if (isPaid == true) {
        console.log(`The user ${fn} ${ln} is successfully signed up`);
    }
    else {
        console.log("Failed to sign up, please try again sometime later ...");
    }
};
signUpUserThree("Samarth", "Shivam", true);
function mathOp(x, y) {
    return x + y;
}
console.log("The sum is " + mathOp(10, 20));
function mathOp1(x, y) {
    let sum = x + y;
    return "The sum is " + sum;
}
console.log(mathOp1(20, 20));
let mathOp2 = (x, y) => {
    return x + y;
};
console.log("The sum is " + mathOp2(20, 60));
let mathOp3 = (x, y) => {
    let sum = x + y;
    return "The sum is " + sum;
};
console.log(mathOp3(20, 80));
let ArrayOfFruits = ['apple', 'mango', 'banana', 'grapes', 'pineapple', 'pomegranate'];
let fruits = ArrayOfFruits.map((ArrayOfFruits) => {
    return ArrayOfFruits;
});
console.log(fruits);
ArrayOfFruits.forEach(fruit => {
    console.log(fruit);
});
for (let i = 0; i < ArrayOfFruits.length; i++) {
    console.log(ArrayOfFruits[i]);
}
