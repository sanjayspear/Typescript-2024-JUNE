//Approach 1:
class ReverseString {
    static reverseString(s: string): string {
        let revStr: string = "";
        let len: number = s.length;

        for (let i = len - 1; i >= 0; i--) {
            revStr += s.charAt(i);
        }

        return revStr;
    }
}

let inputString: string = "Sanjay";
let revString: string = ReverseString.reverseString(inputString);
console.log(`Reverse of the string ${inputString} is ${revString}`);

//Approach 2:

const reverseString = (s: string): string => s.split('').reverse().join('');
const inputStr = "Sanjay";
//console.log(inputStr.split('').reverse().join(''));
console.log(`Reverse of the string ${inputStr} is ${reverseString(inputStr)}`);