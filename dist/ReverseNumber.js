import * as readline from 'readline';
class ReverseNumber {
    reverseNumber(num) {
        let rev = 0;
        while (num !== 0) {
            rev = rev * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        return rev;
    }
    main() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Enter a number: ", (input) => {
            const num = parseInt(input);
            const reversedNum = this.reverseNumber(num);
            console.log(`Reverse number is: ${reversedNum}`);
            rl.close();
        });
    }
}
const reverseNumInstance = new ReverseNumber();
reverseNumInstance.main();
