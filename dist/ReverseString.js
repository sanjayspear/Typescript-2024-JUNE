"use strict";
class ReverseString {
    static reverseString(s) {
        let revStr = "";
        let len = s.length;
        for (let i = len - 1; i >= 0; i--) {
            revStr += s.charAt(i);
        }
        return revStr;
    }
}
let inputString = "Sanjay";
let revString = ReverseString.reverseString(inputString);
console.log(`Reverse of the string ${inputString} is ${revString}`);
const reverseString = (s) => s.split('').reverse().join('');
const inputStr = "Sanjay";
console.log(`Reverse of the string ${inputStr} is ${reverseString(inputStr)}`);
