//Regular function
function addNumber(x: number) {
    return x + 2;
}

console.log(`The sum is : ${addNumber(11)}`);

function signUpUser(fn: string, ln: string, isPaid: boolean) {
    if (isPaid == true) {
        console.log(`The user ${fn} ${ln} is successfully signed up`);
    }
}
signUpUser("Sanjay", "Singhania", true);

//Arrow function
let signUpUserTwo = (fn: string, ln: string, isPaid: boolean) => {
    if (isPaid == true) {
        console.log(`The user ${fn} ${ln} is successfully signed up`);
    } else {
        console.log("Failed to sign up, please try again sometime later ...")
    }
}
signUpUserTwo("Sagar", "Verma", false);

//Arrow function
let signUpUserThree = (fn: string, ln: string, isPaid: boolean = false) => {
    if (isPaid == true) {
        console.log(`The user ${fn} ${ln} is successfully signed up`);
    } else {
        console.log("Failed to sign up, please try again sometime later ...")
    }
}
signUpUserThree("Samarth", "Shivam", true);

// Function with return type
function mathOp(x: number, y: number) : number{
    return x + y;
}
console.log("The sum is "+mathOp(10, 20));

// Function with multiple return type using union operator ( | )
function mathOp1(x: number, y: number) : number | string{
    let sum = x + y;
    return "The sum is "+sum;
}
console.log(mathOp1(20, 20));

// Arrow Function with return type
let mathOp2 = (x: number, y: number) : number =>{
    return x + y;
}
console.log("The sum is "+mathOp2(20, 60));

// Arrow Function with multiple return type using union operator ( | )
let mathOp3 = (x: number, y: number) : number | string => {
    let sum = x + y;
    return "The sum is "+sum;
}
console.log(mathOp3(20, 80));

let ArrayOfFruits: string[] = ['apple', 'mango', 'banana', 'grapes', 'pineapple', 'pomegranate'];

let fruits: string[] = ArrayOfFruits.map((ArrayOfFruits : string) : string => {
    return ArrayOfFruits;
})

console.log(fruits);

// Use forEach to iterate over the array
ArrayOfFruits.forEach(fruit => {
  console.log(fruit);
});

// Alternatively, use a for loop 
for (let i = 0; i < ArrayOfFruits.length; i++) {
  console.log(ArrayOfFruits[i]);
}

