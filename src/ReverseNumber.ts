import * as readline from 'readline'; // 1. Import the readline module

class ReverseNumber { // 2. Define the ReverseNumber class

    reverseNumber(num: number): number { // 3. Define the reverseNumber method
        let rev: number = 0; // 4. Initialize rev to 0

        while (num !== 0) { // 5. Start loop while num is not 0
            rev = rev * 10 + num % 10; // 6. Append last digit of num to rev
            num = Math.floor(num / 10); // 7. Remove last digit from num
        }
        return rev; // 8. Return the reversed number
    }

    main(): void { // 9. Define the main method
        const rl = readline.createInterface({ // 10. Create readline interface
            input: process.stdin, // 11. Set input to standard input
            output: process.stdout // 12. Set output to standard output
        });

        rl.question("Enter a number: ", (input) => { // 13. Prompt user for input
            const num: number = parseInt(input); // 14. Parse the input to an integer
            const reversedNum: number = this.reverseNumber(num); // 15. Call reverseNumber to reverse the number
            console.log(`Reverse number is: ${reversedNum}`); // 16. Print the reversed number
            rl.close(); // 17. Close the readline interface
        }); // 18. End of the question callback
    }
}

const reverseNumInstance = new ReverseNumber(); // 19. Create an instance of ReverseNumber
reverseNumInstance.main(); // 20. Call the main method to start execution
